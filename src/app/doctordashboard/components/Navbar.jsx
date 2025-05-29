"use client";
import React, { useEffect, useState } from "react";
import logo from "../../../../public/Images/Logo.png";
import person from "../../../../public/Images/person1.png";
import dashboard from "../../../../public/Images/docterImages/dashboard.svg";
import setting from "../../../../public/Images/docterImages/setting.svg";
import profile from "../../../../public/Images/docterImages/profile.svg";
import appointment from "../../../../public/Images/docterImages/appointment.svg";
import staff from "../../../../public/Images/docterImages/staff.svg";
import chat from "../../../../public/Images/docterImages/chat.svg";
import Image from "next/image";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import Aos from "aos";
import { deleteCookie } from "cookies-next";
import { usePathname, useRouter } from "next/navigation";
const Navbar = () => {
  const [isActive, setisActive] = useState(false);
  const path = usePathname();
  console.log(path);
  const router = useRouter();
  useEffect(() => {
    // Aos.init({ once: false });
  }, []);
  const handleActive = () => {};
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="500"
      className="  md:relative  w-50  md:w-50 lg:w-[20vw] xl:w-[17vw] h-screen bg-[#f9f9f9] md:flex flex-col justify-between py-4 items-center px-3  "
    >
      <div>
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className="flex items-center justify-center gap-2 py-1   w-full "
        >
          <Image src={logo} alt="logo" className="w-14 h-14" />
          <h1 className="font-[600] capitalize text-sm lg:text-md ">
            medi scheduler
          </h1>
        </div>
        {/* person  */}
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className="bg-white shadow-2xl  gap-2 rounded-2xl h-17 flex  items-center px-3 w-full"
        >
          <Image src={person} alt="person" className="w-12 h-12" />
          <div>
            <h1 className="italic capitalize text-[#282828]">Mirza Ali</h1>
            <h1 className="text-[13px] text-[#417978] capitalize">doctor</h1>
          </div>
        </div>
        {/* Links  */}
        <div className="flex w-full flex-col gap-2 justify-center items-center py-2">
          <Link
            href="/doctordashboard"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            className={`${
              path === "/doctordashboard" &&
              "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
            }  w-full h-11 flex capitalize text-[13px] lg:text-[0.9vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
          >
            <Image src={dashboard} alt="dashborad icon" className=" w-5" />
            Dashborad
          </Link>
          <Link
            href="/doctordashboard/appointments"
            className={`${
              path === "/doctordashboard/appointments" &&
              "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
            }  w-full h-11 flex capitalize text-[13px] lg:text-[0.9vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
          >
            <Image src={appointment} alt="dashborad icon" className=" w-5" />
            Appointments
          </Link>
          <Link
            href="/doctordashboard/profile"
            className={`${
              path === "/doctordashboard/profile" &&
              "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
            }  w-full h-11 flex capitalize text-[13px] lg:text-[0.9vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
          >
            <Image src={profile} alt="dashborad icon" className=" w-5" />
            profile
          </Link>
          <Link
            href="/doctordashboard/staffmanagement"
            className={`${
              path === "/doctordashboard/staffmanagement" &&
              "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
            }  w-full h-11 flex capitalize text-[13px] lg:text-[0.9vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
          >
            <Image src={staff} alt="dashborad icon" className=" w-5" />
            staff management
          </Link>
          <Link
            href="/doctordashboard/message"
            className={`${
              path === "/doctordashboard/message" &&
              "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
            }  w-full h-11 flex capitalize text-[13px] lg:text-[0.9vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
          >
            <Image src={chat} alt="dashborad icon" className=" w-5" />
            message
          </Link>
          <Link
            href="/doctordashboard/setting"
            className={`${
              path === "/doctordashboard/setting" &&
              "border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]"
            }  w-full h-11 flex capitalize text-[13px] lg:text-[0.9vw] hover:bg-[#d8e6e5] rounded text-[#282828] gap-2 items-center pl-4 `}
          >
            <Image src={setting} alt="dashborad icon" className=" w-5" />
            setting
          </Link>
        </div>
      </div>
      <button
        onClick={() => {
          deleteCookie("token");
          router.push("/Login");
        }}
        className="text-red-600  cursor-pointer  italic font-[500] flex items-center gap-2"
      >
        <BiLogOut className="text-xl" /> Log out
      </button>
    </div>
  );
};

export default Navbar;
