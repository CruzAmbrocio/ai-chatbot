import { Router } from "express";
import { getAllUsers, userLogin, userSignup } from "../controllers/user-controller";
import { loginValidator, signupValidator, validate } from "../utilities/validators";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);

export default userRoutes;
