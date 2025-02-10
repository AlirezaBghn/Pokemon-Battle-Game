import { signup, login, getUser } from "../controllers/loginController.js";
import express from "express";
import auth from "../middleware/auth.js"; // Import the authentication middleware
const authRouter = express.Router();

authRouter.route("/register").post(signup);
authRouter.route("/login").post(login);
authRouter.route("/user").get(auth, getUser); // Protected route to get user info

export default authRouter;
