import { dbConnect } from "../../../utils/mongoose";
import nextConnect from "next-connect";
import blogsControllers from "../../../controllers/blogsController";
import jwtMiddleware from "../../../controllers/jwtMiddleware";
var { expressjwt: jwt } = require("express-jwt");
import secrets from "../../../utils/secrets";

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
apiRoute.get(jwt({ secret: secrets.jwtSecret, algorithms: ["HS256"] }), blogsControllers.ownIndex);
apiRoute
  .use(blogsControllers.multerMiddleware())
  .post(blogsControllers.create, blogsControllers.saveImage);

export default apiRoute;

{
  /**

export default async function blogs(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const get = await Blog.paginate(
          {},
          { page: req.query.page || 1, limit: 2, sort: { _id: -1 } }
        );
        return res.status(200).json(get);
      } catch (error) {
        //Colocar condicionales if para saber de donde viene el error.
        res.status(500).json({ error: error.message });
      }

    case "POST":
      try {
        //Crear un nuevo blogtry {
        const post = await Blog.create({
          title: req.body.title,
          description: req.body.description,
          imageHeader: req.body.imageHeader,
          categories: req.body.categories,
          idUser: req.body.idUser,
        });
        return res.status(200).json(post);
      } catch (error) {
        //Colocar condicionales if para saber de donde viene el error.
        res.status(500).json({ error: error.message });
      }
    default:
      return res.status(405).json({ msg: "Method not allowed", method });
  }
}
 */
}
