"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import authScreenBg from "../../../public/Images/authScreenBG.png";
import AuthLeft from "../components/AuthLeft";
import AuthRight from "../components/AuthRight";
import { overpass } from "../components/Fonts";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Signup = () => {
  useEffect(() => {
    Aos.init({ once: false });
  }, []);

  return (
    <div className="authScreen bg-[#132928] min-h-screen w-full relative overflow-hidden">
      {/* Background Images (Only visible on md and up) */}
      <Image
        src={authScreenBg}
        alt="bg"
        className="hidden md:block absolute left-0 top-0 w-1/2 h-full object-cover opacity-10"
      />
      <Image
        src={authScreenBg}
        alt="bg"
        className="hidden md:block absolute right-0 top-0 w-1/2 h-full object-cover opacity-10"
      />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between min-h-screen z-10 relative px-4 py-8 gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <AuthLeft
            route="/Login"
            buttonName="Log in"
            text="if you already have an Account"
          />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="bg-white p-6 sm:p-10 w-full max-w-[90vw] sm:max-w-[500px] lg:max-w-[600px] rounded-xl shadow-md">
            <form className="flex flex-col gap-4">
              {[
                {
                  id: "fullname",
                  label: "Full Name",
                  placeholder: "Mirza Ali",
                },
                {
                  id: "dateofbirth",
                  label: "Date of Birth",
                  placeholder: "DD/MM/YYYY",
                },
                {
                  id: "Gender",
                  label: "Gender",
                  placeholder: "Female/Male",
                },
                {
                  id: "email",
                  label: "Email / Phone Number",
                  placeholder: "example@gmail.com",
                },
                {
                  id: "password",
                  label: "Password",
                  placeholder: "Password",
                },
                {
                  id: "confirm-password",
                  label: "Confirm Password",
                  placeholder: "Confirm Password",
                },
              ].map(({ id, label, placeholder }) => (
                <div key={id} className="flex flex-col">
                  <label
                    // data-aos="zoom-in-up"
                    // data-aos-offset="100"
                    // data-aos-duration="500"
                    htmlFor={id}
                    className={`${overpass.className} italic text-gray-700 text-sm `}
                  >
                    {label}
                  </label>
                  <input
                    // data-aos="fade-up"
                    // data-aos-offset="100"
                    // data-aos-duration="1500"
                    id={id}
                    type="text"
                    placeholder={placeholder}
                    className="border border-gray-300 text-[12px] lg:text-[0.8vw]  py-2 px-3 rounded outline-none text-gray-600"
                  />
                </div>
              ))}

              <div className=" lg:hidden flex items-center  gap-1">
                <h1
                  data-aos="zoom-in-up"
                  data-aos-offset="100"
                  data-aos-duration="1000"
                  className="text-[12px] lg:text-[0.9vw]  "
                >
                  if you already have an Account?
                </h1>
                <Link
                  data-aos="zoom-in-up"
                  data-aos-offset="100"
                  data-aos-duration="1000"
                  href="/Login"
                  className=" text-blue-500 text-[12px] hover:text-[#132928]  "
                >
                  Login
                </Link>
              </div>
              <button
                // data-aos="fade-up"
                // // data-aos-offset="300"
                // data-aos-duration="1500"
                type="submit"
                className="bg-[#1e3837] text-white hover:text-[#132928] hover:bg-black/20 font-semibold italic px-6 py-2 mt-4 rounded-full transition"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
