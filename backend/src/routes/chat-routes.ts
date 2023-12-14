import { Router } from "express";
import userRoutes from "./user-routes";
import { getAllUsers } from "../controllers/user-controller";

const chatsRoutes = Router();

userRoutes.get("/", getAllUsers);

export default chatsRoutes;
