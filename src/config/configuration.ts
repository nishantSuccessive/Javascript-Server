import { config } from 'dotenv';
import { IConfig } from './IConfig';
config();
export const Configuration: IConfig = Object.freeze({
  key: process.env.KEY,
  mongo: process.env.MONGO,
  port: process.env.PORT,
});
