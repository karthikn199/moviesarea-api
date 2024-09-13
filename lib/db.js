import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://karthiknstr:F9MeVxjAX4JucvxT@cluster0.v8ifi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDb;
