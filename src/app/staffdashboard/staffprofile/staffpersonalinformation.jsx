"use client";
import Image from "next/image";
import React, { useState } from "react";
// import ModalEditProfile from "./ModalEditProfile";
// import PersonalInformationModal from "./ModalPersonal";
// import EditProfessionModal from "./EditProfessionModal";
import profile from "../../../../public/Images/empty.webp";
import { FaRegEdit } from "react-icons/fa";
import "react-loading-skeleton/dist/skeleton.css";
import { FiEdit } from "react-icons/fi";
import { getCookie } from "cookies-next";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { profilePersonalEditApi } from "@/app/Api";
import { toast, ToastContainer } from "react-toastify";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
const Personalinformation = ({ data, isLoading }) => {
  const [isprofile, setisprofile] = useState(false);
  const [isPersonalOpen, setisPersonalIsOpen] = useState(false);
  const [isProfessionalOpen, setProfessionalIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const profileEditMutation = useMutation({
    mutationFn: (data) => profilePersonalEditApi(data),
    onSuccess: (data) => {
      console.log("dataaaaaaa", data);
      queryClient.invalidateQueries(["profile"]);
      setisPersonalIsOpen(false);
      setisprofile(false);
      toast("Profile updated successfully");
    },
    onError: (error) => {
      console.error("Profile update failed:", error.response.data.username[0]);
      toast.error(error.response.data.username[0]);
    },
  });

  return (
    <div className="w-full  flex flex-col py-1 gap-3 ">
      <ToastContainer />
      <div className="bg-white justify-between flex-wrap gap-2 rounded-2xl w-full flex items-center px-8 py-2 min-h-28">
        <div className="flex gap-4 items-center ">
          <Image
            src={data?.data?.user_details?.image || profile}
            alt="profile image"
            width={80}
            height={80}
            className="w-20 h-20  rounded-full"
          />
          {/* {data?.data?.user_details?.image && (
            <Image
              src={data.data.user_details.image || profile}
              alt="profile image"
              width={80}
              height={80}
              className="w-20 h-20  rounded-full"
            />
          )} */}
          <div className="text-[14px] lg:text-[1vw]">
            <h1>
              {isLoading ? (
                <Skeleton count={1} height={15} width={150} />
              ) : (
                data?.data?.user_details?.username || "Null"
              )}
            </h1>
            <p className="text-[13px] lg:text-[0.9vw]">
              {isLoading ? (
                <Skeleton count={1} height={15} width={150} />
              ) : (
                getCookie("role") || "Null"
              )}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setisprofile(true);
            console.log("profile edit");
          }}
          className="border hover:bg-[#41797a] cursor-pointer hover:text-white flex items-center gap-1 border-gray-500 rounded-2xl px-5 py-1 text-gray-500 text-[13px]"
        >
          Edit
          <FiEdit />
        </button>
      </div>
      {/* <ModalEditProfile
        profileEditMutation={profileEditMutation}
        isOpen={isprofile}
        setIsOpen={setisprofile}
        data={data}
      /> */}
      {/* personal information  */}
      <div className="bg-white rounded-2xl flex flex-col gap-4  py-2 min-h-60 shadow px-8 w-full">
        <div className="flex items-center  gap-3">
          <h2 className="border-b pb-1 border-gray-300 w-180">
            personal information
          </h2>
          <button
            onClick={() => {
              setisPersonalIsOpen(true);
            }}
            className="border hover:bg-[#41797a] cursor-pointer flex items-center gap-1 hover:text-white border-gray-500 rounded-2xl px-5 py-1 text-gray-500 w-fit text-[13px]"
          >
            Edit
            <FiEdit />
          </button>
          <div id="root">
            {/* <PersonalInformationModal
              isOpen={isPersonalOpen}
              setIsOpen={setisPersonalIsOpen}
              profileEditMutation={profileEditMutation}
              data={data}
            /> */}
          </div>
        </div>
        <div className="flex flex-wrap w-1/2  justify-between  h-full   gap-3 ">
          <div className="flex flex-col w-60 gap-3">
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                full name
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw] ">
                {isLoading ? (
                  <Skeleton count={1} height={15} width={150} />
                ) : data?.data?.user_details?.username ? (
                  data?.data?.user_details?.username
                ) : (
                  "null"
                )}
              </h1>
            </div>
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                email
              </h3>
              <h1 className=" text-[14px] lg:text-[1vw]">
                {isLoading ? (
                  <Skeleton count={1} height={15} width={150} />
                ) : (
                  data?.data?.user_details?.email || "Null"
                )}
              </h1>
            </div>
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                phone number
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw]">
                {isLoading ? (
                  <Skeleton count={1} height={15} width={150} />
                ) : (
                  data?.data?.user_details?.phone_number || "Null"
                )}
              </h1>
            </div>
          </div>
          <div className="flex  w-60 flex-col gap-3">
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                Date of birth
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw]">
                {isLoading ? (
                  <Skeleton count={1} height={15} width={150} />
                ) : (
                  (data?.data?.user_details?.date_of_birth &&
                    moment(data?.data?.user_details?.date_of_birth).format(
                      "MMMM DD YYYY"
                    )) ||
                  "Null"
                )}
              </h1>
            </div>
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                gender
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw]">
                {isLoading ? (
                  <Skeleton count={1} height={15} width={150} />
                ) : (
                  data?.data?.user_details?.gender || "Null"
                )}
              </h1>
            </div>
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                adress
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw]">
                {isLoading ? (
                  <Skeleton count={1} height={15} width={150} />
                ) : (
                  data?.data?.user_details?.address || "Null"
                )}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl flex flex-col gap-4  py-2 min-h-60 shadow px-8 w-full">
        <div className="flex items-center  gap-3">
          <h2 className="border-b pb-1 border-gray-300 w-180">
            profession information
          </h2>
          <button
            onClick={() => {
              setProfessionalIsOpen(true);
            }}
            className="border hover:bg-[#41797a] cursor-pointer hover:text-white flex items-center gap-1 border-gray-500 rounded-2xl px-5 py-1 text-gray-500 w-fit text-[13px]"
          >
            Edit <FiEdit className="text-md" />
          </button>
          {/* <EditProfessionModal
            isOpen={isProfessionalOpen}
            setIsOpen={setProfessionalIsOpen}
            data={data}
          /> */}
        </div>
        <div className="flex flex-wrap w-1/2 justify-between  h-full   gap-3 ">
          <div className="flex flex-col w-60 gap-3">
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                profession
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                {isLoading ? (
                  <Skeleton count={1} height={15} width={150} />
                ) : (
                  data?.data?.profession_details?.profession || "Null"
                )}
              </h1>
            </div>
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                specialization
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                {isLoading ? (
                  <Skeleton count={1} height={15} width={150} />
                ) : (
                  data?.data?.profession_details?.specialization || "Null"
                )}
              </h1>
            </div>
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                clinic/hospital
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                {isLoading ? (
                  <Skeleton count={1} height={15} width={150} />
                ) : (
                  data?.data?.profession_details?.clinic_name || "Null"
                )}
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-60 gap-3">
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                clinic/hospital adress
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                {isLoading ? (
                  <Skeleton count={1} height={15} width={150} />
                ) : (
                  data?.data?.profession_details?.clinic_address || "Null"
                )}
              </h1>
            </div>
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                your note
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                {isLoading ? (
                  <Skeleton count={1} height={15} width={150} />
                ) : (
                  data?.data?.profession_details?.your_note || "Null"
                )}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalinformation;
