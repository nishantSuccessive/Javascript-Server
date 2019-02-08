import * as mongoose from 'mongoose';
import versionableSchema from '../versionable/versionableSchema';
export default class UserSchema extends versionableSchema {
  constructor(options: object) {
    const baseSchema = {
      _id: String,
      email: String,
      name: String,
      password: String,
      role: String,

    };
    super(baseSchema, options);
  }
}
