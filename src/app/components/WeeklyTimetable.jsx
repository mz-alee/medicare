import Image from "next/image";
import React from "react";
import plusBg from "../../../public/Images/plus.png";
const WeeklyTimetable = () => {
  return (
    <div  className="border rounded-lg  relative border-[#417978]  lg:h-[70vh] w-full md:w-[30vw] gap-4 flex flex-col items-center capitalize py-2 justify-between  px-6">
      <div className=" hidden md:flex absolute   flex-col items-end gap-3 left-2 top-2">
        <Image className=" w-8  " src={plusBg} alt="plus bg" />
        <Image className=" w-6   ml-3" src={plusBg} alt="plus bg" />
      </div>
      <h1 className="text-[#205454] border-b font-[600] uppercase border-[#417978] text-md md:text-[1.5vw] italic mb-2 w-fit">
        weekly timetable
      </h1>
      {Array.from({ length: 6 }, (_, i) => i + 1).map((items, index) => {
        return (
          <div key={index} className="border-dashed border-b-1 pb-1  text-[12px] md:text-[1vw] border-gray-300 flex justify-between w-full ">
            <h1>monday</h1>
            <p>9:00am-4:00pm</p>
          </div>
        );
      })}
      <button className="border text-[12px] md:text-[0.8vw] border-[#417978] text-black w-fit hover:bg-[#417978] hover:text-[#ffff] rounded-full px-5 py-2">
        Register Now
      </button>
    </div>
  );
};

export default WeeklyTimetable;
