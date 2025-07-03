"use client";
import Loader from "@/app/components/Loader";
import moment from "moment";
import React, { useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdCancelPresentation } from "react-icons/md";
import { VscReport } from "react-icons/vsc";
import { PiCalendarCheckLight } from "react-icons/pi";
// import ToggleBtn from "../components/ToggleBtn";
import { CiViewBoard } from "react-icons/ci";
import { useQueries, useQuery } from "@tanstack/react-query";
import { PatientDiagnosisData } from "@/app/Api";
const PatientHistory = () => {
  // console.log(moment(data?.data?.date_time, "YYYY-MM-DD HH:mm:ss"));
  // const { data } = useQueries({
  //   querykey: ["diagnosis details"],
  //   queryfn: PatientDiagnosisData,
  //   onSuccess: (data) => {
  //     toast("diagnosis data");
  //   },
  //   onError: (error) => {
  //     console.log("diagnosis error", error);
  //   },
  // });
  const { data, isLoading } = useQuery({
    queryKey: ["patientdiagnosis"],
    queryFn: PatientDiagnosisData,
    onSuccess: (data) => {
      console.log(data);
    },
    retry: false,
    onError: (error) => {
      console.log("patient profile error", error);
    },
  });
  console.log(data?.data?.results);

  return (
    <>
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
              <option value="">dianosis</option>
            </select>
            <select
              name=""
              id=""
              className=" border border-gray-300 text-gray-600 capitalize outline-none px-1  w-65 rounded "
            >
              <option value="">lab test name</option>
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
      ) : !data?.data?.results?.length  ? (
        <p className="text-center my-auto mt-50 text-gray-700 text-[13px] lg:text-[1vw]">
          no record found
        </p>
      ) : (
        <div className="   bg-white py-1 overflow-scroll hide-scrollbar rounded-2xl h-[80vh] mt-4 w-full ">
          <div>
            <div className="w-full ">
              <table className="min-w-full h-full table-auto border-collapse text-left">
                <thead className=" w-[80vw] ">
                  <tr className="w-[80vw]">
                    <th className="px-4  py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Date
                    </th>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Doctor
                    </th>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Hospital/Clinic
                    </th>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Diagnosis
                    </th>

                    <th className="px-4 py-2 text-sm lg:text-[0.9vw] font-medium text-gray-700">
                      Status
                    </th>
                    <th className="px-4 py-2 text-sm text-center  lg:text-[0.9vw] font-medium text-gray-700">
                      View Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y  divide-black ">
                  {data?.data?.results.map((items, index) => (
                    <tr
                      key={index}
                      className=" hover:bg-black/10    cursor-pointer text-[10px] lg:text-[0.9vw] border-gray-200"
                    >
                      <td className="px-4 py-2  text-gray-600">
                        jun 19 2025
                        {/* {moment(items.date_time).format("MMMM Do YYYY")} */}
                      </td>
                      <td className="px-4 py-2 text-gray-600">
                        Dr.ALi
                        {/* {moment(items.date_time).format("LT")} */}
                      </td>
                      <td className="px-4 py-2 flex h-full  items-center gap-1 ">
                        City Hospital
                        {/* {items.patient} */}
                      </td>
                      <td className="px-4 py-2  text-gray-600">
                        Gastrointestinal infection, nausea{" "}
                      </td>

                      <td
                        className="text-green-400 px-4 py-2"
                        // className={`${
                        //   items.status === "cancelled"
                        //     ? "text-red-600"
                        //     : "text-green-400"
                        // } px-4 py-2`}
                      >
                        done
                      </td>
                      <td className="px-4 py-2 flex  text-lg justify-center items-center gap-6 text-gray-600">
                        <CiViewBoard className="cursor-pointer  text-black font-bold text-[20px] hover:text-gray-600" />
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

export default PatientHistory;
