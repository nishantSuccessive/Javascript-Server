export default function notFoundRoute(req, res, next) {
//	console.log("inside")
	next({ error: "Path is not correct" });
}
