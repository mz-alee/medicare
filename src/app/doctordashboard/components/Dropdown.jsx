import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Dropdown = ({ data, role, setRole }) => {
  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 340 }}>
      <FormControl fullWidth size="small">
        <InputLabel
          id="demo-simple-select-label"
          sx={{ fontSize: "12px", top: "-5px" }}
        >
          Role
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Role"
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
                fontSize: "12px", // Dropdown menu item font size
              },
            },
          }}
        >
          <MenuItem value="Medical Assistant">Medical Assistant</MenuItem>
          <MenuItem value="Administrator">Administrator</MenuItem>
          <MenuItem value="Lab Technician">Lab Technician</MenuItem>
          <MenuItem value="Cleaner">Cleaner</MenuItem>
          <MenuItem value="Ward Nurse">Ward Nurse</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
