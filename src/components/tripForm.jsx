import Input from "@/conponents/input";
import Textarea from "@/conponents/textArea";
import { useEffect, useState } from "react";
import { InputArray } from "./inputArray";
import { CustomSwitch } from "./customSwitch";
import { BannerImage } from "./bannerImage";
import { Images } from "./imagesInput";
import { Trash2 } from "lucide-react";
import { randomUUID } from "crypto";
import { v4 as uuidv4 } from "uuid";

export const TripForm = ({ tripData }) => {
  const [cTripDetails, setCTripDetails] = useState({
    isNew: tripData?.id ? false : true,
    id: tripData?.id || uuidv4(),
    title: tripData?.title || "",
    description: tripData?.description || "",
    slug: tripData?.slug || "",
    dates: tripData?.dates || [],
    isFlightIncluded: tripData?.isFlightIncluded || false,
    isVisible: tripData?.isVisible || true,
    images: tripData?.images || [],
    bannerImage: tripData?.bannerImage || "",
    includes: tripData?.includes || [],
    notes: tripData?.notes || [],
    itinary: tripData?.itinary || [],
    itinaryDescription: tripData?.itinaryDescription || "",
    isVisible: tripData?.isVisible || true,

    //hotel details
    hotelData: tripData?.hotelData || [
      {
        hotelName: "",
        hotelImage: "",
        hotelRating: "",
        hotelLocation: "",
        hotelDescription: "",
      },
    ],
  });

  useEffect(() => {
    console.log(cTripDetails);
  }, [cTripDetails]);

  return (
    <div className=" w-full  flex flex-col gap-6">
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

      <div className=" flex gap-4 ">
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
        <CustomSwitch
          title={"Is Visible"}
          value={cTripDetails.isVisible}
          onChange={() =>
            setCTripDetails({
              ...cTripDetails,
              isVisible: !cTripDetails.isVisible,
            })
          }
        />
      </div>

      {/* #################################################################### */}
      {/* #################################################################### */}
      <BannerImage
        name="bannerImage"
        id={cTripDetails.id}
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
