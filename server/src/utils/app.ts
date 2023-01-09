import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { NextFunction } from "express-serve-static-core";
import Drone from "../Models/Drone.model";
import axios from "./axios";
import serializeResponse from "./serializeResponse";
import getDistanceInMeters from "./getDistanceInMeters";

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
  });
  return res.status(200).json(drones);
});

app.get("/getDrones", async (_req: Request, res: Response) => {
  axios
    .get("/drones")
    .then((response) => {
      const drones = serializeResponse(response).data.report.capture.drone;

      const data: any[] = [];
      drones.forEach((drone: any) => {
        const distance = getDistanceInMeters(
          drone.positionX._text,
          drone.positionY._text
        );

        if (distance > 100) return;
        data.push({
          serialNumber: drone.serialNumber._text,
          model: drone.model._text,
          closestDistance: distance,
        });
      });

      Drone.insertMany(data);
      return res.status(200).json(data);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
});

//Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  return res.status(500).send("Something broke!");
});

export default app;
