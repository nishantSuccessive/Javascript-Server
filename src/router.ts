import * as express from 'express';
import { traineeRouter } from './controller/trainee/index';
import { userRouter } from './controller/user/index';

const router = express.Router();
router.use('/trainer', traineeRouter);
router.use('/user', userRouter);

export default router;
