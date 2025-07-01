"use client";
import { overpass } from "@/app/components/Fonts";
import InputField from "@/app/components/InputField";
import Loader from "@/app/components/Loader";
import Link from "next/link";
import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
const SignupForm = ({
  handleSubmit,
  onSubmit,
  register,
  signupMutation,
  errors,
  pageNum,
  setPageNum,
}) => {
  const [type, setType] = useState("password");

  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <div className="bg-white p-6 sm:p-10 w-full max-w-[90vw] sm:max-w-[500px] lg:max-w-[600px] rounded-xl shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className={`${overpass.className} italic text-gray-700 text-sm `}
            >
              Full Name
            </label>
            <InputField
              register={register}
              placeholder={"Full Name"}
              name="username"
              type="text"
            />
            {errors.username && (
              <p className="error">{errors.username.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="birthdate"
              className={`${overpass.className} italic text-gray-700 text-sm `}
            >
              Date of Birth
            </label>

            <InputField
              register={register}
              placeholder={"Date of birth"}
              name="date_of_birth"
              type="date"
            />
            {errors.date_of_birth && (
              <p className="error">{errors.date_of_birth.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="gender"
              className={`${overpass.className} italic text-gray-700 text-sm `}
            >
              Gender
            </label>

            <select
              className="text-[12px] border border-gray-300 p-2 rounded text-gray-500"
              {...register("gender")}
            >
              <option value="">select gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            {/* <InputField
              register={register}
              placeholder={"Male/Female"}
              name="gender"
              type="text"
            /> */}
            {errors.gender && <p className="error">{errors.gender.message}</p>}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="gender"
              className={`${overpass.className} italic text-gray-700 text-sm `}
            >
              Email
            </label>

            <InputField
              register={register}
              placeholder={"example@gmail.com"}
              name="email"
              type="email"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="number"
              className={`${overpass.className} italic text-gray-700 text-sm `}
            >
              Phone Number
            </label>

            <InputField
              register={register}
              placeholder={"Phone Number"}
              name="phone_number"
              type="number"
            />
            {errors.phone_number && (
              <p className="error">{errors.phone_number.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="gender"
              className={`${overpass.className} italic text-gray-700 text-sm `}
            >
              Create Password
            </label>

            <div className=" relative">
              <InputField
                register={register}
                placeholder={"Password"}
                name="password"
                type={type}
              />
              <button
                onClick={() => {
                  if (type === "password") {
                    setType("text");
                  } else {
                    setType("password");
                  }
                }}
                type="button"
                className="cursor-pointer absolute top-2 right-3 outline-none"
              >
                {type === "text" ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>

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
            // onClick={() => {
            //   setPageNum(pageNum + 1);
            // }}
            type="submit"
            className="bg-[#1e3837] text-white hover:text-[#132928] hover:bg-black/20 font-semibold italic px-6 py-2 rounded-full transition"
          >
            {signupMutation.isPending ? <Loader /> : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
