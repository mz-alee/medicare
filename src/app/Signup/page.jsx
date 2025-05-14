"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import authScreenBg from "../../../public/Images/authScreenBG.png";
import AuthLeft from "../components/AuthLeft";
import AuthRight from "../components/AuthRight";
import { overpass } from "../components/Fonts";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import logo from "../../../public/Images/Logo.png";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSignupData, postData } from "../SignupApi";
import { useForm } from "react-hook-form";
import SelectRole from "./SelectRole";
import SignupForm from "./components/SignupForm";

const Signup = () => {
  const [pagenum, setPageNum] = useState(1);
  const [totalPageNum, setTotalPageNum] = useState(2);

  useEffect(() => {
    Aos.init({ once: false });
  }, []);

  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      select_role: "",
      username: "",
      date_of_birth: "",
      email: "",
      gender: "",
      password: "",
      phone_number: "",
    },
  });

  const signupMutation = useMutation({
    mutationFn: (userData) => postData(userData),
    onSuccess: (data) => {
      console.log("Signup successful:", data);
    },
    onError: (error) => {
      console.error("Signup failed:", error.response?.data || error.message);
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    // signupMutation.mutate(data);
    signupMutation.mutate({

    username:"ali1",
    date_of_birth:"2000-02-24",
    gender:"male",
    select_role:"doctor",
    email:"aliraza.1006724@gmail.com",
    phone_number:"03012038477",
    password:"Kabeder@123"

    });
  };

  return (
    <div className="authBg bg-[#132928] min-h-screen w-full relative overflow-hidden">
      {/* <SelectRole /> */}

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

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen z-10 relative px-4 py-8 gap-10">
        {/* Left Section */}
        <div className="w-full md:h-[60vh] lg:w-1/2 flex  justify-center items-center">
          {pagenum === 1 && (
            <SelectRole
              pageNum={pagenum}
              setValue={setValue}
              setPageNum={setPageNum}
            />
          )}
          {pagenum === 2 && (
            <AuthLeft
              route="/Login"
              title="Log in"
              text="if you already have an Account"
            />
          )}
        </div>

        {/* Right Section */}
        {pagenum === 2 && (
          <SignupForm
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            register={register}
            signupMutation={signupMutation}
          />
        )}
      </div>
    </div>
  );
};

export default Signup;
