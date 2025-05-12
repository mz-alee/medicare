"use client";
import React, { useEffect } from "react";
import { overpass } from "./Fonts";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/Images/Logo.png";
import Aos from "aos";

const AuthLeft = ({ buttonName, text, route }) => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <div className="flex flex-col w-full justify-between    gap-10 md:justify-around items-center">
      <div className="text-white flex  items-center md:w-100 -ml-50 gap-3">
        <Image src={logo} alt="logo" className="w-20" />
        <h1
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-duration="1000"
          className="text-md md:text-[1.2vw] font-[500] italic"
        >
          MediScheduler
        </h1>
      </div>
      <div
        className={`${overpass.className} text-center md:text-left  text-white md:w-100 `}
      >
        <h1
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-duration="1000"
          className="text-xl md:text-[1.5vw] font-[600]"
        >
          Welcome to MediScheduler
        </h1>
        <h1
          data-aos="zoom-in-up"
          data-aos-offset="100"
          data-aos-duration="1000"
          className="text-3xl md:text-[3.5vw] font-[900] "
        >
          Your health is our highest priority
        </h1>
        <p
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          className="text-sm lg:text-[0.9vw]"
        >
          We offer finest health care services to you
        </p>
      </div>
      <div className="hidden  text-white md:w-100  gap-4 lg:flex flex-col">
        <h1
          className={`text-md md:text-[2.2vw]  font-[600]  italic ${overpass.className}`}
        >
          {buttonName}
        </h1>
        <h1 className="text-sm md:text-[0.9vw] ">{text}</h1>
        <Link
          data-aos="zoom-in-up"
          data-aos-offset="100"
          data-aos-duration="1000"
          href={route}
          className="bg-[#1c1c1c] hover:text-[#132928] hover:bg-white font-[600] italic text-center px-4 w-30 py-2 rounded-full"
        >
          {buttonName}
        </Link>
      </div>
    </div>
  );
};

export default AuthLeft;
