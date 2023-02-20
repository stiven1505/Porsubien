import { dbConnect } from "../../../../utils/mongoose";
import nextConnect from "next-connect";
import likesController from "../../../../controllers/likesController";
var { expressjwt: jwt } = require("express-jwt");
import secrets from "../../../../utils/secrets";

dbConnect();

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(jwt({ secret: secrets.jwtSecret, algorithms: ["HS256"] }),);
apiRoute.get(likesController.search);

export default apiRoute;
