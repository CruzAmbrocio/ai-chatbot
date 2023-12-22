import { Request, Response, NextFunction } from "express";
import Users from "../models/User";
import User from "../models/User";

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
    const existing = await User.findOne({email});
    if( existing ) return res.status(401).send('User already exist');
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Users({ name, email, password:hashedPassword });
    console.log(JSON.stringify(user))
    await user.save();
    return res.status(201).json({ message: "OK", id: user._id.toString() });
  } catch (error: any) {
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if( !user ) {
      return res.status(401).send('User not registered');
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if( !isPasswordCorrect ) {
      return res.status(403).send('Incorrect password');
    }
    return res.status(200).json({ message: "OK", id: user._id.toString() });
  } catch (error: any) {
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};
