import HeroBG from "@/conponents/tripHero";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <HeroBG text="Blog" img={"./blog-bg.jpg"} />
      <div className=" flex flex-col justify-center items-center px-4  py-12">
        <h1 className=" text-2xl text-center md:text-4xl font-semibold   mb-6">
          Explore the World: Travel Tips, Stories, and Adventures
        </h1>
        <p className="md:text-lg   max-w-2xl text-center mb-8">
          Discover exciting travel destinations, expert tips, and unforgettable
          experiences. Our blog takes you on a journey around the globe,
          offering valuable insights on everything from hidden gems to must-see
          landmarks.
        </p>
      </div>
      <Blogs />
    </div>
  );
};

export default Page;

function Blogs() {
  return (
    <div className=" w-full max-w-7xl px-4 mx-auto pb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
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
  );
}

const BlogCard = ({ image, date, heading, description, blogLink }) => {
  return (
    <div className="bg-[#e8f3ee] h-full rounded-2xl p-4 sm:p-6 w-full space-y-6  shadow-md">
      <div className="relative h-60 rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={heading}
          className=" w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white text-black text-sm font-semibold px-3 py-1 rounded-full shadow">
          {date}
        </div>
      </div>
      <Link href={blogLink} className="text-3xl font-semibold">
        {heading}
      </Link>
      <p className="text-lg text-gray-700 mb-4">{description}</p>
      <Link
        href={blogLink}
        className="inline-flex gap-3 group items-center bg-green-950   transition-all hover:bg-green-900 duration-200 text-white text-lg font-medium px-6 py-3 rounded-full"
      >
        Read More
        <ArrowRight
          color="white"
          className=" group-hover:-rotate-45 duration-200"
        />
      </Link>
    </div>
  );
};
