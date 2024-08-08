import jwt from "jsonwebtoken";
import { User } from "../models/user.js";


export const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.json({
        statuscode: 401,
        message: "Unauthorized request",
      });
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // console.log(decodedToken);
    const user = await User.findById(decodedToken._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      return res.json({
        statuscode: 401,
        message: "Invalid Access Token",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.json({
      statuscode: 500,
      message: error?.message || "Invalid Access Token",
    });
  }
};
