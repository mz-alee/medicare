import React from "react";
import { BsGenderFemale } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import physicalimage from "../../../../public/Images/patientImages/physicalCard.svg";
import Image from 'next/image';
const PhysicalCondition = () => {
  return (
    <div className="w-[43vw] md:w-[38vw] lg:w-[35vw] xl:w-[17vw] bg-white h-[280px] lg:h-[45vh] flex flex-col gap-1 rounded-2xl p-4">
      <h1 className="heading italic font-[400] ">physical condition</h1>
      <div className=" h-60  flex flex-col  gap-3 justify-center items-center  xl:h-[40vh]">
        {/* details  */}
        <div className='w-full'>
          <p className='text-gray-500 text-[13px] lg:text-[0.9vw]'>height:123cm</p>
          <p className='text-gray-500 text-[13px] lg:text-[0.9vw]'>weight:60kg</p>
        </div>
        <div>
          <Image src={physicalimage}  alt='image'/>
        </div>
      </div>
    </div>
  );
};

export default PhysicalCondition;
