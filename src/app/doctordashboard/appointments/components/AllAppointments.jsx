import React from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { VscReport } from "react-icons/vsc";
const AllAppointments = () => {
  return (
    <>
      <div className="header flex flex-wrap gap-3 items-center ">
        <button className="border border-gray-400 rounded-lg hover:bg-[#41797a] md:text-[0.8vw] hover:text-white px-6 text-[8px] text-gray-400 capitalize p-0.5">
          sort by
        </button>
        <button className="border border-gray-400 rounded-2xl px-6 text-[8px] md:text-[0.8vw] text-gray-400 hover:bg-[#41797a] hover:text-white capitalize p-0.5">
          today
        </button>
        <button className="border border-gray-400 rounded-2xl px-6 text-[8px] md:text-[0.8vw] text-gray-400 hover:bg-[#41797a] hover:text-white capitalize p-0.5">
          new appointments
        </button>
        <button className="border border-gray-400 rounded-2xl px-6 text-[8px] md:text-[0.8vw] text-gray-400 hover:bg-[#41797a] hover:text-white capitalize p-0.5">
          cancelled appointments
        </button>
        <button className="border border-gray-400 rounded-2xl px-6 text-[8px] text-gray-400 md:text-[0.8vw] hover:bg-[#41797a] hover:text-white capitalize p-0.5">
          completed appointments
        </button>
      </div>
      <div className=" overflow-x-auto hide-scrollbar  rounded-2xl mt-4 w-full h-[80vh]">
        <div
        // data-aos="zoom-in-right"
        // data-aos-duration="1300"
        >
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
                    diagnosis summary
                  </th>
                  <th className="px-3 text-center py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                    contact/report
                  </th>
                  <th className="px-4  py-2 text-sm lg:text-[0.9vw] font-medium text-gray-700">
                    status
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
                    <td className="px-4 py-2   flex text-lg justify-center gap-6 text-gray-600">
                      <IoChatbubbleEllipsesOutline className="hover:text-purple-600" />{" "}
                      <VscReport className="text-blue-600 hover:text-red-600" />
                    </td>
                    <td className="px-4 py-2  text-green-600">Done</td>
                  </tr>
                ))}
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllAppointments;
