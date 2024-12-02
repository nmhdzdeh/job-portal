import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name) {
    next("name is required");
  }
  if (!email) {
    next("email is required");
  }
  if (!password) {
    next("password is required and greater than 6 character");
  }

  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    next("Email already register.Please login");
  }

  const user = await userModel.create({ name, email, password });
  res.status(201).send({
    success: true,
    message: "User created successfuly",
    user,
  });
};
