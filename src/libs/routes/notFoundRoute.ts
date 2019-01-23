export default function notFoundRoute(req, res, next) {
	next({ error: "Path is not correct" });
}
