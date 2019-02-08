import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import hasPermission from './hasPermission';
export default  function authMiddleWare(moduleName, permissionType) {
  return async (req, res, next) => {
  const key = process.env.KEY;
  const token = req.headers.authorization;
  const user = jwt.verify(token, key);
  req.body.data = user;
  const {id} = user;
  const user1 = await UserRepository.findone(id);

  if (!user1 ) {
            console.log('user is not there');
            next({
            error: 'token is not valid ',
            message: 'No Permission decoded.',
            status: 400,
          });
         }
  if (!hasPermission(moduleName, user1.role, permissionType)) {
          next({
            error: 'Permission  does not access',
            message: 'No Permission decoded.',
            status: 400,
          });
        }
  next();

};
}
