import mongoose from "mongoose";

const droneSchema = new mongoose.Schema(
  {
    serialNumber: { type: String, required: true },
    model: { type: String, required: true },
    closestDistance: { type: Number, required: true },
    pilotName: { type: String, required: false },
    phoneNumber: { type: String, required: false },
    email: { type: String, required: false },
  },
  { timestamps: true }
);

const Drone = mongoose.model<any>("Drone", droneSchema);
export default Drone;
