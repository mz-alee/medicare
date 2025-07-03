"use client";
import { Datepicker } from "@/app/components/Datepicker";
import InputField from "@/app/components/InputField";
import { Timepicker } from "@/app/components/Timepicker";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import Modal from "react-modal";
import * as yup from "yup";
const reminderSchema = yup.object({
  medicine_name: yup.string().required("medicine name is a required field"),
  dosage: yup.string().required("dosage is a required field"),
  appointment: yup.string().required("appointment key  is a required field"),
});
const MedicationReminderModal = ({
  isOpen,
  setIsOpen,
  title,
  MedicationReminder,
}) => {
  const [dateValue, setDateValue] = useState(new Date());
  const [timeValue, setTimeValue] = useState(moment());
  const {
    handleSubmit,
    reset,
    setValue,
    getValues,
    control,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(reminderSchema),
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
    MedicationReminder.mutate(data);
  };
  useEffect(() => {
    if (MedicationReminder.isSuccess) {
      reset();
    }
  }, [MedicationReminder.isSuccess]);
  console.log(errors);

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
            minheight: "500px",
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
        <div className={`flex flex-col  text-sm `}>
          <div>
            <IoIosClose
              onClick={() => {
                setIsOpen(false);
              }}
              className="text-2xl"
            />
          </div>
          <form onSubmit={handleSubmit(handleData)}>
            <h2 className="italic capitalize mb-3 font-[500] text-[15px] lg:text-[1.1vw]   text-center ">
              medication reminder
            </h2>
            <div className="flex  flex-col gap-2">
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                    Medicine name
                  </p>
                  <InputField
                    register={register}
                    placeholder="Medicine Name"
                    type="text"
                    name="medicine_name"
                  />
                  {errors.medicine_name && (
                    <p className="error">{errors.medicine_name.message}</p>
                  )}
                </div>
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                    Appointment key
                  </p>
                  <InputField
                    register={register}
                    placeholder="Appointment key"
                    type="number"
                    
                    name="appointment"
                  />
                  {errors.appointment && (
                    <p className="error">{errors.appointment.message}</p>
                  )}
                </div>
              </div>
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                    Dosage MG
                  </p>
                  <InputField
                    register={register}
                    placeholder="Dosage MG"
                    type="text"
                    name="dosage"
                  />
                  {errors.dosage && (
                    <p className="error">{errors.dosage.message}</p>
                  )}
                </div>
              </div>
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
                </div>
                {/* {errors.date && <p className="error">{errors.date.message}</p>} */}
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

export default MedicationReminderModal;
