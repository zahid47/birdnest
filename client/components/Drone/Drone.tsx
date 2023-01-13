import Distance from "./Drone.comp/Distance";
import DroneInfo from "./Drone.comp/DroneInfo";
import LastSeen from "./Drone.comp/LastSeen";
import Pilot from "./Drone.comp/Pilot";
import useDrone from "./useDrone";

export default function Drone({ drone }: any) {
  const { lastSeen, roundedDistance, gradients } = useDrone(drone);

  return (
    <li
      className={`rounded-xl bg-gradient-to-r  ${
        gradients[Math.floor(Math.random() * gradients.length)]
      } p-0.5 shadow-xl transition hover:shadow-sm`}
    >
      <div className="rounded-[10px] bg-white p-4 !pt-20 dark:bg-gray-900 sm:p-6">
        <DroneInfo drone={drone} />
        <Pilot pilot={drone.pilot} />

        <div className="mt-4 flex flex-wrap gap-1">
          <LastSeen lastSeen={lastSeen} />
          <Distance distance={roundedDistance} />
        </div>
      </div>
    </li>
  );
}
