import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
  constructor(previousSchema, options: any) {
    const baseSchema = Object.assign(previousSchema, {
      createdAt: {
        default: Date.now,
        required: false,
        type: Date,
      },
      deletedAt: {
        default: Date.now,
        required: false,
        type: Date,
      },
      originalId: {
        required: false,
        type: String,
      },
    });
    super(baseSchema, options);
  }
}
