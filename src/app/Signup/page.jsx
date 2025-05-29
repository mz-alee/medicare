"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AuthLeft from "../components/AuthLeft";
import AuthRight from "../components/AuthRight";
import { overpass } from "../components/Fonts";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import logo from "../../../public/Images/Logo.png";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSignupData, postData, verifyPostData } from "../Api";
import { useForm } from "react-hook-form";
import SelectRole from "./SelectRole";
import SignupForm from "./components/SignupForm";
import VerifyRightSIde from "./components/VerifyRightSIde";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
const schema = yup.object().shape({
  username: yup.string().required("Full Name is a Required Field"),
  email: yup.string().email().required("Email is a Required Field"),
  gender: yup.string().required("Gender is a Required Field"),
  date_of_birth: yup.string().required("Date of Birth is a Required Field"),
  phone_number: yup
    .number()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" || isNaN(value) ? null : value
    )
    .required("Phone Number is a Required Field"),
  password: yup
    .string()
    .required("Password is a Required Field")
    .min(6)
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).*$/,
      "Password must contain at least one uppercase letter, one number, and one special character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
const Signup = () => {
  const [pagenum, setPageNum] = useState(1);
  const [totalPageNum, setTotalPageNum] = useState(3);
  const [type, setType] = useState("password");
  console.log(pagenum);

  useEffect(() => {
    Aos.init({ once: false });
  }, []);
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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
  console.log("errorsssss", errors);

  const signupMutation = useMutation({
    mutationFn: (userData) => postData(userData),
    onSuccess: (data) => {
      setPageNum(pagenum + 1);
      console.log("Signup successful:", data);
    },
    onError: (error) => {
      console.error("Signup failed:", error.response?.data || error.message);
      toast.error(error.response.data.non_field_errors[0]);
    },
  });

  const value = getValues();

  const onSubmit = (data) => {
    console.log(data);
    console.log("valueeeeeee", value);
    signupMutation.mutate(data);
  };
  console.log("valuesssssssss", value);

  return (
    <div className="authBg bg-[#132928] min-h-screen w-full relative overflow-hidden">
      {/* <SelectRole /> */}
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

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen z-10 relative px-4 py-8 gap-10">
        {/* <button
          onClick={() => {
            verifyMutation.mutate({
              token: "98871",
            });
          }}
        >
          verify
        </button> */}
        {/* Left Section */}
        <div className="w-full md:h-[60vh] lg:w-1/2 flex  justify-center items-center">
          {pagenum === 1 && (
            <SelectRole
              pageNum={pagenum}
              setValue={setValue}
              setPageNum={setPageNum}
            />
          )}
          {pagenum === 3 && (
            <VerifyRightSIde
              email={value.email}
              value={value}
              pageNum={pagenum}
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
            errors={errors}
            pageNum={pagenum}
            setPageNum={setPageNum}
          />
        )}
      </div>
    </div>
  );
};

export default Signup;
