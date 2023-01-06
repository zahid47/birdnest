import { use } from "react";
import useDrones from "./useDrones";

export default function Drones() {
  const { getDrones } = useDrones();
  const data = use(getDrones);
  return <div>{JSON.stringify(data)}</div>;
}
