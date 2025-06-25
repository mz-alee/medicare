import Loader from "@/app/components/Loader";
import moment from "moment";
import React, { useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdCancelPresentation } from "react-icons/md";
import { VscReport } from "react-icons/vsc";
import ToggleBtn from "../../components/ToggleBtn";
import { PiCalendarCheckLight } from "react-icons/pi";
import ReminderModal from "./ReminderModal";
import ReminderEditModal from "./ReminderEditModal";
const PateintReminderAppointments = ({
  PatientReminder,
  data,
  PatientReminderDel,
  reminderModal,
  setReminderModal,
  isLoading,
}) => {
  const [reminderEditOpen, setReminderEditOpen] = useState(false);
  return (
    <>
      <div id="root">
        <ReminderModal
          PatientReminder={PatientReminder}
          isOpen={reminderModal}
          setIsOpen={setReminderModal}
        />
        <ReminderEditModal
          isOpen={reminderEditOpen}
          setIsOpen={setReminderEditOpen}

        />
      </div>
      <div className="w-full flex justify-between  items-center">
        <div className="flex items-center gap-4 text-[12px] lg:text-[0.9vw]  justify-between w-full">
          <div className="w-full flex  gap-3 flex-wrap items-center">
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
          </div>
          <button className="cursor-pointer border-none rounded-2xl px-6  text-[8px]  md:text-[0.8vw] bg-[#41797a] text-white capitalize p-1">
            search
          </button>
          <select
            className=" border border-gray-300 text-gray-600 capitalize outline-none px-1  w-25 rounded "
            name=""
            id=""
          >
            <option value="">sort by</option>
          </select>
        </div>
      </div>
      {/* {isLoading ? (
        <div className="my-auto mt-50">
          <Loader />
        </div>
      ) : data?.data?.results?.length === 0 ? (
        <p className="text-center my-auto mt-50 text-gray-700 text-[13px] lg:text-[1vw]">
          no appointments
        </p>
      ) : ( */}
      <div className="overflow-x-auto  py-1 hide-scrollbar rounded-2xl mt-4 w-full min-h-[550px] bg-white">
        <div className="flex justify-between items-center px-4 w-full">
          <h1 className=" py-2 lg:text-[1.1vw] italic capitalize text-sm font-medium text-gray-900">
            appointments reminder
          </h1>
          <button
            onClick={() => {
              setReminderModal(true);
            }}
            className="cursor-pointer border-none rounded-2xl px-4  text-[10px]  md:text-[1.2vw] lg:text-[0.9vw] bg-[#132928] text-white capitalize py-0.5"
          >
            + add reminder
          </button>
        </div>
        <div>
          <div
            className={`${
              data?.data.length === 0 &&
              " w-full flex  h-[70vh] justify-center items-center"
            } `}
          >
            {isLoading ? (
              <div className="mt-50">
                <Loader />
              </div>
            ) : !data?.data.length ? (
              <p className="text-center mt-50 ">no reminder</p>
            ) : (
              <table className="min-w-full h-full  table-auto border-collapse text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Date
                    </th>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Time
                    </th>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Doctor Name
                    </th>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Hospital/Clinic
                    </th>
                    <th className="px-3 text-center py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      OFF/ON
                    </th>
                    <th className="px-4 py-2 text-sm lg:text-[0.9vw] font-medium text-gray-700">
                      Status
                    </th>
                    <th className="px-4 py-2 text-sm text-center  lg:text-[0.9vw] font-medium text-gray-700">
                      Reschedule/Cancel
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.length > 0 &&
                    data?.data?.map((items, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-black/10   cursor-default text-[10px] lg:text-[0.9vw] border-gray-200"
                      >
                        <td className="px-4 py-2 text-gray-600">
                          {moment(items.datetime).format("MM DD YYYY")}

                          {/* {moment(items.date_time).format("MMMM Do YYYY")} */}
                        </td>
                        <td className="px-4 py-2 text-gray-600">
                          {moment(items.datetime).format("hh mm ")}
                        </td>
                        <td className="px-4 py-2 flex h-full  items-center gap-1 ">
                          <span className="flex items-center border-none justify-center border bg-[#41797a] text-white   w-8 h-8 rounded-full">
                            {/* {items.doctor_name
                              ? items.doctor_name.charAt(1)
                              : null} */}
                          </span>

                          {items.doctor_name || "Null"}
                        </td>
                        <td className="px-4 py-2  text-gray-600">
                          {items.location || "Null"}
                        </td>
                        <td className="px-4 py-2 flex text-lg justify-center gap-6 text-gray-600">
                          <ToggleBtn />
                          {/* <IoChatbubbleEllipsesOutline className="hover:text-purple-600" />
                        <VscReport className="text-blue-600 hover:text-red-600" /> */}
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
                          <button
                            onClick={() => {
                              setReminderEditOpen(true);
                            }}
                          >
                            <PiCalendarCheckLight className="cursor-pointer text-[#41797a] font-bold text-[20px] hover:text-gray-600" />
                          </button>
                          <button
                            onClick={() => {
                              PatientReminderDel.mutate(items.id);
                            }}
                          >
                            <MdCancelPresentation className="text-red-400 text-[18px]  cursor-pointer hover:text-red-600" />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default PateintReminderAppointments;
