import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, next) => {
    next(null, "uploads/");
  },
  filename: (req, file, next) => {
    next(nul, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
}).fields[
  ({
    name: "frontedImage",
    maxCount: 1,
  },
  {
    name: "audioFile",
    maxCount: 1,
  })
];

export default upload
