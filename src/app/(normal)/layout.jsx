"use client";
import Footer from "@/conponents/footer";
import React, { useState } from "react";

import * as motion from "motion/react-client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { label: "Packages", href: "/#package" },
    { label: "Blogs", href: "/blog" },
    { label: "Add Review", href: "/add-review" },
    // { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="z-50 sticky w-full  top-0  py-3 md:py-3 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img
            src="/logo-black.png"
            className="h-12 md:h-16 w-auto"
            alt="logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4   rounded-full">
          {menuItems.map((item, index) => (
            <li key={index}>
              <ShowDesktopLink item={item} />
            </li>
          ))}
        </ul>
        <ContactUsBtn className={"hidden md:block"} />

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden   mt-2 px-4 py-4 space-y-2 rounded-b-xl"
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded-full text-center hover:bg-orange-600 text-black hover:text-white transition font-medium"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <ContactUsBtn />
        </motion.ul>
      )}
    </header>
  );
}

function ShowDesktopLink({ item }) {
  return (
    <Link className=" !overflow-hidden group" href={item.href}>
      <motion.p className=" group-hover:text-orange-600 duration-200  px-3 font-medium">
        {item.label}
      </motion.p>
      <div className=" h-full w-full overflow-hidden">
        <div className=" group-hover:translate-x-0 duration-200  -translate-x-[110%] w-full h-1 bg-orange-600"></div>
      </div>
    </Link>
  );
}

function ContactUsBtn({ className }) {
  return (
    <Link href={"/contact-us"}>
      <div
        className={cn(
          " py-2 px-4 text-center bg-orange-600 rounded text-white hover:text-orange-600 hover:ring-2 hover:bg-white font-semibold duration-200 ring-orange-600 cursor-pointer",
          className
        )}
      >
        Contact Us
      </div>
    </Link>
  );
}

// import Footer from "@/conponents/footer";
// import { MenuIcon, XIcon } from "lucide-react";
// import Link from "next/link";
// import React from "react";

// const layout = ({ children }) => {
//   return (
//     <div className=" w-full">
//       <Navbar />
//       {children}
//       <Footer />
//     </div>
//   );
// };

// export default layout;

// function Navbar() {
//   return (
//     <div className=" z-50 bg-white text-white  w-full  absolute top-0 left-1/2 -translate-x-1/2 py-2 md:py-5">
//       <div className=" max-w-7xl mx-auto w-full px-4 flex justify-between items-center">
//         <Link href="/">
//           {/* <img src="/logo-white.png" className="w-32 h-auto" alt="logo" /> */}
//           <img
//             src="/logo-black.png"
//             className=" w-24 md:w-32 h-auto"
//             alt="logo"
//           />
//         </Link>
//         <ul className=" hidden md:flex items-center bg-white/10 gap-4 py-4 px-4 rounded-3xl ">
//           {menuItems.map((item, index) => (
//             <li key={index}>
//               <Link
//                 className=" bg-white/20 hover:bg-orange-700 duration-200 text-white px-3 text-lg font-medium py-2 rounded-3xl"
//                 href={item.href}
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* <XIcon className=" text-black" /> */}
//         <MenuIcon className=" text-black" />
//       </div>
//     </div>
//   );
// }

// const menuItems = [
//   { href: "/blog", label: "Blog" },
//   { href: "/add-review", label: "Add Review" },
//   { href: "/contact-us", label: "Contact" },
// ];
