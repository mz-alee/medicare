"use client";
import InputField from "@/app/components/InputField";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import Modal from "react-modal";
import { useQuery } from "@tanstack/react-query";
import { TimeSlotGetAPi } from "@/app/Api";
import { setCookie } from "cookies-next";
import moment from "moment";
import Loader from "@/app/components/Loader";
import dayjs from "dayjs";
import { Datepicker } from "@/app/components/Datepicker";
const AppointmentModal = ({
  isOpen,
  setIsOpen,
  timeStamp,
  data,
  title,
  patientAppointmentPost,
  setDoctorID,
  refetch,
  timeStampLoding,
  doctorId,
  setSelectedDate,
  selectedDate,
  isLoading,
}) => {
  const [selectedBtn, setSelectedBtn] = useState("");
  const [selectDoctor, setSelectDoctor] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(false);
  const [indx, setIndx] = useState(null);
  const [dateValue, setDateValue] = useState(new Date());
  // const [doctorID, setDoctorID] = useState(null);

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      timeStamp: null,
    },
  });
  const value = getValues();
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);
  console.log("data///////////", data?.data?.results);
  useEffect(() => {
    const formattedDate = moment().format("YYYY-MM-DD");
    console.log("formated", formattedDate);

    // setSelectedDate(formattedDate);
    setValue("selectedDate", formattedDate);
  }, [setValue]);

  const handleData = (data) => {
    console.log("react hook from data", data);
    data.doctor = doctorId;
    data.appointment_type = selectedBtn;
    const date = selectedDate;
    const time = value.timeStamp;
    const combinedDateTimeString = `${date}T${time}`;
    const combinedDate = new Date(combinedDateTimeString);

    const momentDate = moment(combinedDate).format("YYYY-MM-DDTHH:mm:ss[Z]");
    data.date_time = momentDate;
    const mainData = {
      appointment_type: selectedBtn,
      date_time: momentDate,
      patient: value.patientName,
      doctor: doctorId,
    };

    patientAppointmentPost.mutate(mainData);
    // console.log("momentDate_____", momentDate);

    // patientAppointmentPost.mutate(data);
    // patientAppointmentPost.mutate({
    //   doctor: "ce99ddb9-f16d-4100-b384-d93ebcb8978d",
    //   patient: "heyfsadf",
    //   created_by: "05f85e09-c7f4-430b-8072-5131d7d35864",
    //   appointment_type: "regular check_up",
    //   phone_number: "03123456789",
    //   age: 28,
    //   gender: "male",
    //   email: "patient@example.com",
    //   blood_group: "A+",
    //   marital_status: "single",
    //   date_time: "2025-06-24T14:30:00Z",
    //   note: "Feeling mild chest pain",
    // });
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
            height: "540px",
            width: "380px",
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
        <div
          className={`flex flex-col gap-2 justify-between min-h-[400px] text-sm  `}
        >
          <div>
            <IoIosClose
              onClick={() => {
                setIsOpen(false);
              }}
              className="text-2xl"
            />
          </div>
          <div className="">
            {selectedDoctor && (
              <button
                onClick={() => {
                  setSelectedDoctor(false);
                }}
              >
                <IoIosArrowBack className="text-xl" />
              </button>
            )}

            <h2
              className={` capitalize  font-[500] justify-between text-[15px] italic lg:text-[1.1vw]   text-center `}
            >
              {!selectedDoctor ? "Select Doctor" : "  new appointment"}
            </h2>
          </div>
          <div className={`${!selectedDoctor ? "flex" : "hidden"}`}>
            <table className="border-separate border-spacing-y-2 w-full italic">
              <thead className="font-[500] text-[12px] capitalize text-gray-600 italic lg:text-[0.9vw]">
                <tr>
                  <div className="w-340px flex justify-between">
                    <th className="px-3 py-2  rounded-l-xl">Doctor name</th>
                    <th className="px-3 py-2 ">Address</th>
                    <th className="px-3 py-2 ">Phone number</th>
                    <th className="px-3 py-2  rounded-r-xl">View</th>
                  </div>
                </tr>
              </thead>
              <tbody className="text-white capitalize">
                <div className="min-h-[330px] hide-scrollbar overflow-y-scroll   ">
                  {isLoading ? (
                    <div className="text-black mt-40">
                      <Loader />
                    </div>
                  ) : !data?.data?.results ? (
                    <p className="text-black my-[50%] text-center">
                      doctors are not available
                    </p>
                  ) : (
                    data?.data?.results?.map((items, index) => (
                      <tr key={index} className="">
                        <div
                          onClick={() => {
                            setSelectDoctor(index);
                            setDoctorID(items.user_id);
                          }}
                          className={`${
                            selectDoctor === index
                              ? "bg-[#1e3837]"
                              : "bg-[#41797a] "
                          }  w-[340px]   cursor-pointer  rounded-xl shadow-lg hover:bg-[#1e3837] flex justify-between`}
                        >
                          <td className="px-3 py-2 rounded-l-xl">
                            {items.username}
                          </td>
                          <td className="px-3 py-2 ">
                            {items.address || "null"}
                          </td>
                          <td className="px-3 py-2 ">{items.phone_number}</td>
                          <td className="px-3 py-2 rounded-r-xl ">
                            <CiShare1 className="font-bold text-white text-lg" />
                          </td>
                        </div>
                      </tr>
                    ))
                  )}
                </div>
              </tbody>
            </table>
          </div>
          <form onSubmit={handleSubmit(handleData)}>
            <div
              className={`${
                selectedDoctor ? "flex" : "hidden"
              }  flex-col gap-1 `}
            >
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                    patient name
                  </p>
                  <InputField
                    register={register}
                    placeholder="patient name"
                    type="text"
                    name="patientName"
                  />
                  {/* {errors.type && <p className="error">{errors.type.message}</p>} */}
                </div>
              </div>
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                    Phone number
                  </p>
                  <InputField
                    register={register}
                    placeholder="phone number"
                    type="number"
                    name="phone_number"
                  />
                </div>
                {/* {errors.addSeat && (
              <p className="error">{errors.addSeat.message}</p>
            )} */}
              </div>
              <div className="flex gap-3 justify-center">
                <div className="w-1/2">
                  <div className="w-full  flex flex-col gap-1 items-start">
                    <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                      Date
                    </p>
                    <Datepicker
                      refetch={refetch}
                      value={selectedDate}
                      setValue={setSelectedDate}
                    />
                    {/* <input
                      {...register("date")}
                      placeholder="Date"
                      type="date"
                      value={dayjs()}
                      onChange={(e) => {
                        handleDate(e);
                        // setSelectedDate(value.date);
                      }}
                    /> */}
                    {/* {errors.category && (
                <p className="error">{errors.category.message}</p>
              )} */}
                  </div>
                  <div className="w-full py-2 px-2 flex flex-col justify-center gap-3 ">
                    <h1 className="capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                      appointment type
                    </h1>
                    <button
                      type="button"
                      onClick={() => setSelectedBtn("regular check_up")}
                      className={`${
                        selectedBtn === "regular check_up"
                          ? "bg-[#498382] text-white"
                          : "bg-gray-100"
                      } capitalize rounded text-[12px] text-gray-600 italic lg:text-[0.9vw] cursor-pointer h-10 w-full flex items-center justify-center`}
                    >
                      regular check up
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedBtn("urgent check_up")}
                      className={`${
                        selectedBtn === "urgent check_up"
                          ? "bg-[#498382] text-white"
                          : "bg-gray-100"
                      } capitalize rounded text-[12px] text-gray-600 italic lg:text-[0.9vw] cursor-pointer h-10 w-full flex items-center justify-center`}
                    >
                      urgent check up
                    </button>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="w-full  flex flex-col gap-1 items-start">
                    <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                      Time
                    </p>
                    <div className="border border-gray-300 text-gray-600 flex justify-center items-center text-[12px] lg:text-[0.9vw] capitalize  w-30 h-8 rounded">
                      {value.timeStamp || "select time"}
                    </div>
                  </div>
                  <div className="h-50 w-full flex flex-col gap-1 py-1 ">
                    <h1 className="text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                      available time slots
                    </h1>
                    {/* slots */}
                    <div className="w-full flex gap-1 h-[150px] overflow-y-scroll hide-scrollbar  justify-between flex-wrap">
                      {/* <div {...register("date_time")}> */}
                      {timeStampLoding ? (
                        <div className="ml-15 mt-18">
                          <Loader />
                        </div>
                      ) : timeStamp?.data?.available_slots.length === 0 ? (
                        <p className="text-[12px] lg:text-[0.9vw] text-gray-600 mt-10 text-center">
                          select another date appointments are not available
                        </p>
                      ) : (
                        timeStamp?.data?.available_slots?.map(
                          (items, index) => {
                            return (
                              <button
                                value={items}
                                type="button"
                                onClick={() => {
                                  setIndx(index);
                                  setValue("timeStamp", items);
                                }}
                                key={index}
                                className={`${
                                  indx === index
                                    ? "bg-[#498382] text-white "
                                    : "bg-gray-100 "
                                } rounded  text-[12px] text-gray-600  italic lg:text-[0.9vw] cursor-pointer h-10 w-18 flex items-center justify-center`}
                              >
                                {items}
                              </button>
                            );
                          }
                        ) || "slots not available"
                      )}
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {selectedDoctor && (
              <div className=" flex justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className=" text-gray-500 text-[12px] lg:text-[0.8w] rounded-2xl border border-gray-500 w-37 px-3 py-1 hover:text-black/80"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    // setSelectedDoctor("true");
                  }}
                  // onClick={handleAddseat}
                  className="bg-[#132928] text-[12px] lg:text-[0.8w] cursor-pointer hover:bg-[#375f5d] rounded-2xl w-37 px-3 py-1 text-white"
                >
                  {patientAppointmentPost.isPending ? (
                    <Loader />
                  ) : (
                    "Create Appointment"
                  )}
                </button>
              </div>
            )}
          </form>
          {/* btns  */}
          {!selectedDoctor && (
            <div className=" flex justify-between">
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className=" text-gray-500 text-[12px] lg:text-[0.8w] rounded-2xl border border-gray-500 w-37 px-3 py-1 hover:text-black/80"
              >
                Discard
              </button>
              <button
                type="type"
                onClick={() => {
                  if (doctorId) {
                    setSelectedDoctor("true");
                    refetch();
                  }
                }}
                // onClick={handleAddseat}
                className="bg-[#132928] text-[12px] lg:text-[0.8w] cursor-pointer hover:bg-[#375f5d] rounded-2xl w-37 px-3 py-1 text-white"
              >
                {/* {!selectedDoctor ? "Next" : "Save Changes"} */}
                select doctor
              </button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default AppointmentModal;
