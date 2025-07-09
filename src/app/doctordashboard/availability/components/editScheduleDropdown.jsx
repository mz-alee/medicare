import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const EditScheduleDropdown = ({
  data,
  day,
  selectedDay,
  setSelectedDay,
}) => {
  const handleChange = (event) => {
    setDay(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 273 }}>
      <FormControl fullWidth size="small">
        <InputLabel
          id="demo-simple-select-label"
          sx={{ fontSize: "12px", top: "-5px" }}
        >
          {day || "day"}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // defaultValue="sunday"
          value={day}
          label={day}
          onChange={handleChange}
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
              sx: {
                fontSize: "12px",
              },
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
      </FormControl>
    </Box>
  );
};
