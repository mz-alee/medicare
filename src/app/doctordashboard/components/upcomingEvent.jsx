"use client";
import React from "react";
const UpcomingEvent = () => {
  return (
    <div
      data-aos="zoom-in-right"
      data-aos-duration="1300"
      className="w-full lg:w-[45vw] xl:w-[49vw] bg-white min-h-[50vh] flex flex-col gap-1 rounded-2xl p-4"
    >
      <h1 className="heading italic font-[400] ">Upcoming Events</h1>
      <div className="overflow-x-auto hide-scrollbar  h-60  xl:h-[40vh]">
        <table className="min-w-full  table-auto border-collapse text-left">
          <thead className="">
            <tr>
              <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                Date
              </th>
              <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                Time
              </th>
              <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                Event Name
              </th>
              <th className="px-4  py-2 text-sm lg:text-[0.9vw] font-medium text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }).map((items, index) => (
              <tr
                key={index}
                className="border-b hover:bg-black/10 cursor-default text-[10px] lg:text-[0.9vw]  border-gray-200"
              >
                <td className="px-4 py-2  text-gray-600">02/12/2012</td>
                <td className="px-4 py-2  text-gray-600">8:00 AM</td>
                <td className="px-4 py-2  text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sunt, voluptatum.
                </td>
                <td className="px-4 py-2  text-gray-600">Icon</td>
              </tr>
            ))}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingEvent;
