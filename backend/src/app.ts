import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes";
import cookieParser from "cookie-parser"

const express = require("express");
const cors = require("cors");
const app = express();

config();

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(morgan("dev")); // TODO remove in production
app.use("/api/v1", appRouter);
app.use(cors());

export default app;
