import { Router } from "express";
import userRoutes from "./user-routes";
import chatsRoutes from "./chat-routes";

const appRouter = Router();

appRouter.use("/user", userRoutes); // domain/api/v1/user
appRouter.use("/chat", chatsRoutes); // domain/api/v1/chats

export default appRouter;
