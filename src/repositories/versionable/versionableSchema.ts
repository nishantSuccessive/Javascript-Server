import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
  constructor(previousSchema, options: object) {
    const baseSchema = Object.assign(previousSchema, {
      createdAt: {
        default: Date.now,
        required: false,
        type: Date,
      },
      deletedAt: {
        required: false,
        type: Date,
      },
      originalId: {
        required: true,
        type: String,
      },
    });
    super(baseSchema, options);
  }
}
