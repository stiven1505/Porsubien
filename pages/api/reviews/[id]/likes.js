import { dbConnect } from "../../../../utils/mongoose";
import nextConnect from "next-connect";
import reviewsController from "../../../../controllers/reviewsController";
import likesControllers from "../../../../controllers/likesController";

dbConnect();

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.get(reviewsController.find, likesControllers.index);

export default apiRoute;
