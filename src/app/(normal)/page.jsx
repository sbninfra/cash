import { getTrips, insertTrip } from "lib";
import AddNewTrip from "./AddNewTrip";

export default async function Home() {
  const tripData = await getTrips();

  return (
    <div className=" flex flex-col min-h-screen h-full">
      {tripData.map((trip) => {
        return (
          <div className=" flex border-b py-3 gap-6 items-center" key={trip.id}>
            <p>{trip.id}</p>
            <p>{trip.count}</p>
            <p>{trip.title}</p>
          </div>
        );
      })}
      <AddNewTrip />
    </div>
  );
}
