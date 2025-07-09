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
import { MdEventAvailable } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import Aos from "aos";
import { deleteCookie, getCookie } from "cookies-next";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ProfileGetData } from "@/app/Api";
import { Space_Grotesk } from "next/font/google";

const font = Space_Grotesk({
  subsets: ["latin"],
  width: ["300,400,500,600"],
});
const Navbar = ({ isActive, setIsActive }) => {
  const path = usePathname();
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["profiledata"],
    queryFn: ProfileGetData,
    onSuccess: (data) => {
      toast("data fetch successfully");
    },
    retry: "false",
    onError: (error) => {
      console.error(error);
    },
  });
  useEffect(() => {
window.scrollTo(0, 0);
    if (isActive) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // mobile fix
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [isActive]);

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="500"
      className={`${font.className} md:relative border-r border-gray-200 w-50  md:w-50 lg:w-[15vw] xl:w-[15vw] h-screen bg-[#f9f9f9] md:flex flex-col justify-between py-4 lg:py-[2vh] items-center px-4 lg:px-[1.2vw]  `}
    >
      <div>
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className="flex items-center justify-center gap-2 py-1   w-full "
        >
          <Image
            src={logo}
            alt="logo"
            className="w-14  h-14 lg:h-[8vh] lg:w-[3.5vw]"
          />
          <h1 className="font-[600] capitalize text-sm lg:text-[1vw] ">
            medi scheduler
          </h1>
        </div>
        {/* person  */}
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className="bg-white shadow-2xl  gap-2 rounded-2xl h-17 lg:h-[12vh] lg:w-[13vw] flex  items-center px-3 w-full"
        >
          <div className="overflow-hidden h-14 lg:h-[8vh] lg:w-[3.5vw] w-14 rounded-full">
            <Image
              src={data?.data?.user_details?.image || person}
              width={100}
              height={100}
              alt="person"
              className="w-14 h-14 lg:h-[8vh] lg:w-[3.5vw]"
            />
          </div>
          <div>
            <div className="italic capitalize text-[14px] lg:text-[0.9vw]  w-20 lg:w-[5vw] overflow-hidden h-7 lg:h-[4  vh]  text-[#282828]">
              {/* <h1> { getCookie("username") || "empty"}</h1> */}
              <h1>{getCookie("username")?.substring(0, 10 - 3) + "..."}</h1>
            </div>
            <h1 className="text-[13px] lg:text-[0.9vw] text-[#417978] capitalize">
              {getCookie("role") || "empty"}
            </h1>
          </div>
        </div>
        {/* Links  */}
        <div className="flex w-full flex-col gap-2 lg:gap-[1vh] justify-center items-center py-2 lg:py-[1vh]">
          <Link
            href="/doctordashboard"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            className={`${
              path === "/doctordashboard" &&
              "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
            }  w-full h-11 lg:h-[6vh] flex capitalize text-[13px] lg:text-[1vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
          >
            <Image
              src={dashboard}
              alt="dashborad icon"
              className=" w-5 lg:w-[1.3vw] lg:h-[3vh]"
            />
            Dashborad
          </Link>
          <Link
            href="/doctordashboard/availability"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            className={`${
              path === "/doctordashboard/availability" &&
              "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
            }  w-full h-11 lg:h-[6vh] flex capitalize text-[13px] lg:text-[1vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-3 `}
          >
            <MdEventAvailable className="text-[18px] lg:text-[1.4vw]" />
            availability
          </Link>
          <Link
            href={` ${"/doctordashboard/appointments"}`}
            className={`${
              path === "/doctordashboard/appointments" &&
              "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
            }  w-full h-11 flex capitalize text-[13px] lg:text-[0.9vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
          >
            <Image
              src={appointment}
              alt="dashborad icon"
              className=" w-5 lg:w-[1.3vw] lg:h-[3vh]"
            />
            Appointments
          </Link>
          <Link
            href="/doctordashboard/profile"
            className={`${
              path === "/doctordashboard/profile" &&
              "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
            }  w-full h-11 lg:h-[6vh] flex capitalize text-[13px] lg:text-[0.9vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
          >
            <Image
              src={profile}
              alt="dashborad icon"
              className=" w-5 lg:w-[1.3vw] lg:h-[3vh]"
            />
            profile
          </Link>
          <Link
            href="/doctordashboard/staffmanagement"
            className={`${
              path === "/doctordashboard/staffmanagement" &&
              "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
            }  w-full h-11 lg:h-[6vh] flex capitalize text-[13px] lg:text-[0.9vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
          >
            <Image
              src={staff}
              alt="dashborad icon"
              className=" w-5 lg:w-[1.3vw] lg:h-[3vh]"
            />
            staff management
          </Link>
          <Link
            href="/doctordashboard/message"
            className={`${
              path === "/doctordashboard/message" &&
              "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
            }  w-full h-11 lg:h-[6vh] flex capitalize text-[13px] lg:text-[0.9vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
          >
            <Image
              src={chat}
              alt="dashborad icon"
              className=" w-5 lg:w-[1.3vw] lg:h-[3vh]"
            />
            message
          </Link>
          {/* <Link
            href="/doctordashboard/setting"
            className={`${
              path === "/doctordashboard/setting" &&
              "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
            }  w-full h-11 lg:h-[6vh] flex capitalize text-[13px] lg:text-[0.9vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
          >
            <Image
              src={setting}
              alt="dashborad icon"
              className=" w-5 lg:w-[1.3vw] lg:h-[3vh]"
            />
            setting
          </Link> */}
        </div>
      </div>
      <button
        onClick={() => {
          deleteCookie("token");
          deleteCookie("user_id");
          deleteCookie("username");
          deleteCookie("role");
          deleteCookie("professional_id");

          router.push("/Login");
        }}
        className="text-red-600 lg:text-[1vw]  cursor-pointer  italic font-[500] flex items-center gap-2"
      >
        <BiLogOut className="text-xl" /> Log out
      </button>
    </div>
  );
};

export default Navbar;
