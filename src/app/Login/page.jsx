import Image from "next/image";
import React from "react";
import authScreenBg from "../../../public/Images/authScreenBG.png";
import AuthLeft from "../components/AuthLeft";
import AuthRight from "../components/AuthRight";
import { overpass } from "../components/Fonts";
const Login = () => {
  return (
    <div className="authScreen bg-[#132928] h-screen  w-full">
      <Image
        src={authScreenBg}
        alt="bg"
        className="absolute opacity-10 left-0 w-1/2 h-screen"
      />
      <Image
        src={authScreenBg}
        alt="bg"
        className="absolute right-0 opacity-10 w-1/2 h-screen"
      />

      <div className="flex  ">
        {/* left section  */}
        <div className="z-10 flex h-[80vh]  w-1/2 ">
          <AuthLeft
            route={"/Signup"}
            buttonName={"Sign in"}
            text={"if you are new here or don't have an account"}
          />
        </div>
        {/* right section  */}
        <div className="z-10 flex   h-[10vh] md:h-screen  md:w-1/2  justify-center items-center ">
          <div className="z-10 bg-white h-[30vh] flex justify-center items-center md:h-[95vh] w-[45vw] rounded-xl ">
            <form>
              <div className="flex flex-col gap-1.5 ">
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
