import * as mongoose from 'mongoose'
import { userSchema } from './UserModel'
import { userModel } from './UserModel'
import IUserModel from './IUserModel';

export default class UserRepository{
private model:	mongoose.Model<IUserModel>
 static generateObjectId() {

	return String(mongoose.Types.ObjectId);
}
constructor(){
	this.model = userModel;
}
public create(data:any){
	return this.model.create(data, UserRepository.generateObjectId())
 }
 public update(data:any, dataUp:any){
	return this.model.updateOne(data, dataUp,  function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
 })}

  public delete(data:any){

	return this.model.deleteOne(data, function(err) {
    if (err) throw err;
    console.log("1 document deleted");
 })
 }



}
