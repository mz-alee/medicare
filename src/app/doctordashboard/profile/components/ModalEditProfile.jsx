"use client";
import InputField from "@/app/components/InputField";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import Modal from "react-modal";
import { LuImagePlus } from "react-icons/lu";
import { getCookie } from "cookies-next";
const ModalEditProfile = ({
  // btnName,
  // handleAddseat,
  // register,
  // series,
  // errors,
  isOpen,
  setIsOpen,
  profileEditMutation,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);
  const handleProfileData = (data) => {
    console.log(data);
    
    profileEditMutation.mutate(data);
    // profileEditMutation.mutate({
    //   data: {
    //     id: 8,
        // user_details: {
    //       user_id: "aa4a0217-de64-4d17-bd7c-33f56a0b51a9",
    //       username: "Adnan",
    //       image: null,
    //       date_of_birth: "2001-02-24",
    //       gender: "Male",
    //       select_role: "therapist",
    //       email: "kab85903@gmail.com",
    //       phone_number: "03052038478",
    //       address: null,
    //       about: null,
    //     },
    //     // id: getCookie("user_id"),
    //   },
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
            height: "345px",
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
        <div className={`flex flex-col gap-2 text-sm   `}>
          <form
            className="flex flex-col gap-3"
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
              <h2 className="capitalize font-[500] text-[15px] lg:text-[1.1vw]   text-center ">
                upload your profile image
              </h2>
            </div>
            <div>
              <label
                htmlFor="profile"
                className="border-dashed hover:bg-gray-100 bg-gray-50 cursor-pointer border rounded-lg flex flex-col items-center justify-center gap-2 border-gray-300 h-30  w-full"
              >
                <LuImagePlus className="text-lg" />
                <p className="text-[12px]">
                  click or drag and drop to upload your file
                </p>
                <p className="text-gray-500 text-[12px]">PNG,JPG,SVG</p>
              </label>
              <input type="file" name="" id="profile" className="hidden" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-full">
                <div className="w-full flex items-center gap-3 ">
                  <p className=" capitalize text-[13px]"> username</p>
                  <InputField
                    register={register}
                    placeholder="username"
                    type="text"
                    name="username"
                  />
                </div>
                {/* {errors.addSeat && (
              <p className="error">{errors.addSeat.message}</p>
            )} */}
              </div>
              <div className="w-full">
                <div className="w-full flex items-center gap-3 ">
                  <p className=" capitalize text-[13px]"> profession</p>
                  <InputField
                    register={register}
                    placeholder="profession"
                    type="text"
                    name="profession"
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
                className="hover:bg-gray-100 cursor-pointer  text-gray-500 text-[12px] lg:text-[0.8w] rounded-2xl border border-gray-500 w-37 px-3 py-1 hover:text-black/80"
              >
                Discard
              </button>
              <button
                type="submit"
                className="bg-[#132928]  text-[12px] lg:text-[0.8w] cursor-pointer hover:bg-[#375f5d] rounded-2xl w-37 px-3 py-1 text-white"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalEditProfile;
