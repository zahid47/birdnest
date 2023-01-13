import http from "http";
import { Server } from "socket.io";
import { ToadScheduler } from "toad-scheduler";
import app from "./app";
import { connectToDb } from "./utils/db";
import fetchNewDronesJob from "./utils/fetchNewDronesJob";
import gracefulShutdownHandler from "./utils/gracefulShutdownHandler";

const host = process.env.HOST;
const port = process.env.PORT;

export const scheduler = new ToadScheduler();
const httpServer = http.createServer(app);
export const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});

io.on("connection", (socket) => {
  console.log(`${socket.id} connected`);

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
  });
});

const server = httpServer.listen(port, async () => {
  await connectToDb();
  scheduler.addSimpleIntervalJob(fetchNewDronesJob);

  console.log(
    `server running on ${host}:${port} & process id is ${process.pid}`
  );
});

process.on("SIGINT", gracefulShutdownHandler);
process.on("SIGTERM", gracefulShutdownHandler);

export default server;
