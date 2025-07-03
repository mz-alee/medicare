"use client";
import InputField from "@/app/components/InputField";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import Modal from "react-modal";
import { LuImagePlus } from "react-icons/lu";
import { getCookie } from "cookies-next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Loader from "@/app/components/Loader";
const awardSchema = yup.object({
  award_name: yup.string().required("publish Title is Required Field"),
  organization: yup.string().required("journal is Required Field"),
  receive_date: yup.string().required("Date  is Required Field"),
});
const AwardModal = ({
  isOpen,
  setIsOpen,
  AwardMutation,
  AwardEditMutation,
  isEdit,
}) => {
  const [file, setFile] = useState();
  const {
    handleSubmit,
    setValue,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(awardSchema),
    defaultValues: {
      award_name: "",
      organization: "",
      receive_date: "",
    },
  });

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);
  const handleImage = (e) => {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setFile(imageURL);
    setValue("award_attachment", imageURL);
    console.log(imageURL);
  };

  const handleProfileData = (data) => {
    if (isEdit === "upload") {
      AwardMutation.mutate(data);
    } else {
      data.id = isEdit.id;
      AwardEditMutation.mutate(data);
    }
    setTimeout(() => {
      reset();
    }, 1000);
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
            minheight: "76vh",
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
              <h2 className="capitalize font-[500] text-[16px] lg:text-[1.3vw]   text-center ">
                {isEdit === "upload" ? "Award " : "Edit Award"}
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-full">
                <div className="w-full flex flex-col   ">
                  <p className=" capitalize text-[12px]"> award name</p>
                  <InputField
                    register={register}
                    placeholder="award name"
                    type="text"
                    name="award_name"
                  />
                </div>
                {errors.award_name && (
                  <p className="error">{errors.award_name.message}</p>
                )}
              </div>
              <div className="w-full">
                <div className="w-full flex flex-col ">
                  <p className=" capitalize text-[12px]">
                    Issuing Organization
                  </p>
                  <InputField
                    register={register}
                    placeholder="Issuing Organization"
                    type="text"
                    name="organization"
                  />
                  {errors.organization && (
                    <p className="error">{errors.organization.message}</p>
                  )}
                </div>
              </div>
              <div className="w-full">
                <div className="w-full flex flex-col ">
                  <p className=" capitalize text-[12px]"> Date Recieved</p>
                  <InputField
                    register={register}
                    placeholder="Date Recieved"
                    type="date"
                    name="receive_date"
                  />
                  {errors.receive_date && (
                    <p className="error">{errors.receive_date.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="profile"
                className="border-dashed hover:bg-gray-100 bg-gray-50 cursor-pointer border rounded-lg flex flex-col items-center justify-center gap-2 border-gray-300 h-30  w-full"
              >
                {!file && (
                  <>
                    <LuImagePlus className="text-lg" />
                    <p className="text-[12px]">
                      click or drag and drop to upload your file
                    </p>
                    <p className="text-gray-500 text-[12px]">PNG,JPG,SVG</p>
                  </>
                )}

                {file && (
                  <div className="bg-gray-400 rounded-full overflow-hidden w-25 h-25 flex justify-center items-center">
                    <Image
                      src={file}
                      alt="srf"
                      width={60}
                      height={60}
                      className="object-fit "
                    />
                  </div>
                )}
              </label>
              <input
                {...register("certificate_attachment")}
                type="file"
                onChange={handleImage}
                name="award_attachment"
                id="profile"
                className="hidden"
              />
            </div>
            {/* btns  */}
            <div className=" flex justify-center gap-2 ">
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
                {AwardEditMutation.isPending || AwardMutation.isPending ? (
                  <Loader />
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AwardModal;
