import axios from "./axios";
import Drone from "../Models/Drone.model";
import getDistanceInMeters from "./getDistanceInMeters";
import serializeResponse from "./serializeResponse";
import { AsyncTask, SimpleIntervalJob } from "toad-scheduler";
import { io } from "../server";
import fetchPilotData from "./fetchPilotData";

const fetchNewDrones = async () => {
  console.log("fetching new drones: " + new Date().toISOString());
  axios
    .get("/drones")
    .then((response) => {
      const drones = serializeResponse(response).data.report.capture.drone;

      drones.forEach(async (drone: any) => {
        const distance = getDistanceInMeters(
          drone.positionX._text,
          drone.positionY._text
        );

        if (distance > 100) return;

        console.log(`Found a drone violating the NDZ`);
        const droneData: any = {
          serialNumber: drone.serialNumber._text,
          model: drone.model._text,
          closestDistance: distance,
        };
        const pilotData = await fetchPilotData(drone.serialNumber._text);

        droneData["pilotName"] = pilotData
          ? pilotData.firstName + " " + pilotData.lastName
          : null;
        droneData["phoneNumber"] = pilotData ? pilotData.phoneNumber : null;
        droneData["email"] = pilotData ? pilotData.email : null;

        Drone.findOneAndUpdate(
          {
            serialNumber: drone.serialNumber._text,
            model: drone.model._text,
          },
          droneData,
          {
            upsert: true,
            new: true,
          },
          (err, doc) => {
            if (err) {
              console.error(err);
              console.error("Something wrong when updating data!");
            }
            io.emit("foundNewDrone", doc);
          }
        );
      });

      return;
    })
    .catch((error) => {
      console.error(error);
    });
};

const fetchNewDronesTask = new AsyncTask("get-drones", fetchNewDrones);
const fetchNewDronesJob = new SimpleIntervalJob(
  { seconds: 2, runImmediately: true },
  fetchNewDronesTask,
  {
    id: "id_1",
    preventOverrun: true,
  }
);

export default fetchNewDronesJob;
