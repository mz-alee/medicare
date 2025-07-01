import Loader from "@/app/components/Loader";
import moment from "moment";
import React from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { VscReport } from "react-icons/vsc";
const AllAppointments = ({ data, isLoading }) => {
  console.log(data?.data?.results);
  console.log(moment(data?.data?.date_time, "YYYY-MM-DD HH:mm:ss"));

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
      {/* {data?.data?.result ? (
        <p className="text-center my-auto mt-50 text-gray-700 text-[13px] lg:text-[1vw] ">
          no appointments
        </p>
      ) : (
        <div className="relative bg-amber-100 overflow-x-auto hide-scrollbar  rounded-2xl mt-4 w-full h-[80vh]">
          <div
          // data-aos="zoom-in-right"
          // data-aos-duration="1300"
          >
            <div className="  w-full  h-screen  ">
              <table className="min-w-full h-full  table-auto border-collapse text-left">
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
                    <th className="px-4 py-2 text-sm lg:text-[0.9vw] font-medium text-gray-700">
                      status
                    </th>
                  </tr>
                </thead>
                <tbody className=" w-full h-full">
                  {true ? (
                    <div className='absolute mt-[50%]'>
                      <Loader />
                    </div>
                  ) : (
                    data?.data?.results.map((items, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-black/10 cursor-default text-[10px] lg:text-[0.9vw]  border-gray-200"
                      >
                        <td className="px-4 py-2  text-gray-600">
                          {moment(items.date_time).format("MMMM Do YYYY")}
                        </td>
                        <td className="px-4 py-2  text-gray-600">
                          {moment(items.date_time).format("LT")}
                        </td>
                        <td className="px-4 py-2   flex items-center gap-1">
                          <span className="block border border-gray-600 w-7 h-7 rounded-full"></span>
                          {items.patient}
                        </td>
                        <td className="px-4 py-2  text-gray-600">
                          {items.note}
                        </td>
                        <td className="px-4 py-2   flex text-lg justify-center gap-6 text-gray-600">
                          <IoChatbubbleEllipsesOutline className="hover:text-purple-600" />{" "}
                          <VscReport className="text-blue-600 hover:text-red-600" />
                        </td>
                        <td
                          className={`
                        ${
                          items.status === "cancelled"
                            ? "text-red-600 "
                            : "text-green-400"
                        }  px-4 py-2 `}
                        >
                          {items.status}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )} */}
      {isLoading ? (
        <div className="my-auto mt-50">
          <Loader />
        </div>
      ) : data?.data?.results?.length === 0 ? (
        <p className="text-center my-auto mt-50 text-gray-700 text-[13px] lg:text-[1vw]">
          no appointments
        </p>
      ) : (
        <div className="overflow-x-auto hide-scrollbar rounded-2xl mt-4 w-full h-[80vh]">
          <div>
            <div className="w-full ">
              <table className="min-w-full h-full table-auto border-collapse text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Date
                    </th>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Time
                    </th>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Patient Name
                    </th>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Diagnosis Summary
                    </th>
                    <th className="px-3 text-center py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Contact/Report
                    </th>
                    <th className="px-4 py-2 text-sm lg:text-[0.9vw] font-medium text-gray-700">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.results.map((items, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-black/10 cursor-default text-[10px] lg:text-[0.9vw] border-gray-200"
                    >
                      <td className="px-4 py-2 text-gray-600">
                        {moment(items.date_time).format("MMMM Do YYYY")}
                      </td>
                      <td className="px-4 py-2 text-gray-600">
                        {moment(items.date_time).format("LT")}
                      </td>
                      <td className="px-4 py-2 flex items-center gap-1">
                        <span className="block border border-gray-600 w-7 h-7 rounded-full"></span>
                        {items.patient}
                      </td>
                      <td className="px-4 py-2 text-gray-600">{items.note}</td>
                      <td className="px-4 py-2 flex text-lg justify-center gap-6 text-gray-600">
                        <IoChatbubbleEllipsesOutline className="hover:text-purple-600" />
                        <VscReport className="text-blue-600 hover:text-red-600" />
                      </td>
                      <td
                        className={`${
                          items.status === "cancelled"
                            ? "text-red-600"
                            : "text-green-400"
                        } px-4 py-2`}
                      >
                        {items.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllAppointments;
