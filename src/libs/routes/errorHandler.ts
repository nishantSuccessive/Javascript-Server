export default function errorHandler(err, req, res, next) {
	res.json({
		error: err.error,
		message: err.message || "Error have found",
		status: err.status || 500,
		timestamp: new Date()
	});
}
