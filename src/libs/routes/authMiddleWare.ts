import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import hasPermission from './hasPermission';
export default function authMiddleWare(moduleName, permissionType) {
  return (req, res, next) => {
  const key = require('dotenv').config().parsed.KEY;
  const userDb: UserRepository = new UserRepository();
  const token = req.headers.authorization;
  const user = jwt.verify(token, key);
  req.body.data = user;
  const {id, email, Role} = user;
// tslint:disable-next-line:no-shadowed-variable
  userDb.findOne({_id: id}).then((user) => {
         if (!id ) {
            console.log('user is not there');
            next({
            error: 'token is not valid ',
            message: 'No Permission decoded.',
            status: 400,
          });
         }
         if (!hasPermission(moduleName, Role, permissionType)) {
          next({
            error: 'Permission  does not access',
            message: 'No Permission decoded.',
            status: 400,
          });
        }
  });
  // console.log(user);

  // console.log(!hasPermission(moduleName, user.role, permissionType));

  next();
};
}
