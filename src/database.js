import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
    const db = await mongoose.connect(config.mongodbURL);
    console.log("Database connection established: ", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
