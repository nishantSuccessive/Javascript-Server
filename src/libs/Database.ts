import * as mongoose from 'mongoose';
import seedData from './seedData';
class Database {
  public static async open(mongoURL) {
    try {
    console.log('before connection established');
    await mongoose.connect(mongoURL, { useNewUrlParser: true });
    } catch (err) {
      return err;
    }
  //   return new Promise((resolve, reject) => {
  //     mongoose
  //       .connect(
  //         mongoURL,
  //         { useNewUrlParser: true },
  //       )
  //       .then(() => {
  //         seedData();
  //         resolve('successfully established');
  //       })
  //       .catch((err) => {
  //         reject('No connection is established');
  //         console.log('Database is currently stopped');
  //       });
  //   });
  }

}

export default Database;
