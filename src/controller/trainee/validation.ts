const validation = {
  create: {
    email: {
      errorMessage: 'Name is required',
      in: ['body'],
      regex: RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm),
      required: true,
    },
     name: {
      errorMessage: 'name is required',
       in: ['body'],
      required: true,
      type: String,
     },
     role: {
      errorMessage: 'role is required',
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
      type: String,
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
    },
    value: {
      in: ['body'],
      required: true,
type: String,
       },
    },
};
export default validation;
