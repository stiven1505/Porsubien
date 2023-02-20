import { dbConnect } from "../../../../utils/mongoose";
import nextConnect from "next-connect";
import reviewsController from "../../../../controllers/reviewsController";

dbConnect();

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.get(reviewsController.getByUser);

export default apiRoute;