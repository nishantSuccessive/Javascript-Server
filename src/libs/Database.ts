import * as mongoose from 'mongoose';
import seedData from './seedData';
class Database {
  public static async open(mongoURL) {
    try {
    console.log('before connection established');
    const result = await mongoose.connect(mongoURL, { useNewUrlParser: true });
    if (result) {
     seedData();
     console.log('connection established');
   }
    } catch (err) {
      return err;
    }
  }

}

export default Database;
