import React from "react";
import Image from 'next/image';
import emptyProfile from "../../../../../public/Images/empty.webp"
const ContactsSection = () => {
  return (
    <div className=" w-100 text-black bg-white shadow-2xl rounded-2xl h-[96vh]  py-2 ">
      <div className="border-b border-gray-100 h-15 flex items-center px-6 w-full mx-auto">
        <input
          type="text"
          placeholder="Seach"
          className="rounded-2xl px-4 py-1.5 outline-none border text-[12px] bg-[#f4f6f6] border-none  w-full"
        />
      </div>
      <div className="overflow-y-scroll hide-scrollbar  h-[87%] mt-2">
        {Array.from({ length: 30 }).map((items, index) => {
          return (
            <div
              key={index}
              className="w-full cursor-pointer hover:bg-[#d4e9e8] border-b border-gray-200 h-17 flex justify-between  items-center px-4"
            >
              <div className="flex items-center gap-2">
                <div className=" overflow-hidden rounded-full h-10 w-10">
                  <Image  src={emptyProfile} alt='profile' className='w-full h-full'/>
                </div>
                <div>
                  <h1 className="text-[14px] lg:text-[1vw]">Name</h1>
                  <p className='text-[11px] lg:text-[0.8vw]'>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div>
                <p className="text-[12px] lg:text-[0.8vw] text-gray-600">
                  9:00am
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactsSection;
