import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connect from "./database/conn.js";
import routerCategories from "./routes/routeCategories.js";
import routerUser from "./routes/routeUser.js";
import routerPodcast from "./routes/routePodcast.js";

config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle preflight requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT || 3000;

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  });

app.use("/api/v1", routerUser);
app.use("/api/v1", routerCategories);
app.use("/api/v1",  routerPodcast);


app.get("/", (req, res) => {
  res.json("Testing");
});

// Ensure this is placed after all other middleware and routes to catch errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});



