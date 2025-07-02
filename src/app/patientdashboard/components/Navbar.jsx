"use client";
import React, { useEffect, useState } from "react";
import logo from "../../../../public/Images/Logo.png";
import profile from "../../../../public/Images/docterImages/profile.svg";
import dashboard from "../../../../public/Images/docterImages/dashboard.svg";
import setting from "../../../../public/Images/docterImages/setting.svg";
import person from "../../../../public/Images/empty.webp";
import appointment from "../../../../public/Images/docterImages/appointment.svg";
import staff from "../../../../public/Images/docterImages/staff.svg";
import chat from "../../../../public/Images/docterImages/chat.svg";
import Image from "next/image";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import Aos from "aos";
import { deleteCookie, getCookie } from "cookies-next";
import { usePathname, useRouter } from "next/navigation";
import { Space_Grotesk } from "next/font/google";

const font = Space_Grotesk({
  subsets: ["latin"],
  width: ["300,400,500,600"],
});
const Navbar = () => {
  const path = usePathname();
  const router = useRouter();
  // console.log("image", getCookie("user_image"));
  // const imageSrc = getCookie("user_image")
  //   ? `https://9000-119-157-176-164.ngrok-free.app${getCookie("user_image")}`
  //   : person;
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="500"
      className={`${font.className} md:relative  w-50  md:w-50 lg:w-[20vw] xl:w-[14vw] h-screen bg-[#f9f9f9] md:flex flex-col justify-between py-4 items-center px-3  `}
    >
      <div>
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className="flex items-center justify-center gap-2 py-1   w-full "
        >
          <Image src={logo} alt="logo" className="w-14  h-14" />
          <h1 className="font-[600] capitalize italic text-sm lg:text-md ">
            medi scheduler
          </h1>
        </div>
        {/* person  */}
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className="bg-white shadow-2xl  gap-2 rounded-2xl h-17 flex  items-center px-3 w-full"
        >
          <div className="overflow-hidden h-14 w-14 rounded-full">
            {/* <Image src={getCookie("user_image")} width={100} height={100} alt="person" className="w-14 h-14" /> */}
            <Image
              src={profile}
              width={100}
              height={100}
              alt="person"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div>
            <div className="italic capitalize text-[14px] w-20 overflow-hidden h-7  text-[#282828]">
              <h1>
                {getCookie("username")?.substring(0, 10) + "..." || "null"}
              </h1>
            </div>
            <h1 className="text-[13px] text-[#417978] capitalize">
              {getCookie("role")}
            </h1>
          </div>
        </div>
        {/* Links  */}
        <div className="flex w-full  flex-col gap-2 justify-center items-center py-2">
          <div className="w-full flex gap-2 lg:gap-[1vh] flex-col justify-baseline h-[400px]">
            <Link
              href="/patientdashboard"
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              className={`${
                path === "/patientdashboard" &&
                "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
              }  w-full h-11 flex capitalize text-[13px] lg:text-[0.9vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
            >
              <Image src={dashboard} alt="dashborad icon" className=" w-5" />
              Dashborad
            </Link>
            <Link
              href="/patientdashboard/appointments"
              className={`${
                path === "/patientdashboard/appointments" &&
                "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
              }  w-full h-11 flex capitalize text-[13px] lg:text-[0.9vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
            >
              <Image src={appointment} alt="dashborad icon" className=" w-5" />
              Appointments
            </Link>
            <Link
              href="/patientdashboard/patientreminder"
              className={`${
                path === "/patientdashboard/patientreminder" &&
                "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
              }  w-full h-11 flex capitalize text-[13px] lg:text-[0.9vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
            >
              <Image src={staff} alt="dashborad icon" className=" w-5" />
              reminders
            </Link>
            <Link
              href="/patientdashboard/profile"
              className={`${
                path === "/patientdashboard/profile" &&
                "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
              }  w-full h-11 flex capitalize text-[13px] lg:text-[0.9vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
            >
              <Image src={profile} alt="dashborad icon" className=" w-5" />
              profile
            </Link>

            <Link
              href="/patientdashboard/patientdiagnosis"
              className={`${
                path === "/patientdashboard/patientdiagnosis" &&
                "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
              }  w-full h-11 flex capitalize text-[13px] lg:text-[0.9vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
            >
              <Image src={chat} alt="dashborad icon" className=" w-5" />
              diagnosis
            </Link>
            <Link
              href="/patientdashboard/patientreports"
              className={`${
                path === "/patientdashboard/patientreports" &&
                "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
              }  w-full h-11 flex capitalize text-[13px] lg:text-[0.9vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
            >
              <Image src={setting} alt="dashborad icon" className=" w-5" />
              reports
            </Link>
          </div>
          <button
            onClick={() => {
              deleteCookie("token");
              deleteCookie("user_id");
              deleteCookie("username");
              deleteCookie("role");
              deleteCookie("proffesional_id");
              deleteCookie("user_image");
              router.push("/Login");
            }}
            className="text-red-600   cursor-pointer  italic font-[500] flex items-center gap-2"
          >
            <BiLogOut className="text-xl" /> Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
