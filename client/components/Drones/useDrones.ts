"use client";

import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { io } from "socket.io-client";

export default function useDrones() {
  const socket = io(process.env.NEXT_PUBLIC_SERVER_URL!);
  const [drones, setDrones] = useState<any[]>([]);

  useEffect(() => {
    socket.connect();

    socket.on("foundNewDrone", (data: any) => {
      const index = drones.findIndex(
        (drone) => drone.serialNumber === data.serialNumber
      );
      if (index === -1) {
        setDrones((prev) => [data, ...prev]);
      } else {
        const newDrones = [...drones];
        newDrones[index] = data;
        setDrones(newDrones);
      }
    });

    return () => {
      socket.off("foundNewDrone");
      socket.disconnect();
    };
  }, [drones, socket]);

  const getDrones = async () => {
    try {
      const res = await axios.get("/drones");
      setDrones(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDrones();
  }, []);

  return {
    drones,
  };
}
