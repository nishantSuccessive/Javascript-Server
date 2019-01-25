//import { default as trainerRouter } from "./routes";
import { Request, Response, NextFunction } from "express";
import successHandler from "../../libs/routes/successHandler";
class Controller {
	private static instance: Controller;
	static getInstance() {
    if (!Controller.instance) {
      Controller.instance = new Controller();

    }
    return Controller.instance;
  }

	get(req: Request, res: Response) {
		const data = [
			{
				name: "Nishant",
				id: 123
			},
			{
				name: "Aakash",
				id: 124
			}
		];
		res.status(200).send(successHandler("status ok", data));
	}
	post(req: Request, res: Response, next: NextFunction) {
		const { name, id } = req.body;
		if (!name) {
			return next({ error: "Name is not found" });
		}
		if (!id) {
			return next({ error: "Id is not found" });
		}

		res.status(200).send(successHandler(name, id));
	}

	put(req: Request, res: Response, next: NextFunction) {
		const { name, id } = req.body;

		if (!name) {
			return next({ error: "Name is not found" });
		}
		if (!id) {
			return next({ error: "Id is not found" });
		}

		res.status(200).send(successHandler(name, id));
	}

	delete(req: Request, res: Response, next: NextFunction) {
		const { name, id } = req.body;
		if (!name) {
			return next({ error: "Name is not found" });
		}
		if (!id) {
			return next({ error: "Id is not found" });
		}

		res.status(200).send(successHandler(null, 0));
	}
}

export default new Controller();
