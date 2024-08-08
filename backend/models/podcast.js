import mongoose, { Schema } from "mongoose";


const podcasts = new Schema(
  {
    frontImage: {
      type: String,
      required: true,
      unique: true,
      // index:true
    },
    audioFile: {
      type: String,
      required: [true],
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
  },
  {
    timestamps: true,
  }
);

export const Podcasts = mongoose.model("podcasts", podcasts);
