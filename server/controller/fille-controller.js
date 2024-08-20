import { request, response } from "express";
import File from "../model/file.js";

export const uploadfile = async (request, response) => {
  const fileObj = {
    path: request.file.path,
    name: request.file.originalname,
  };
  try {
    // Get the total number of files in the collection
    const fileCount = await File.countDocuments();
    console.log(fileCount);

    // If the number of files is greater than 3, delete the oldest files
    if (fileCount > 3) {
      const filesToDelete = await File.find()
        .sort({ createdAt: 1 })
        .limit(fileCount - 3);
      for (let oldFile of filesToDelete) {
        await File.findByIdAndDelete(oldFile._id);
      }
    }

    const file = await File.create(fileObj);
    console.log(file);
    response
      .status(200)
      .json({ path: `http://localhost:4888/file/${file._id}` });
  } catch (error) {
    console.error("Error in controller", error.message);
    response.status(500).json({ error: error.message });
  }
};

export const downloadImage = async (request, response) => {
  try {
    const file = await File.findById(request.params.fileId);
    file.downloadContent++;
    await file.save();
    response.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    return response.status(500).json({ error: error.message });
  }
};
