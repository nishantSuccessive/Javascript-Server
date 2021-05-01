const validation = {
  create: {
    Email: {
      errorMessage: 'Name is required',
      in: ['body'],
      regex: RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm),
      required: true,
    },
    password: {
      errorMessage: 'password is required',
       in: ['body'],
      required: true,
      type: String,
     },

},
  delete: {
    id: {

      errorMessage: 'Id is required',
      in: ['params'],
      required: true,
    },
  },
  get: {
    limit: {
      default: 10,
      errorMessage: 'Limit is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
    skip: {
      default: 0,
      errorMessage: 'Skip is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
  },
  update: {
    dataToUpdate: {
      in: ['body'],
      isObject: true,

      required: true,
      // tslint:disable-next-line:no-empty
      custom(dataToUpdate) {},
    },
    id: {
      in: ['body'],
      required: true,
      string: true,
       },
    },
};
export default validation;
