import { dbConnect } from "../../../utils/mongoose";
import nextConnect from "next-connect";
import categoriesController from "../../../controllers/categoriesController";
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
apiRoute.use(jwtMiddleware);
apiRoute.get(categoriesController.index);
apiRoute
  .use(categoriesController.multerMiddleware())
  .post(categoriesController.create, categoriesController.saveImage);

export default apiRoute;
