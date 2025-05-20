"use client";
import Input from "@/conponents/input";
import Textarea from "@/conponents/textArea";
import { useState } from "react";

function TripContactFrom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className=" py-6 px-4 md:px-6 rounded-2xl h-fit bg-green-50 ring-2 ring-green-700/20 w-full md:max-w-sm flex flex-col gap-4">
      <h3 className=" text-3xl text-center font-semibold">Book Your Trip</h3>
      <p className=" text-center">
        Travel is less about the destination and more about the memories made
        along the way.
      </p>
      <Input
        title={"Name"}
        placeholder="Enter full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        title={"Email"}
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        title={"Address"}
        placeholder="Enter Your Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Input
        title={"Mobile"}
        placeholder="Enter Your Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <Textarea
        title="Message"
        placeholder="Enter Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <SubmitButton />
    </div>
  );
}

export default TripContactFrom;

function SubmitButton() {
  return (
    <div className=" w-full font-semibold text-lg cursor-pointer text-center py-2 px-4 rounded-full bg-primary  hover:!bg-orange-700 duration-200 text-white">
      Send Message
    </div>
  );
}
