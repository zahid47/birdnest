import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function useDrone(drone: any) {
  const lastSeen = dayjs(drone.updatedAt).fromNow();
  const roundedDistance = Math.round(drone.closestDistance);

  const gradients = [
    "from-green-300 via-blue-500 to-purple-600",
    "from-orange-300 via-red-500 to-pink-600",
    "from-yellow-300 via-green-500 to-blue-600",
    "from-purple-300 via-pink-500 to-red-600",
    "from-blue-300 via-yellow-500 to-orange-600",
  ];

  return {
    lastSeen,
    roundedDistance,
    gradients,
  };
}
