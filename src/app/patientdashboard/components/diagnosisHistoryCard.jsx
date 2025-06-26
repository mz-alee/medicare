"use client";
import Loader from "@/app/components/Loader";
import React from "react";
import Skeleton from "react-loading-skeleton";
const DiagnosisHistoryCard = ({ data, isLoading }) => {
  return (
    <div className="w-full md:w-[62vw] lg:w-[40vw] xl:w-[49vw] bg-white  h-[300px] flex flex-col gap-1 rounded-2xl p-4">
      <h1 className="heading italic font-[400] ">diagnosis history</h1>
      <div className="overflow-x-auto hide-scrollbar  h-60  xl:h-[40vh]">
        {isLoading ? (
          <div className="h-full w-full flex justify-center items-center">
            <Loader />
          </div>
        ) : !data?.data?.diagnosis_data ? (
          <div className="h-full w-full flex justify-center items-center">
            <p className="text-gray-500 text-[12px] lg:text-[0.9vw]">
              no diagnosis
            </p>
          </div>
        ) : (
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
              {data?.data?.diagnosis_data?.map((items, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-black/10 cursor-default text-[10px] lg:text-[0.9vw]  border-gray-200"
                >
                  <td className="px-4 py-2 capitalize text-center text-gray-600">
                    {isLoading ? (
                      <Skeleton width={20} height={20} count={1} />
                    ) : (
                      items.appointment_date || "null"
                    )}
                  </td>
                  <td className="px-4 py-2 capitalize text-center text-gray-600">
                    {isLoading ? (
                      <Skeleton width={20} height={20} count={1} />
                    ) : (
                      items.doctor || "null"
                    )}
                  </td>
                  <td className="px-4 py-2 capitalize text-center text-gray-600">
                    {isLoading ? (
                      <Skeleton width={20} height={20} count={1} />
                    ) : (
                      items.clinic || "null"
                    )}
                  </td>
                  <td className="px-4 py-2 capitalize text-gray-600 text-center">
                    {isLoading ? (
                      <Skeleton width={20} height={20} count={1} />
                    ) : (
                      items.disease || "null"
                    )}
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

export default DiagnosisHistoryCard;
