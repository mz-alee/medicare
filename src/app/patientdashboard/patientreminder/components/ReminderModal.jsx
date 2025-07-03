"use client";
import InputField from "@/app/components/InputField";
import Loader from "@/app/components/Loader";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import Modal from "react-modal";
import * as yup from "yup";
const reminderSchema = yup.object({
  appointment: yup.string().required("Appointment key is a required field"),
  date: yup.string().required("Date is a required field"),
  reminder_time: yup.string().required("Time is a required field"),
});
const ReminderModal = ({
  // btnName,
  // handleAddseat,
  // register,
  // series,
  // errors,
  isOpen,
  setIsOpen,
  title,
  PatientReminder,
}) => {
  const [selectedBtn, setSelectedBtn] = useState("");
  const [indx, setIndx] = useState(null);
  const {
    handleSubmit,
    setValue,
    getValues,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(reminderSchema),
    defaultValues: {},
  });
  const value = getValues();
  console.log(errors);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);
  const handleData = (data) => {
    const combined = `${data.date}T${data.reminder_time}`;
    const datetime =
      moment.utc(combined).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z";
    console.log(datetime);
    const payload = {
      appointment: data.appointment,
      datetime: datetime,
    };
    PatientReminder.mutate(payload);
    console.log("react hook form data", data);
  };
  useEffect(() => {
    if (PatientReminder.isSuccess) {
      reset();
    }
    console.log("/////// reset ");
  }, [PatientReminder.isSuccess]);
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
            <h2 className="capitalize mb-3 font-[500] text-[15px] lg:text-[1.1vw]   text-center ">
              appointment reminder
            </h2>
            <div className="flex  flex-col gap-2">
              {/* <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                    Doctor name
                  </p>
                  <InputField
                    register={register}
                    placeholder="Doctor Name"
                    type="text"
                    name="Doctor_name"
                  />
                </div>
              </div> */}
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                    Appointment key
                  </p>
                  <InputField
                    register={register}
                    placeholder="Appointment Key"
                    type="number"
                    name="appointment"
                  />
                  {errors.appointment && (
                    <p className="error">{errors.appointment.message}</p>
                  )}
                </div>
              </div>
              {/* <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                    location
                  </p>
                  <InputField
                    register={register}
                    placeholder="Location"
                    type="text"
                    name="location"
                  />
                </div>
               
              </div> */}
              <div className="w-full">
                <div className="w-full  flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                    Date
                  </p>
                  <InputField
                    register={register}
                    placeholder="Date"
                    type="date"
                    name="date"
                  />
                  {errors.date && (
                    <p className="error">{errors.date.message}</p>
                  )}
                </div>
              </div>
              <div className="w-full">
                <div className="w-full  flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                    Time
                  </p>
                  <input
                    {...register("reminder_time")}
                    type="time"
                    className="border  border-gray-300 w-full rounded-sm px-2 py-1 outline-none"
                    onChange={(e) => {
                      setValue("reminder_time", e.target.value, {
                        shouldValidate: true,
                      });
                    }}
                  />
                  {errors.reminder_time && (
                    <p className="error">{errors.reminder_time.message}</p>
                  )}
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
                {PatientReminder.isPending ? <Loader color="white" /> : "Add"}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ReminderModal;
