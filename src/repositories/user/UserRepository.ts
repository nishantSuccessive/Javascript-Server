import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userSchema } from './UserModel';
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
    return this.model.updateOne({
      data,
      dataUpdated,
      function(err, res) {
        if (err) { throw err; }
        console.log('1 document updated');
      },
    });
  }

  public delete(data: any) {
    return this.model.deleteOne({
      data,
      function(err) {
        if (err) { throw err; }
        console.log('1 document deleted');
      },
    });
  }
}
