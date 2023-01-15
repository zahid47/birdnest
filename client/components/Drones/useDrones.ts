"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import dayjs from "dayjs";
import axios from "../../utils/axios";

export default function useDrones(initialDrones: any) {
  const socket = io(process.env.NEXT_PUBLIC_SERVER_URL!);
  const [drones, setDrones] = useState<any[]>(initialDrones);
  const [loading, setLoading] = useState<boolean>(true);

  const getDrones = async () => {
    try {
      const res = await axios.get("/drones");
      setDrones(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDrones();
    setLoading(false);
  }, []);

  useEffect(() => {
    socket.connect();

    socket.on("foundNewDrone", (data: any) => {
      // filter out the drone if it was last updated more than 10 minutes ago
      setDrones((prev) => {
        return prev.filter(
          (drone) => dayjs().diff(dayjs(drone.updatedAt), "minute") < 10
        );
      });

      // check if the drone already exists in the list
      const index = drones.findIndex(
        (drone) => drone.serialNumber === data.serialNumber
      );

      // if it doesn't exist, add it to the list
      if (index === -1) {
        setDrones((prev) => [data, ...prev]);
      } else {
        // if it does exist, update it
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

  return {
    drones,
    loading,
  };
}
