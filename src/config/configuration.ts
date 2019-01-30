import { config } from "dotenv";
import { IConfig } from "./IConfig";
config();
export const Configuration: IConfig = Object.freeze({
	port: process.env.PORT,
	key: process.env.KEY,
	mongo:process.env.MONGO
});
