import IPermissions from './interface';
const HEADTRAINER: string = 'head-trainer';
const TRAINEE: string = 'trainee';
const TRAINER: string = 'trainer';
export const permissions: IPermissions = {
  getUsers: {
    all: [HEADTRAINER],
    delete: [],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],

  },
};
