import axios from "axios";

const API_URL = process.env.REACT_APP_API_KEY;

export const UploadFile = async (data) => {
  try {
    console.log("Api called");
    console.log(data);
    console.log(API_URL);
    const response = await axios.post(`${API_URL}/upload`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error during calling", error.message);
  }
};
