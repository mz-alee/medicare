import React from "react";
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
const Navbar = () => {
  return (
    <div className="hidden relative  w-40  md:w-50 lg:w-[20vw] xl:w-[17vw] h-screen bg-[#f9f9f9] md:flex flex-col items-center px-3  ">
      <div className="flex items-center justify-center gap-2 w-full py-4">
        <Image src={logo} alt="logo" className="w-14 h-14" />
        <h1 className="font-[600] capitalize text-sm lg:text-md ">
          medi scheduler
        </h1>
      </div>
      {/* person  */}
      <div className="bg-white shadow-2xl  gap-2 rounded-2xl h-17 flex  items-center px-3 w-full">
        <Image src={person} alt="person" className="w-12 h-12" />
        <div>
          <h1 className="italic capitalize text-[#282828]">Mirza Ali</h1>
          <h1 className="text-[13px] text-[#417978] capitalize">doctor</h1>
        </div>
      </div>
      {/* Links  */}
      <div className="flex w-full flex-col gap-2 justify-center items-center py-2">
        <div className="w-full h-11 flex gap-2 items-center pl-4 border-l-4 border-[#417978] rounded-lg bg-[#d8e6e5]">
          <Image src={dashboard} alt="dashborad icon" className=" w-5" />
          <h1 className=" capitalize text-[13px] lg:text-[0.9vw] font-[500] text-[#282828]">
            Dashborad
          </h1>
        </div>
        <div className="w-full h-11 flex gap-2 items-center pl-4 hover:bg-[#d8e6e5]  rounded-lg">
          <Image src={appointment} alt="dashborad icon" className="w-4 h-4" />
          <h1 className=" capitalize text-[13px] lg:text-[0.9vw]  text-[#282828]">
            appointments
          </h1>
        </div>
        <div className="w-full h-11 flex gap-2 items-center pl-4 hover:bg-[#d8e6e5]  rounded-lg ">
          <Image src={profile} alt="dashborad icon" className="w-4 h-4" />
          <h1 className=" capitalize text-[13px] lg:text-[0.9vw] text-[#282828]">
            your profile
          </h1>
        </div>
        <div className="w-full h-11 flex gap-2 items-center pl-4 hover:bg-[#d8e6e5]  rounded-lg ">
          <Image src={staff} alt="dashborad icon" className="w-4 h-4" />
          <h1 className=" capitalize text-[13px] lg:text-[0.9vw] text-[#282828]">
            staff managementT
          </h1>
        </div>
        <div className="w-full h-11 flex gap-2 items-center pl-4 hover:bg-[#d8e6e5]  rounded-lg ">
          <Image src={chat} alt="dashborad icon" className="w-4 h-4" />
          <h1 className=" capitalize text-[13px] lg:text-[0.9vw] text-[#282828]">
            message
          </h1>
        </div>
        <div className="w-full h-11 flex gap-2 items-center pl-4 hover:bg-[#d8e6e5]  rounded-lg ">
          <Image src={setting} alt="dashborad icon" className="w-4 h-4" />
          <h1 className=" capitalize text-[13px] lg:text-[0.9vw] text-[#282828]">
            setting
          </h1>
        </div>
      </div>
      <Link
        href="/Login"
        className="text-red-600 absolute bottom-6 italic font-[500] flex items-center gap-2"
      >
        
        <BiLogOut className="text-xl" /> Log out
      </Link>
    </div>
  );
};

export default Navbar;
