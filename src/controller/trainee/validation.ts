const validation = {
  create: {
    id: {
      in: ['body'],
      required: true,
      string: true,

      custom(value) {
        console.log('Value', value);
        // throw { error: "Error Occured", message: "Message" };
      },
    },
    name: {
      in: ['body'],
      regex: RegExp('[a-zA-Z]+\\.?'),
      required: true,
     // tslint:disable-next-line:object-literal-sort-keys
     errorMessage: 'Name is required',
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
