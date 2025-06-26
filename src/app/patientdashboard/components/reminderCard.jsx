"use client";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { FaCalendar } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
const ReminderCard = ({ data, isLoading }) => {
  return (
    <div
      // data-aos="zoom-in-right"
      // data-aos-duration="1000"
      className="w-[50vw] sm:w-[60vw]  md:w-[40vw] h-[280px] lg:w-[49vw] lg:h-[45vh]  xl:w-[26vw]   bg-white  flex flex-col gap-4  rounded-2xl p-3"
    >
      <h1 className="heading italic font-[400] ">appointments reminders</h1>
      <div className="w-full   flex items-center ">
        <div className="flex flex-wrap   lg:flex-col   gap-2 w-full items-center    justify-center  ">
          <div className="flex w-full gap-2">
            <div className="w-full capitalize h-10 rounded-lg flex items-center justify-between px-2 py-1 bg-[#daedff]">
              <FaCalendar className="text-2xl text-blue-400" />
              <h1 className="text-[10px] lg:text-[1vw] font-[400] capitalize">
                today's appointment
              </h1>
              {isLoading ? (
                <Skeleton
                  count={1}
                  width={20}
                  height={30}
                  baseColor="#a9d3f9"
                />
              ) : (
                <div className="bg-red-500 rounded px-1 text-white  italic text-center h-6 min-w-6">
                  {data?.data?.overview?.today_appointments || 0}
                </div>
              )}
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="w-full capitalize h-10 rounded-lg flex items-center justify-between px-2 py-1 bg-[#e6d5fc]">
              <FaCalendar className="text-2xl text-purple-400" />
              <h1 className="capitalize text-[10px] lg:text-[1vw] font-[400]">
                cancelled appointment
              </h1>
              {isLoading ? (
                <Skeleton
                  count={1}
                  width={20}
                  baseColor="#d1b0fc"
                  height={30}
                />
              ) : (
                <div className="bg-red-500 rounded px-1 text-white  italic text-center h-6 min-w-6">
                  {data?.data?.overview?.cancelled_appointments || 0}
                </div>
              )}
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="w-full capitalize h-10 rounded-lg flex items-center justify-between px-2 py-1 bg-[#d7fbe1]">
              <FaCalendar className="text-2xl text-green-400" />
              <h1 className="capitalize text-[10px] lg:text-[1vw] font-[400]">
                completed appointment
              </h1>
              {isLoading ? (
                <Skeleton
                  count={1}
                  width={20}
                  height={30}
                  baseColor="#9ff2b5"
                />
              ) : (
                <div className="bg-red-500 rounded px-1 text-white  italic text-center h-6 min-w-6">
                  {data?.data?.overview?.completed_appointments || 0}
                </div>
              )}
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="w-full capitalize h-10 rounded-lg flex items-center justify-between px-2 py-1 bg-[#fcf7cb]">
              <FaCalendar className="text-2xl text-yellow-400" />
              <h1 className="capitalize text-[10px] lg:text-[1vw] font-[400]">
                upcoming appointment
              </h1>
              {isLoading ? (
                <Skeleton
                  count={1}
                  width={20}
                  baseColor="#f9ef9f"
                  height={25}
                />
              ) : (
                <div className="bg-red-500 rounded px-1 text-white  italic text-center h-6 min-w-6">
                  {data?.data?.overview?.upcoming_appointments || 0}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderCard;
