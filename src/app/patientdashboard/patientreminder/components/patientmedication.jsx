"use client";
import Loader from "@/app/components/Loader";
import moment from "moment";
import React, { useState } from "react";
import { MdCancelPresentation } from "react-icons/md";
import { PiCalendarCheckLight } from "react-icons/pi";
import ToggleBtn from "../../components/ToggleBtn";
import { FaRegEdit } from "react-icons/fa";
import MedicationReminderModal from "./MedicationReminderModal";
import Swal from "sweetalert2";
import ReminderEditModal from "./ReminderEditModal";
const PatientMedication = ({
  data,
  isLoading,
  MedicationReminder,
  medicationModalOpen,
  setMedicationModalOpen,
  MedicationReminderDelete,
}) => {
  const [reminderEditOpen, setReminderEditOpen] = useState(false);

  return (
    <>
      <div id="root">
        <MedicationReminderModal
          isOpen={medicationModalOpen}
          setIsOpen={setMedicationModalOpen}
          MedicationReminder={MedicationReminder}
        />
      </div>
      <ReminderEditModal
        isOpen={reminderEditOpen}
        setIsOpen={setReminderEditOpen}
        name="Edit medication remidner "
      />
      <div className="w-full flex justify-between  items-center ">
        {/* <div className="header flex flex-wrap gap-3 items-center ">
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
        </div> */}
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
            <select
              name=""
              id=""
              className=" border border-gray-300 text-gray-600 capitalize outline-none px-1  w-50 rounded "
            >
              <option value="">Medicine</option>
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

      <div className=" hide-scrollbar overflow-h-scroll bg-white py-1 rounded-2xl h-[80vh] mt-4 w-full ">
        <div className="flex justify-between items-center px-4 w-full">
          <h1 className=" py-2 lg:text-[1.1vw] italic capitalize text-sm font-medium text-gray-900">
            medication reminder
          </h1>
          <button
            onClick={() => {
              setMedicationModalOpen(true);
            }}
            className="cursor-pointer border-none rounded-2xl px-4  text-[10px]  md:text-[1.2vw] lg:text-[0.9vw]  bg-[#132928] text-white capitalize py-0.5"
          >
            + add reminder
          </button>
        </div>
        <div>
          {isLoading ? (
            <div className="my-auto  mt-50">
              <Loader />
            </div>
          ) : data?.data?.length === 0 ? (
            <p className="text-center my-auto mt-50 text-gray-700 text-[13px] lg:text-[1vw]">
              no reminder
            </p>
          ) : (
            <div className="w-full ">
              <table className="min-w-full h-full table-auto border-collapse text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Date
                    </th>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Medicine Name
                    </th>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Dosage
                    </th>
                    <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Time
                    </th>
                    <th className="px-3 text-center py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Notification
                    </th>
                    <th className="px-4 py-2 text-sm lg:text-[0.9vw] font-medium text-gray-700">
                      Status
                    </th>
                    <th className="px-4 py-2 text-sm text-center  lg:text-[0.9vw] font-medium text-gray-700">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data &&
                    data?.data.length &&
                    data?.data.map((items, index) => (
                      <tr
                        key={items.id}
                        className="border-b hover:bg-black/10  cursor-pointer text-[10px] lg:text-[0.9vw] border-gray-200"
                      >
                        <td className="px-4 py-2  text-gray-600">
                          {moment(items.date_time).format("MM DD YYYY")}
                          {/* {moment(items.date_time).format("MMMM Do YYYY")} */}
                        </td>
                        <td className="px-4 py-2 text-gray-600">
                          {items.medicine_name}
                          {/* {moment(items.date_time).format("LT")} */}
                        </td>
                        <td className="px-4 py-2 flex h-full  items-center gap-1 ">
                          {items.dosage}
                        </td>
                        <td className="px-4 py-2  text-gray-600">
                          {moment(items.date_time).format("hh mm")}
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
                            <FaRegEdit className="cursor-pointer text-black font-bold  hover:text-gray-600" />
                          </button>
                          <button
                            onClick={() => {
                              Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  MedicationReminderDelete.mutate(items.id);
                                  Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success",
                                  });
                                }
                              });
                            }}
                          >
                            <MdCancelPresentation className="text-red-400   cursor-pointer hover:text-red-600" />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PatientMedication;
