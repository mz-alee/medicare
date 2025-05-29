"use client";
import React from "react";
import AuthLeft from "../../components/AuthLeft";
import { overpass } from "../../components/Fonts";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import logo from "../../../../public/Images/Logo.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { resetUpdatePassword } from "../../Api";
import { useRouter } from "next/navigation";
import ResetPasswordRight from "./ResetPasswordRight";

const ResetPassword = () => {
  const router = useRouter();
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
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
    updateMutation.mutate(data);
    console.log(data);
  };
  return (
    <div className=" h-[100vh]  w-full flex flex-col md:flex-row px-10">
      {/* left side  */}
      <div className="w-full lg:w-1/2 flex  justify-center items-center">
        <AuthLeft
          title="Reset Password?"
          text="password requirements"
          requirements={[
            "At least 8 characters",
            "Include an uppercase letter",
            "Include a number",
            "Include a special character",
          ]}
        />
      </div>
      {/* right side  */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <ResetPasswordRight
          register={register}
          setValue={setValue}
          getValues={getValues}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default ResetPassword;
