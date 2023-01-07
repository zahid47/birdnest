export default function useDrone(drone: any) {
  const getDistanceInMeters = () => {
    const origin = { x: 250000, y: 250000 };
    const dronePosition = {
      x: drone.positionX._text,
      y: drone.positionY._text,
    };

    return (
      Math.sqrt(
        Math.pow(origin.x - dronePosition.x, 2) +
          Math.pow(origin.y - dronePosition.y, 2)
      ) / 1000
    );
  };

  return {
    getDistanceInMeters,
  };
}
