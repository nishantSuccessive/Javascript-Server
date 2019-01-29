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
	create(req: Request, res: Response, next: NextFunction) {
		const { name, id } = req.body;


		res.status(200).send(successHandler(name, id));
	}

	update(req: Request, res: Response, next: NextFunction) {
		const { id, dataToUpdate } = req.body;


		res.status(200).send(successHandler(id, dataToUpdate));
	}

	delete(req: Request, res: Response, next: NextFunction) {
		const { name , id} = req.body;
		const value = req.params.id;
		if(value != id){
			next({error:`${id} is not matched`})
		}
		res.status(200).send(successHandler(null, 0));
	}
}

export default Controller.getInstance();
