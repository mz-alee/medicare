"use client";
import Loader from "@/app/components/Loader";
import React from "react";
import { MdContentCopy } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
const ReportsCard = ({ data, isLoading }) => {
  return (
    <div className="w-full md:w-[62vw] lg:w-[30vw]  bg-white h-[300px] flex flex-col gap-1 rounded-2xl p-4">
      <h1 className="heading italic font-[400] ">leb test & reports</h1>
      <div className="overflow-x-auto hide-scrollbar  h-60  xl:h-[40vh]">
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-full">
            <Loader />
          </div>
        ) : !data?.data?.lab_reports ? (
          <div className="flex justify-center items-center w-full h-full">
            <p className="text-gray-500 text-[12px] lg:text-[0.9vw]">
              no diagnosis
            </p>
          </div>
        ) : (
          <table className="min-w-full  table-auto border-collapse text-left">
            <thead className="">
              <tr>
                <th className="px-4 py-2 lg:text-[0.9vw] text-center capitalize text-sm font-medium text-gray-700">
                  tests name
                </th>
                <th className="px-4 py-2 lg:text-[0.9vw]  text-center capitalize text-sm font-medium text-gray-700">
                  date
                </th>
                <th className="px-4 py-2 lg:text-[0.9vw] text-center capitalize text-sm font-medium text-gray-700">
                  lab name
                </th>
                <th className="px-4  py-2 text-sm lg:text-[0.9vw] capitalize font-medium text-gray-700">
                  result
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.lab_reports?.map((items, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-black/10 cursor-default text-[10px] lg:text-[0.9vw]  border-gray-200"
                >
                  <td className="px-4 py-2 capitalize text-center text-gray-600">
                    {isLoading ? (
                      <Skeleton width={100} height={20} count={1} />
                    ) : (
                      items.test_name || "null"
                    )}
                  </td>
                  <td className="px-4 py-2 capitalize text-center text-gray-600">
                    {isLoading ? (
                      <Skeleton width={100} height={20} count={1} />
                    ) : (
                      items.date || "null"
                    )}
                  </td>
                  <td className="px-4 py-2 capitalize text-center text-gray-600">
                    {isLoading ? (
                      <Skeleton width={100} height={20} count={1} />
                    ) : (
                      items.laboratory || "null"
                    )}
                  </td>
                  <td className="px-4 py-2 flex items-center gap-1 capitalize text-gray-600 ">
                    <span>
                      <MdContentCopy className="text-blue-300" />
                    </span>
                    view
                  </td>
                </tr>
              ))}
              {/* Add more rows as needed */}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ReportsCard;
