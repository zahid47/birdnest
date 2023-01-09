import { use } from "react";
import Drone from "../Drone/Drone";
import useDrones from "./useDrones";

export default function Drones() {
  const { getDrones } = useDrones();
  const data: any = use(getDrones);

  return (
    <article>
      <h1 className="text-2xl font-bold mb-4">
        NDZ Violations in the last 10 mins
      </h1>
      <ul>
        {data.length ? (
          data.map((drone: any) => {
            return <Drone key={drone.serialNumber._text} drone={drone} />;
          })
        ) : (
          <p>
            Hooray! No drones have violated the NDZ in the last 10 mins. Thanks
            for keeping it clean choom!
          </p>
        )}
      </ul>
    </article>
  );
}
