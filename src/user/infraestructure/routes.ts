import { Router } from "express";
import { signInController, signUpController, signOutController, updateController } from "./dependencies";

const UserRouter = Router();

UserRouter.post("/signup", signUpController.run.bind(signUpController));
UserRouter.post("/signin", signInController.run.bind(signInController));
UserRouter.post("/signout", signOutController.run.bind(signOutController));
UserRouter.post("/update", updateController.run.bind(updateController));

export default UserRouter;