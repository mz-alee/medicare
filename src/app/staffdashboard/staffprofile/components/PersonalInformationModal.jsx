"use client";
import { Datepicker } from "@/app/components/Datepicker";
import InputField from "@/app/components/InputField";
import Loader from "@/app/components/Loader";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import Modal from "react-modal";
import * as yup from "yup";
const personalSchema = yup.object({
  username: yup.string().required("username is a required field"),
  phone_number: yup.string().required("phone number is a required field"),
  date_of_birth: yup.string().required("date of birth is a required field"),
});

const PersonalInformationModal = ({
  // btnName,
  // handleAddseat,
  // register,
  // series,
  // errors,
  isOpen,
  setIsOpen,
  profileEditMutation,
  data,
}) => {
  const {
    handleSubmit,
    setValue,
    getValues,
    control,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalSchema),
    defaultValues: {},
  });

  // console.log("real data******", data?.data?.user_details);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const handlePersonalProfile = (data) => {
    console.log(data);
    profileEditMutation.mutate(data);
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
        <form onSubmit={handleSubmit(handlePersonalProfile)}>
          <div className={`flex flex-col gap-3 text-sm   `}>
            <div>
              <IoIosClose
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-2xl"
              />
            </div>
            <h2 className="capitalize font-[500] text-[15px] lg:text-[1.1vw]   text-center ">
              Personal Information
            </h2>
            {/* select option  */}
            <div className="flex flex-col gap-1">
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] lg:text-[0.9vw] italic">
                    Full Name
                  </p>
                  <InputField
                    register={register}
                    placeholder="Full Name"
                    type="text"
                    name="username"
                    values={data?.data?.user_details?.username}
                  />
                  {errors.username && (
                    <p className="error">{errors.username.message}</p>
                  )}
                </div>
              </div>

              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] lg:text-[0.9vw] italic">
                    Phone Number
                  </p>
                  <InputField
                    register={register}
                    placeholder="Phone Number"
                    type="number"
                    name="phone_number"
                    values={data?.data?.user_details?.phone_number}
                  />
                  {errors.phone_number && (
                    <p className="error">{errors.phone_number.message}</p>
                  )}
                </div>
              </div>
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] lg:text-[0.9vw] italic">
                    Date of Birth
                  </p>
                  <InputField
                    register={register}
                    placeholder="Date of Birth"
                    type="date"
                    name="date_of_birth"
                    values={moment(data?.data?.user_details?.date_of_birth).format("YYYY-MM-DD")}

                    // values={moment(
                    //   data?.data?.user_details?.date_of_birth
                    // ).format("YYYY-DD-MM")}
                  />
                  {errors.date_of_birth && (
                    <p className="error">{errors.date_of_birth.message}</p>
                  )}
                </div>
              </div>
              <div className="w-full">
                <div className="w-full  flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] lg:text-[0.9vw] italic">
                    Gender
                  </p>
                  <select
                    className="border border-gray-300 rounded p-1 text-[12px] text-gray-600 w-full"
                    name=""
                    id=""
                  >
                    <option value={data?.data?.user_details?.gender || ""}>
                      {data?.data?.user_details?.gender || "select your gender"}{" "}
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {/* {errors.category && (
                <p className="error">{errors.category.message}</p>
              )} */}
                </div>
              </div>
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] lg:text-[0.9vw] italic">
                    address
                  </p>
                  <InputField
                    register={register}
                    placeholder="address"
                    type="text"
                    name="address"
                    values={data?.data?.user_details?.address}
                  />
                </div>
              </div>
            </div>
            {/* btns  */}
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
                type="submit"
                // onClick={handleAddseat}
                className="bg-[#132928] text-[12px] lg:text-[0.8w] cursor-pointer hover:bg-[#375f5d] rounded-2xl w-37 px-3 py-1 text-white"
              >
                {profileEditMutation.isPending ? <Loader /> : "Save Changes"}
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default PersonalInformationModal;
