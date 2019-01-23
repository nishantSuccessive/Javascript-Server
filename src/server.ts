import * as express from "express";
import * as bodyParser from "body-parser";
import { errorHandler, notFoundRoute } from "./libs/routes";
export class Server {
	public app: express.Express;

	constructor(private config) {
		this.app = express();
	}

	public bootStrap() {
		this.initBodyParser();
		this.setUpRoutes();
		return this;
	}

	private initBodyParser() {
		const { app } = this;
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: false }));
	}

	public setUpRoutes() {
		const { app } = this;
		app.use("/health-check", (req, res) => {
			res.send("Okay fine");
		});
		app.use(notFoundRoute);
		app.use(errorHandler);
	}

	public run() {
		const {
			app,
			config: { port }
		} = this;
		app.listen(port, err => {
			if (err) {
				throw err;
			}
			console.log(`App is running ${port} `);
		});
	}
}
