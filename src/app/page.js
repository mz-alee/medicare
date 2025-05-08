"use client";
import React, { useEffect } from "react";
import ThemeToggle from "./components/ToggleButton";
import { useQueries, useQuery } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import LandingPage from "./LandingPage";

const Home = () => {
  // const { data, isLoading, isFetched, isError, isFetching } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: () => {
  //     return ["...data"];
  //   },
  // });

  // console.log(data);

  return (
    <div className="w-full bg-red-300 h-screen  ">
      {/* <ToastContainer /> */}
      <LandingPage />
    </div>
  );
};

export default Home;
