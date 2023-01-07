import useDrone from "./useDrone";

export default function Drone({ drone }: any) {
  const { getDistanceInMeters } = useDrone(drone);
  const distance = getDistanceInMeters();

  if (distance >= 100) return null;

  return (
    <li key={drone.serialNumber._text}>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="mb-4">
          <p className="text-gray-700 text-base">
            <span className="font-bold">Serial Number: </span>
            {drone.serialNumber._text}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 text-base">
            <span className="font-bold">Model: </span>
            {drone.model._text}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 text-base">
            <span className="font-bold">Closest Distance: </span>
            {distance} meters
          </p>
        </div>
      </div>
    </li>
  );
}
