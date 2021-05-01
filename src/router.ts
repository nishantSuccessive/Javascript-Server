import * as express from 'express';
import { traineeRouter } from './controller/trainee/index';
import { userRouter } from './controller/user/index';
import { userLogin } from './controller/userLogin/index';

const router = express.Router();
router.use('/trainer', traineeRouter);
router.use('/user', userRouter);
router.use('/userlogin', userLogin);

export default router;
