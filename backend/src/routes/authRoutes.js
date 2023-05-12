import { Router } from "express";
import { signin } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signin", signin);

export default authRouter;
