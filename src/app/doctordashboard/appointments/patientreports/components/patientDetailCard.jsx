import React from "react";

const PatientDetailCard = () => {
  return (
    <div className="w-full sm:w-[45vw] h-[150px] lg:min-h-[25vh] bg-white  rounded-2xl p-3  flex flex-col gap-2  items-center">
      <div className="w-full">
        <h1 className='text-gray-600'>sumath tinson</h1>
      </div>
      <div className="w-full flex items-center capitalize flex-wrap gap-2">
        <div className="border-l border-gray-400 h-10 px-2 ">
          <p className="text-[12px] lg:text-[0.9vw] text-gray-600">
            Date:{" "}
            <span className="text-[20px] lg:text-[1.3vw] text-gray-600">
              5/12/2025
            </span>
          </p>
        </div>
        <div className="border-l border-gray-400 h-10 px-2 ">
          <p className="text-[12px] lg:text-[0.9vw] text-gray-600">
            Martial Status:
            <span className="text-[20px] lg:text-[1.3vw] text-gray-600">
              Single
            </span>
          </p>
        </div>
        <div className="border-l border-gray-400 h-10 px-2 ">
          <p className="text-[12px] lg:text-[0.9vw] text-gray-600">
            gender:
            <span className="text-[20px] lg:text-[1.3vw] text-gray-600">
              Male
            </span>
          </p>
        </div>
        <div className="border-l border-gray-400 h-10 px-2 ">
          <p className="text-[12px] lg:text-[0.9vw] text-gray-600">
            age:
            <span className="text-[20px] lg:text-[1.3vw] text-gray-600">
              23
            </span>
          </p>
        </div>
        <div className="border-l border-gray-400 h-10 px-2 ">
          <p className="text-[12px] lg:text-[0.9vw] text-gray-600">
            height:
            <span className="text-[20px] lg:text-[1.3vw] text-gray-600">
              5.5
            </span>
          </p>
        </div>
        <div className="border-l border-gray-400 h-10 px-2 ">
          <p className="text-[12px] lg:text-[0.9vw] text-gray-600">
            weight:
            <span className="text-[20px] lg:text-[1.3vw] text-gray-600">
              65
            </span>
          </p>
        </div>
        <div className="border-l border-gray-400 h-10 px-2 ">
          <p className="text-[12px] lg:text-[0.9vw] text-gray-600">
            blood group:
            <span className="text-[20px] lg:text-[1.3vw] text-gray-600">
              o+
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailCard;
