import React, { useEffect } from "react";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Controller } from "react-hook-form";

dayjs.extend(customParseFormat);

const StartTimePicker = ({ control, openTimer, setOpenTimer }) => {
  return (
    <div>
      <Controller
        name="startTime"
        control={control}
        rules={{ required: "Start time is required" }}
        render={({ field }) => (
          <TimePicker
            onClick={() => {
              console.log("click");
              setOpenTimer(true);
            }}
            {...field}
            className="w-full"
            use12Hours
            showSecond={false}
            inputReadOnly
            value={field.value ? dayjs(field.value, "hh:mm A") : null}
            onChange={(time, timeString) => {
              setOpenTimer(false );
              field.onChange(timeString);
            }}
            defaultOpenValue={dayjs("00:00", "HH:mm")}
            format="hh:mm A"
          />
        )}
      />
    </div>
  );
};

export default StartTimePicker;
