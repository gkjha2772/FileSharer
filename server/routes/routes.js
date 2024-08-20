import express from "express";
import { uploadfile, downloadImage } from "../controller/fille-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();
router.post("/upload", upload.single("file"), uploadfile);

router.get("/file/:fileId", downloadImage);

export default router;
