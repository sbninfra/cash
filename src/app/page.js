import Image from "next/image";
import { insertHotel } from "../../lib/helper";
import Link from "next/link";
import { HeadsetIcon, ShieldCheckIcon, StarIcon } from "lucide-react";

export default function Home() {
  return (
    <div className=" bg-secondary-cream min-h-screen h-full">
      <HeroSection />
      <Packages />
      <TravelWithUs />
      <Link href="/admin">Admin</Link>
      <div className=" h-60"></div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className=" bg-cream  py-20 md:px-10 px-6">
      <div className="flex gap-6 w-full max-w-7xl mx-auto">
        <div className="relative flex flex-col gap-8 w-full">
          <h1 className=" text-center leading-16 sm:text-left font-playfair text-dark text-7xl font-semibold">
            Find your Perfect Adventure
          </h1>
          <p className="text-center text-lg md:text-xl sm:text-left text-sub">
            Brouse handpicked travel plans crafted for every kind of explore
          </p>
          <button className=" mx-auto text-lg sm:m-0 w-full bg-primary text-white font-semibold hover:scale-105 cursor-pointer duration-200 shadow py-3 px-6  rounded-full sm:w-fit">
            View Packages
          </button>
          <img
            src="/star.png"
            className=" hidden md:block absolute size-6 bottom-4 right-4"
            alt=""
          />
        </div>
        <div className=" hidden md:flex flex-col gap-1.5 w-full h-full">
          <div className=" w-full h-full flex  gap-1.5">
            <div className=" h-full w-full rounded-xl overflow-hidden max-h-44">
              <img
                src="/hero1.jpg"
                className=" w-full h-full  object-cover"
                alt=""
              />
            </div>
            <div className=" h-full w-full rounded-xl overflow-hidden max-h-44">
              <img
                src="/hero2.jpg"
                className=" w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className=" h-full rounded-xl max-h-44 overflow-hidden w-full">
            <img src="/hero3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Packages() {
  const data = [
    {
      title: "Discover Dubai",
      description:
        "Experience the luxury and vibrant culture of Dubai — from desert safaris to stunning skyscrapers.",
      image: "/dubai.jpg",
      date: "26th April 2025",
    },
    {
      title: "Explore Bali",
      description:
        "Unwind on Bali’s breathtaking beaches, lush rice terraces, and discover a land rich in tradition and adventure.",
      image: "/bali.jpg",
      date: "10th May 2025",
    },
    {
      title: "Adventure Switzerland",
      description:
        "Journey through the picturesque Swiss Alps, crystal-clear lakes, and charming villages for an unforgettable adventure.",
      image: "/swizerland.jpg",
      date: "15th June 2025",
    },
    {
      title: "Japan",
      description:
        "Lose yourself in japan colorful souks, stunning deserts, and ancient cities filled with stories and spices.",
      image: "/japan.jpg",
      date: "1st July 2025",
    },
  ];

  return (
    <div className=" bg-secondary-cream p-6  md:p-8 ">
      <div className=" w-full mx-auto max-w-7xl flex flex-col gap-6">
        <h2 className=" text-5xl font-medium font-playfair">
          Our Travel Packages
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => {
            return <PackageCard key={item.title} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

function PackageCard({ title, description, image, date }) {
  return (
    <div className="border bg-white rounded-2xl overflow-hidden shadow-md flex flex-col sm:flex-row h-full transition hover:shadow-lg ">
      {/* Image Section */}
      <div className="w-full sm:w-1/2 h-56 sm:h-auto max-h-60">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl object-center"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between w-full sm:w-1/2">
        <div>
          <h3 className="text-dark text-3xl font-playfair line-clamp-2 font-bold mb-2">
            {title}
          </h3>
          <p className="text-sub text-base line-clamp-3">{description}</p>
        </div>
        <p className=" text-primary font-semibold mt-4">{date}</p>
      </div>
    </div>
  );
}

function TravelWithUs() {
  const data = [
    {
      icon: StarIcon,
      title: "Handpicked Places",
    },
    {
      icon: ShieldCheckIcon,
      title: "Best Price Guarantee",
    },
    {
      icon: HeadsetIcon,
      title: "24/7 Support",
    },
  ];

  return (
    <div className=" bg-secondary-cream p-6  md:p-8 ">
      <div className=" w-full mx-auto max-w-7xl flex flex-col gap-6">
        <h2 className=" text-5xl font-medium font-playfair">
          Our Travel Packages
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {data.map((item) => {
            return <TravelCard key={item.title} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

function TravelCard({ icon: Icon, title }) {
  return (
    <div className=" flex items-center md:justify-center gap-4 w-full">
      <Icon className=" w-8 h-8 text-primary" />
      <p className=" text-xl font-medium">{title}</p>
    </div>
  );
}
