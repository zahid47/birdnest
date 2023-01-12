import mongoose from "mongoose";
import server, { scheduler } from "../server";

const gracefulShutdownHandler = (signal: "SIGINT" | "SIGTERM") => {
  console.log(`${signal} received. Exiting...`);

  server.close(() => {
    console.log("Server closed");
    mongoose.connection.close(false, () => {
      console.log("MongoDB disconnected");
      scheduler.stop();
      process.exit(0);
    });
  });
};

export default gracefulShutdownHandler;
