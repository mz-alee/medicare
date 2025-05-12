"use client";
import React, { useEffect } from "react";
import ThemeToggle from "./components/ToggleButton";
import { useQueries, useQuery } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import LandingPage from "./LandingPage";
import Link from "next/link";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const Home = () => {
  const { data, isLoading, isFetched, isError, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = res.json()
      return data
    },
    // staleTime:  5000,
    //
    // polling 
    refetchInterval:1000,
  });
console.log(isError);
  
  console.log(data);

  return (
    <div className="w-full bg-red-300 h-screen  ">
      {isLoading && <p>loading...</p>}
      {/* <ToastContainer /> */}
      <LandingPage />
      {/* {data?.map((items,index)=>{
        return <h1 key={index}>{items.title}</h1>
      })} */}
    </div>
  );
};

export default Home;
