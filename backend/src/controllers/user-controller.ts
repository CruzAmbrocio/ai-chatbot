import { Request, Response, NextFunction } from "express";
import Users from "../models/User";

const bcrypt = require("bcrypt");

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await Users.find();
    return res.status(200).json({ message: "OK", users });
  } catch (error: any) {
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const userSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Users({ name, email, hashedPassword });
    await user.save();
    return res.status(200).json({ message: "OK", id: user._id.toString() });
  } catch (error: any) {
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};
