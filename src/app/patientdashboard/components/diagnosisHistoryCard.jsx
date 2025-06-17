"use client";
import React from "react";
const DiagnosisHistoryCard = () => {
  return (
    <div className="w-full lg:w-[45vw] xl:w-[40vw] bg-white min-h-[50vh] flex flex-col gap-1 rounded-2xl p-4">
      <h1 className="heading italic font-[400] ">diagnosis history</h1>
      <div className="overflow-x-auto hide-scrollbar  h-60  xl:h-[40vh]">
        <table className="min-w-full  table-auto border-collapse text-left">
          <thead className="">
            <tr>
              <th className="px-4 py-2 lg:text-[0.9vw] text-center capitalize text-sm font-medium text-gray-700">
                appointment Date
              </th>
              <th className="px-4 py-2 lg:text-[0.9vw]  text-center capitalize text-sm font-medium text-gray-700">
                doctor
              </th>
              <th className="px-4 py-2 lg:text-[0.9vw] text-center capitalize text-sm font-medium text-gray-700">
                hospital/clinic
              </th>
              <th className="px-4 text-center py-2 text-sm lg:text-[0.9vw] capitalize font-medium text-gray-700">
                disease
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }).map((items, index) => (
              <tr
                key={index}
                className="border-b hover:bg-black/10 cursor-default text-[10px] lg:text-[0.9vw]  border-gray-200"
              >
                <td className="px-4 py-2 capitalize text-center text-gray-600">
                  02/12/2012
                </td>
                <td className="px-4 py-2 capitalize text-center text-gray-600">
                  Dr.Mirza Ali
                </td>
                <td className="px-4 py-2 capitalize text-center text-gray-600">
                  City hospital
                </td>
                <td className="px-4 py-2 capitalize text-gray-600 text-center">
                  Love{" "}
                </td>
              </tr>
            ))}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosisHistoryCard;
