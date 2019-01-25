function validationHandler(config) {
	return function(req, res, next) {
		const arr = req.body;

		for (var key in arr) {
			if (arr[key] != " ") {
				if (config[key].in == "body" || config[key].in == "params") {
					if (typeof arr[key] == "string") {
						console.log("okk");
					} else {
						next({ error: `${key} is not string type` });
					}
				} else {
					console.log("fasle");
				}
			} else {
				next({ error: `${key} is required` });
			}
		}
		next();
	};
}

export default validationHandler;
