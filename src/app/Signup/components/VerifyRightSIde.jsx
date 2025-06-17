"use client";
import { overpass } from "@/app/components/Fonts";
import Otpinput from "@/app/components/Otpinput";
import { verifyPostData, verifyResendOtp } from "../../Api";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import Loader from "@/app/components/Loader";

const VerifyRightSIde = ({ pageNum, setPageNum, email }) => {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(120);
  const router = useRouter();
  const {
    setValue,

    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      token: "",
    },
  });
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  }, [seconds]);

  const value = getValues();
  const verifyMutation = useMutation({
    mutationFn: (verifyData) => verifyPostData(verifyData),
    onSuccess: (data) => {
      router.push("/Login");

      console.log("Signup successful:", data);
    },
    onError: (error) => {
      console.error("Signup failed:", error.response?.data || error.message);
      toast.error(error.response.data.message);
    },
  });
  const reGenrateOtp = useMutation({
    mutationFn: (data) => verifyResendOtp(data),
    onSuccess: (data) => {
      toast("OTP Resend Successfully");
    },
  });

  console.log(value);
  const onSubmit = (data) => {
    if (data.token.length == 5) {
      setIsActive(true);
      verifyMutation.mutate(data);
    } else {
      setIsActive(false);
      toast("Enter Your OTP First");
    }
    console.log(data);
  };
  console.log(email);

  return (
    <div className="z-10 px-2 relative bg-white py-12 flex-col  w-[80vw] sm:w-[60vw] md:w-[50vw]  lg:w-[35vw] flex justify-center  items-center lg:h-[45vh]  rounded-xl ">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col  items-center w-full gap-3.5 px-3  ">
          <Otpinput register={register} setValue={setValue} />
          <p className="text-[13px] md:text-[1vw] text-[#1e3837] capitalize">
            remaining time <span> {seconds}s</span>
          </p>
          <button
            className={`${
              isActive ? "bg-[#1e3837]" : "bg-[#3a5a59] "
            } flex items-center justify-center cursor-pointer gap-2 text-white  hover:text-[#132928] hover:bg-black/20 font-[600] italic text-center px-4 w-70 py-2 rounded-full`}
          >
            {verifyMutation.isPending ? <Loader /> : "verify"}
          </button>
          <button
            onClick={() => {
              reGenrateOtp.mutate({ email: email });
            }}
            // onClick={()=>{
            //   setSeconds(120)
            // }}
            type="button"
            className={` underline text-[14px] font-[500] text-center cursor-pointer text-[#1e3837] `}
          >
            {reGenrateOtp.isPending ? "OTP Resending" : "Resend"}
          </button>
        </div>
      </form>
      <div className="flex items-center absolute bottom-4 gap-1">
        <p className="text-[12px]  font-[400] italic">
          if you want you change your detail ?
        </p>
        <button
          className="cursor-pointer italic text-[12px] hover:text-blue-700 text-blue-500 font-[600]"
          onClick={() => {
            setPageNum(pageNum - 1);
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default VerifyRightSIde;
