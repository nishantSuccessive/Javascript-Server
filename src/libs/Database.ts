import * as mongoose from "mongoose";

class Database {
	static open(mongoURL) {
		console.log("before connection established");

		return new Promise((resolve, reject) => {
			mongoose.connect(
				mongoURL,
				{ useNewUrlParser: true },
				function(err) {
					if (err) {
						reject("No connection is established");
						console.log("Database is currently stopped");
					} else {
						resolve("successfully established");
						console.log("connection has been established");
					}
				}
			);
		});
	}
	static disconnect() {}
}

export default Database;
