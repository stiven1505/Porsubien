import { dbConnect } from "../../../../utils/mongoose";
import nextConnect from "next-connect";
import blogsControllers from "../../../../controllers/blogsController";

dbConnect();


const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.get(blogsControllers.searchblogs);

export default apiRoute;