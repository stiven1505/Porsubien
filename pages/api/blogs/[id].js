import { dbConnect } from "../../../utils/mongoose";
import nextConnect from "next-connect";
import blogsControllers from "../../../controllers/blogsController";
import jwtMiddleware from "../../../controllers/jwtMiddleware";
import authenticateOwner from "../../../middlewares/authenticateOwner";

dbConnect();

/* This is a Next.js API route configuration. It is telling Next.js to not use the default body parser
for this route. becouse for up images is necessary*/
export const config = {
  api: {
    bodyParser: false,
  },
};

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(jwtMiddleware);
apiRoute.use(blogsControllers.find);
apiRoute.get(blogsControllers.show);
apiRoute.put(authenticateOwner,blogsControllers.multerMiddleware(), blogsControllers.update, blogsControllers.saveImage);
apiRoute.delete(authenticateOwner, blogsControllers.destroy);

export default apiRoute;

{
  /** 
export default async function blogsId(req, res) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        const get = await Blog.findById(id);
        return res.status(200).json(get);
      } catch (error) {
        //Colocar condicionales if para saber de donde viene el error.
        res.status(500).json({ error: error.message });
      }
    case "PUT":
      try {
        let attributes = [
          "title",
          "description",
          "imageHeader",
          "categories",
        ];
        let placeParams = {};
        attributes.forEach((attribute) => {
          if (Object.prototype.hasOwnProperty.call(req.body, attribute)) {
            placeParams[attribute] = req.body[attribute];
          }
        });
        const put = await Blog.findByIdAndUpdate(id, placeParams, { new: true });
        return res.status(200).json(put);
      } catch (error) {
        //Colocar condicionales if para saber de donde viene el error.
        res.status(500).json({ error: error.message });
      }
    case "DELETE":
      try {
        const deleteBlog = await Blog.findByIdAndDelete(id);
        return res.status(200).json(deleteBlog);
      } catch (error) {
        //Colocar condicionales if para saber de donde viene el error.
        res.status(500).json({ error: error.message });
      }
    default:
      return res.status(405).json({ msg: "Method not allowed" });
  }
}
*/
}
