const getDistanceInMeters = (X: number, Y: number) => {
  const origin = { x: 250000, y: 250000 };

  return (
    Math.sqrt(Math.pow(origin.x - X, 2) + Math.pow(origin.y - Y, 2)) / 1000
  );
};

export default getDistanceInMeters;
