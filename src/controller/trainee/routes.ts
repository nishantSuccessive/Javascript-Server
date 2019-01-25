import { Router, Request, Response } from "express";
import trainee from "./Controller";
import validationHandler from "../../libs/routes/validationHandler";
import validation from "./validation";
const trainerRouter: Router = Router();

trainerRouter
	.get("/", trainee.get)
	.post("/", validationHandler(validation.create),  trainee.create)
	.put("/", validationHandler(validation.update), trainee.update)
	.delete("/:id", validationHandler(validation.delete), trainee.delete);

export default trainerRouter;
