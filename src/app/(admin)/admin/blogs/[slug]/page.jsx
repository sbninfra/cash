import TiptapEditor from "@/conponents/Editro";
import { getBlogBySlug } from "lib";
import React from "react";

const Page = async ({ params }) => {
  const slug = (await params).slug;
  const [blogData] = await getBlogBySlug(slug);
  return (
    <div className="mx-auto max-w-7xl px-4 pt-28">
      <TiptapEditor data={blogData} />
    </div>
  );
};

export default Page;
