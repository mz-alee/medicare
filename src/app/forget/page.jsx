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
import { forgetPostData, resetUpdatePassword } from "../SignupApi";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import ForgetOtp from "./component/forgetOtp";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ResetPassword from "./component/resetPassword";
import ResetPasswordRight from "./component/ResetPasswordRight";
const forgetSchema = yup.object({
  email: yup.string().required("email is a required field"),
});
const Forgetpassword = () => {
  const [pagenum, setPageNum] = useState(1);
  const [totalPageNum, setTotalPageNum] = useState(3);
  const [OTP, setOTP] = useState(null);
  const router = useRouter();
  console.log(OTP);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgetSchema),
    defaultValues: {
      token: OTP,
      password: "",
      email:'',
    },
  });
  const value = getValues();
  const forgetMutation = useMutation({
    mutationFn: (forgetData) => forgetPostData(forgetData),
    onSuccess: () => {
      setPageNum(pagenum + 1);
    },
  });
  const updateMutation = useMutation({
    mutationFn: (data) => resetUpdatePassword(data),
    onSuccess: (data) => {
      router.push("/Login");
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (data) => {
    forgetMutation.mutate(data);
    console.log(data);
  };
  const handleReset = (data) => {
    updateMutation.mutate(data);
    console.log(data);
  };
  console.log(errors);
  console.log("valueeeeeeees", value.email);

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

      {/* {pagenum === 3 && <ResetPassword />} */}
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
              forgetMutation={forgetMutation}
              errors={errors}
            />
          )}
          {pagenum === 2 && (
            <ForgetOtp
              register={register}
              pageNum={pagenum}
              setPageNum={setPageNum}
              setOTP={setOTP}
              email={value.email}
            />
          )}
          {pagenum === 3 && (
            <ResetPasswordRight
              register={register}
              setValue={setValue}
              getValues={getValues}
              handleSubmit={handleSubmit}
              handleReset={handleReset}
              OTP={OTP}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
