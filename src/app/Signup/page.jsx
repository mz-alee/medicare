"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import authScreenBg from "../../../public/Images/authScreenBG.png";
import AuthLeft from "../components/AuthLeft";
import AuthRight from "../components/AuthRight";
import { overpass } from "../components/Fonts";
import Aos from 'aos';
const Signup = () => {
   useEffect(() => {
      Aos.init({ once: false });
    }, []);
  return (
    
    <div className="authScreen bg-[#132928] flex flex-col   h-[100vh] w-full">
      <Image
        src={authScreenBg}
        alt="bg"
        className="absolute opacity-10 left-0 md:w-1/2 h-screen"
      />
      <Image
        src={authScreenBg}
        alt="bg"
        className="absolute right-0 opacity-10 md:w-1/2 h-screen"
      />

      <div className="flex flex-col md:flex-row h-screen">
        {/* left section  */}
        <div className="z-10 flex h-[80vh] w-full md:w-1/2 ">
          <AuthLeft
            route={"/Login"}
            buttonName={"Log in"}
            text={"if you already have an Account"}
          />
        </div>
        {/* right section  */}
        <div className="z-10 flex   h-[10vh] md:h-screen  md:w-1/2  justify-center items-center ">
          <div className="bg-white h-[30vh] flex justify-center items-center md:h-[95vh] w-[45vw] rounded-xl">
            <form>
              <div className="flex flex-col gap-0.5 ">
                <label
                  htmlFor="fullname"
                  className={`${overpass.className} italic text-gray-700`}
                >
                  Full Name
                </label>
                <input
                  id="fullname"
                  className="border outline-none w-90 border-gray-300 text-[13px] md:text-[0.9vw] py-1 text-gray-600 rounded px-2 capitalize"
                  type="text"
                  placeholder="Mirza Ali"
                />
                <label
                  htmlFor="dateofbirth"
                  className={`${overpass.className} italic text-gray-700`}
                >
                  Date of Birth
                </label>
                <input
                  id="dateofbirth"
                  className="border outline-none w-90 border-gray-300 text-[13px] md:text-[0.9vw] py-1 text-gray-600 rounded px-2 capitalize"
                  type="text"
                  placeholder="DD/MM/YYYY"
                />
                <label
                  htmlFor="Gender"
                  className={`${overpass.className} italic text-gray-700`}
                >
                  Gender
                </label>
                <input
                  id="Gender"
                  className="border outline-none w-90 border-gray-300 text-[13px] md:text-[0.9vw] py-1 text-gray-600 rounded px-2 capitalize"
                  type="text"
                  placeholder="Female/Male"
                />
                <label
                  htmlFor="email"
                  className={`${overpass.className} italic text-gray-700`}
                >
                  Email / Phone Number
                </label>
                <input
                  id="email"
                  className="border outline-none w-90 border-gray-300 text-[13px] md:text-[0.9vw] py-1 text-gray-600 rounded px-2 capitalize"
                  type="text"
                  placeholder="example@gmail.com"
                />
                <label
                  htmlFor="password"
                  className={`${overpass.className} italic text-gray-700`}
                >
                  Password
                </label>
                <input
                  id="password"
                  className="border outline-none w-90 border-gray-300 text-[13px] md:text-[0.9vw] py-1 text-gray-600 rounded px-2 capitalize"
                  type="text"
                  placeholder="Password"
                />
                <label
                  htmlFor="confirm-password"
                  className={`${overpass.className} italic text-gray-700`}
                >
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  className="border outline-none w-90 border-gray-300 text-[13px] md:text-[0.9vw] py-1 text-gray-600 rounded px-2 capitalize"
                  type="text"
                  placeholder="Confirm Password"
                />
                <button className="bg-[#1e3837] text-white mt-5 hover:text-[#132928] hover:bg-black/20 font-[600] italic text-center px-4 w-30 py-2 rounded-full">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
