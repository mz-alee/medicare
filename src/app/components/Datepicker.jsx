import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
export const Datepicker = ({ setValue, value, refetch }) => {
  const handleChange = (e) => {
    // setValue;
    console.log("onchange date ////////", e.target.value);
  };
  console.log("date valueeeeeeeeee", value);
  return (
    <div className="w-full ">
      <DatePicker
        clearIcon={false}
        minDate={new Date()}
        className=" w-full"
        onChange={(e) => {
          setValue(moment(e).format("YYYY-MM-DD"));
          setTimeout(() => {
            refetch();
          }, 100);
        }}
        value={value}
      />
    </div>
  );
};
