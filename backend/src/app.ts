import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes";
import cookieParser from "cookie-parser";
import cors from "cors"
import express from "express";

const app = express();

config();

app.use(cors({ origin: "http://localhost:5173", credentials:true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev")); // TODO remove in production
app.use("/api/v1", appRouter);

export default app;
