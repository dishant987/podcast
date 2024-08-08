import { Category } from "../models/category.js";

export async function addCategories(req, res) {
  const { categoryName } = req.body;

  const cat = Category.create({ categoryName });

  await cat.save();

  return res.status(200).json({
    message: "Category added",
  });
}

export async function getCategory(req, res) {
  try {
    const { catId } = req.params;

    const categories = await Category.find({ categoryName: catId }).populate({
      path: "podcasts",
      populate: { path: "category" },
    });

    let podcasts = [];

    categories.forEach((category) => {
      podcasts = [...podcasts, ...category.podcasts];
    });
    return res.status(200).json({
      data: podcasts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}
