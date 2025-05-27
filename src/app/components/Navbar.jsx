"use client";
import React, { useState } from "react";
import ThemeToggle from "./ToggleButton";
import Image from "next/image";
import Logo from "../../../public/Images/Logo.png";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { overpass, ubuntu } from './Fonts';
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="fixed z-100 flex justify-between  items-center px-8 bg-[#f9f9f9] text-black min-h-[8vh] w-full text-sm md:text-[12px] lg:text-[1vw]">
      {/* logo */}
      <div className="logo flex w-[180px]  items-center gap-2 ">
        <Image src={Logo} alt="logo" className="w-10" />
        <h1 className={`text-sm font-bold  md:text-[1.2vw] ${overpass.className} `}>MediScheduler</h1>
      </div>
      {/* Links  */}
      
      <div
        className={`hidden md:flex ${overpass.className} italic text-[#383839] text-[15px] md:text-[1.1vw] justify-center font-[600] items center gap-8`}
      >
        <Link  className="hover:text-[#5ca39f]" href="/">
          Home
        </Link>
        <Link className="hover:text-[#5ca39f]" href="/">
          Services
        </Link>
        <Link className="hover:text-[#5ca39f]" href="/">
          About us
        </Link>
        <Link className="hover:text-[#5ca39f]" href="/">
          FAQs
        </Link>
      </div>
      {/* login logout button  */}
      <div className="   w-[160px] flex justify-end text-right">
        <Link href='/Login' className="hidden md:flex bg-[#5ca39f] rounded-full text-white text-sm md:text-[1vw] py-1 px-3 hover:bg-[#205454] cursor-pointer">
          Log In
        </Link>
        <button
          onClick={() => {
            setIsActive(true);
          }}
          className="cursor-pointer hidden"
        >
          <CiMenuFries className="text-lg" />
        </button>
      </div>
      {/* mobile navbar  */}
      <div
        className={`${
          isActive
            ? "flex duration-300 ease-in absolute top-0 right-0  h-screen w-[20vw]"
            : "hidden"
        } duration-300 ease-in absolute top-0 right-0   h-screen w-[90%] sm:w-[200px] bg-white/10 backdrop-blur-xl`}
      >
        <button
          className="h-fit"
          onClick={() => {
            setIsActive(false);
          }}
        >
          close
        </button>
        <div
          className={` flex flex-col justify-center text-white  text-center items center gap-8`}
        >
          <Link
            className="hover:text-[#5ca39f]  hover:scale-110 hover:mb-2 transition-all  "
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-[#5ca39f]  hover:scale-110 hover:mb-2 transition-all "
            href="/"
          >
            Services
          </Link>
          <Link
            className="hover:text-[#5ca39f]  hover:scale-110 hover:mb-2 transition-all "
            href="/"
          >
            About us
          </Link>
          <Link
            className="hover:text-[#5ca39f]  hover:scale-110 hover:mb-2 transition-all "
            href="/"
          >
            FAQs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
