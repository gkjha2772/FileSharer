import "dotenv/config";
import mongoose from "mongoose";

const DbConnection = async () => {
  const MONODB_URI = process.env.DB_LINK;
  try {
    await mongoose.connect(MONODB_URI, { useNewUrlParser: true });
    console.log("Conneted to DB");
  } catch (error) {
    console.error("Error in connection", error.message);
  }
};

export default DbConnection;
