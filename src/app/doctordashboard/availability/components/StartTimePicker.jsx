import React from "react";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Controller } from "react-hook-form";

dayjs.extend(customParseFormat);

const StartTimePicker = ({ control }) => {
  return (
    <Controller
      name="startTime"
      control={control}
      rules={{ required: "Start time is required" }}
      render={({ field }) => (
        <TimePicker
          {...field}
          className="w-[240px]"
          use12Hours
          showSecond={false}
          inputReadOnly
          value={field.value ? dayjs(field.value, "hh:mm A") : null}
          onChange={(time, timeString) => {
            field.onChange(timeString);
          }}
          defaultOpenValue={dayjs("00:00", "HH:mm")}
          format="hh:mm A"
        />
      )}
    />
  );
};

export default StartTimePicker;
