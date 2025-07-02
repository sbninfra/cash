import { getTrips, insertTrip } from "lib";
import AddNewTrip from "./AddNewTrip";

export default async function Home() {
  const tripData = await getTrips();

  return (
    // <div className=" bg-gradient-to-b from-emerald-50 to-white p-6  md:p-8 ">
    <div id="package" className=" bg-white px-6 py-20  ">
      <div className=" w-full mx-auto max-w-7xl flex flex-col gap-6">
        <h2 className=" text-5xl text-center mb-6 font-medium font-playfair">
          Our Travel Packages
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-4">
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
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="border flex justify-end rounded-2xl overflow-hidden shadow-md h-96 hover:shadow-lg "
    >
      <div className=" relative p-6 flex flex-col mt-auto h-fit text-white ">
        <div className=" absolute top-0 left-0 w-full h-full blur bg-gradient-to-b from-[#0f0f0f3f] via-black to-black opacity-70"></div>
        <div className=" z-20 flex flex-col justify-between w-full ">
          <Link href={"/trip"}>
            <h3 className=" w-fit hover:underline   text-3xl font-playfair line-clamp-2 font-bold mb-2">
              {title}
            </h3>
          </Link>
          <p className="  mb-4 line-clamp-2">{description}</p>
        </div>
        <div className=" z-20 flex items-center justify-between gap-4 w-full">
          <p className=" text-[#ffd7c8] font-semibold">{date}</p>
          <div className=" mt-auto  cursor-pointer font-semibold  py-2 px-4 hover:scale-105 rounded-full  bg-[#FF6B35] duration-200 text-white  w-fit">
            View more
          </div>
        </div>
      </div>
    </div>
  );
}
// function PackageCard({ title, description, image, date }) {
//   return (
//     <div className="border bg-white rounded-2xl overflow-hidden shadow-md flex flex-col transition hover:shadow-lg ">
//       {/* Image Section */}
//       <div className="w-full group relative h-72 overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full group-hover:scale-110 object-cover duration-200 object-center"
//         />

//         <p className=" absolute right-6 top-6 bg-white px-3 py-1 rounded-full text-primary font-semibold ">
//           {date}
//         </p>
//       </div>

//       {/* Content Section */}
//       <div className="px-6 pt-6  flex flex-col justify-between w-full ">
//         <Link href={"/trip"}>
//           <h3 className=" w-fit hover:underline text-dark text-3xl font-playfair line-clamp-2 font-bold mb-2">
//             {title}
//           </h3>
//         </Link>
//         <p className="text-sub mb-4 text-base text-gray-400 line-clamp-3">
//           {description}
//         </p>
//       </div>
//       <div className=" mt-auto mb-6 ml-6 cursor-pointer font-semibold  py-3 px-3 hover:px-6 rounded-full  hover:bg-[#FF6B35] duration-200 hover:text-white text-[#FF6B35] w-fit">
//         View more
//       </div>
//     </div>
//   );
// }

