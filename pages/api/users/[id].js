import { dbConnect } from "../../../utils/mongoose";
import nextConnect from "next-connect";
import usersController from "../../../controllers/usersController";
import jwtMiddleware from "../../../controllers/jwtMiddleware";
import authenticateUser from "../../../middlewares/authenticateUser";
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

//falta validar si el usuario es el mismo que va a editar o eliminar

apiRoute.use(jwtMiddleware);
apiRoute.use(usersController.find);
apiRoute.get(usersController.show);
apiRoute.put(
  authenticateUser,
  usersController.multerMiddleware(),
  usersController.update,
  usersController.saveImage
);
apiRoute.delete(authenticateUser, usersController.destroy);

export default apiRoute;
