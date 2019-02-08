import * as mongoose from 'mongoose';
import IUserModel from '../user/IUserModel';
export default class VersionableRepository<
  D extends mongoose.Document,
  M extends mongoose.Model<D>
> {
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }

  public modeltype: M;
  constructor(model) {
    this.modeltype = model;
  }

  public async genericCreate(data: object, flag: boolean): Promise<D> {
    const newid = VersionableRepository.generateObjectId();
    if (flag === true) {
      return await this.modeltype.create({
        ...data,
        _id: newid,
        originalId: newid,
      });
    } else {
      return await this.modeltype.create({
        ...data,
        _id: newid,
      });
    }
  }
  public async genericUpdate(data: IUserModel, dataUpdated: IUserModel) {
    const result = await this.modeltype
      .findOne({ originalId: data, deletedAt: { $exists: false } })
      .lean();
    const newObj = Object.assign(result, dataUpdated);
    const newObj2 = await this.genericCreate(newObj, false);
    return await this.modeltype.updateOne(
      { originalId: data, deletedAt: { $exists: false } },
      { deletedAt: Date.now() },
    );
  }

  public genericCount(): mongoose.Query<number> {
    return this.modeltype.countDocuments({});
  }
  public genericfindOne(Data: IUserModel): mongoose.DocumentQuery<D, D, {}> {
    return this.modeltype.findOne({originalId: Data});
  }
  public genericfindEmail(Data: IUserModel): mongoose.DocumentQuery<D, D, {}> {
    return this.modeltype.findOne({email: Data});
  }
  public async genericDelete(data: IUserModel) {
const comapre = await this.modeltype.findOne({_id: Number(data)});

return await this.modeltype.updateOne(
      { ...comapre, deletedAt: { $exists: false } },
      { deletedAt: Date.now() },
    );
  }
  public async genericGet(opt, projection, Data) {
    console.log('Inside', Data);

    const allData = await this.modeltype.find({ role: opt }, projection, {
      limit: Number(Data.limit),
      skip: Number(Data.skip),

    });
    console.log(allData);
    return allData;
  }
}
