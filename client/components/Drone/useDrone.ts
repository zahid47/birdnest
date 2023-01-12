import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function useDrone(drone: any) {
  const lastSeen = dayjs(drone.updatedAt).fromNow();
  const roundedDistance = Math.round(drone.closestDistance);
  return {
    lastSeen,
    roundedDistance,
  };
}
