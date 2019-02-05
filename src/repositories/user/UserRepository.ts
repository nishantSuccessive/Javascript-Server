import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/versionableRepository';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

public model: mongoose.Model<IUserModel>;
constructor() {
super(userModel);
}

public create(data: any) {
return this.genericCreate(data);

}

public update(data: any, dataUpdated: any) {
return this.genericUpdate(data, dataUpdated);
}

public findOne(Data: any) {
return this.genericfindOne(Data);
}
public count() {
return this.genericCount();

}
}
export default new UserRepository();
