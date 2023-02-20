let { expressjwt: jwt } = require("express-jwt");
import secrets from "../utils/secrets";

export default jwt({ secret: secrets.jwtSecret, algorithms: ["HS256"] }).unless(
  {
    path: [
      // public routes that don't require authentication
      "/api/users/",
      "/api/sessions/",
    ],
    method: "GET",
  }
);
/**
 * This function is a middleware that checks if the request has a valid JWT token, and if it does, it
 * will add the user's information to the request object.
 * @param req - The request object
 * @param res - The response object
 * @returns A function that takes in a request and response object.
 */
function jwtMiddleware(req, res) {
  const middleware = expressJwt({
    secret: secrets.jwtSecret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      // public routes that don't require authentication
      "/api/users/",
      "/api/sessions/index",
    ],
    method: ["GET"],
  });

  return util.promisify(middleware)(req, res);
}
