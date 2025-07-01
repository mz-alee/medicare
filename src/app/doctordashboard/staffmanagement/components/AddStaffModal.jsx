"use client";
import InputField from "@/app/components/InputField";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import Modal from "react-modal";
import moment from "moment";
import Loader from "@/app/components/Loader";
import { Datepicker } from "@/app/components/Datepicker";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getCookie } from "cookies-next";
import { Dropdown } from "../../components/Dropdown";
import { useQuery } from "@tanstack/react-query";
import { StaffListGetApi } from "@/app/Api";
import MyDateRangePicker from "@/app/components/DateRangePicker";
import TimePicker from "@/app/components/TimeRangePicker";
const AddStaffSchema = yup.object({
  // Staff_name: yup.string().required("staff name is a required field"),
  // phone_number: yup.string().required("phone number is a required field"),
  duty: yup.string().required("duty is a required field"),
});
const AddStaffModal = ({
  isOpen,
  setIsOpen,
  // data,
  createStaffMutation,
  setStaffID,
  staffId,
  // isLoading,
}) => {
  const [selectDoctor, setSelectDoctor] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(false);
  const [role, setRole] = React.useState("");
  const [timeValue, setTimeValue] = useState(["8:00", "05:00"]);

  const { data, isLoading } = useQuery({
    queryKey: ["staff list"],
    queryFn: StaffListGetApi,
    retry: false,
    onSuccess: (data) => {
      // console.log(data);
    },
    onError: (error) => {
      console.log("staff list get api error", error);
    },
  });

  const {
    register,
    setValue,
    reset,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddStaffSchema),
    mode: "onChange",
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

    setValue("selectedDate", formattedDate);
  }, [setValue]);

  const handleData = (data) => {
    console.log("react hook from data", data);
    data.staff = staffId;
    data.doctor = getCookie("user_id");
    data.staff_role = role;
    createStaffMutation.mutate(data);
  };
  useEffect(() => {
    if (createStaffMutation.isSuccess) {
      reset();
      setIsOpen(false);
      setSelectedStaff(false);
      setStaffID("");
    }
  }, [createStaffMutation.isSuccess]);

  console.log("error", errors);
  console.log(timeValue);

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
            minheight: "465px",
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
        <div className={`flex flex-col  gap-2 justify-between  text-sm  `}>
          <div>
            <IoIosClose
              onClick={() => {
                setIsOpen(false);
              }}
              className="text-2xl "
            />
          </div>
          <div className="">
            {selectedStaff && (
              <button
                onClick={() => {
                  setSelectedStaff(false);
                }}
              >
                <IoIosArrowBack className="text-xl" />
              </button>
            )}

            <h2
              className={` capitalize  font-[500] justify-between  text-[15px] italic lg:text-[1.1vw]   text-center `}
            >
              {!selectedStaff ? "Select Staff" : "  Add New Staff"}
            </h2>
          </div>
          <div className={`${!selectedStaff ? "flex" : "hidden"}`}>
            {
              <table className="border-separate border-spacing-y-2 w-full italic">
                <thead className="font-[500] text-[12px] capitalize text-gray-600 italic lg:text-[0.9vw]">
                  <tr>
                    <div className="w-340px flex justify-between">
                      <th className="px-3 py-2  rounded-l-xl">staff name</th>
                      <th className="px-3 py-2 ">Address</th>
                      <th className="px-3 py-2 ">Phone number</th>
                      <th className="px-3 py-2  rounded-r-xl">View</th>
                    </div>
                  </tr>
                </thead>
                <tbody className="text-white capitalize">
                  <div className="min-h-[260px] hide-scrollbar overflow-y-scroll   ">
                    {isLoading ? (
                      <div className="text-black mt-40">
                        <Loader />
                      </div>
                    ) : data?.data?.results.length === 0 ||
                      !data?.data?.results ? (
                      <p className="text-black my-[50%] text-center">
                        staff are not available
                      </p>
                    ) : (
                      data?.data?.results?.map((items, index) => (
                        <tr key={index} className="">
                          <div
                            onClick={() => {
                              setSelectDoctor(index);
                              setStaffID(items.user_id);
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
            }
          </div>
          <form
            className=" flex flex-col gap-3"
            onSubmit={handleSubmit(handleData)}
          >
            <div
              className={`${
                selectedStaff ? "flex" : "hidden"
              }  flex-col gap-1 `}
            >
              <div className="w-full">
                <div className="w-full mt-3 flex flex-col gap-1 items-start">
                  {/* <p className=" capitalize text-[12px]  text-gray-800 italic lg:text-[0.9vw]">
                    role
                  </p> */}
                  <Dropdown role={role} setRole={setRole} data={data} />
                  {/* <InputField
                    register={register}
                    placeholder="role"
                    type="text"
                    name="staff_role"
                  /> */}
                </div>
                {errors.staff_role && (
                  <p className="error">{errors.staff_role.message}</p>
                )}
              </div>
              {/* <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                    select date
                  </p>
                  <MyDateRangePicker />
                </div>
                {/* {errors.duty && <p className="error">{errors.duty.message}</p>} */}
              {/* </div>  */}
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                    select time
                  </p>
                  <TimePicker
                    timeValue={timeValue}
                    setTimeValue={setTimeValue}
                  />
                </div>
                {/* {errors.duty && <p className="error">{errors.duty.message}</p>} */}
              </div>
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                    duty
                  </p>
                  <InputField
                    register={register}
                    placeholder="duty"
                    type="text"
                    name="duty"
                  />
                </div>
                {errors.duty && <p className="error">{errors.duty.message}</p>}
              </div>
            </div>
            {selectedStaff && (
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
                  onClick={() => {}}
                  className="bg-[#132928] text-[12px] lg:text-[0.8w] cursor-pointer hover:bg-[#375f5d] rounded-2xl w-37 px-3 py-1 text-white"
                >
                  {/* {patientAppointmentPost.isPending ? (
                    <Loader />
                  ) : (
                  )} */}
                  {isLoading ? <Loader /> : "Add Staff"}
                </button>
              </div>
            )}
          </form>
          {/* btns  */}
          {!selectedStaff && (
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
                  if (staffId) {
                    setSelectedStaff("true");
                  }
                }}
                className="bg-[#132928] text-[12px] lg:text-[0.8w] cursor-pointer hover:bg-[#375f5d] rounded-2xl w-37 px-3 py-1 text-white"
              >
                select staff
              </button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default AddStaffModal;
