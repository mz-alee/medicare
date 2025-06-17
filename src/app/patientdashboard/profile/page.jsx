"use client";
import Image from "next/image";
import React, { useState } from "react";
import profile from "../../../../public/Images/person1.png";
import { FaRegEdit } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { getCookie } from "cookies-next";
import ModalEditProfile from "../components/personalModal";
import EmergencyModal from "../components/emergencyModal";
const Personalinformation = () => {
  const [isprofile, setisprofile] = useState(false);
  const [isPersonalOpen, setisPersonalIsOpen] = useState(false);
  const [isEmergencyOpen, setisEmergencyOpen] = useState(false);
  const data = [];
  return (
    <div className="w-full  flex flex-col py-3 gap-3 ">
      <div className="bg-white justify-between flex-wrap gap-2 rounded-2xl w-full flex items-center px-8 py-2 min-h-28">
        <div className="flex gap-4 items-center ">
          <Image src={profile} alt="profile image " className="w-20 h-20" />
          <div className="text-[14px] lg:text-[1vw]">
            <h1>{data?.data?.user_details.username}</h1>
            <p className="text-[13px] lg:text-[0.9vw]">{getCookie("role")}</p>
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
      <ModalEditProfile isOpen={isprofile} setIsOpen={setisprofile} />

      <div className="bg-white rounded-2xl flex flex-col gap-4  py-2 min-h-60 shadow px-8 w-full">
        <div className="flex items-center  gap-3">
          <h2 className="border-b pb-1 capitalize italic font-[500] border-gray-300 w-180">
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
            {/* <PersonalInformationModal
              isOpen={isPersonalOpen}
              setIsOpen={setisPersonalIsOpen}
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
                {data?.data?.user_details?.username
                  ? data?.data?.user_details?.username
                  : "null"}
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
          <h2 className="border-b pb-1 capitalize italic font-[500] border-gray-300 w-180">
            emergency contact detail
          </h2>
          <button
            onClick={() => {
              setisEmergencyOpen(true);
            }}
            className="border hover:bg-gray-900 hover:text-white flex items-center gap-1 border-gray-500 rounded-2xl px-5 py-1 text-gray-500 w-fit text-[13px]"
          >
            Edit <FiEdit className="text-md" />
          </button>
          <EmergencyModal
            isOpen={isEmergencyOpen}
            setIsOpen={setisEmergencyOpen}
          />
        </div>
        <div className="flex flex-wrap w-1/2 justify-between  h-full   gap-3 ">
          <div className="flex flex-col w-60 gap-3">
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                name
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                {data?.data?.profession_details?.profession || "null"}
              </h1>
            </div>
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                relation
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                {data?.data?.profession_details?.specialization || "null"}
              </h1>
            </div>
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                contact
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                {data?.data?.profession_details?.clinic_name || "null"}
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-60 gap-3">
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                adress
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                {data?.data?.profession_details?.clinic_address || "null"}
              </h1>
            </div>
            <div>
              <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                preffered contact
              </h3>
              <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                {data?.data?.profession_details?.your_note || "null"}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Personalinformation;
