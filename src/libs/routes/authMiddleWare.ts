import * as express from 'express';
import hasPermission from './hasPermission';

import * as jwt from 'jsonwebtoken';
export default function authMiddleWare(moduleName, permissionType) {
  return (req, res, next) => {
  const key = require('dotenv').config().parsed.KEY;

  const token = req.headers.authorization;
  const user = jwt.verify(token, key);
  console.log(user);
  if (!user) {
    next({
      error: 'Unauthorised access',
      message: 'No User decoded.',
      status: res.status(400),
    });
  }
  console.log(!hasPermission(moduleName, user.role, permissionType));

  if (!hasPermission(moduleName, user.role, permissionType)) {
    next({
      error: 'Permission  does not access',
      message: 'No Permission decoded.',
      status: 400,
    });

  }
  next();
};
}
