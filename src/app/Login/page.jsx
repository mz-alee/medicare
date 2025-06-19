"use client";
import Image from "next/image";
import React, { useState } from "react";
import authScreenBg from "../../../public/Images/authScreenBG.png";
import AuthLeft from "../components/AuthLeft";
import AuthRight from "../components/AuthRight";
import logo from "../../../public/Images/Logo.png";
import { overpass } from "../components/Fonts";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { loginPostData } from "../Api";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Loader from "../components/Loader";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getCookie, getCookies, setCookie } from "cookies-next";
import { FiEye, FiEyeOff } from "react-icons/fi";
const loginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().max(20).required(),
});
const Login = () => {
  const [type, setType] = useState("password");

  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
    defaultValues: {},
  });

  const loginMutation = useMutation({
    mutationFn: (loginUserData) => loginPostData(loginUserData),
    onSuccess: (data) => {
      console.log("login dataaaaaa", data);
      console.log(data.data.role);
      setCookie("token", data.data.access_token);
      setCookie("username", data.data.username);
      setCookie("role", data.data.role);
      setCookie("user_id", data.data.id);
      setCookie("user_image", data.data.image);

      if (data.data.role === "therapist") {
        router.push("/therapistdashboard");
        return;
      }
      if (data.data.role === "patient") {
        router.push("/patientdashboard");
        return;
      }
      if (data.data.role === "doctor") {
        router.push("/doctordashboard");
        return;
      }
      if (data.data.role === "staff") {
        router.push("/staffdashboard");
        return;
      }

      toast("logged in");

      router.push("/doctordashboard");
    },
    onError: (error) => {
      toast.error(error.response.data.error);
    },
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data);
    console.log(data);
  };
  return (
    <div className="authBg bg-[#132928]  min-h-[110vh]  w-full">
      <ToastContainer />
      <div className="text-white flex  items-center md:w-100  absolute gap-3">
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
      <div className="  flex gap-10 sm:gap-15   min-h-[100vh]  w-full flex-col justify-center  md:flex-row items-center ">
        {/* left section  */}
        <div className="z-10 flex  md:h-[60vh]  lg:h-[80vh] 300 w-full md:w-1/2 ">
          <AuthLeft
            route={"/Signup"}
            title={"Sign up"}
            text={"if you are new here or don't have an account"}
          />
        </div>
        {/* right section  */}
        <div className="w-full lg:w-1/2 flex md:h-[60vh] justify-center lg:h-screen  items-center ">
          <div className="bg-white p-6 sm:p-10 py-8 w-[80vw] md:w-[40vw]  lg:h-[90vh]  z-10 rounded-xl shadow-md ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-full items-center justify-center h-full gap-4"
            >
              <div className="flex flex-col  w-full gap-4 px-3  ">
                <div>
                  <label
                    htmlFor="email"
                    className={`${overpass.className} text-[12px] md:text-[1vw] italic text-gray-700`}
                  >
                    Email / Phone Number
                  </label>
                  <input
                    {...register("email")}
                    id="email"
                    className="border outline-none  w-full border-gray-300 text-[12px] md:text-[0.9vw] py-2 text-gray-600 rounded px-2 "
                    type="text"
                    placeholder="example@gmail.com"
                  />
                  {errors.email && (
                    <p className="error">{errors.email.message}</p>
                  )}
                </div>
                {/* <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className={`${overpass.className} text-[12px] md:text-[1vw] italic text-gray-700`}
                  >
                    Password
                  </label>
                  <input
                    {...register("password")}
                    id="password"
                    className="border outline-none    border-gray-300 text-[13px] md:text-[0.9vw] py-2 text-gray-600 rounded px-2 "
                    type="text"
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className="error">{errors.password.message}</p>
                  )}
                </div> */}
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className={`${overpass.className} text-[12px] md:text-[1vw] italic text-gray-700`}
                  >
                    Password
                  </label>
                  <div className=" relative ">
                    <input
                      {...register("password")}
                      id="password"
                      className="relative border outline-none w-full   border-gray-300 text-[13px] md:text-[0.9vw] py-2 text-gray-600 rounded px-2 "
                      type={type}
                      placeholder="Password"
                      maxLength={30}
                    />
                    {errors.password && (
                      <p className="error">{errors.password.message}</p>
                    )}
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
                </div>
                <div className=" lg:hidden w-full">
                  <h1
                    data-aos="zoom-in-up"
                    data-aos-offset="100"
                    data-aos-duration="1000"
                    className="text-[10px] lg:text-[0.9vw]     "
                  >
                    if you don't have an account?
                    <Link
                      data-aos="zoom-in-up"
                      data-aos-offset="100"
                      data-aos-duration="1000"
                      href="/Signup"
                      className=" text-blue-500 ml-1 text-[10px] hover:text-[#132928]  "
                    >
                      sign up
                    </Link>
                  </h1>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <input type="checkbox" name="r" id="ali" />
                    <label className="text-[11px] " htmlFor="ali">
                      Remember me
                    </label>
                  </div>
                  <Link
                    href="/forget"
                    className="text-[11px] underline text-[#132928] font-[500]"
                  >
                    Forget Password?
                  </Link>
                </div>
                <button className="bg-[#1e3837] text-white lg:mt-3  flex  items-center justify-center gap-2 hover:text-[#132928] hover:bg-black/20 font-[600] italic text-center px-4 py-1 lg:py-2 rounded-full">
                  {loginMutation.isPending
                    ? ("logging", (<Loader />))
                    : "Log In"}
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
