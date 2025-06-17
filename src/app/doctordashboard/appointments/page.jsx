"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import { getCookie } from "cookies-next";
import Header from "../components/Header";
import AllAppointments from "./components/AllAppointments";
import PateintInfo from "./components/PateintInfo";
import { AppointmentsData } from "@/app/Api";
const Appointments = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [pageNum, setPageNum] = useState(0);
  const [userData, setUserData] = useState();
  const [Appointments, setApointments] = useState();
  console.log(name);

  const { data,isLoading } = useQuery({
    queryKey: ["appointments"],
    queryFn: AppointmentsData,
    retry: false,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });


  return (
    <div>
      <Header
        name="Patient Listing"
        links={["All Appointments", "patient info"]}
        setPageNum={setPageNum}
        pageNum={pageNum}
      />
      <ToastContainer />
      <div>
        {pageNum === 0 && (
          <AllAppointments
            data={data}
            isLoading={isLoading}
            // profileEditMutation={profileEditMutation}
          />
        )}
        {pageNum === 1 && <PateintInfo data={data} isLoading={isLoading} />}
      </div>
    </div>
  );
};

export default Appointments;
