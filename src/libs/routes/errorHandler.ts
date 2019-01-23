export default function errorHandler(err, req, res, next) {
	res.json({
		error: err,
		message: "Error have found",
		status: 500,
		timestamp: new Date()
	});
}
