import * as express from 'express';
import { traineeRouter } from './controller/trainee/index';
const router = express.Router();
router.use('/trainer', traineeRouter);
export default router;
