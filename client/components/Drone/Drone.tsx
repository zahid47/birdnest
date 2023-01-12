import useDrone from "./useDrone";

export default function Drone({ drone }: any) {
  const { lastSeen, roundedDistance } = useDrone(drone);

  return (
    <li className="mt-4 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-xl transition [animation-duration:_6s] hover:shadow-sm dark:shadow-gray-700/25">
      <div className="rounded-[10px] bg-white p-4 !pt-20 dark:bg-gray-900 sm:p-6">
        <time
          dateTime="2022-10-10"
          className="block text-xs text-gray-500 dark:text-gray-400"
        >
          {drone.serialNumber}
        </time>

        <span>
          <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
            {drone.pilotName}
          </h3>
        </span>

        <span>
          <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
            {drone.phoneNumber}
          </h3>
        </span>

        <span>
          <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
            {drone.email}
          </h3>
        </span>

        <span>
          <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
            {drone.model}
          </h3>
        </span>

        <div className="mt-4 flex flex-wrap gap-1">
          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100">
            {lastSeen}
          </span>

          <span className="whitespace-nowrap rounded-full bg-red-100 px-2.5 py-0.5 text-xs text-red-600 dark:bg-red-600 dark:text-red-100">
            {roundedDistance} {roundedDistance > 1 ? "meters" : "meter"}
          </span>
        </div>
      </div>
    </li>
  );
}
