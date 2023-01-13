"use client";

import Drone from "../Drone/Drone";
import useDrones from "./useDrones";

export default function Drones({ initialDrones }: any) {
  const { drones } = useDrones(initialDrones);

  return (
    <article>
      <h1 className="text-2xl font-bold mb-4 text-center">
        NDZ Violations in the last 10 mins{" "}
        <span className="animate-pulse">(updating live)</span>
      </h1>
      <h2 className="text-xl font-bold mb-4 text-center">
        Total: {drones?.length}
      </h2>
      {drones.length ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {drones.map((drone: any) => (
            <Drone key={drone.serialNumber._text} drone={drone} />
          ))}
        </ul>
      ) : (
        <p className="text-xl font-normal mb-4 text-center">
          Hooray! No drones have violated the NDZ in the last 10 mins. Thanks
          for keeping it clean choom!
        </p>
      )}
    </article>
  );
}
