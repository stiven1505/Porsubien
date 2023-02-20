import { dbConnect } from "../../../utils/mongoose";
import nextConnect from "next-connect";
import categoriesController from "../../../controllers/categoriesController";
import jwtMiddleware from "../../../controllers/jwtMiddleware";

dbConnect();

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
apiRoute.use(jwtMiddleware);
apiRoute.use(categoriesController.find);
apiRoute.get(categoriesController.show);
apiRoute.put(categoriesController.update);
apiRoute.delete(categoriesController.destroy);

export default apiRoute;