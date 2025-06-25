"use client";
import Loader from "@/app/components/Loader";
import moment from "moment";
import React, { Component, useEffect, useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { VscReport } from "react-icons/vsc";
import AppointmentModal from "./components/AppointmentModal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AppointmentCreate, TimeSlotGetAPi } from "@/app/Api";
import { toast, ToastContainer } from "react-toastify";
const PateintAppointments = ({ data, isLoading, appointmentData }) => {
  const [appointmentModal, setAppointmentModal] = useState(false);
  const [doctorId, setDoctorID] = useState(null);
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  console.log("date from main Component", selectedDate);
  const queryClient = useQueryClient();
  const patientAppointmentPost = useMutation({
    mutationFn: (data) => AppointmentCreate(data),
    onSuccess: (data) => {
      setAppointmentModal(false);
      queryClient.invalidateQueries(["appointment_created"]);
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response.data.patient[0]);
    },
  });
  console.log("dateeeeeeeeeeeeeeee", selectedDate);

  const {
    data: timeStamp,
    isLoading: timeStampLoding,
    refetch,
  } = useQuery({
    queryKey: ["data", doctorId, selectedDate],
    queryFn: ({ queryKey }) => {
      const [, doctorId, date] = queryKey;
      return TimeSlotGetAPi({ doctorId, date });
    },
    enabled: false,
    retry: false,
    onSuccess: (data) => {
      // console.log(data);
    },
    onError: (error) => {
      toast.error(error);
      console.log(error);
    },
  });
  return (
    <>
      <ToastContainer />
      <div id="root">
        <AppointmentModal
          data={data}
          timeStamp={timeStamp}
          timeStampLoding={timeStampLoding}
          isLoading={isLoading}
          isOpen={appointmentModal}
          setIsOpen={setAppointmentModal}
          patientAppointmentPost={patientAppointmentPost}
          setDoctorID={setDoctorID}
          refetch={refetch}
          doctorId={doctorId}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
      </div>
      <div className="w-full flex justify-between  items-center">
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
        <div>
          <button
            onClick={() => {
              setAppointmentModal(true);
            }}
            className="cursor-pointer border-none rounded-2xl px-6  text-[8px]  md:text-[0.8vw] bg-[#41797a] text-white capitalize p-1"
          >
            + create appointments
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className="my-auto mt-50">
          <Loader />
        </div>
      ) : !appointmentData?.data?.results?.length ? (
        <p className="text-center my-auto mt-50 text-gray-700 text-[13px] lg:text-[1vw]">
          no appointments
        </p>
      ) : (
        <div className="overflow-x-auto hide-scrollbar rounded-2xl mt-4 w-full h-[70vh]">
          <div>
            <div className="w-full h-screen">
              <table className="min-w-full h-full table-auto border-collapse text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-center lg:text-[0.9vw] text-sm font-medium text-gray-700">
                      Appointment Key
                    </th>
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
                  {appointmentData?.data?.results.length &&
                    appointmentData?.data?.results.map((items, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-black/10  cursor-default text-[10px] lg:text-[0.9vw] border-gray-200"
                      >
                        <td className="px-4 py-2 text-center text-[#41797a] font-extrabold italic text-[18px] lg:text-[1.5vw] ">
                          {items.id}
                        </td>
                        <td className="px-4 py-2 text-gray-600">
                          {moment(items.date_time).format("MMMM Do YYYY")}
                        </td>
                        <td className="px-4 py-2 text-gray-600">
                          {moment(items.date_time).format("LT")}
                        </td>
                        <td className="px-4 py-2 flex h-full items-center capitalize gap-1">
                          <span className="flex justify-center items-center text-white bg-[#41797a] border-none w-7 h-7 rounded-full">
                            {items.patient.charAt(0)}
                          </span>
                          {items.patient}
                        </td>
                        <td className="px-4 py-2 text-gray-600">
                          {items.note}
                        </td>
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

export default PateintAppointments;
