import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function Drone({ drone }: any) {
  const lastSeen = dayjs(drone.updatedAt).fromNow();
  const roundedDistance = Math.round(drone.closestDistance);

  return (
    <li key={drone.serialNumber}>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="mb-4">
          <p className="text-gray-700 text-base">
            <span className="font-bold">Serial Number: </span>
            {drone.serialNumber}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 text-base">
            <span className="font-bold">Model: </span>
            {drone.model}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 text-base">
            <span className="font-bold">Closest Distance: </span>
            {roundedDistance} {roundedDistance > 1 ? "meters" : "meter"}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 text-base">
            <span className="font-bold">Last seen: </span>
            {lastSeen}
          </p>
        </div>
      </div>
    </li>
  );
}
