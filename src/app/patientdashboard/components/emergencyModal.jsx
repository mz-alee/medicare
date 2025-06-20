"use client";
import InputField from "@/app/components/InputField";
import Loader from "@/app/components/Loader";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import Modal from "react-modal";
const EmergencyModal = ({ isOpen, setIsOpen, data, PatientEmergency }) => {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const handleData = (data) => {
    console.log(data);

    PatientEmergency.mutate(data);
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
        <div className={`flex flex-col gap-2 text-sm `}>
          <form onSubmit={handleSubmit(handleData)}>
            <div>
              <IoIosClose
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-2xl"
              />
            </div>
            <h2 className="capitalize font-[500] text-[15px] lg:text-[1.1vw]   text-center ">
              emergency contact
            </h2>
            {/* select option  */}
            <div className="flex flex-col gap-1">
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[13px]">Full Name</p>
                  <InputField
                    register={register}
                    placeholder="Full Name"
                    type="text"
                    name="full_name"
                    values={data?.data?.emergency_contact_details?.full_name}
                  />
                  {/* {errors.type && <p className="error">{errors.type.message}</p>} */}
                </div>
              </div>
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[13px]"> relation</p>
                  <InputField
                    register={register}
                    placeholder="relation"
                    type="text"
                    name="relation"
                    values={data?.data?.emergency_contact_details?.relation}
                  />
                </div>
                {/* {errors.addSeat && (
              <p className="error">{errors.addSeat.message}</p>
            )} */}
              </div>
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[13px]"> Phone Number</p>
                  <InputField
                    register={register}
                    placeholder="Phone Number"
                    type="number"
                    name="phone_number"
                    values={data?.data?.emergency_contact_details?.phone_number}
                  />
                </div>
              </div>
              {/* series  */}
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[13px]"> adress</p>
                  <InputField
                    register={register}
                    placeholder="adress"
                    type="text"
                    name="address"
                    values={data?.data?.emergency_contact_details?.address}
                  />
                  {/* {errors.category && (
                <p className="error">{errors.category.message}</p>
              )} */}
                </div>
              </div>
              <div className="w-full">
                <div className="w-full  flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[13px]"> email</p>
                  <InputField
                    register={register}
                    placeholder="email"
                    type="email"
                    name="email"
                    values={data?.data?.emergency_contact_details?.email}
                  />
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
                {PatientEmergency.isPending ? <Loader /> : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EmergencyModal;
