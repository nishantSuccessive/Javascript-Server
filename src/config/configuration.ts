import { config } from 'dotenv';
import { IConfig } from './IConfig';
config();
export const Configuration: IConfig = Object.freeze({
  mongo: process.env.MONGO,
  port: process.env.PORT,
});
