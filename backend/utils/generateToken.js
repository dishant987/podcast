import { User } from "../models/user.js";

const generateToken = async function (userId, res) {
    try {
      const user = await User.findById(userId);
      const accessToken = user.generateAccessToken();
      const refreshToken = user.generateRefreshToken();
  
      user.refreshToken = refreshToken;
      await user.save({ validateBeforeSave: false });
      return { accessToken , refreshToken };
    } catch (error) {
      console.log(error);
      return res.json({
        statuscode: 500,
        message:
          "Something went Wrong while generating referesh and access token",
      });
    }
  };

  export {generateToken}