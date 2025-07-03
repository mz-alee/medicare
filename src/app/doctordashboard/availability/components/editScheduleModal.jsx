"use client";
import InputField from "@/app/components/InputField";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import Modal from "react-modal";
import { LuImagePlus } from "react-icons/lu";
import { getCookie } from "cookies-next";
import Loader from "@/app/components/Loader";
import { Dropdown } from "../../components/Dropdown";
import { ScheduleDropdown } from "./ScheduleDropdown";
import { toast, ToastContainer } from "react-toastify";
import { EditScheduleDropdown } from "./editScheduleDropdown";
const EditScheduleModal = ({
  isOpen,
  setIsOpen,
  EditSchedule,
  data,
  day,
  startTime,
  endTime,
  scheduleId,
}) => {
  const [selectedDay, setSelectedDay] = useState("");
  console.log(startTime, endTime);

  const {
    handleSubmit,
    setValue,
    reset,
    getValues,
    watch,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  const value = getValues();
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  useEffect(() => {
    if (startTime) {
      setValue("start_time", startTime);
      setValue("end_time", endTime);
    }
  }, [startTime]);

  const handleProfileData = (data) => {
    data.day = day;
    data.id = scheduleId;
    const formData = data;
    console.log("form data", formData);

    EditSchedule.mutate(data);
  };

  return (
    <div>
      <ToastContainer />
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="My Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1000,
          },
          content: {
            height: "260px",
            width: "350px",
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
            onSubmit={handleSubmit(handleProfileData)}
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
                edit Schedule
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full">
                <div className="w-full flex items-center gap-3 ">
                  <p className=" capitalize text-[13px]"> Day</p>
                  <EditScheduleDropdown
                    day={day}
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                  />
                </div>
                {/* {errors.addSeat && (
              <p className="error">{errors.addSeat.message}</p>
            )} */}
              </div>
              <div className="w-full  flex items-center gap-3 ">
                <p className=" capitalize text-[13px]"> start time</p>
                <input
                  {...register("start_time")}
                  // defaultValue={start_time}
                  className=" w-full border border-gray-300 rounded-sm py-1 px-2"
                  onChange={(e) => {
                    setValue("start_time", e.target.value);
                    console.log(data?.data?.start_time);
                  }}
                  type="time"
                  name=""
                  id=""
                />
                <div className="w-full"></div>
              </div>
              <div className="w-full flex items-center gap-3 ">
                <p className=" capitalize text-[13px]"> end time</p>
                <input
                  {...register("end_time")}
                  className="w-full border border-gray-300 rounded-sm py-1 px-2"
                  // defaultValue={endTime}
                  onChange={(e) => {
                    setValue("end_time", e.target.value);
                  }}
                  type="time"
                  name=""
                  id=""
                />
                <div className="w-full"></div>
              </div>
              {/* btns  */}
              <div className=" flex justify-between">
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
                  {EditSchedule.isPending ? <Loader /> : "Save Changes"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditScheduleModal;
