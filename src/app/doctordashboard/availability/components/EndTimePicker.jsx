"use client";
import React from "react";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Controller } from "react-hook-form";

dayjs.extend(customParseFormat);

const EndTimePicker = ({ control }) => {
  return (
    <Controller
      name="endTime"
      control={control}
      rules={{ required: "End time is a required field" }}
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

export default EndTimePicker;
