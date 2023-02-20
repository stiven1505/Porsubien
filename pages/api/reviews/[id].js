import { dbConnect } from "../../../utils/mongoose";
import nextConnect from "next-connect";
import reviewsController from "../../../controllers/reviewsController";
import jwtMiddleware from "../../../controllers/jwtMiddleware";
import authenticateOwner from "../../../middlewares/authenticateOwner";
dbConnect();

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
apiRoute.use(jwtMiddleware);
apiRoute.use(reviewsController.find);
apiRoute.get(reviewsController.show);
apiRoute.put(authenticateOwner, reviewsController.update);
apiRoute.delete(authenticateOwner, reviewsController.destroy);

export default apiRoute;
