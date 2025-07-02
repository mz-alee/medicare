import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { Controller } from "react-hook-form";

  export const ScheduleDropdown = ({ control, errors }) => {
  return (
    <Box sx={{ minWidth: 240 }}>
      <FormControl fullWidth size="small">
        <InputLabel
          id={`${"day"}-label`}
          sx={{ fontSize: "12px", top: "-5px" }}
        >
          Day
        </InputLabel>

        <Controller
          name={"day"}
          control={control}
          rules={{ required: "Day is required" }}
          render={({ field }) => (
            <Select
              {...field}
              labelId={`${"day"}-label`}
              id={`${"day"}-select`}
              value={field.value || ""}
              label="Day"
              sx={{
                height: 30,
                fontSize: "10px",
                ".MuiSelect-select": {
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: { fontSize: "12px" },
                },
              }}
            >
              <MenuItem value="Monday">Monday</MenuItem>
              <MenuItem value="Tuesday">Tuesday</MenuItem>
              <MenuItem value="Wednesday">Wednesday</MenuItem>
              <MenuItem value="Thursday">Thursday</MenuItem>
              <MenuItem value="Friday">Friday</MenuItem>
              <MenuItem value="Saturday">Saturday</MenuItem>
              <MenuItem value="Sunday">Sunday</MenuItem>
            </Select>
          )}
        />
      </FormControl>
    </Box>
  );
};
