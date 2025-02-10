import asyncHandler from "../utils/asyncHandler.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Login from "../models/Login.js";
import ErrorResponse from "../utils/errorResponse.js";

const signup = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    // Check if user exists
    let user = await Login.findOne({ email });
    if (user) {
      return next(new ErrorResponse("User already exists", 400));
    }

    // Create user
    user = new Login({
      username,
      email,
      password,
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // Create token
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE },
      (err, token) => {
        if (err) throw err;
        res.status(201).json({ token });
      }
    );
  } catch (error) {
    console.error(error);
    next(error);
  }
});

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Check for user
  let user = await Login.findOne({ email });
  if (!user) {
    return next(new ErrorResponse("Email or Password is wrong", 401));
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return next(new ErrorResponse("Email or Password is wrong", 401));
  }

  // Create token
  const payload = {
    user: {
      id: user.id,
    },
  };

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE },
    (err, token) => {
      if (err) throw err;
      res.status(200).json({ token });
    }
  );
});

const getUser = asyncHandler(async (req, res, next) => {
  const user = await Login.findById(req.user.id).select("-password");
  if (!user) {
    return next(new ErrorResponse("User not found", 404));
  }
  res.status(200).json(user);
});

export { signup, login, getUser };
