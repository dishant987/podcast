import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.js";
import {
  addPodcast,
  getPodcast,
  getPodcastId,
  getUserPodcast,
} from "../controller/podcastController.js";

const routerPodcast = Router();

routerPodcast.route("/add-podcast", verifyJWT, upload).post(addPodcast);
routerPodcast.route("/get-podcast", verifyJWT).get(getPodcast);
routerPodcast.route("/get-user-podcast", verifyJWT).get(getUserPodcast);
routerPodcast.route("/get-podcast/:id", verifyJWT).get(getPodcastId);

export default routerPodcast;
