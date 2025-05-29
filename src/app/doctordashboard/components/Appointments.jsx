"use client";
import Image from "next/image";
import React, { useState } from "react";
import person from "../../../../public/Images/person1.png";
const Appointment = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      // data-aos="zoom-in-right"
      // data-aos-duration="1500"
      className="w-full md:w-[40vw] xl:w-[35vw] bg-white h-[45vh] flex flex-col gap-1 rounded-2xl p-4"
    >
      <div className="flex gap-3">
        <button
          onClick={() => {
            setActive(false);
          }}
          className={`${
            active === false && "border-b border-[#205454]"
          } cursor-pointer pb-2 heading italic font-[500]`}
        >
          New Appointments
        </button>
        <button
          onClick={() => {
            setActive(true);
          }}
          className={`${
            active === true && "border-b-1 border-[#205454]"
          } cursor-pointer pb-2 heading italic font-[500]`}
        >
          Pending Appointments
        </button>
      </div>
      <div className="overflow-x-auto hide-scrollbar h-60  xl:h-[40vh]">
        <table className="min-w-full  table-auto border-collapse text-left">
          <thead className="">
            <tr>
              <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                Time
              </th>
              <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                Date
              </th>
              <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                Patient Name
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
                className="border-b text-[10px] hover:bg-black/10 cursor-default lg:text-[0.9vw]  border-gray-200"
              >
                <td className="px-4 py-2  text-gray-600">8:00 AM</td>
                <td className="px-4 py-2  text-gray-600">02/12/2012</td>
                <td className="px-4 py-2 flex items-center gap-2 text-gray-600">
                  <Image src={person} alt="profile" className="w-10" /> Kabeer
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

export default Appointment;
