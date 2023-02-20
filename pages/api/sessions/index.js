import nextConnect from "next-connect";
import sessionsController from "../../../controllers/SessionsController";
import { dbConnect } from "../../../utils/mongoose";
import jwtMiddleware from "../../../controllers/jwtMiddleware";
dbConnect();

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
apiRoute
  .use(sessionsController.authenticate)
  .use(sessionsController.generateToken)
  .post(sessionsController.sendToken);

export default apiRoute;
