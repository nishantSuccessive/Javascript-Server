import { Router, Request, Response } from "express";
import {permissions} from "../../libs/constants";
import trainee from "./Controller";
import validationHandler from "../../libs/routes/validationHandler";
import validation from "./validation";
import authMiddleWare from "../../libs/routes/authMiddleWare";
const trainerRouter: Router = Router();

trainerRouter
	.get("/", trainee.get)
	.post("/", authMiddleWare('getUsers','delete'),  trainee.create)
	.put("/", validationHandler(validation.update), trainee.update)
	.delete("/:id" , validationHandler(validation.delete), trainee.delete);

export default trainerRouter;
