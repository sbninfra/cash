import Footer from "@/conponents/footer";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className=" w-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;

function Navbar() {
  return (
    <div className=" z-50 bg-white text-white  w-full  absolute top-0 left-1/2 -translate-x-1/2 py-2 md:py-5">
      <div className=" max-w-7xl mx-auto w-full px-4 flex justify-between items-center">
        <Link href="/">
          {/* <img src="/logo-white.png" className="w-32 h-auto" alt="logo" /> */}
          <img
            src="/logo-black.png"
            className=" w-24 md:w-32 h-auto"
            alt="logo"
          />
        </Link>
        <ul className=" hidden md:flex items-center bg-white/10 gap-4 py-4 px-4 rounded-3xl ">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                className=" bg-white/20 hover:bg-orange-700 duration-200 text-white px-3 text-lg font-medium py-2 rounded-3xl"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* <XIcon className=" text-black" /> */}
        <MenuIcon className=" text-black" />
      </div>
    </div>
  );
}

const menuItems = [
  { href: "/blog", label: "Blog" },
  { href: "/add-review", label: "Add Review" },
  { href: "/contact-us", label: "Contact" },
];
