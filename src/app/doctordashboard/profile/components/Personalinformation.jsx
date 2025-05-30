"use client";
import Image from "next/image";
import React, { useState } from "react";
import ModalEditProfile from "./ModalEditProfile";
import PersonalInformationModal from "./ModalPersonal";
import EditProfessionModal from "./EditProfessionModal";
import profile from "../../../../../public/Images/person1.png";
import { FaRegEdit } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
const Personalinformation = ({ data, profileEditMutation }) => {
  const [isprofile, setisprofile] = useState(false);
  const [isPersonalOpen, setisPersonalIsOpen] = useState(false);
  const [isProfessionalOpen, setProfessionalIsOpen] = useState(false);
  return (
    <div className="w-full  flex flex-col gap-3 ">
      <div className="bg-white justify-between rounded-2xl w-full flex items-center px-8 h-28">
        <div className="flex gap-4 items-center">
          <Image src={profile} alt="profile image " className="w-20 h-20" />
          <div className="">
            <h1>{data?.data?.user_details.username}</h1>
            <p className="text-[13px] lg:text-[0.9vw]">job title</p>
          </div>
        </div>
        <button
          onClick={() => {
            setisprofile(true);
            console.log("profile edit");
          }}
          className="border hover:bg-gray-900 hover:text-white flex items-center gap-1 border-gray-500 rounded-2xl px-5 py-1 text-gray-500 text-[13px]"
        >
          Edit
          <FiEdit />
        </button>
      </div>
      <ModalEditProfile
        profileEditMutation={profileEditMutation}
        isOpen={isprofile}
        setIsOpen={setisprofile}
      />
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
            className="border hover:bg-gray-900 flex items-center gap-1 hover:text-white border-gray-500 rounded-2xl px-5 py-1 text-gray-500 w-fit text-[13px]"
          >
            Edit
            <FiEdit />
          </button>
          <div id="root">
            <PersonalInformationModal
              isOpen={isPersonalOpen}
              setIsOpen={setisPersonalIsOpen}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-1/2  justify-between  h-full   gap-3 ">
          <div className="flex flex-col w-60 gap-3">
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                full name
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw] ">
                {data?.data?.user_details?.username ? data?.data?.user_details?.username :"null"}
              </h1>
            </div>
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                email
              </h3>
              <h1 className=" text-[14px] lg:text-[1vw]">
                {data?.data?.user_details?.email || "null"}
              </h1>
            </div>
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                phone number
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw]">
                {data?.data?.user_details?.phone_number || "null"}
              </h1>
            </div>
          </div>
          <div className="flex  w-60 flex-col gap-3">
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                Date of birth
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw]">
                {data?.data?.user_details?.date_of_birth || "null"}
              </h1>
            </div>
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                gender
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw]">
                {data?.data?.user_details?.gender || "null"}
              </h1>
            </div>
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                adress
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw]">
                {data?.data?.user_details?.address || "null"}
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
            className="border hover:bg-gray-900 hover:text-white flex items-center gap-1 border-gray-500 rounded-2xl px-5 py-1 text-gray-500 w-fit text-[13px]"
          >
            Edit <FiEdit className="text-md" />
          </button>
          <EditProfessionModal
            isOpen={isProfessionalOpen}
            setIsOpen={setProfessionalIsOpen}
          />
        </div>
        <div className="flex flex-wrap w-1/2 justify-between  h-full   gap-3 ">
          <div className="flex flex-col w-60 gap-3">
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                profession
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                {data?.data.profession_details.profession || "null"}
              </h1>
            </div>
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                specialization
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                {data?.data.profession_details.specialization || "null"}
              </h1>
            </div>
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                clinic/hospital
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                {data?.data.profession_details.clinic_name || "null"}
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-60 gap-3">
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                clinic/hospital adress
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                {data?.data.profession_details.clinic_address || "null"}
              </h1>
            </div>
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                your note
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                {data?.data.profession_details.your_note || "null"}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalinformation;
