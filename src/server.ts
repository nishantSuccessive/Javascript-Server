import * as express from "express";
export class Server {
	public app: express.Express;

	constructor(private config) {
		this.app = express();
	}

	public bootStrap() {
		this.setUpRoutes();
		return this;
	}
	public setUpRoutes() {
		const { app } = this;
		app.use("/health-check", (req, res) => {
			res.send("<h1>Okay fine</h1>");
			res.sendFile("")
		});
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
