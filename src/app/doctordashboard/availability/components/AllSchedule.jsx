"use client";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
// import AddStaffModal from "./AddStaffModal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  DoctorDeleteWorkingHour,
  DoctorGetWorkingHour,
  DoctorWorkingHour,
  EditDoctorWorkingHour,
  StaffGetApi,
} from "@/app/Api";
import { toast } from "react-toastify";
import ScheduleModal from "./ScheduleModal";
import EditScheduleModal from "./editScheduleModal";
import Loader from "@/app/components/Loader";
import Swal from 'sweetalert2';
const AllSchedule = () => {
  const [scheduleModal, setScheduleModal] = useState(false);
  const [editScheduleModal, setEditScheduleModal] = useState(false);
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [scheduleId, setScheduleId] = useState();
  const queryClint = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["doctor_schedule"],
    queryFn: DoctorGetWorkingHour,
    retry: false,

    onSuccess: (data) => {},

    onError: (error) => {
      console.log("staff list get api error", error);
    },
  });

  const createSchedule = useMutation({
    mutationFn: (data) => DoctorWorkingHour(data),
    onSuccess: () => {
      toast("schedule fixed");
      setScheduleModal(false);
      queryClint.invalidateQueries(["create_schedule"]);
    },
    onError: (error) => {
      toast.error("schedule could not fix");
      console.log(error);
    },
  });
  const EditSchedule = useMutation({
    mutationFn: (id, data) => EditDoctorWorkingHour(id, data),
    onSuccess: () => {
      toast("schedule updated");
      setEditScheduleModal(false);
      queryClint.invalidateQueries(["edit_schedule"]);
    },
    onError: (error) => {
      toast.error("schedule could not edit");
    },
  });
  const deleteSchedule = useMutation({
    mutationFn: (id) => DoctorDeleteWorkingHour(id),
    onSuccess: () => {
      toast("schedule deleted");
      setScheduleModal(false);
      queryClint.invalidateQueries(["delete_schedule"]);
    },
    onError: (error) => {
      toast.error("schedule could not deleted");
    },
  });
  console.log(process.env.NEXT_TEST_KEY);

  return (
    <>
      <div id="root">
        <ScheduleModal
          // data={data}
          isOpen={scheduleModal}
          setIsOpen={setScheduleModal}
          createSchedule={createSchedule}
        />
        <EditScheduleModal
          data={data}
          isOpen={editScheduleModal}
          setIsOpen={setEditScheduleModal}
          EditSchedule={EditSchedule}
          scheduleId={scheduleId}
          day={day}
          startTime={startTime}
          endTime={endTime}
        />
      </div>
      <div className="bg-white rounded-2xl p-2">
        <div className="flex justify-end">
          <button
            onClick={() => {
              setScheduleModal(true);
            }}
            className="cursor-pointer border-none rounded-2xl italic px-6  text-[8px]  md:text-[0.8vw] bg-[#41797a] text-white capitalize p-1"
          >
            + add new Schedule
          </button>
        </div>
        <div className="  rounded-2xl  h-[70vh] overflow-y-scroll hide-scrollbar">
          {isLoading ? (
            <div className="h-full w-full flex justify-center items-center">
              <Loader />
            </div>
          ) : !data?.data?.length ? (
            <div className="h-full w-full flex justify-center items-center">
              <p className="text-[12px] lg:text-[0.9vw] text-gray-700">
                no schedule
              </p>
            </div>
          ) : (
            <table className="min-w-full table-auto border-collapse text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                    Day
                  </th>
                  <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                    Start Time
                  </th>
                  <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                    End Time
                  </th>
                  <th className="px-4 py-2 text-sm lg:text-[0.9vw] text-center font-medium text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((items, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-black/10 cursor-default text-[10px] lg:text-[0.9vw] border-gray-200"
                  >
                    <td className="px-4 py-2 text-gray-600">{items.day}</td>
                    <td className="px-4 py-2 text-gray-600">
                      {items.start_time}
                    </td>
                    <td className="px-4 py-2">{items.end_time}</td>
                    <td className="px-4 py-2 flex text-lg justify-center gap-6">
                      <button
                        onClick={() => {
                          setScheduleId(items.id);
                          setDay(items.day);
                          setStartTime(items.start_time);
                          setEndTime(items.end_time);

                          setEditScheduleModal(true);
                        }}
                      >
                        <FaRegEdit className="hover:text-blue-600 cursor-pointer" />
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
                              deleteSchedule.mutate(items.id);
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                              });
                            }
                          });
                        }}
                      >
                        <MdOutlineDelete className="text-red-600 cursor-pointer" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default AllSchedule;
