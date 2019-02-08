// import { default as trainerRouter } from "./routes";
import { NextFunction, Request, Response } from 'express';
import successHandler from '../../libs/routes/successHandler';
import UserRepository from '../../repositories/user/UserRepository';

class Controller {
  public static getInstance() {
    if (!Controller.instance) {
      Controller.instance = new Controller();
    }
    return Controller.instance;
  }
  private static instance: Controller;

  public async get(req: Request, res: Response) {
    try {
      console.log('inside gety');
      const { skip = 0, limit = 10 } = req.query;
      const totalCount = await UserRepository.count();
      const result = await UserRepository.Get({ skip, limit });
      console.log('ej', result);
      res.status(200).send(successHandler(`Total count ${totalCount}`, result));
    } catch (err) {
      console.log('err', err);
    }
  }
  public create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, role } = req.body;
      UserRepository.create({name, email, role });
      res.status(200).send(successHandler(name, email));
    } catch (err) {
      console.log('err', err);
    }
  }

  public update(req: Request, res: Response, next: NextFunction) {
    try {
      const { value, dataToUpdate } = req.body;
      console.log(value, dataToUpdate);
      UserRepository.update(value, dataToUpdate);

      res.status(200).send(successHandler(value, dataToUpdate));
    } catch (err) {
      console.log('err', err);
    }
  }
  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const value = req.params.id;
      const result = await UserRepository.delete(value);
      if (!result) {
        next({ error: `id is not matched` });
      }
      res.status(200).send(successHandler('deleted', result));
    } catch (err) {
      console.log('err', err);
    }
  }
}

export default Controller.getInstance();
