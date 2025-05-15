import { overpass } from "@/app/components/Fonts";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ForgetRightSide = ({ register, handleSubmit, onSubmit }) => {
  return (
    <div className="z-10 px-2  bg-white py-8  w-[80vw] sm:w-[40vw] md:w-[35vw] flex justify-center items-center lg:h-[45vh]  rounded-xl ">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col w-full gap-4 px-3  ">
          <div>
            <label
              htmlFor="email"
              className={`${overpass.className} text-[12px] md:text-[1vw] italic text-gray-700`}
            >
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              className="border outline-none  w-full border-gray-300 text-[12px] md:text-[0.9vw] py-2 text-gray-600 rounded px-2"
              type="email"
              placeholder="example@gmail.com"
            />
          </div>
          <button
          
            type="submit"
            className="bg-[#1e3837] flex items-center justify-center gap-2 text-white  hover:text-[#132928] hover:bg-black/20 font-[600] italic text-center px-4 w-full py-2 rounded-full"
          >
            Send <FaArrowRight />
          </button>
          <Link
            href="/Login"
            className="underline text-[14px] font-[500] text-center text-[#1e3837] "
          >
            back to login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgetRightSide;
