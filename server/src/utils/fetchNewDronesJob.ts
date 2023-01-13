import axios from "./axios";
import getDistanceInMeters from "./getDistanceInMeters";
import serializeResponse from "./serializeResponse";
import { AsyncTask, SimpleIntervalJob } from "toad-scheduler";
import { io } from "../server";
import fetchPilotData from "./fetchPilotData";
import { upsertDrone } from "../modules/Drone/Drone.service";
import { IDrone } from "../modules/Drone/Drone";

const fetchNewDrones = async () => {
  console.log("Looking for new drones violating the NDZ...");

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
        console.log("Found a drone violating the NDZ!");

        // fetching the pilot data
        const pilot = await fetchPilotData(drone.serialNumber._text);

        let droneData: IDrone = {
          serialNumber: drone.serialNumber._text,
          model: drone.model._text,
          closestDistance: distance,
          pilot: {
            pilotId: pilot?.pilotId,
            name: pilot?.firstName + " " + pilot?.lastName,
            phoneNumber: pilot?.phoneNumber,
            email: pilot?.email,
          },
        };

        // saving the data to db and then emiting the event to client
        upsertDrone(droneData).then((data) =>
          io.emit("foundNewDrone", data)
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
