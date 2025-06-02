"use client";
import Input from "@/conponents/input";
import Textarea from "@/conponents/textArea";
import { Switch } from "antd";
import { PlusIcon, Trash2, XIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";

const TripDetails = ({ tripData }) => {
  const [cTripDetails, setCTripDetails] = React.useState({
    id: "", //
    title: "", //
    description: "", //
    slug: "", //
    dates: [], //
    isFlightIncluded: false, //
    images: [],
    bannerImage: "",
    includes: [], //
    notes: [], //
    itinary: [], //
    itinaryDescription: "", //
    isVisible: true,

    //hotel details
    hotelData: [
      {
        hotelName: "", //
        hotelImage: "",
        hotelRating: "", //
        hotelLocation: "", //
        hotelDescription: "", //
      },
    ],
  });

  useEffect(() => {
    console.log(cTripDetails);
  }, [cTripDetails]);
  return (
    <div className=" w-full max-w-3xl mx-auto flex flex-col gap-6">
      <Input
        title="Title"
        placeholder="Enter trip title"
        value={cTripDetails.title}
        onChange={(e) =>
          setCTripDetails({ ...cTripDetails, title: e.target.value })
        }
      />
      <Textarea
        title="Description"
        placeholder="Enter trip description"
        value={cTripDetails.description}
        onChange={(e) =>
          setCTripDetails({ ...cTripDetails, description: e.target.value })
        }
      />
      <div className=" w-full flex gap-6 ">
        <InputArray
          title="Dates"
          placeholder="Enter trip dates"
          value={cTripDetails.dates}
          onChangehandler={(value) => {
            console.log(value);
            setCTripDetails({ ...cTripDetails, dates: value });
          }}
        />

        <InputArray
          title="Includes"
          placeholder="Enter trip includes"
          value={cTripDetails.includes}
          onChangehandler={(value) => {
            setCTripDetails({ ...cTripDetails, includes: value });
          }}
        />
      </div>
      <div className=" w-full flex gap-6 ">
        <InputArray
          title="Itinary"
          placeholder="Enter trip itinary"
          value={cTripDetails.itinary}
          onChangehandler={(value) => {
            setCTripDetails({ ...cTripDetails, itinary: value });
          }}
        />

        <InputArray
          title="Notes"
          placeholder="Enter trip notes"
          value={cTripDetails.notes}
          onChangehandler={(value) => {
            setCTripDetails({ ...cTripDetails, notes: value });
          }}
        />
      </div>

      <Textarea
        title="Itinary Description"
        placeholder="Enter trip itinary description"
        value={cTripDetails.itinaryDescription}
        onChange={(e) =>
          setCTripDetails({
            ...cTripDetails,
            itinaryDescription: e.target.value,
          })
        }
      />

      <CustomSwitch
        title={"Is Flight"}
        value={cTripDetails.isFlightIncluded}
        onChange={() =>
          setCTripDetails({
            ...cTripDetails,
            isFlightIncluded: !cTripDetails.isFlightIncluded,
          })
        }
      />

      {/* #################################################################### */}
      {/* #################################################################### */}
      <BannerImage
        bannerImage={cTripDetails.bannerImage}
        setBannerImage={(value) =>
          setCTripDetails({ ...cTripDetails, bannerImage: value })
        }
      />
      <Images
        images={cTripDetails.images}
        setImages={(value) =>
          setCTripDetails({ ...cTripDetails, images: value })
        }
      />
      {/* #################################################################### */}
      {/* #################################################################### */}

      {/* Hotel selectin is remaining */}

      {cTripDetails?.hotelData?.map((hotel, idx) => {
        function removeCurrentHotel() {
          setCTripDetails((prev) => ({
            ...prev,
            hotelData: prev.hotelData.filter((item, index) => index !== idx),
          }));
        }
        return (
          <>
            <div className=" border-t-2 flex justify-between items-center gap-6 py-3 w-full">
              <p>Hotel {idx + 1}</p>
              <Trash2 onClick={removeCurrentHotel} size={20} color="red" />
            </div>
            <div className=" flex gap-6 w-full">
              <Input
                title={`Hotel Name`}
                placeholder={`Enter hotel Name`}
                value={hotel.hotelName}
                onChange={(e) =>
                  setCTripDetails((prev) => ({
                    ...prev,
                    hotelData: prev.hotelData.map((item, index) => {
                      if (index === idx) {
                        return {
                          ...item,
                          hotelName: e.target.value,
                        };
                      }
                      return item;
                    }),
                  }))
                }
              />
              <Input
                title={`Hotel location`}
                placeholder={`Enter hotel Location`}
                value={hotel.hotelLocation}
                onChange={(e) =>
                  setCTripDetails((prev) => ({
                    ...prev,
                    hotelData: prev.hotelData.map((item, index) => {
                      if (index === idx) {
                        return {
                          ...item,
                          hotelLocation: e.target.value,
                        };
                      }
                      return item;
                    }),
                  }))
                }
              />
            </div>
            <Textarea
              title="Hotel Description"
              placeholder="Enter trip Hotel description"
              value={hotel.hotelDescription}
              onChange={(e) =>
                setCTripDetails((prev) => ({
                  ...prev,
                  hotelData: prev.hotelData.map((item, index) => {
                    if (index === idx) {
                      return {
                        ...item,
                        hotelDescription: e.target.value,
                      };
                    }
                    return item;
                  }),
                }))
              }
            />
            <Input
              type="number"
              title={`Hotel Rating`}
              placeholder={`Enter hotel rating`}
              value={hotel.hotelRating}
              onChange={(e) =>
                setCTripDetails((prev) => ({
                  ...prev,
                  hotelData: prev.hotelData.map((item, index) => {
                    if (index === idx) {
                      return {
                        ...item,
                        hotelRating: e.target.value,
                      };
                    }
                    return item;
                  }),
                }))
              }
            />
          </>
        );
      })}

      <div className=" py-2 px-4 bg-green-400 rounded">Add new hotel</div>
    </div>
  );
};

export default TripDetails;

function InputArray({ title, placeholder, value = [], onChangehandler }) {
  const [text, setText] = React.useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter" && text != "") {
      const newData = [...value, text];
      onChangehandler(newData);
      setText("");
    }
  }

  function handleRemoveItem(idx) {
    const newData = value.filter((_, fIdx) => fIdx !== idx);
    onChangehandler(newData);
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
                onClick={() => handleRemoveItem(idx)}
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
