import mongoose from "mongoose";

export interface IDrone {
  serialNumber: string;
  model: string;
  closestDistance: number;
  pilot: {
    pilotId: string | null;
    name: string | null;
    phoneNumber: string | null;
    email: string | null;
  };
}
