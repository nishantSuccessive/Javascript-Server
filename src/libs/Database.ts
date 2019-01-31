import * as mongoose from "mongoose";
import seedData from "./seedData";
class Database {
	static open(mongoURL) {
		console.log("before connection established");

		return new Promise((resolve, reject) => {
			mongoose.connect(
				mongoURL,
				{ useNewUrlParser: true })
				.then(()=>{
					seedData()
					resolve("successfully established");

				})
						.catch( err => {
							reject("No connection is established");
						console.log("Database is currently stopped");
							}	)
					})
				}





	static disconnect() {}
}

export default Database;
