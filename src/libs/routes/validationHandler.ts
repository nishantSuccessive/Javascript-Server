function validationHandler(config) {
  // tslint:disable-next-line:only-arrow-functions
  return function(req, res, next) {
    const keys = Object.keys(config);
    keys.forEach((key) => {
      const item = config[key];

      // tslint:disable-next-line:no-shadowed-variable
      const values = item.in.map((item: string | number) => {
        return req[item][key];
      });
      // tslint:disable-next-line:no-shadowed-variable
      const validated = values.filter((item) => item);

      if (item && item.required) {
        // console.log(validated)
        if (validated.length !== values.length) {
          next({ error: `${key} is required` });
        }

        if (item.string) {
          validated.forEach((element) => {
            if (typeof element !== 'string') {
              next(item.errorMessage || 'wrong type string');
            }
          });
        }

        if (item.regex) {
          const regex1 = item.regex;
          validated.forEach((element) => {
            if (!regex1.test(validated)) {
              next(item.errorMessage || 'wrong type regex');
            }
          });
        }
        if (item.isObject) {
          validated.forEach((element) => {
            if (typeof element !== 'object') {
              next(item.errorMessage || 'wrong type object');
            }
          });
        }
        if (item.custom) {
          item.custom(6);
        }
      }
      if (!item.required) {
        if (item.number) {
          // tslint:disable-next-line:no-shadowed-variable
          const validated = values.filter((item) => item);
          validated.forEach((element) => {
            if (typeof element !== 'number') {
              next(item.errorMessage || 'wrong type number');
            }
          });
        }

        if (item.default) {
          validated.forEach((element) => {
            if (element > 10 && element < 0) {
              next(item.errorMessage || 'wrong type values');
            }
          });
        }
      }
    });

    next();
  };
}

export default validationHandler;
