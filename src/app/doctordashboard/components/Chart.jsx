"use client";
import React from "react";
import { ChartComponent } from "./Piechart";
const Chart = ({ data }) => {
  return (
    <div
      // data-aos="zoom-in-right"
      // data-aos-duration="1800"
      className="w-full sm:w-[40vw] md:w-[25vw] xl:w-[17vw] bg-white h-[280px] lg:h-[50vh] flex flex-col gap-1 rounded-2xl p-4"
    >
      <h1 className="heading italic font-[400] ">Chart</h1>
      <div className=" h-60  flex flex-col justify-center gap-4  xl:h-[40vh]">
        {/* details  */}
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 block"></span>
            <p className="capitalize text-[10px] xl:text-[0.7vw]">
              total appointments
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 block"></span>
            <p className="capitalize text-[10px] xl:text-[0.7vw]">
              new patients
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 block"></span>
            <p className="capitalize text-[10px] xl:text-[0.7vw]">
              pending appointments
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400 block"></span>
            <p className="capitalize text-[10px] xl:text-[0.7vw]">
              active staff
            </p>
          </div>
        </div>
        <ChartComponent alldata={data} />
      </div>
    </div>
  );
};

export default Chart;
