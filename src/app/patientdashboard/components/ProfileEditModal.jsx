"use client";
import InputField from "@/app/components/InputField";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import Modal from "react-modal";
import { LuImagePlus } from "react-icons/lu";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Loader from "@/app/components/Loader";
import { PatientprofileEditApi } from "@/app/Api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const profileSchema = yup.object().shape({
  username: yup.string().required("username is a required field"),
});
const ModalEditProfile = ({ isOpen, setIsOpen, PatientProfileEdit, data }) => {
  const [file, setFile] = useState();

  const {
    handleSubmit,
    watch,
    setValue,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      image: null,
    },
  });
  console.log(file);
  const value = getValues();
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);
  const handleImage = (e) => {
    const img = e.target.files[0];
    const imageURL = URL.createObjectURL(img);
    setValue("image", img);
    setFile(imageURL);
    console.log(img);
  };
  const handleProfileData = (data) => {
    const formData = data;
    if (formData.image) {
      PatientProfileEdit.mutate(data);
    } else {
      const username = { username: data.username };
      PatientProfileEdit.mutate(username);
    }
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
            height: "55vh",
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
        <div
          className={`flex flex-col justify-between  h-full gap-3 text-sm   `}
        >
          <form
            className="flex flex-col justify-between  h-full gap-3"
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
                {file || data?.data?.user_details?.image ? (
                  <div className="bg-gray-400 rounded-full overflow-hidden w-25 h-25 flex justify-center items-center">
                    <Image
                      src={file || data?.data?.user_details?.image}
                      alt="srf"
                      width={60}
                      height={60}
                      className="object-fit "
                    />
                  </div>
                ) : (
                  <>
                    <LuImagePlus className="text-lg" />
                    <p className="text-[12px]">
                      click or drag and drop to upload your file
                    </p>
                    <p className="text-gray-500 text-[12px]">PNG,JPG,SVG</p>
                  </>
                )}
              </label>
              <input
                type="file"
                name=""
                id="profile"
                onChange={handleImage}
                className="hidden"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-full">
                <div className="w-full flex items-center gap-3 ">
                  <p className=" capitalize text-[13px]"> username</p>
                  <div className="flex flex-col w-full">
                    <InputField
                      register={register}
                      placeholder="username"
                      type="text"
                      name="username"
                      values={data?.data?.user_details?.username}
                    />
                    {errors.username && (
                      <p className="error">{errors.username.message}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* btns  */}
            <div className=" flex gap-2 justify-between">
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
                {PatientProfileEdit.isPending ? <Loader /> : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalEditProfile;
