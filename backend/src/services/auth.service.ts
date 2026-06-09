import User from "../models/User";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.utils";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword =
    await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = generateToken(
    user._id.toString()
  );

  return {
    user,
    token,
  };
};