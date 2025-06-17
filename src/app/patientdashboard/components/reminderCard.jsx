"use client";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { FaCalendar } from "react-icons/fa";
const ReminderCard = () => {
  return (
    <div
      // data-aos="zoom-in-right"
      // data-aos-duration="1000"
      className="w-full     lg:w-[30vw] lg:h-[50vh] xl:h-[45vh] xl:w-[26vw]   bg-white  flex flex-col gap-4  rounded-2xl p-3"
    >
      <h1 className="heading italic font-[400] ">appointments reminders</h1>
      <div className="w-full   flex items-center ">
        <div className="flex flex-wrap   lg:flex-col   gap-2 w-full items-center    justify-center  ">
          <div className="flex w-full gap-2">
            <div className="w-full capitalize h-10 rounded-lg flex items-center justify-between px-2 py-1 bg-[#daedff]">
              <FaCalendar className="text-2xl text-blue-400" />
              <h1 className="text-[14px] lg:text-[1vw] font-[400] capitalize">
                today's appointment
              </h1>
              <div className="bg-red-500 rounded px-1 text-white  italic text-center h-6 min-w-6">
                12
              </div>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="w-full capitalize h-10 rounded-lg flex items-center justify-between px-2 py-1 bg-[#e6d5fc]">
              <FaCalendar className="text-2xl text-purple-400" />
              <h1 className="capitalize text-[14px] lg:text-[1vw] font-[400]">
                cancelled appointment
              </h1>
              <div className="bg-red-500 rounded px-1 text-white  italic text-center h-6 min-w-6">
                3
              </div>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="w-full capitalize h-10 rounded-lg flex items-center justify-between px-2 py-1 bg-[#d7fbe1]">
              <FaCalendar className="text-2xl text-green-400" />
              <h1 className="capitalize text-[14px] lg:text-[1vw] font-[400]">
                completed appointment
              </h1>
              <div className="bg-red-500 rounded px-1 text-white  italic text-center h-6 min-w-6">
                3
              </div>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="w-full capitalize h-10 rounded-lg flex items-center justify-between px-2 py-1 bg-[#fcf7cb]">
              <FaCalendar className="text-2xl text-yellow-400" />
              <h1 className="capitalize text-[14px] lg:text-[1vw] font-[400]">
                upcoming appointment
              </h1>
              <div className="bg-red-500 rounded px-1 text-white  italic text-center h-6 min-w-6">
                3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderCard;
