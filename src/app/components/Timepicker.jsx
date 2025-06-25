"use client";
import React, { useState } from "react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export const Timepicker = ({ value, setValue }) => {
  // const [value, setValue] = useState(dayjs());
  // console.log("time//////", value);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        className="w-full "
        label="Pick a time"
        value={value}
        onChange={setValue}
        disablePast
      />
    </LocalizationProvider>
  );
};
