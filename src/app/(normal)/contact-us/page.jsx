"use client";
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
          <div className=" flex flex-col md:flex-row gap-6 items-center">
            <Input title={"Name"} placeholder="Enter full name" />
            <Input title={"Email"} placeholder="Email" />
          </div>
          <div className=" flex flex-col md:flex-row gap-6 items-center">
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
