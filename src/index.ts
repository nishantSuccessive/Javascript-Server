import { Configuration } from "./config/configuration";
import { Server } from "./server";
console.log("Config is", Configuration.port);
const server = new Server(Configuration);
server.bootStrap().run();
