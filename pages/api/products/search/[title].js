import { dbConnect } from "../../../../utils/mongoose";
import nextConnect from "next-connect";
import productsController from "../../../../controllers/productsController";

dbConnect();


const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.get(productsController.searchProducts);

export default apiRoute;