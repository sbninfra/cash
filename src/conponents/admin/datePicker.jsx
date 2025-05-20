import { DatePicker } from "@/components/datePicker";
import { cn } from "@/lib/utils";
import React from "react";

const TitleDatepicker = ({ title, value, onChange, className }) => {
  return (
    <div className={cn(" w-full flex flex-col gap-1", className)}>
      <p className=" font-medium">{title}</p>
      <DatePicker />
    </div>
  );
};

export default TitleDatepicker;
