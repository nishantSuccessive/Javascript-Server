import { Request, Response, Router } from 'express';
import { permissions } from '../../libs/constants';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/routes/validationHandler';
import validation from '../trainee/validation';
import trainee from './Controller';
const userRouter: Router = Router();

userRouter
  .get('/', trainee.get)
  .post('/', authMiddleWare('getUsers', 'delete'),  trainee.create)
  .put('/', validationHandler(validation.update), trainee.update)
  .delete('/:id' , validationHandler(validation.delete), trainee.delete);

export default userRouter;
