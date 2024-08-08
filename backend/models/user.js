import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const user = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, "Username is already exists"],
      trim: true,
      // index:true
    },
    name: {
      type: String,
      required: [true, "Username is required"],
      // index:true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
    },
    podcasts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "podcasts",
      },
    ],
    refreshToken: {
      type: String,
    },
    // isVerfied: {
    //   type: Boolean,
    //   default: false,
    // },
    // verifyToken: String,
    // verifyTokenExpiry: Date,
    // forgotPasswordToken: String,
    // forgotPasswordTokenExpiry: Date,
  },
  {
    timestamps: true,
  }
);

user.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

user.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

user.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      role: this.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
user.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", user);
