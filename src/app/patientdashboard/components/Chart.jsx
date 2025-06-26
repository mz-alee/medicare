"use client";
import { ChartComponent } from '@/app/doctordashboard/components/Piechart';
import React from "react";
const Chart = () => {
  return (
    <div
      // data-aos="zoom-in-right"
      // data-aos-duration="1800"
      className="w-1/2 md:w-[23vw] lg:w-[35vw] xl:w-[17vw] bg-white h-[280px] lg:h-[45vh] flex flex-col gap-1 rounded-2xl p-4"
    >
      <h1 className="heading italic font-[400] ">Chart</h1>
      <div className=" h-60  flex flex-col justify-center gap-4  xl:h-[40vh]">
        {/* details  */}
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 block"></span>
            <p className="capitalize text-[10px] xl:text-[0.7vw]">
              completed appoitments
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 block"></span>
            <p className="capitalize text-[10px] xl:text-[0.7vw]">
              recoverd patient
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 block"></span>
            <p className="capitalize text-[10px] xl:text-[0.7vw]">
              upcoming Appointments
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400 block"></span>
            <p className="capitalize text-[10px] xl:text-[0.7vw]">
              pending Appointments
            </p>
          </div>
        </div>
        <ChartComponent />
      </div>
    </div>
  );
};

export default Chart;
