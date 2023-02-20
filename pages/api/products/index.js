import nextConnect from "next-connect";
import productsController from "../../../controllers/productsController";
import { dbConnect } from "../../../utils/mongoose";
import jwtMiddleware from "../../../controllers/jwtMiddleware";
var { expressjwt: jwt } = require("express-jwt");
import secrets from "../../../utils/secrets";
dbConnect();

/* This is a Next.js API route configuration. It is telling Next.js to not use the default body parser
for this route. becouse for up images is necessary*/
export const config = {
  api: {
    bodyParser: false,
  },
};

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
apiRoute.use(jwtMiddleware);
// Process a POST request
apiRoute.get(jwt({ secret: secrets.jwtSecret, algorithms: ["HS256"] }), productsController.ownproducts);
apiRoute
  .use(productsController.multerMiddleware())
  .post(productsController.create, productsController.saveImage);

export default apiRoute;
