"use client";
import Loader from "@/app/components/Loader";
import moment from "moment";
import React, { useState } from "react";
import { LuFileText } from "react-icons/lu";
import { CiViewBoard } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { IoMdShareAlt } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { PatientReportData } from "@/app/Api";
const PatientReports = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["pateint reports"],
    queryFn: PatientReportData,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log("patient reports api error", error);
    },
  });
  console.log(data?.data?.results);
  console.log("10 + 20"  + 10 + 10);

  return (
    <>
      {/* <PatientHeader name="Lab Reports" /> */}
      <div className="w-full flex justify-between  items-center ">
        <div className="flex items-center  justify-between w-full">
          <div className="w-full text-[12px] lg:text-[0.9vw] flex gap-3 flex-wrap items-center">
            <select
              name=""
              id=""
              className=" border border-gray-300 text-gray-600 capitalize outline-none px-1  w-30 rounded "
            >
              <option value="">date</option>
            </select>
            <select
              name=""
              id=""
              className=" border border-gray-300 text-gray-600 capitalize outline-none px-1  w-40 rounded "
            >
              <option value="">doctor</option>
            </select>
            <select
              name=""
              id=""
              className=" border border-gray-300 text-gray-600 capitalize outline-none px-1  w-50 rounded "
            >
              <option value="">hospital/clinic</option>
            </select>
            <select
              name=""
              id=""
              className=" border border-gray-300 text-gray-600 capitalize outline-none px-1  w-65 rounded "
            >
              <option value="">diagnosis</option>
            </select>
            <button className="cursor-pointer border-none rounded-2xl px-6  text-[8px]  md:text-[0.8vw] bg-[#41797a] text-white capitalize p-1">
              search
            </button>
          </div>
          <select
            className=" text-[12px] lg:text-[0.9vw] border border-gray-300 text-gray-600 capitalize outline-none px-1  w-25 rounded "
            name=""
            id=""
          >
            <option value="">sort by</option>
          </select>
        </div>
      </div>
      {isLoading ? (
        <div className="my-auto  mt-50">
          <Loader />
        </div>
      ) : !data?.data?.results?.length ? (
        <p className="text-center my-auto mt-50 text-gray-700 text-[13px] lg:text-[1vw]">
          no record found
        </p>
      ) : (
        <div className=" hide-scrollbar overflow-h-scroll bg-white py-1 rounded-2xl h-[80vh] mt-4 w-full ">
          <div>
            <div className="w-full ">
              <table className="w-full  h-full table-auto border-collapse text-left">
                <thead className="w-full ">
                  <tr className=" w-[100vw]">
                    <th className="px-4  py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Date
                    </th>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Test Name
                    </th>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Lab Name
                    </th>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Results
                    </th>

                    <th className="px-4 py-2 text-sm lg:text-[0.9vw] font-medium text-gray-700">
                      Reports
                    </th>
                    <th className="px-4 py-2 text-sm text-center  lg:text-[0.9vw] font-medium text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.results.map((items, index) => (
                    <tr
                      key={items.id}
                      className="border-b hover:bg-black/10    cursor-pointer text-[10px] lg:text-[0.9vw] border-gray-200"
                    >
                      <td className="px-4 py-2 flex  text-gray-600">
                        {moment(items.date).format("MMMM Do YYYY")}
                      </td>
                      <td className="px-4 py-2 text-gray-600">
                        {items.test_name || "null"}
                      </td>
                      <td className="px-4 py-2 flex h-full  items-center gap-1 ">
                        {items.laboratory || "null"}
                      </td>
                      <td className="px-4 py-2  text-gray-600">
                        {items.results || "null"}
                      </td>

                      <td className="px-4 py-2 w-20">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400">
                            <LuFileText />
                          </span>
                          View
                        </div>
                      </td>
                      <td className="px-4 py-2 text-lg text-gray-600">
                        <div className="flex justify-center items-center gap-2">
                          <FiDownload className="cursor-pointer text-black font-bold text-[20px] hover:text-gray-600" />
                          <IoMdShareAlt className="cursor-pointer text-black font-bold text-[20px] hover:text-gray-600" />
                        </div>
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

export default PatientReports;
