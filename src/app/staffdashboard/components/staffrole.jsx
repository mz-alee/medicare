import React from "react";

const StaffRole = () => {
  return (
    <div className="bg-[#fdf1eb] p-3 flex flex-col justify-center gap-2 capitalize rounded-2xl h-[30vh] w-[30vw]">
      <div>
        <h1 className="text-[12px] lg:text-[1vw] ">role</h1>
        <p className="text-[10px] lg:text-[0.8vw] text-gray-700">
          medical assistant
        </p>
      </div>
      <div>
        <h1 className="text-[12px] lg:text-[1vw] ">time</h1>
        <p className="text-[10px] lg:text-[0.8vw] text-gray-700">
          8:00am to 2:00pm
        </p>
      </div>
      <div>
        <h1 className="text-[12px] lg:text-[1vw] ">duty</h1>
        <p className="text-[10px] lg:text-[0.8vw] text-gray-700">
          Assist doctors in examinations and treatments Monitor patients’ vital
          signs and health conditions
        </p>
      </div>
    </div>
  );
};

export default StaffRole;
