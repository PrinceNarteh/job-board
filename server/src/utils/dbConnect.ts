import mongoose from "mongoose";
import {logger} from "./logger";

const MONGO_URL = process.env.MONGO_URL;
if (!MONGO_URL) {
  throw new Error(
    "Please provide MONGO_URL connection string in the .env file"
  );
}

export const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    logger.info("Database connect successfully!");
  } catch (error: any) {
    logger.error(error.message);
    process.exit(1);
  }
};
