import mongoose from "mongoose";

const droneSchema = new mongoose.Schema(
  {
    serialNumber: { type: String, required: true },
    model: { type: String, required: true },
    closestDistance: { type: Number, required: true, max: 100, min: 0 },
    pilot: {
      pilotId: { type: String, required: false, default: null },
      name: { type: String, required: false, default: null },
      phoneNumber: { type: String, required: false, default: null },
      email: { type: String, required: false, default: null },
    },
  },
  { timestamps: true }
);

const Drone = mongoose.model<any>("Drone", droneSchema);
export default Drone;
