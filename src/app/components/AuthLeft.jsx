"use client";
import React, { useEffect } from "react";
import { overpass } from "./Fonts";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/Images/Logo.png";
import Aos from "aos";
import { usePathname } from "next/navigation";
import correct from "../../../public/Images/correct.png";
const AuthLeft = ({ title, text, route, requirements }) => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  const path = usePathname();
  console.log(path);

  return (
    <div className="flex flex-col w-full justify-between    gap-10 md:justify-around  ">
      <div className=" flex  flex-col items-center  min-h-[50vh] justify-center">
        <div
          className={`${overpass.className} text-center items-center lg:text-left  text-white md:w-100 `}
        >
          {!["/forget"].includes(path) && (
            <h1
              data-aos="zoom-in-up"
              data-aos-offset="300"
              data-aos-duration="1000"
              className="text-lg md:text-[1.5vw] font-[600]"
            >
              Welcome to MediScheduler
            </h1>
          )}

          <h1
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-duration="1000"
            className="text-4xl md:text-[3.5vw] font-[900] "
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
            {title}
          </h1>

          <h1 className="text-sm md:text-[0.9vw] ">{text}</h1>
          {requirements?.length &&
            requirements?.map((items, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image src={correct} alt="correct" className="w-3" />
                <p className="text-[12px] leading-1">{items}</p>
              </div>
            ))}
          {!["/forget", "/Resetpassword"].includes(path) && (
            <Link
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="1000"
              href={route ? route : ""}
              className="bg-[#1c1c1c] hover:text-[#132928] hover:bg-white font-[600] italic text-center px-4 w-30 py-2 rounded-full"
            >
              {title}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLeft;
