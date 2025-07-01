"use client";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import LandingPage from "./LandingPage";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
 
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="w-full  min-h-screen  ">
      <ToastContainer />

      {getCookie("token") ? router.push("/doctordashboard") : <LandingPage />}
    </div>
  );
};

export default Home;
