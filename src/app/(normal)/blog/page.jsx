import BlogCard from "@/conponents/blogCard";
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
