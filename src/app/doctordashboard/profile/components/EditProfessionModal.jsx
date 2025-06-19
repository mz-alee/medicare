"use client";
import { profileProfessionApi } from "@/app/Api";
import InputField from "@/app/components/InputField";
import Loader from "@/app/components/Loader";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import Modal from "react-modal";
import { toast } from "react-toastify";
const EditProfessionModal = ({
  // btnName,
  // handleAddseat,
  // register,
  // series,
  // errors,
  isOpen,
  setIsOpen,
  data,
}) => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);
  const queryClient = useQueryClient();

  const professionMutation = useMutation({
    mutationFn: (data) => profileProfessionApi(data),
    onSuccess: (data) => {
      toast("data changes successfully");
      queryClient.invalidateQueries(["proffesion"]);

      setIsOpen(false);
    },
    onError: (error) => {
      console.log("professional error", error);
    },
  });
  const handleData = (data) => {
    professionMutation.mutate(data);
    console.log(getCookie("token"));
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
        <div className={`flex flex-col gap-3 text-sm   `}>
          <div>
            <IoIosClose
              onClick={() => {
                setIsOpen(false);
              }}
              className="text-2xl"
            />
            <h2 className="capitalize font-[500] text-[15px] lg:text-[1.1vw]   text-center ">
              professional information
            </h2>
          </div>

          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(handleData)}
          >
            <div className="flex flex-col gap-1">
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[13px]">Profession</p>
                  <InputField
                    register={register}
                    placeholder="Profession"
                    type="text"
                    name="profession"
                    values={data?.data?.profession_details?.profession}
                  />
                  {/* {errors.type && <p className="error">{errors.type.message}</p>} */}
                </div>
              </div>
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[13px]"> specialization</p>
                  <InputField
                    register={register}
                    placeholder="specialization"
                    values={data?.data?.profession_details?.specialization}
                    type="text"
                    name="specialization"
                  />
                </div>
                {/* {errors.addSeat && (
              <p className="error">{errors.addSeat.message}</p>
            )} */}
              </div>
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[13px]"> clinic/hospital</p>
                  <InputField
                    register={register}
                    placeholder="Clinic/Hospital"
                    type="text"
                    name="clinic_name"
                    values={data?.data?.profession_details?.clinic_name}
                  />
                </div>
              </div>
              {/* series  */}
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[13px]">
                    clinic/hospital address
                  </p>
                  <InputField
                    register={register}
                    placeholder="Clinic/Hospital address"
                    type="text"
                    name="clinic_address"
                    values={data?.data?.profession_details?.clinic_address}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="w-full flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[13px]">your note</p>
                  <input
                    {...register("your_note")}
                    className="border border-gray-300 w-full text-[12px] lg:text-[0.8vw]  py-2 px-3   rounded outline-none text-gray-600 "
                    type="text"
                    defaultValue={data?.data?.profession_details?.your_note}
                  />
                  {/* <InputField
                  register={register}
                  placeholder="your note"
                  type="text"
                  name="hospital"
                /> */}
                </div>
              </div>
            </div>
            {/* btns  */}
            <div className=" flex gap-2 justify-center w-full">
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
                // onClick={handleAddseat}
                className="bg-[#132928] text-[12px] lg:text-[0.8w] cursor-pointer hover:bg-[#375f5d] rounded-2xl w-37 px-3 py-1 text-white"
              >
                {professionMutation.isPending ? <Loader /> : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditProfessionModal;
