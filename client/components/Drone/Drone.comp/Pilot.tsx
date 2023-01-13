export default function PilotInfo({ pilot }: { pilot: any }) {

  return (
    <>
      <div className="flex items-center space-x-4 mt-4 mb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-teal-300"
          src={`https://api.dicebear.com/5.x/bottts/svg?seed=${pilot.name}&backgroundColor=b6e3f4`}
          alt={`Avatar of ${pilot.name}`}
        />

        <div className="font-medium dark:text-white">
          <div>{pilot.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <a href={`mailto:${pilot.email}`}>{pilot.email}</a>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <a href={`tel:${pilot.phoneNumber}`}>{pilot.phoneNumber}</a>
          </div>
        </div>
      </div>
    </>
  );
}
