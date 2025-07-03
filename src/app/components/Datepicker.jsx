import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { Controller } from "react-hook-form";
export const Datepicker = ({ setValue, value, refetch, control }) => {
  const handleChange = (e) => {
    // setValue;
    console.log("onchange date ////////", e.target.value);
  };
  console.log("date valueeeeeeeeee", value);
  return (
    <div className="w-full ">
      <Controller
        control={control}
        name="date"
        rules={{ required: "date is a required" }}
        render={({ field }) => {
          return (
            <DatePicker
              {...field}
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
          );
        }}
      />
    </div>
  );
};
