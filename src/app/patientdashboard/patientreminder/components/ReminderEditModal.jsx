"use client";
import { Datepicker } from "@/app/components/Datepicker";
import InputField from "@/app/components/InputField";
import { Timepicker } from "@/app/components/Timepicker";
import dayjs from "dayjs";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import Modal from "react-modal";
const ReminderEditModal = ({
  isOpen,
  setIsOpen,
  name,
  // MedicationReminder,
}) => {
  const [dateValue, setDateValue] = useState(new Date());
  const [timeValue, setTimeValue] = useState(moment());
  const MedicationReminder = [];
  const {
    handleSubmit,
    reset,
    setValue,
    getValues,
    control,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  const value = getValues();
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);
  const handleData = (data) => {
    const combinedDateTime = moment(dateValue).set({
      hour: moment(timeValue).hour(),
      minute: moment(timeValue).minute(),
      second: 0,
      millisecond: 0,
    });
    const momentDate = moment(combinedDateTime).format(
      "YYYY-MM-DDTHH:mm:ss[Z]"
    );
    data.date_time = momentDate;
    data.appointment = 6;
    MedicationReminder.mutate(data);
  };

  return (
    <div>
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
            height: "450px",
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
        <div className={`flex flex-col   text-sm `}>
          <div>
            <IoIosClose
              onClick={() => {
                setIsOpen(false);
              }}
              className="text-2xl"
            />
          </div>
          <h2 className="italic capitalize mb-3 font-[500] text-[15px] lg:text-[1.1vw]   text-center ">
            {name}
          </h2>
          <form
            className="flex flex-col justify-between  h-[350px]"
            onSubmit={handleSubmit(handleData)}
          >
            <div className="flex  flex-col gap-2">
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                    date
                  </p>
                  <Datepicker
                    control={control}
                    value={dateValue}
                    setValue={setDateValue}
                  />
                  {/* <InputField
                    register={register}
                    placeholder="date"
                    type="date"
                    name="date"
                  /> */}
                </div>
                {/* {errors.addSeat && (
              <p className="error">{errors.addSeat.message}</p>
            )} */}
              </div>
              <div className="w-full">
                <div className="w-full  flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                    time
                  </p>
                  <Timepicker value={timeValue} setValue={setTimeValue} />
                  {/* <InputField
                    register={register}
                    placeholder="Time"
                    type="time"
                    name="time"
                  /> */}
                  {/* {errors.category && (
                <p className="error">{errors.category.message}</p>
              )} */}
                </div>
              </div>
            </div>
            {/* btns  */}
            <div className=" flex mt-4 justify-between">
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className=" text-gray-500 text-[12px] lg:text-[0.8w] rounded-2xl border border-gray-500 w-37 px-3 py-1 hover:text-black/80"
              >
                Discard
              </button>
              <button
                type="submit"
                // onClick={handleAddseat}
                className="bg-[#132928] text-[12px] lg:text-[0.8w] cursor-pointer hover:bg-[#375f5d] rounded-2xl w-37 px-3 py-1 text-white"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ReminderEditModal;
