import React from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

import { MdOutlineDelete } from "react-icons/md";
const AllStaff = () => {
  return (
    <div>
      <div className="  ">
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
                patient name
              </th>
              <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                Role
              </th>
              <th className="px-3  py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                Duty
              </th>
              <th className="px-4  py-2 text-sm lg:text-[0.9vw] text-center font-medium text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((items, index) => (
              <tr
                key={index}
                className="border-b hover:bg-black/10 cursor-default text-[10px] lg:text-[0.9vw]  border-gray-200"
              >
                <td className="px-4 py-2  text-gray-600">02/12/2012</td>
                <td className="px-4 py-2  text-gray-600">8:00 AM</td>
                <td className="px-4 py-2   flex items-center gap-1">
                  <span className="block border border-gray-600 w-7 h-7 rounded-full"></span>
                  kabeer
                </td>
                <td className="px-4 py-2  text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sunt, voluptatum.
                </td>
                <td className="px-4 py-2  ">cleaner</td>
                <td className="px-4 py-2   flex text-lg justify-center gap-6 ">
                  <FaRegEdit className="hover:text-blue-600" />
                  <MdOutlineDelete className=" text-red-600" />
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

export default AllStaff;