function TravelWithUs() {
  const data = [
    {
      icon: "./plane.svg",
      title: "500+ Destinations",
      desc: "Etiam porta sem malesuada magna",
    },
    {
      icon: "./clock-1.svg",
      title: "Best Price Guarantee",
      desc: "Etiam porta sem malesuada magna",
    },
    {
      icon: "./tree.svg",
      title: "Top Notch Support",
      desc: "Etiam porta sem malesuada magna",
    },
  ];

  return (
    <div className=" bg-[#FD4C5C] text-white px-6 pt-12 pb-16 md:px-8 ">
      <div className=" w-full mx-auto max-w-7xl flex flex-col gap-6">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-4 mt-4">
          {data.map((item) => {
            return <TravelCard key={item.title} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

function TravelCard({ icon, title, desc }) {
  return (
    <div className=" flex items-center md:justify-center gap-4 w-full">
      <img src={icon} />
      <div className=" flex flex-col gap-1">
        <p className=" text-xl font-medium">{title}</p>
        <p className=" text-gray-200">{desc}</p>
      </div>
    </div>
  );
}

function TravelPerfection() {
  const contentSections = [
    {
      title: "Tell us what you want to do",
      description:
        "Share your travel goals — from meetings and conferences to off-site retreats. We’ll tailor the perfect business travel plan to suit your needs.",
    },
    {
      title: "Share your travel preference",
      description:
        "Let us know your preferred airlines, hotel types, budget limits, and travel policies. We align every booking to match your company’s standards.",
    },
    {
      title: "We’ll give you recommendations",
      description:
        "Based on your preferences, we’ll suggest optimized travel options that balance comfort, cost, and convenience — all in real-time.",
    },
  ];

  return (
    <div className=" bg-emerald-50 w-full px-4">
      <div className=" mx-auto max-w-7xl py-20">
        <h3 className=" text-lg text-emerald-600 italic mb-3 font-medium text-center">
          Three steps for a perfect trip
        </h3>
        <h2 className=" text-center text-5xl font-medium font-playfair">
          Find Travel Perfection
        </h2>
        <p className=" text-center mx-auto max-w-3xl mt-4 text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          nemo nihil et sint dolore earum at quidem, quam placeat incidunt
          consequatur eius recusandae iste i
        </p>

        <div className=" w-full  mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:px-6">
          <TravelPerfectionCard
            title={contentSections[0].title}
            description={contentSections[0].description}
          >
            <div
              className=" w-24 md:w-32 mx-auto  h-24 md:h-32 bg-red-100 flex items-center justify-center"
              style={{
                clipPath:
                  "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
              }}
            >
              <img
                src={`/feature-1.svg`}
                className=" size-12 md:size-16 object-contain"
                alt="Feature Icon"
              />
            </div>
          </TravelPerfectionCard>
          <TravelPerfectionCard
            title={contentSections[1].title}
            description={contentSections[1].description}
          >
            <div
              className=" w-24 md:w-32 mx-auto  h-24 md:h-32 bg-blue-100 flex items-center justify-center"
              style={{
                clipPath:
                  "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
              }}
            >
              <img
                src={`/feature-2.svg`}
                className=" size-12 md:size-16 object-contain"
                alt="Feature Icon"
              />
            </div>
          </TravelPerfectionCard>
          <TravelPerfectionCard
            title={contentSections[2].title}
            description={contentSections[2].description}
            className=" "
          >
            <div
              className=" h-24 w-24 md:w-32 mx-auto md:h-32 bg-emerald-100 flex items-center justify-center"
              style={{
                clipPath:
                  "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
              }}
            >
              <img
                src={`/feature-3.svg`}
                className=" size-16 md:size-20 object-contain"
                alt="Feature Icon"
              />
            </div>
          </TravelPerfectionCard>
        </div>
      </div>
    </div>
  );
}

function TravelPerfectionCard({ children, title, description, className }) {
  return (
    <div
      className={cn(
        " bg-white shadow-md rounded-xl px-2 md:px-6 py-4 md:py-12",
        className
      )}
    >
      {children}
      <h3 className=" mt-4 md:mt-6 text-center text-lg md:text-2xl font-semibold">
        {title}
      </h3>
      <p className=" mt-2 text-sm md:mt-4 text-gray-400  text-center ">
        {description}
      </p>
    </div>
  );
}

function SubscribeNewsletter() {
  return (
    <div className="w-full max-w-7xl py-12 mx-auto px-4">
      <div
        className="  rounded-2xl flex items-center justify-center px-4  h-96"
        style={{
          backgroundImage: "url('./newsletter.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className=" -translate-y-12 xl:translate-x-24 flex flex-col items-center">
          <p className=" text-white  text-center font-bold max-w-lg w-full text-3xl md:text-4xl ">
            Subscribe newsletter $ get company news.
          </p>
          <div className=" bg-white py-1 px-1 justify-between w-full max-w-sm flex gap-2 rounded mt-6">
            <input
              type="text"
              placeholder="Enter your email"
              className=" pl-6 outline-none w-[60%]"
            />
            <button className=" bg-[#FF6B35] text-white py-3 px-6 rounded-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogSection() {
  return (
    <div className=" w-full max-w-7xl px-4 mx-auto flex flex-col items-center py-12 ">
      <h3 className=" text-lg text-emerald-600 italic mb-1 font-medium text-center">
        Our Blogs
      </h3>
      <h2 className=" font-playfair text-3xl font-bold mb-5">
        Travel Tips and Advice
      </h2>
      <p className=" text-gray-500 max-w-lg mb-8 text-center">
        Quick, practical tips and insights to help you make the most of your
        corporate trips — smarter travel, better experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BlogCard
          image="/blog-bg.jpg"
          date="07 Jan"
          heading="Top 10 Hidden Gems Around the World You Need to Visit"
          description="Discover a world beyond the popular tourist spots with our guide to the top 10 hidden gems that promise unique experiences."
          blogLink="/blog/hidden-gems"
        />
        <BlogCard
          image="/blog-bg.jpg"
          date="07 Jan"
          heading="Top 10 Hidden Gems Around the World You Need to Visit"
          description="Discover a world beyond the popular tourist spots with our guide to the top 10 hidden gems that promise unique experiences."
          blogLink="/blog/hidden-gems"
        />
      </div>
    </div>
  );
}
