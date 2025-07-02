import React, { useState } from "react";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";
const TimerangePicker = ({ timeValue, setTimeValue }) => {
  return (
    <div className="w-full ">
      <TimeRangePicker
        onChange={setTimeValue}
        className="w-full "
        value={timeValue}
      />
    </div>
  );
};

export default TimerangePicker;
