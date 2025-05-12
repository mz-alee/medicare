import Image from "next/image";
import React from "react";
import authScreenBg from "../../../public/Images/authScreenBG.png";
import AuthLeft from "../components/AuthLeft";
import AuthRight from "../components/AuthRight";
import { overpass } from "../components/Fonts";
import Link from 'next/link';
const Login = () => {
  return (
    <div className="authScreen bg-[#132928]  min-h-screen  w-full">
      <Image
        src={authScreenBg}
        alt="bg"
        className="hidden  md:block absolute opacity-10 left-0 w-1/2 h-screen"
      />
      <Image
        src={authScreenBg}
        alt="bg"
        className="hidden  md:block absolute right-0 opacity-10 w-1/2 h-screen"
      />

      <div className="authLeft flex gap-10 sm:gap-15   h-[100vh]  w-full flex-col lg:flex-row items-center lg:items-start ">
        {/* left section  */}
        <div className="z-10 flex h-[40vh]  lg:h-[80vh]  lg:w-1/2 ">
          <AuthLeft
            route={"/Signup"}
            buttonName={"Sign up"}
            text={"if you are new here or don't have an account"}
          />
        </div>
        {/* right section  */}
        <div className="z-10 flex w-full px-2 h-[50vh] sm:h-[30vh] lg:h-screen  md:w-1/2  justify-center items-center ">
          <div className="z-10 px-2  bg-white py-8 w-[80vw] sm:w-[60vw] flex justify-center items-center lg:h-[95vh]  rounded-xl ">
            <form>
              <div className="flex flex-col gap-1.5 px-3  ">
                <label
                  htmlFor="email"
                  className={`${overpass.className} text-[12px] md:text-[0.9vw] italic text-gray-700`}
                >
                  Email / Phone Number
                </label>
                <input
                  id="email"
                  className="border outline-none  md:w-90 border-gray-300 text-[12px] md:text-[0.9vw] py-1 text-gray-600 rounded px-2 capitalize"
                  type="text"
                  placeholder="example@gmail.com"
                />
                <label
                  htmlFor="password"
                  className={`${overpass.className} text-[12px] md:text-[0.9vw] italic text-gray-700`}
                >
                  Password
                </label>
                <input
                  id="password"
                  className="border outline-none   md:w-90 border-gray-300 text-[13px] md:text-[0.9vw] py-1 text-gray-600 rounded px-2 capitalize"
                  type="text"
                  placeholder="Password"
                />
                <div className=" lg:hidden ">
                  <h1
                    data-aos="zoom-in-up"
                    data-aos-offset="100"
                    data-aos-duration="1000"
                    className="text-[12px] lg:text-[0.9vw]     "
                  >
                    if you are new here or don't have an account?
                  <Link
                    data-aos="zoom-in-up"
                    data-aos-offset="100"
                    data-aos-duration="1000"
                    href="/Signup"
                    className=" text-blue-500 text-[12px] hover:text-[#132928]  "
                  >
                    Login
                  </Link>
                  </h1>
                </div>
                <button className="bg-[#1e3837] text-white mt-5 hover:text-[#132928] hover:bg-black/20 font-[600] italic text-center px-4 w-30 py-2 rounded-full">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
