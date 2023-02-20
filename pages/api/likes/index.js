import nextConnect from "next-connect";
import likesController from "../../../controllers/likesController";
import { dbConnect } from "../../../utils/mongoose";
import jwtMiddleware from "../../../controllers/jwtMiddleware";

dbConnect();

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(jwtMiddleware);
// Process a POST request
apiRoute.get(likesController.index);
apiRoute.post(likesController.create);

export default apiRoute;
