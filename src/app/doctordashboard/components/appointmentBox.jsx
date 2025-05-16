"use client";
import Image from 'next/image';
import React from "react";

const AppointmentBox = ({ color, text, number ,icon}) => {
  console.log(color);

  return (
    <div
      style={{ backgroundColor: color }}
      className={`w-35 h-30  md:w-30  md:h-30 xl:h-25 xl:w-36  rounded-lg flex flex-col justify-center gap-1 items-center text-gray-700`}
    >
      <Image src={icon} alt='icon' className='w-5 h-5'/>
      <h2 className="">{number}</h2>
      <h1 className='text-[12px] text-center'>{text}</h1>
    </div>
  );
};

export default AppointmentBox;
