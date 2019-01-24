import { Configuration } from "./config/configuration";
import { Server } from "./server";
const server = new Server(Configuration);
server.bootStrap().run();
