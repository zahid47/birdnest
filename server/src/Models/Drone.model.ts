import mongoose from "mongoose";

const droneSchema = new mongoose.Schema(
  {
    serialNumber: { type: String, required: true },
    model: { type: String, required: true },
    closestDistance: { type: Number, required: true },
  },
  { timestamps: true }
);


const Drone = mongoose.model<any>("Drone", droneSchema);
export default Drone;