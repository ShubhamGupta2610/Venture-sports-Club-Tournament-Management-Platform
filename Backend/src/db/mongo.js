import mongoose from "mongoose";

const mongo = async () => {
  try {
    console.log("MONGO_URI ->", process.env.MONGO_URI);
    // include explicit connection options for compatibility and better TLS handling
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    // Log full error to help diagnose auth / network issues
    console.error("MongoDB connection error:", error);
    if (error && error.stack) console.error(error.stack);
  }
};
export default mongo;
