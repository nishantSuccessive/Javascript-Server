import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';

export default class UserRepository {
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId);
  }
  private model: mongoose.Model<IUserModel>;
  constructor() {
    this.model = userModel;
  }
  public create(data: any) {
    return this.model.create({ ...data, _id: UserRepository.generateObjectId });
  }
  public update(data: any, dataUpdated: any) {
            return this.model.updateOne(
              data,
              dataUpdated);
              }

  public delete(data: any) {
    return this.model.deleteOne({
      data,
      function(err: any) {
        if (err) { throw err; }
        console.log('1 document deleted');
      },
    });
  }
}
