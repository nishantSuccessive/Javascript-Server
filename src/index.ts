import { Configuration } from "./config/configuration";
import { Server } from "./server";
export { default as router } from "./router";
const server = new Server(Configuration);
server.bootStrap().run();
