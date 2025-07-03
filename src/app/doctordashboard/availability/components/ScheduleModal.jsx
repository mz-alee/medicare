"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import Modal from "react-modal";
import { getCookie } from "cookies-next";
import Loader from "@/app/components/Loader";
import { ScheduleDropdown } from "./ScheduleDropdown";
import { toast, ToastContainer } from "react-toastify";
import StartTimePicker from "./StartTimePicker";
import EndTimePicker from "./EndTimePicker";
import moment from "moment";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const scheduleSchema = yup.object({
  day: yup.string().required("day is a required field"),
  startTime: yup.string().required("start time is required filed"),
  endTime: yup.string().required("end time is required filed"),
});
const ScheduleModal = ({ isOpen, setIsOpen, createSchedule, data }) => {
  const [openTimer, setOpenTimer] = useState(false);
  const {
    handleSubmit,
    setValue,
    reset,
    getValues,
    control,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(scheduleSchema),
    defaultValues: {
      day: "",
      startTime: "",
      endTime: "",
    },
  });
  console.log(openTimer);

  const value = getValues();
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const handleData = (data) => {
    console.log("form data ", data);

    console.log(data.start_time);

    const mainData = {
      day: data.day,
      start_time: moment(data.startTime, ["h:mm A"]).format("HH:mm"),
      end_time: moment(data.endTime, ["h:mm A"]).format("HH:mm"),
    };
    console.log(mainData);

    createSchedule.mutate(mainData);
  };
  useEffect(() => {
    if (createSchedule.isSuccess) {
      reset();
    }
  }, [createSchedule.isSec]);
  console.log(errors);

  return (
    <div>
      <ToastContainer />
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          if (openTimer) {
            setIsOpen(true);
          } else setIsOpen(false);
        }}
        contentLabel="My Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1000,
          },
          content: {
            minheight: "300px",
            width: "340px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
          },
        }}
      >
        <div className={` text-sm   `}>
          <form
            className="flex flex-col  justify-between gap-4"
            onSubmit={handleSubmit(handleData)}
          >
            <div>
              <IoIosClose
                type="button"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-2xl"
              />
              <h2 className="capitalize italic font-[500] text-[15px] lg:text-[1.1vw]   text-center ">
                create Schedule
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full">
                <div className="w-full flex  items-center gap-3 ">
                  <p className=" capitalize text-[13px] w-[25px]"> Day</p>
                  <div className="w-[240px] ">
                    <ScheduleDropdown control={control} errors={errors} />
                    {errors.day && (
                      <p className="error"> {errors.day.message}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center gap-3 ">
                <p className=" capitalize w-[25px] text-[13px]"> start time</p>
                <div className="w-[240px] ">
                  <StartTimePicker
                    openTimer={openTimer}
                    setOpenTimer={setOpenTimer}
                    control={control}
                  />
                  {errors.startTime && (
                    <p className="error"> {errors.startTime.message}</p>
                  )}
                </div>
              </div>
              <div className="w-full flex items-center gap-3 ">
                <p className=" capitalize text-[13px] w-[25px]"> end time</p>
                <div className="w-[240px]">
                  <EndTimePicker
                    openTimer={openTimer}
                    setOpenTimer={setOpenTimer}
                    control={control}
                  />
                  {errors.endTime && (
                    <p className="error"> {errors.endTime.message}</p>
                  )}
                </div>
              </div>
              {/* btns  */}
              <div className=" flex justify-between gap-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="hover:bg-gray-100 cursor-pointer  text-gray-500 text-[12px] lg:text-[0.8w] rounded-2xl border border-gray-500 w-37 px-3 py-1 hover:text-black/80"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  className="bg-[#132928]  text-[12px] lg:text-[0.8w] cursor-pointer hover:bg-[#375f5d] rounded-2xl w-37 px-3 py-1 text-white"
                >
                  {/* {profileEditMutation.isPending ? <Loader /> : "Save Changes"} */}
                  create schedule
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ScheduleModal;
