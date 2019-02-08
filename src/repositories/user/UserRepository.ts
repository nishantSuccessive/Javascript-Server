import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/versionableRepository';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

public model: mongoose.Model<IUserModel>;
constructor() {
super(userModel);
}

public async create(data: object) {
return await this.genericCreate(data, true);

}
public async Get(data: object) {
   return await this.genericGet('trainee', undefined, data);

  }
public update(data: IUserModel, dataUpdated: IUserModel) {
return this.genericUpdate(data, dataUpdated);
}
public async delete(data: IUserModel) {

  return await this.genericDelete(data);
}

public findone(Data: IUserModel) {
return this.genericfindOne(Data);
}
public findEmail(Data: IUserModel) {
  return this.genericfindEmail(Data);
  }
public async count() {
return await this.genericCount();
}

}
export default new UserRepository();
