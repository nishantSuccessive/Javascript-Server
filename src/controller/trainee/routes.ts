import { Request, Response, Router } from 'express';
import { permissions } from '../../libs/constants';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/routes/validationHandler';
import trainee from './Controller';
import validation from './validation';
const trainerRouter: Router = Router();

trainerRouter
  .get('/', trainee.get)
  .post('/', authMiddleWare('getUsers', 'delete'),  trainee.create)
  .put('/', validationHandler(validation.update), trainee.update)
  .delete('/:id' , validationHandler(validation.delete), trainee.delete);

export default trainerRouter;
