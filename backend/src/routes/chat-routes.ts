import { Router } from "express";

import { deleteChats, generateChatCompletion, sendChatsToUser } from "../controllers/chats-controller";
import { verifyToken } from "../utilities/token-manager";
import { chatCompletionValidator, validate } from "../utilities/validators";

//Protected API
const chatRoutes = Router();
chatRoutes.post(
  "/new",
  validate(chatCompletionValidator),
  verifyToken,
  generateChatCompletion
);
chatRoutes.get("/all-chats", verifyToken, sendChatsToUser);
chatRoutes.delete("/delete", verifyToken, deleteChats);

export default chatRoutes;