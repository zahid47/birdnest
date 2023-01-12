"use client";

import Drone from "../Drone/Drone";
import useDrones from "./useDrones";

export default function Drones() {
  const { drones } = useDrones();

  return (
    <article>
      <h1 className="text-2xl font-bold mb-4 text-center">
        NDZ Violations in the last 10 mins
      </h1>
      <h2 className="text-xl font-bold mb-4 text-center">
        Total: {drones?.length}
      </h2>
      <ul>
        {drones.length ? (
          drones.map((drone: any) => (
            <Drone key={drone.serialNumber._text} drone={drone} />
          ))
        ) : (
          <p className="text-center">
            Hooray! No drones have violated the NDZ in the last 10 mins. Thanks
            for keeping it clean choom!
          </p>
        )}
      </ul>
    </article>
  );
}
