import { Router } from "express";
import userRoutes from "./user-routes";
import { getAllUsers } from "../controllers/user-controller";
import { chatCompletionValidator, validate } from "../utilities/validators";
import { verifyToken } from "../utilities/token-manager";
import { generateChatCompletion } from "../controllers/chats-controller";

const chatsRoutes = Router();

userRoutes.get("/", getAllUsers);
chatsRoutes.post(
  "/new",
  validate(chatCompletionValidator),
  verifyToken,
  generateChatCompletion
);

export default chatsRoutes;
