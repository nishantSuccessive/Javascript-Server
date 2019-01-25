import { Router, Request, Response } from "express";
import trainee from "./Controller";
const trainerRouter: Router = Router();

trainerRouter
	.get("/", trainee.get)
	.post("/", trainee.create)
	.put("/", trainee.update)
	.delete("/", trainee.delete);

export default trainerRouter;
