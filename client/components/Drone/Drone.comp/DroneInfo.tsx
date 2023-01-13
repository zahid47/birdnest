export default function DroneInfo({ drone }: any) {
  return (
    <>
      <time
        dateTime="2022-10-10"
        className="block text-xs text-gray-500 dark:text-gray-400"
      >
        {drone.serialNumber}
      </time>

      <span>
        <h3 className="mt-0.5 text-xl font-black text-gray-900 dark:text-white">
          {drone.model}
        </h3>
      </span>
    </>
  );
}
