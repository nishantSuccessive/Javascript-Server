import UserSchema from './UserSchema';
import IUserModel from './IUserModel';
import * as mongoose  from 'mongoose';

export const userSchema = new UserSchema({
	collections:'user'
})
export const userModel:mongoose.Model<IUserModel> = mongoose.model<IUserModel> (
	'User',
	userSchema,
	'user',
	true
)
