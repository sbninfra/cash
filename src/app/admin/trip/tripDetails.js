"use client";
import Input from "@/conponents/input";
import Textarea from "@/conponents/textArea";
import { Switch } from "antd";
import { PlusIcon, XIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";

const TripDetails = ({ tripData }) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [includes, setIncludes] = React.useState([]);
  const [itinary, setItinary] = React.useState([]);
  const [dates, setDates] = React.useState([]);
  const [images, setImages] = React.useState([]);
  const [bannerImage, setBannerImage] = React.useState("");
  const [isFlightIncluded, setIsFlightIncluded] = React.useState(false);

  const [hotelId, setHotelId] = React.useState("");
  return (
    <div className=" w-full max-w-3xl mx-auto flex flex-col gap-6">
      <Input
        title="Name"
        placeholder="Enter trip name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        title="Description"
        placeholder="Enter trip description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <InputArray
        title="Includes"
        placeholder="Enter trip includes"
        value={includes}
        onChangehandler={setIncludes}
      />
      <InputArray
        title="Itinary"
        placeholder="Enter trip itinary"
        value={itinary}
        onChangehandler={setItinary}
      />
      <InputArray
        title="Dates"
        placeholder="Enter trip dates"
        value={dates}
        onChangehandler={setDates}
      />
      <CustomSwitch
        title={"Is Flight"}
        value={isFlightIncluded}
        onChange={() => setIsFlightIncluded((prev) => !prev)}
      />
      <BannerImage bannerImage={bannerImage} setBannerImage={setBannerImage} />
      <Images images={images} setImages={setImages} />

      {/* Hotel selectin is remaining */}
    </div>
  );
};

export default TripDetails;

function InputArray({ title, placeholder, value, onChangehandler }) {
  const [text, setText] = React.useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter" && text != "") {
      onChangehandler((prev) => [text, ...prev]);
      setText("");
    }
  }

  function handleRemoveItem(item) {
    onChangehandler((prev) => prev.filter((data) => data !== item));
  }

  return (
    <div className=" w-full flex flex-col gap-1.5">
      <p>
        {title} <span className=" text-sm text-gray-400 pl-1">[array]</span>{" "}
      </p>
      <input
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border py-1.5 px-2 rounded"
      />
      <div className=" flex flex-col gap-1 px-2">
        {value.map((item, idx) => {
          return (
            <div
              key={idx}
              className=" border-b pb-0.5 flex items-center justify-between w-full"
            >
              <p>{item}</p>
              <XIcon
                onClick={() => handleRemoveItem(item)}
                className=" cursor-pointer"
                size={18}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
function CustomSwitch({ title, value, onChange }) {
  return (
    <div className=" w-full flex flex-col gap-1.5">
      <p>{title}</p>
      <Switch value={value} onChange={onChange} className=" w-fit" />
    </div>
  );
}

function BannerImage({ bannerImage, setBannerImage }) {
  const inputRef = useRef(null);

  function handleInputImage() {
    inputRef.current.click();
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBannerImage(imageUrl);
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      <p>Banner Image</p>

      {bannerImage && bannerImage !== "" ? (
        <div className="relative size-24">
          <img
            src={bannerImage}
            alt="Banner"
            className="w-full h-full object-cover rounded"
          />
          <XIcon
            onClick={() => setBannerImage("")}
            className=" absolute -top-1 -right-1 border cursor-pointer bg-white rounded-full"
          />
        </div>
      ) : (
        <div
          onClick={handleInputImage}
          className="size-24 flex items-center justify-center border-2 border-dashed rounded cursor-pointer"
        >
          <PlusIcon />
        </div>
      )}

      {/* Hidden input for file upload */}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
function Images({ images, setImages }) {
  const inputRef = useRef(null);

  function handleInputImage() {
    inputRef.current.click();
  }

  function handleFileChange(e) {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  }

  function handleRemoveImage(index) {
    setImages((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="flex flex-col gap-2">
      <p>Trip Images</p>

      <div className="flex flex-wrap gap-2">
        {/* Loop through all images */}
        {images.map((img, index) => (
          <div key={index} className="relative size-24">
            <img
              src={img}
              alt={`Banner ${index}`}
              className="w-full h-full object-cover rounded"
            />
            <XIcon
              onClick={() => handleRemoveImage(index)}
              className="absolute -top-1 -right-1 border cursor-pointer bg-white rounded-full size-5 p-0.5"
            />
          </div>
        ))}

        {/* Upload box */}
        <div
          onClick={handleInputImage}
          className="size-24 flex items-center justify-center border-2 border-dashed rounded cursor-pointer"
        >
          <PlusIcon />
        </div>
      </div>

      {/* Hidden input for file upload */}
      <input
        type="file"
        accept="image/*"
        multiple
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
