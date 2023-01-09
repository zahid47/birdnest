import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL!);
    console.log("MongoDB Connected");
  } catch {
    console.error("Could not connect to MongoDB");
    process.exit(1);
  }
};

export const disconnectFromDb = () => {
  return mongoose.connection.close(false, () => {
    console.log("MongoDB disconnected");
  });
};
