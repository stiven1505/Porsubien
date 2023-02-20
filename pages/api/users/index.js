import nextConnect from "next-connect";
import usersController from "../../../controllers/usersController";
import { dbConnect } from "../../../utils/mongoose";
import jwtMiddleware from "../../../controllers/jwtMiddleware";
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
// Process a POST request
apiRoute.get(usersController.index);
apiRoute
  .use(usersController.multerMiddleware())
  .post(usersController.create, usersController.saveImage);

export default apiRoute;
