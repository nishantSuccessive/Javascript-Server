import * as mongoose from 'mongoose';
import IUserModel from '../user/IUserModel';
import { userModel } from '../user/UserModel';
export default class VersionableRepository <D extends mongoose.Document, M extends mongoose.Model<D>> {

public static generateObjectId() {
return String(mongoose.Types.ObjectId());
}

public modeltype: M;
constructor(model) {
this.modeltype = model;
}

public async genericCreate(data: any): Promise<D> {
const newid = VersionableRepository.generateObjectId();
return await this.modeltype.create({
...data,
_id: newid,
originalId: newid,
});
}
public genericUpdate(data: any, dataUpdated: any) {
return this.modeltype.updateOne(data, dataUpdated);
}

public genericCount(): mongoose.Query < number > {
return this.modeltype.countDocuments({});
}
public genericfindOne(Data: any): mongoose.DocumentQuery<D, D, {}> {
return this.modeltype.findOne(Data);

}
public genericDelete(data: any ) {
return this.modeltype.deleteOne({
data,
function(err) {
if (err) {
throw err;
}
console.log('1 document deleted');
},
});
}
}
