import { TripImageCousel } from "@/conponents/tirpImagesCrousel";
import HeroBG from "@/conponents/tripHero";
import React from "react";
import TripContactFrom from "./tripContactForm";
import { MapPin, Star } from "lucide-react";

const Page = () => {
  const imagesArray = [
    "./hero1.jpg",
    "./hero2.jpg",
    "./hero3.jpg",
    "./japan.jpg",
  ];

  return (
    <div className=" w-full space-y-16">
      <HeroBG text="Mystical Borobudur Sunrise Adventure – Borobudur." />
      <TripImageCousel imagesArray={imagesArray} />
      <TripDetails />
      <HotelSection />
      <div className=" h-16"></div>
    </div>
  );
};

export default Page;

function TripDetails() {
  return (
    <div className=" w-full max-w-7xl px-4 mx-auto flex flex-col md:flex-row gap-12">
      <div className="flex flex-col gap-8">
        <HeadingDescription />
        <HeadingList />
        <HeadingList />
        <TravelPlan />
      </div>
      <TripContactFrom />
    </div>
  );
}

function HeadingDescription() {
  return (
    <div className="space-y-4">
      <h3 className="text-4xl font-semibold">Description</h3>
      <p>
        Nestled between pristine beaches and lush green hills, this destination
        offers the perfect escape from the chaos of city life. Whether you're
        seeking adventure, cultural exploration, or simply relaxation, the
        vibrant atmosphere and natural beauty ensure a memorable experience.
        Enjoy local delicacies, scenic trails, and warm hospitality that make
        every moment unforgettable.
      </p>
    </div>
  );
}

function HeadingList() {
  return (
    <div className="space-y-4">
      <h3 className="text-4xl font-semibold">Inclusions</h3>
      <ul className="list-disc pl-4">
        <li>Complimentary breakfast and dinner at the hotel</li>
        <li>Airport pick-up and drop-off in a private vehicle</li>
        <li>Guided city tour with entry tickets to major attractions</li>
        <li>Free Wi-Fi access throughout your stay</li>
        <li>24/7 customer support for any travel-related assistance</li>
      </ul>
    </div>
  );
}

function TravelPlan() {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-4xl font-semibold">Travel Plan</h4>
      <p>
        Here's a quick look at your 2-day getaway plan, carefully curated to
        help you explore the best sights, enjoy local cuisine, and relax in
        style. Get ready for an unforgettable experience filled with scenic
        beauty, culture, and adventure.
      </p>
      {Array.from({ length: 2 }).map((_, i) => (
        <TripCard key={i} idx={i} />
      ))}
    </div>
  );
}

function TripCard({ idx }) {
  const plans = [
    {
      day: 1,
      content:
        "Arrive at the coastal resort by noon. Check-in, freshen up, and enjoy a welcome drink. Afternoon beach walk followed by a sunset boat cruise. Dinner at a seaside restaurant with live music.",
    },
    {
      day: 2,
      content:
        "Early morning yoga session by the beach. After breakfast, take a guided tour of nearby cultural sites and markets. Enjoy lunch at a local café. Return to the resort for checkout and departure by evening.",
    },
  ];

  return (
    <div className="p-4 border-2 flex flex-col md:flex-row border-gray-400 bg-teal-50 rounded-2xl">
      <span className="text-lg font-semibold pr-6 shrink-0">
        Day {plans[idx].day}
      </span>
      <p>{plans[idx].content}</p>
    </div>
  );
}

function HotelSection() {
  return (
    <div className=" flex w-full max-w-7xl px-4 mx-auto flex-col gap-4">
      <h4 className=" text-4xl font-semibold">Hotels</h4>
      <div className=" flex flex-wrap gap-8">
        <HotelCard />
        <HotelCard />
      </div>
    </div>
  );
}

const HotelCard = () => {
  return (
    <div className=" w-full  sm:max-w-xs rounded-2xl overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src="/hero1.jpg" alt="Hotel" />
      <div className="p-5">
        <div className="flex flex-wrap items-center justify-between mb-2">
          <h2 className="text-xl font-semibold text-gray-800">
            Sunset Paradise Resort
          </h2>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" stroke="none" />
            ))}
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span>Goa, India</span>
        </div>
        <p className="text-gray-500">
          A luxurious beachfront resort with an infinity pool, spa, and fine
          dining – ideal for weekend getaways.
        </p>
      </div>
    </div>
  );
};
