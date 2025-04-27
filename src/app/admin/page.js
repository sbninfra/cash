import { getAllTrips } from "../../../lib";
import { TripTable } from "./tripTable";

const Page = async () => {
  const allTripData = await getAllTrips();
  // console.log(allTripData);
  return (
    <div className=" flex flex-col gap-3">
      <p className="text-3xl">Admin Page</p>
      <Seprator />
      <div className=" flex w-full">
        <p className=" text-2xl">Trip Table - </p>
        <p className=" text-2xl">{allTripData.length}</p>
      </div>
      <TripTable tripData={allTripData} />
    </div>
  );
};

export default Page;

function Seprator() {
  return <div className=" h-0.5 rounded-xl w-full bg-gray-600"></div>;
}
