import { IDrone } from "./Drone";
import Drone from "./Drone.model";

export const getDrones = () => {
  return Drone.find({
    updatedAt: { $gte: new Date(Date.now() - 10 * 60 * 1000) },
  }).sort({ updatedAt: -1 });
};

export const upsertDrone = (droneData: IDrone) => {
  return Drone.findOneAndUpdate(
    {
      serialNumber: droneData.serialNumber,
      model: droneData.model,
    },
    droneData,
    {
      upsert: true,
      new: true,
    }
  );
};
