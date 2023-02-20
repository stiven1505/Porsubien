import { dbConnect } from "../../../utils/mongoose";
import nextConnect from "next-connect";
import likesController from "../../../controllers/likesController";
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
apiRoute.get(likesController.getAll);
apiRoute.delete(likesController.find ,authenticateOwner, likesController.destroy);

export default apiRoute;
