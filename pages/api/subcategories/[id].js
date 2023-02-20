import { dbConnect } from "../../../utils/mongoose";
import nextConnect from "next-connect";
import subCategoriesController from "../../../controllers/subCategoriesController";
import jwtMiddleware from "../../../controllers/jwtMiddleware";
dbConnect();

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
apiRoute.use(jwtMiddleware);
apiRoute.use(subCategoriesController.find);
apiRoute.get(subCategoriesController.show);
apiRoute.delete(subCategoriesController.destroy);

export default apiRoute;
