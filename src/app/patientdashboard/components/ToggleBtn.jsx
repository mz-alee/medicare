import React, { useState } from "react";
import Switch from "react-switch";

const ToggleBtn = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <div className="example">
      <label htmlFor="material-switch">
        <Switch
          checked={checked}
          onChange={handleChange}
          onColor="#41797a"
          handleDiameter={20}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={40}
          className="react-switch"
          id="material-switch"
        />
      </label>
    </div>
  );
};

export default ToggleBtn;
