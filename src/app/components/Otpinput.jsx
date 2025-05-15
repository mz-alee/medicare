import React, { useState } from "react";
import OTPInput from "react-otp-input";

export default function Otpinput({ setValue, register }) {
  const [otp, setOtp] = useState("");
  setValue("token", otp);

  return (
    <OTPInput
      inputStyle={{
        width: "2.5rem",
        height: "2.5rem",
        margin: "0 0.5rem",
        fontSize: "1.5rem",
        borderRadius: "4px",
        border: "1px solid #ced4da",
        borderBottom: "2px solid #1e3837",
        outline:'none'
      }}
      
      value={otp}
      onChange={setOtp}
      numInputs={5}
      // renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props}  />}
    />
  );
}
