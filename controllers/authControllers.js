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

  const token = user.createJWT();
  res.status(201).send({
    success: true,
    message: "User created successfuly",
    user: {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
    },
    token,
  });
};

export const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    next("Please provide all fields");
  }
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    next("Invalid username or password");
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    next("Invalid username or password");
  }
  user.password = undefined;
  const token = user.createJWT();
  res.status(200).json({
    success: true,
    message: "Login Successfuly",
    user,
    token,
  });
};
