import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { NextFunction } from "express-serve-static-core";
import Drone from "./Models/Drone.model";

const app: Express = express();

dotenv.config();
app.use(cors({ origin: process.env.CLIENT_URL }));

//Routes
app.get("/", (_req: Request, res: Response) => {
  return res.sendStatus(200);
});

app.get("/drones", async (_req: Request, res: Response) => {
  const drones = await Drone.find({
    createdAt: { $gte: new Date(Date.now() - 10 * 60 * 1000) },
  }).sort({ createdAt: -1 });
  return res.status(200).json(drones);
});

//Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  return res.status(500).send("Something broke!");
});

export default app;
