import React from "react";

const StaffRole = ({ data }) => {
  return (
    <div className="bg-[#fdf1eb] p-3 flex flex-col justify-center gap-2 capitalize rounded-2xl h-[30vh] w-full sm:w-[33vw] sm:h-[315px]    md:w-[20vw] md:h-[300px] lg:h-[180px] xl:w-[30vw] xl:h-[30vh] lg:w-[23vw]">
      <div>
        <h1 className="text-[12px] lg:text-[1vw] italic ">role</h1>
        <p className="text-[10px] lg:text-[0.8vw] text-gray-700">
          {data?.data?.staff_info?.role || "nulL"}
        </p>
      </div>
      <div>
        <h1 className="text-[12px] lg:text-[1vw] italic ">time</h1>
        <p className="text-[10px] lg:text-[0.8vw] text-gray-700">
          {data?.data?.staff_info?.time || "null"}
        </p>
      </div>
      <div>
        <h1 className="text-[12px] lg:text-[1vw] italic  ">duty</h1>
        <p className="text-[10px] lg:text-[0.8vw] text-gray-700">
          {data?.data?.staff_info?.duty || "null"}
        </p>
      </div>
    </div>
  );
};

export default StaffRole;
