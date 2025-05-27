"use client";
import { overpass } from "@/app/components/Fonts";
import Loader from '@/app/components/Loader';
import { resetUpdatePassword } from "@/app/SignupApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";

const confirmPasswordSchema = yup.object({
  password: yup.string().required("Password is a Required Field"),
  confirmPassword: yup.string().oneOf(
    [yup.ref("password"), null],
    "Passwords must match"
  ).required("Confirm Password is a Required Field")
});
const ResetPasswordRight = () => {
  const code = localStorage.getItem("token");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(confirmPasswordSchema),
    defaultValues: {
      token: code,
      password: "",
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data) => resetUpdatePassword(data),
    onSuccess: (data) => {
      router.push("/Login");
      console.log(data);
    },
    onError: (error) => {
      console.log(error.response.data.password);
      toast(error.response.data.password[0]);
    },
  });

  const onSubmit = (data) => {
    updateMutation.mutate(data);
    console.log(data);
  };

  return (
    <div className="z-10 px-2  bg-white py-8  w-[80vw] sm:w-[40vw] flex justify-center items-center lg:h-[65vh]  rounded-xl ">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col w-full gap-3 px-3  ">
          <div>
            <label
              htmlFor="password"
              className={`${overpass.className} text-[12px] md:text-[1vw] italic text-gray-700`}
            >
              new password
            </label>
            <input
              id="password"
              {...register("password")}
              className="border outline-none  w-full border-gray-300 text-[12px] md:text-[0.9vw] py-2 text-gray-600 rounded px-2"
              type="text"
              placeholder="password"
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className={`${overpass.className} text-[12px] md:text-[1vw] italic text-gray-700`}
            >
              confirm password
            </label>
            <input
              {...register("confirmPassword")}
              id="confirmPassword"
              className="border outline-none  w-full border-gray-300 text-[12px] md:text-[0.9vw] py-2 text-gray-600 rounded px-2"
              type="text"
              placeholder="password"
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword.message}</p>
            )}
          </div>
          <button className="bg-[#1e3837] flex items-center justify-center gap-2 text-white mt-5 hover:text-[#132928] hover:bg-black/20 font-[600] italic text-center px-4 w-full py-2 rounded-full">
            {updateMutation.isPending?<Loader/> :" Send"}
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

export default ResetPasswordRight;
