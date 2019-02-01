import { config } from 'dotenv';
import { IConfig } from './IConfig';
config();
export const Configuration: IConfig = Object.freeze({
  port: process.env.PORT,
  // tslint:disable-next-line:object-literal-sort-keys
  mongo: process.env.MONGO,
});
