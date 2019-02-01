// import { default as trainerRouter } from "./routes";
import { NextFunction, Request, Response } from 'express';
import successHandler from '../../libs/routes/successHandler';

class Controller {
  public static getInstance() {
    if (!Controller.instance) {
      Controller.instance = new Controller();
    }
    return Controller.instance;
  }
  private static instance: Controller;

  public get(req: Request, res: Response) {
    const data = [
      {
        id: 123,
        name: 'Nishant',
      },
      {
        id: 124,
        name: 'Aakash',
      },
    ];
    res.status(200).send(successHandler('status ok', data));
  }
  public create(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;

    res.status(200).send(successHandler(name, id));
  }

  public update(req: Request, res: Response, next: NextFunction) {
    const { id, dataToUpdate } = req.body;

    res.status(200).send(successHandler(id, dataToUpdate));
  }

  public delete(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    const value = req.params.id;
    if (value !== id) {
      next({ error: `${id} is not matched` });
    }
    // tslint:disable-next-line:no-null-keyword
    res.status(200).send(successHandler(null, 0));
  }
}

export default Controller.getInstance();
