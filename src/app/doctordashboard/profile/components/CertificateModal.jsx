"use client";
import InputField from "@/app/components/InputField";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import Modal from "react-modal";
import { LuImagePlus } from "react-icons/lu";
import { getCookie } from "cookies-next";
import Image from "next/image";
// import * as yup from "yup"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import Loader from "@/app/components/Loader";

const certificateSchema = yup.object({
  certificate_title: yup
    .string()
    .required("Certificate Title is Required Field"),
  organization: yup.string().required("organization  is Required Field"),
  date_issued: yup.string().required("Date  is Required Field"),
});
const CertificateModal = ({
  isOpen,
  setIsOpen,
  certificateMutation,
  isEdit,
  certificateEditMutation,
}) => {
  const [file, setFile] = useState();
  const {
    handleSubmit,
    setValue,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(certificateSchema),
    defaultValues: {
      certificate_title: "",
      organization: "",
      date_issued: "",
      certificate_attachment: null,
    },
  });

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);
  const handleImage = (e) => {
    const data = e.target.files[0];
    const imageURL = URL.createObjectURL(data);
    setFile(imageURL);
    setValue("certificate_attachment", data);
  };

  const handleProfileData = (data) => {
    if (isEdit === "upload") {
      certificateMutation.mutate(data);
    } else {
      const alldata = data.id = isEdit.id
      console.log("all dataa",alldata);
      
      certificateEditMutation.mutate(data);
    }
    console.log(data);
  };
  useEffect(() => {
    if (certificateMutation.isSuccess) {
    }
  }, []);
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
            height: "75vh",
            width: "390px",
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
        <div className={`flex flex-col gap-1 text-sm   `}>
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
              <h2 className="capitalize font-[500] text-[14px] lg:text-[1.1vw]   text-center ">
                certificates
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-full">
                <div className="w-full flex flex-col   ">
                  <p className=" capitalize text-[12px]"> certificate name</p>
                  <InputField
                    register={register}
                    placeholder="certificate name"
                    type="text"
                    name="certificate_title"
                  />
                </div>
                {errors.certificate_title && (
                  <p className="error">{errors.certificate_title.message}</p>
                )}
              </div>
              <div className="w-full">
                <div className="w-full flex flex-col ">
                  <p className=" capitalize text-[12px]">
                    issuing organization
                  </p>
                  <InputField
                    register={register}
                    placeholder="organization"
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
                  <p className=" capitalize text-[12px]"> date issued</p>
                  <InputField
                    register={register}
                    placeholder="date issued"
                    type="date"
                    name="date_issued"
                  />
                  {errors.date_issued && (
                    <p className="error">{errors.date_issued.message}</p>
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
                // {...register("certificate_attachment")}
                type="file"
                accept="image/*"
                onChange={handleImage}
                name="certificate_attachment"
                id="profile"
                className="hidden"
              />
            </div>
            {/* btns  */}
            <div className=" w-full justify-center flex gap-2 ">
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
                {certificateMutation.isPending ? <Loader /> : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CertificateModal;
