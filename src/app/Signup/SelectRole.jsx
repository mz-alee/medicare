import React, { useState } from "react";

const SelectRole = ({ setPageNum, pageNum, setValue }) => {
  const [selected, setSelected] = useState(null);
  const btnJson = ["doctor", "therapist", "staff", "patient"];

  const handleSelect = (text, index) => {
    setValue("select_role", text);
    setSelected(index);
    setPageNum(pageNum + 1);
    console.log("Selected:", index);
  };

  return (
    <div className="text-white flex flex-col justify-center items-center gap-10">
      <h1 className="border-b border-white pb-2 w-50 md:w-[20vw] text-center capitalize font-[400] text-[20px]">
        select your role
      </h1>
      <div className="bg-white flex flex-col justify-center items-center rounded-2xl w-70 h-70 md:h-[50vh] md:w-[30vw]">
        {btnJson.map((item, index) => (
          <div className="w-full px-12" key={index}>
            <button
              onClick={() => handleSelect(item, index)}
              className={`${
                selected === index ? "bg-[#192525]" : "bg-[#417978]"
              } hover:bg-[#205454] my-2 capitalize w-full py-1 md:py-2 rounded-3xl cursor-pointer`}
            >
              {item}
            </button>
          </div>
        ))}
      </div>
      <div className="w-full  flex justify-end px-2">
        <button className="bg-[#417978] rounded-2xl px-4 py-1">Next</button>
      </div>
    </div>
  );
};

export default SelectRole;
