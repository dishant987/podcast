import { Router } from "express";
import { addCategories, getCategory } from "../controller/categoriesController.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const routerCategories = Router()

routerCategories.route("/add-categories",verifyJWT).post(addCategories)
routerCategories.route("/category/:catId").post(getCategory)

export default routerCategories