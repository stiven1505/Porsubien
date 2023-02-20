import nextConnect from "next-connect";
import subCategoriesController from "../../../controllers/subCategoriesController";
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
apiRoute.get(subCategoriesController.index);
apiRoute.post(subCategoriesController.create);

export default apiRoute;
