"use client";
import Image from "next/image";
import React, { useState } from "react";
import person from "../../../../public/Images/empty.webp";
const StaffAppointmentBox = ({ data }) => {
  const [active, setActive] = useState("new_appointment");

  return (
    <div
      // data-aos="zoom-in-right"
      // data-aos-duration="1500"
      className="w-full md:w-[65vw] lg:w-[72vw] xl:w-[50vw] bg-white h-[50vh] flex flex-col gap-1 rounded-2xl p-4"
    >
      <div className="flex gap-3">
        <button
          onClick={() => {
            setActive("new_appointment");
          }}
          className={`${
            active === "new_appointment" && "border-b border-[#205454]"
          } cursor-pointer pb-2  heading italic  font-[500]`}
        >
          New Appointments
        </button>
        <button
          onClick={() => {
            setActive("pending_appointment");
          }}
          className={`${
            active === "pending_appointment" && "border-b-1 border-[#205454]"
          } cursor-pointer  pb-2 heading italic font-[500]`}
        >
          Pending Appointments
        </button>
      </div>
      <div className="overflow-x-auto hide-scrollbar h-60  xl:h-[40vh]">
        <table className="min-w-full  table-auto border-collapse text-left">
          <thead className="">
            <tr>
              <th className="px-4 py-2 lg:text-[0.9vw] text-[12px] font-medium text-gray-700">
                Time
              </th>
              <th className="px-4 py-2 lg:text-[0.9vw] text-[12px] font-medium text-gray-700">
                Date
              </th>
              <th className="px-4 py-2 lg:text-[0.9vw] text-[12px]  font-medium text-gray-700">
                Patient Name
              </th>
              <th className="px-4  py-2 text-[12px] lg:text-[0.9vw] font-medium text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {active === "new_appointment"
              ? data?.data?.new_appointments?.map((items, index) => (
                  <tr
                    key={index}
                    className="border-b text-[10px] hover:bg-black/10 cursor-default lg:text-[0.9vw]  border-gray-200"
                  >
                    <td className="px-4 py-2  text-gray-600">{items.time}</td>
                    <td className="px-4 py-2  text-gray-600">{items.date}</td>
                    <td className="px-4 py-2 flex items-center gap-2 text-gray-600">
                      <Image
                        src={person}
                        alt="profile"
                        className="w-10 rounded-full"
                      />
                      {items.patient_name}
                    </td>
                    <td className="px-4 py-2  text-gray-600">Icon</td>
                  </tr>
                ))
              : data?.data?.pending_appointments?.map((items, index) => (
                  <tr
                    key={index}
                    className="border-b text-[10px] hover:bg-black/10 cursor-default lg:text-[0.9vw]  border-gray-200"
                  >
                    <td className="px-4 py-2  text-gray-600">{items.time}</td>
                    <td className="px-4 py-2  text-gray-600">{items.date}</td>
                    <td className="px-4 py-2 flex items-center gap-2 text-gray-600">
                      <Image
                        src={person}
                        alt="profile"
                        className="w-10 rounded-full"
                      />
                      {items.patient_name || "null"}
                    </td>
                    <td className="px-4 py-2  text-gray-600">Icon</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffAppointmentBox;
