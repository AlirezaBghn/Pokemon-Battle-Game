import jwt from "jsonwebtoken";
import Login from "../models/Login.js";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/errorResponse.js";

const auth = asyncHandler(async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token) {
    return next(new ErrorResponse("No token, authorization denied", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await Login.findById(decoded.user.id).select("-password");
    if (!req.user) {
      return next(new ErrorResponse("User not found", 404));
    }
    next();
  } catch (err) {
    return next(new ErrorResponse("Token is not valid", 401));
  }
});

export default auth;
