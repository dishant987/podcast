import { User } from "../models/user.js";
import { generateToken } from "../utils/generateToken.js";

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!password) {
      return res.json({
        statuscode: 400,
        message: " password is required",
      });
    }
    if (!email) {
      return res.json({
        statuscode: 400,
        message: "email is required",
      });
    }
    if (!username) {
      return res.json({
        statuscode: 400,
        message: "username is required",
      });
    }
    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (existedUser) {
      return res.json({
        statuscode: 409,
        message: "User with email or username already exists",
      });
    }

    const user = await User.create({
      username: username,
      email: email,
      password: password,
    });

    if (!user) {
      res.json({
        statuscode: 500,
        message: "Something went wrong while registering the user",
      });
    }
    // console.log(user);
    //   await sendEmail({ email, emailType: "VERIFY", userId: user._id });

    res.status(201).json({
      statuscode: 200,
      message: "login Successfully ",
    });
  } catch (error) {
    console.log(error);
    res.json({
      statuscode: 500,
      message: error.message,
    });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!password) {
      return res.json({
        statuscode: 400,
        message: " password is required",
      });
    }
    if (!email) {
      return res.json({
        statuscode: 400,
        message: "email is required",
      });
    }

    const user = await User.findOne({
      $or: [{ email }, { password }],
    });

    if (!user) {
      return res.json({
        statuscode: 404,
        message: "User does not exist",
      });
    }
    // if (user.isVerfied === false) {
    //   return res.json({
    //     statuscode: 404,
    //     message: "Email is Not Verify",
    //   });
    // }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
      return res.json({
        statuscode: 401,
        message: "Invalid User credentials",
      });
    }

    const { accessToken ,refreshToken} = await generateToken(user._id);

    const LoggedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options = {
      httpOnly: true,
      secure: true,
    };

    return (
      res
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
          statuscode: 200,
          user: LoggedInUser,
          accessToken,
            refreshToken,
          message: "Login SuccessFully",
        })
    );
  } catch (error) {
    console.log(error);
    res.json({
      statuscode: 500,
      message: error.message,
    });
  }
};

export async function logout(req, res) {
    await User.findByIdAndUpdate(
      req._id,
      {
        $set: { refreshToken: null },
      },
      { new: true }
    );
  
    const options = {
      httpOnly: true,
      secure: true,
    };
  
    return res
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json({
        statuscode: 200,
        message: "User Logged Out",
      });
  }

  export async function userDetails(req,res,next){
        try {
          const{email} = req.user
          const existingUser = await User.findOne({email}).select("-password")
        } catch (error) {
          
        }
  }
