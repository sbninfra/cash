import Input from "@/conponents/input";
import SubmitButton from "@/conponents/submitButton";
import Textarea from "@/conponents/textArea";
import HeroBG from "@/conponents/tripHero";
import { Checkbox } from "antd";
import { ArrowUpRight, Mail, PhoneIcon } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className=" space-y-8">
      <HeroBG text="Contact Us" img={"./contact-us.jpg"} />
      <Contacts />
      <ContactForm />
    </div>
  );
};

export default Page;

function Contacts() {
  return (
    <div className=" w-full flex-col sm:flex-row max-w-7xl mx-auto p-4 flex items-center justify-center gap-4">
      <div className=" h-full w-full sm:max-w-lg items-center bg-[#f6efe6] px-6 py-12 rounded-2xl flex flex-col gap-4 ">
        <div className=" bg-white p-4 rounded-full w-fit">
          <PhoneIcon className="w-9 h-9" fill="#084d2b" stroke="#084d2b" />
        </div>
        <p className=" text-4xl font-semibold">Phone Number</p>
        <div className=" space-y-2">
          <p className=" text-lg">+916239565852</p>
          <p className=" text-lg">+916239565852</p>
        </div>
      </div>
      <div className=" h-full w-full sm:max-w-lg items-center bg-[#f6efe6] px-6 py-12 rounded-2xl flex flex-col gap-4 ">
        <div className=" bg-white p-4 rounded-full w-fit">
          <Mail className="w-9 h-9" fill="#084d2b" stroke="white" />
        </div>
        <p className=" text-4xl font-semibold">Email Address</p>
        <div className=" space-y-2">
          <p className=" text-lg">email@gmail.com</p>
          <p className=" text-lg">email@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

// function ContactForm() {
//   return (
//     <div
//       className=" px-4 my-20 w-full"
//       style={{
//         backgroundImage: "url('./contact-form-bg.jpg')",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className=" max-w-7xl w-full flex-col md:flex-row px-1 md:px-4 mx-auto flex gap-4 py-6 md:py-0 items-center justify-between">
//         <div className="">
//           <p className=" text-5xl text-white font-semibold sm:max-w-sm leading-14 md:leading-16 ">
//             Your Gateway to Hassle-Free Travel.
//           </p>
//           <div className=" bg-green-200 w-fit flex items-center gap-2 mt-6 rounded-full px-6 py-2">
//             <p className=" text-lg ">Explore All Trips</p>
//             <ArrowUpRight className="w-6 h-6" />
//           </div>
//         </div>
//         <div className=" bg-sky-100 w-full md:w-fit mt-6 md:-my-6 rounded-2xl p-6 flex flex-col gap-4">
//           <p className=" text-3xl font-semibold">Fill the form below</p>
//           <div className=" flex flex-col gap-4 md:flex-row">
//             get in touch
//             <Input title={"Email"} placeholder="Email" />
//           </div>
//           <div className=" flex flex-col gap-4 md:flex-row">
//             <Input title={"Phone"} placeholder="Phone" />
//             <Input title={"Location"} placeholder="Location" />
//           </div>
//           <Textarea title={"Message"} placeholder="Message" />
//           <div className=" flex gap-2 items-center">
//             {/* <input type="checkbox" className=" size-4.5" /> */}
//             <Checkbox />
//             <p>I agree to the Privacy Policy</p>
//           </div>
//           <SubmitButton />
//         </div>
//       </div>
//     </div>
//   );
// }

function ContactForm() {
  return (
    <div className=" px-6 py-12 w-full">
      <div className=" max-w-5xl mx-auto w-full shadow-md py-10 border border-gray-100 px-12 flex flex-col">
        <h3 className=" text-lg text-emerald-600 italic mb-2 font-medium text-center">
          Contact Us
        </h3>
        <h2 className="mb-6 text-center text-5xl font-medium font-playfair">
          get in touch
        </h2>
        <p className=" text-center mb-12 text-gray-600">
          We are at your door disposal 7 days a week
        </p>
        <div className=" flex flex-col gap-4 w-full">
          <div className=" flex gap-6 items-center">
            <Input title={"Name"} placeholder="Enter full name" />
            <Input title={"Email"} placeholder="Email" />
          </div>
          <div className=" flex gap-6 items-center">
            <Input title={"Phone"} placeholder="Enter your phone number" />
            <Input title={"Location"} placeholder="Enter your location" />
          </div>
          <Textarea title={"Message"} placeholder="Message" />

          <div className=" mt-4 w-full">
            <SubmitButton className=" ml-auto w-fit" />
          </div>
        </div>
      </div>
    </div>
  );
}
