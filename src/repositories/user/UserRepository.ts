import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';

export default class UserRepository {
  public static generateObjectId() {
    return mongoose.Types.ObjectId;
  }

  private model: mongoose.Model<IUserModel>;
  constructor() {
    this.model = userModel;
  }
  public findOne(Data: any) {
    return this.model.findOne(Data);
  }
  public update(data: any, dataUpdated: any) {
            return this.model.updateOne(
              data,
              dataUpdated);
              }
  public count(): mongoose.Query<number> {
    return this.model.countDocuments({});
  }

  public create(data: any): Promise<IUserModel> {
    return this.model.create({
      ...data,
      id: UserRepository.generateObjectId,
    });
  }
  public delete(data: any) {
    return this.model.deleteOne({
      data,
      function(err: any) {
        if (err) { throw err; }
        console.log('1 document deleted');
    }});
  }
}
