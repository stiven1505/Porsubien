import { dbConnect } from "../../../utils/mongoose";
import nextConnect from "next-connect";
import productsController from "../../../controllers/productsController";
import jwtMiddleware from "../../../controllers/jwtMiddleware";
import authenticateOwner from "../../../middlewares/authenticateOwner";
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
apiRoute.use(productsController.find);
apiRoute.get(productsController.show);
apiRoute.put(
  authenticateOwner,
  productsController.multerMiddleware(),
  productsController.update,
  productsController.saveImage
);
apiRoute.delete(authenticateOwner, productsController.destroy);

export default apiRoute;
