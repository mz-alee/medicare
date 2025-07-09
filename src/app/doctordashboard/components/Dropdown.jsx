import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";

export const Dropdown = ({ control }) => {
  return (
    <Box sx={{ minWidth: 340 }}>
      <FormControl fullWidth size="small">
        <InputLabel
          id="role-select-label"
          sx={{ fontSize: "12px", top: "-5px" }}
        >
          Role
        </InputLabel>

        <Controller
          name="staff_role"
          control={control}
          rules={{ required: "Select the role first" }}
          render={({ field }) => (
            <Select
              {...field}
              labelId="role-select-label"
              id="role-select"
              label="Role"
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
              <MenuItem value="Medical Assistant">Medical Assistant</MenuItem>
              <MenuItem value="Administrator">Administrator</MenuItem>
              <MenuItem value="Lab Technician">Lab Technician</MenuItem>
              <MenuItem value="Cleaner">Cleaner</MenuItem>
              <MenuItem value="Ward Nurse">Ward Nurse</MenuItem>
            </Select>
          )}
        />
      </FormControl>
    </Box>
  );
};
