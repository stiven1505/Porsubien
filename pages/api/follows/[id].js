import { dbConnect } from "../../../utils/mongoose";
import nextConnect from "next-connect";
import followsController from "../../../controllers/followsController";
import jwtMiddleware from "../../../controllers/jwtMiddleware";
import authenticateOwner from "../../../middlewares/authenticateOwner";
var { expressjwt: jwt } = require("express-jwt");
import secrets from "../../../utils/secrets";

dbConnect();

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
apiRoute.get(
  jwt({ secret: secrets.jwtSecret, algorithms: ["HS256"] }),
  followsController.index
);
apiRoute.delete(
  jwtMiddleware,
  followsController.findUserFollow,
  authenticateOwner,
  followsController.destroy
);

export default apiRoute;
