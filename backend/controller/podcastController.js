import { Category } from "../models/category.js";
import { Podcasts } from "../models/podcast.js";
import { User } from "../models/user.js";

export async function addPodcast(req, res) {
  try {
    const { title, description, category } = req.body;
    const frontImage = req.files["frontImage"][0].path;
    const audioImage = req.files["audioImage"][0].path;
    if (!title || !description || !category || !frontImage || !audioImage) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const { user } = req;

    const cat = await Category.findOne({ categoryName: category });
    if (!cat) {
      return res.status(400).json({
        message: "No category found",
      });
    }

    const catId = cat._id;
    const userId = user._id;

    const newPodcast = Podcasts.create({
      title,
      description,
      category: catId,
      frontImage,
      audioFile,
      user: userId,
    });

    (await newPodcast).save();
    await Category.findByIdAndUpdate(catId, {
      $push: { podcasts: newPodcast._id },
    });

    await User.findByIdAndUpdate(userId, {
      $push: { podcasts: newPodcast._id },
    });

    return res.status(201).json({
      message: "Podcast added successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      message: error.message || "Podcast failed",
    });
  }
}

export async function getPodcast(req, res, next) {
  try {
    const podcasts = await Podcasts.find()
      .populate("category")
      .sort({ createdAt: -1 });
    return res.status(200).json({
      data: podcasts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export async function getUserPodcast(req, res) {
  try {
    const { user } = req;
    const userId = user._id;

    const data = await User.findById(userId)
      .populate({
        path: "podcasts",
        populate: { path: "category" },
      })
      .select("-password");

    if (data && data.podcasts) {
      data.podcasts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }
    return res.status(200).json({
      data: data.podcasts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export async function getPodcastId(req, res) {
  try {
      const {id} = req.params
      const podcasts = await Podcasts.findById(id).populate("category")
      

    return res.status(200).json({
      data: podcasts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

