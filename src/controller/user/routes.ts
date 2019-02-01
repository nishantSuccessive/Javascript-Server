import { Request, Response, Router } from 'express';
import { permissions } from '../../libs/constants';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/routes/validationHandler';
import validation from '../trainee/validation';
import user from '../user/Controller';
const userRouter: Router = Router();

userRouter
  .get('/', authMiddleWare('getUsers', 'delete'), user.get)
  .post('/', authMiddleWare('getUsers', 'delete'),  user.create)
  .put('/', validationHandler(validation.update), user.update)
  .delete('/:id' , validationHandler(validation.delete), user.delete);

export default userRouter;
