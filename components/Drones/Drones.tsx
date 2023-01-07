import { use } from "react";
import Drone from "../Drone/Drone";
import useDrones from "./useDrones";

export default function Drones() {
  const { getDrones } = useDrones();
  const data: any = use(getDrones);
  const drones: any[] = data.report.capture.drone;

  return (
    <article>
      <h1 className="text-2xl font-bold mb-4">NDZ Violations in the last 10 mins</h1>
      <ul>
        {drones.map((drone: any) => {
          return <Drone key={drone.serialNumber._text} drone={drone} />;
        })}
      </ul>
    </article>
  );
}
