import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DbConnection from "./database/db.js";
import authRoutes from "./routes/authRoutes.js";
import multer from "multer";
import path from "path";
import jwt from "jsonwebtoken"; // JWT import
import router from "./routes/routes.js";

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests
app.use(express.static("uploads")); // Serve uploaded files

// JWT Middleware to verify the token
const verifyToken = (req, res, next) => {
  console.log("Verify Token");
  const token = req.headers["Authorization"];

  // Check if token is present
  if (!token) return res.status(403).json({ message: "Access denied" });

  // Verify token
  try {
    console.log("Verifying token");
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "yourSecretKey"
    );
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Set file upload folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Set file name to avoid conflicts
  },
});

const upload = multer({ storage });

// Routes
app.use("/auth", authRoutes);

// File Upload Route (Example: Upload Profile Picture)
// app.post("/upload", verifyToken, upload.single("file"), (req, res) => {
//   console.log("File uploaded");
//   if (!req.file) {
//     return res.status(400).json({ message: "No file uploaded" });
//   }

//   // File uploaded successfully
//   res.status(200).json({
//     message: "File uploaded successfully",
//     filePath: `/uploads/${req.file.filename}`, // Return the file path
//   });
// });

app.use("/", router);
const PORT = process.env.PORT || 4888;

// Connect to Database
DbConnection();

// Start the Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
