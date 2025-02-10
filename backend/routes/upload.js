import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const router = express.Router();

// Get __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the uploads directory path (relative to your project root)
const uploadDir = path.join(__dirname, "../uploads");

// Ensure the "uploads" directory exists (create it if it doesn't)
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log(`Created uploads directory at ${uploadDir}`);
} else {
  console.log(`Uploads directory exists at ${uploadDir}`);
}

// Configure Multer storage so files are saved in the uploads folder with a unique filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  },
});

// File filter to allow only image files (including GIF, JPEG, PNG, etc.)
const fileFilter = (req, file, cb) => {
  console.log("File filter: mimetype =", file.mimetype);
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

const upload = multer({ storage, fileFilter });

// POST /api/upload - expects a file under the field name "image"
router.post("/upload", upload.single("image"), (req, res) => {
  console.log("Inside upload route");
  console.log("req.body:", req.body);
  console.log("req.file:", req.file);

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // Construct a URL to access the uploaded file.
  // For example, if running locally on port 5000, the URL will be something like:
  // http://localhost:5000/uploads/<filename>
  const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  res.status(201).json({
    message: "Upload successful",
    url: fileUrl,
  });
});

export default router;
