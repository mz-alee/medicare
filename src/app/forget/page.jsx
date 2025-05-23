"use client";
import Image from "next/image";
import React, { useState } from "react";
import AuthLeft from "../components/AuthLeft";
import AuthRight from "../components/AuthRight";
import { overpass } from "../components/Fonts";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import ForgetRightSide from "./component/ForgetRightSide";
import logo from "../../../public/Images/Logo.png";
import { useMutation } from "@tanstack/react-query";
import { forgetPostData } from "../SignupApi";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import ForgetOtp from "./component/forgetOtp";
const Forgetpassword = () => {
  const [pagenum, setPageNum] = useState(1);
  const [totalPageNum, setTotalPageNum] = useState(2);
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const forgetMutation = useMutation({
    mutationFn: (forgetData) => forgetPostData(forgetData),
    onSuccess: () => {
      setPageNum(pagenum + 1);
    },
  });
  const onSubmit = (data) => {
    forgetMutation.mutate(data);
    console.log(data);
  };
  return (
    <div className="authBg bg-[#132928]  min-h-screen  w-full">
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

      <div className="authLeft flex gap-10 sm:gap-15   h-[100vh]  w-full flex-col lg:flex-row items-center  ">
        {/* left section  */}
        <div className="z-10 flex h-[40vh] w-full  lg:h-[80vh]  lg:w-1/2 ">
          <AuthLeft
            route={"/Signup"}
            buttonName={"Forget Password?"}
            text={
              "Enter your email address and we will send a verification code to reset  your forgotten password."
            }
          />
        </div>
        {/* right section  */}
        <div className="z-10 flex w-full px-2 h-[50vh] sm:h-[30vh] lg:h-screen  md:w-1/2  justify-center items-center ">
          {pagenum === 1 && (
            <ForgetRightSide
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
              register={register}
            />
          )}
          {pagenum === 2 && (
            <ForgetOtp pageNum={pagenum} setPageNum={setPageNum} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
