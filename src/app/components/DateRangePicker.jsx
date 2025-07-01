import React, { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
function MyApp() {
  const [value, setValue] = useState([new Date(), new Date()]);

  return (
    <div>
      <DateRangePicker onChange={setValue} value={value} />
    </div>
  );
}

export default MyApp;
