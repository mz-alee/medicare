import React from "react";
import { BsGenderFemale } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
const BasicInformation = () => {
  return (
    <div className="w-full md:w-[35vw] xl:w-[17vw] bg-white h-[45vh] flex flex-col gap-1 rounded-2xl p-4">
      <h1 className="heading italic font-[400] ">basic information</h1>
      <div className=" h-60  flex flex-col  gap-3 justify-center  xl:h-[40vh]">
        {/* details  */}
        <div>
          <div className="flex items-center gap-2">
            <BsGenderFemale />
            <div>
              <h1 className="capitalize text-gray-500 text-[12px] font-[500] lg:text-[0.9vw]">
                gender
              </h1>
              <h3 className="capitalize text-gray-900 text-[11px] lg:text-[0.8vw">
                {" "}
                male
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <CiCalendarDate  />
            <div>
              <h1 className="capitalize text-gray-500 text-[12px] font-[500] lg:text-[0.9vw]">
                date of birth
              </h1>
              <h3 className="capitalize text-gray-900 text-[11px] lg:text-[0.8vw">
                12/02/2022
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <CiPhone  />
            <div>
              <h1 className="capitalize text-gray-500 text-[12px] font-[500] lg:text-[0.9vw]">
                phone number
              </h1>
              <h3 className="capitalize text-gray-900 text-[11px] lg:text-[0.8vw">
                {" "}
                0323104939
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <MdOutlineEmail />
            <div>
              <h1 className="capitalize text-gray-500 text-[12px] font-[500] lg:text-[0.9vw]">
                email
              </h1>
              <h3 className=" text-gray-900 text-[11px] lg:text-[0.8vw">
                email@gmail.com
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
