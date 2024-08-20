import axios from "axios";
import "dotenv/config";

const API_URL = process.env.SERVER_URL;

export const UploadFile = async (data) => {
  try {
    console.log("Api called");
    const response = await axios.post(`${API_URL}/upload`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error during calling", error.message);
  }
};
