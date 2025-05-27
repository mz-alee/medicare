"use client";
import React, { useState } from "react";
import Navbar from "../doctordashboard/components/Navbar";
import Header from "../doctordashboard/components/Header";
import Image from "next/image";
import profile from "../../../public/Images/person1.png";
import { useSearchParams } from "next/navigation";
import EDITModal from "./components/Modal";
const Profile = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [isOpen, setIsOpen] = useState(false);

  console.log(name);
  const handleEdit = () => {
    setIsOpen(true);
    console.log("click");
    
  };
  return (
    <div className="flex h-screen w-full  bg-[#f9f9f9] ">
      <Navbar />

      {/* header  */}
      <div className="w-full  overflow-y-scroll px-6">
        <Header
          name="Profile"
          links={["personal information", "achievements"]}
        />
        {/* content  */}
        <div className="  flex-col md:flex-row gap-3 py-4 flex-wrap md:justify-between  flex items-center md:items-start   ">
          {/* profile image  */}
          <div className="bg-white justify-between rounded-2xl w-full flex items-center px-8 h-28">
            <div className="flex gap-4 items-center">
              <Image src={profile} alt="profile image " className="w-20 h-20" />
              <div className="">
                <h1>{name}</h1>
                <p className="text-[13px] lg:text-[0.9vw]">job title</p>
              </div>
            </div>
            <button className="border border-gray-500 rounded-2xl px-5 py-1 text-gray-500 text-[13px]">
              Edit
            </button>
          </div>
          {/* personal information  */}
          <div className="bg-white rounded-2xl flex flex-col gap-4  py-2 min-h-60 shadow px-8 w-full">
            <div className="flex items-center  gap-3">
              <h2 className="border-b pb-1 border-gray-300 w-180">
                personal information
              </h2>
              <button
                onClick={handleEdit}
                className="border border-gray-500 rounded-2xl px-5 py-1 text-gray-500 w-fit text-[13px]"
              >
                Edit
              </button>
              <div id="root">
                <EDITModal isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2  justify-between  h-full   gap-3 ">
              <div className="flex flex-col w-60 gap-3">
                <div>
                  <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                    full name
                  </h3>
                  <h1 className="capitalize text-[14px] lg:text-[1vw] ">
                    Name
                  </h1>
                </div>
                <div>
                  <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                    email
                  </h3>
                  <h1 className="capitalize text-[14px] lg:text-[1vw]">
                    email@gmail.com
                  </h1>
                </div>
                <div>
                  <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                    phone number
                  </h3>
                  <h1 className="capitalize text-[14px] lg:text-[1vw]">
                    4442+332323
                  </h1>
                </div>
              </div>
              <div className="flex  w-60 flex-col gap-3">
                <div>
                  <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                    Date of birth
                  </h3>
                  <h1 className="capitalize text-[14px] lg:text-[1vw]">
                    22/3/2202
                  </h1>
                </div>
                <div>
                  <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                    gender
                  </h3>
                  <h1 className="capitalize text-[14px] lg:text-[1vw]">male</h1>
                </div>
                <div>
                  <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                    adress
                  </h3>
                  <h1 className="capitalize text-[14px] lg:text-[1vw]">
                    Lahore
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl flex flex-col gap-4  py-2 min-h-60 shadow px-8 w-full">
            <div className="flex items-center  gap-3">
              <h2 className="border-b pb-1 border-gray-300 w-180">
                personal information
              </h2>
              <button className="border border-gray-500 rounded-2xl px-5 py-1 text-gray-500 w-fit text-[13px]">
                Edit
              </button>
            </div>
            <div className="flex flex-wrap w-1/2 justify-between  h-full   gap-3 ">
              <div className="flex flex-col w-60 gap-3">
                <div>
                  <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                    profession
                  </h3>
                  <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                    staff member
                  </h1>
                </div>
                <div>
                  <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                    specialization
                  </h3>
                  <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                    medical records officer
                  </h1>
                </div>
                <div>
                  <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                    clinic/hospital
                  </h3>
                  <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                    enigmatix medical hospital
                  </h1>
                </div>
              </div>
              <div className="flex flex-col w-60 gap-3">
                <div>
                  <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                    clinic/hospital address
                  </h3>
                  <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                    lahore
                  </h1>
                </div>
                <div>
                  <h3 className=" capitalize text-[13px] text-gray-500 lg:text-[0.9vw]">
                    your note
                  </h3>
                  <h1 className="capitalize text-[14px] lg:text-[1vw] w-50">
                    i'm medical record officer for past 5 years serving as a
                    medical records officer
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
