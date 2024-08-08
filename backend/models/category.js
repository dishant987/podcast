import mongoose, { Schema } from "mongoose";

const category = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
      unique: true,
      // index:true
    },

    podcasts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "podcasts",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.model("category", category);
