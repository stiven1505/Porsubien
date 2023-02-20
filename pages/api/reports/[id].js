import { dbConnect } from "../../../utils/mongoose";
import nextConnect from "next-connect";
import reportsController from "../../../controllers/reportsController";
import jwtMiddleware from "../../../controllers/jwtMiddleware";
dbConnect();

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
apiRoute.use(jwtMiddleware);
apiRoute.use(reportsController.find);
apiRoute.get(reportsController.show);
apiRoute.put(reportsController.update);
apiRoute.delete(reportsController.destroy);

export default apiRoute;
