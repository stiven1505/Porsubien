import { dbConnect } from "../../../utils/mongoose";
import nextConnect from "next-connect";
import plansController from "../../../controllers/plansController";
import jwtMiddleware from "../../../controllers/jwtMiddleware";

dbConnect();

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
apiRoute.use(jwtMiddleware); 
apiRoute.use(plansController.find);
apiRoute.get(plansController.show);
apiRoute.put(plansController.update);
apiRoute.delete(plansController.destroy);

export default apiRoute;