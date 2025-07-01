"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import { getCookie } from "cookies-next";
import {
  AppointmentGetApi,
  AppointmentsData,
  DoctorsListDataAPi,
} from "@/app/Api";
import StaffHeader from "../components/staffheader";
import PateintInfo from "./components/patientinfo";
import StaffAppointments from "./components/StaffAppointments";
const Appointments = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [pageNum, setPageNum] = useState(0);
  const [userData, setUserData] = useState();
  const [Appointments, setApointments] = useState();
  const [filterUrl, setFilterUrl] = useState({ filter: "today" });
  console.log(name);
  const [filters, setFilters] = useState({ status: "confirmed", page: 2 });

  const { data, isLoading } = useQuery({
    queryKey: ["doctor data"],
    queryFn: DoctorsListDataAPi,
    retry: false,
    onSuccess: (data) => {
      // console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const { data: appointmentData, isLoading: appointmentLoading } = useQuery({
    queryKey: ["appointment_data", filters],
    queryFn: ({ queryKey }) => {
      const [, params] = queryKey;
      console.log("🧪 queryKey:", queryKey); 
      return AppointmentGetApi(params);
    },
    retry: false,
    onSuccess: () => {
      toast("data...");
    },
    onError: (error) => {
      console.error("appointment get api error", error);
    },
  });

  console.log(appointmentData?.data);

  return (
    <div>
      <StaffHeader
        name="Patient Listing"
        links={["All Appointments", "patient info"]}
        setPageNum={setPageNum}
        pageNum={pageNum}
      />
      <ToastContainer />
      <div>
        {pageNum === 0 && (
          <StaffAppointments
            setFilterUrl={setFilterUrl}
            data={data}
            appointmentData={appointmentData}
            isLoading={isLoading}
            appointmentLoading={appointmentLoading}
          />
        )}
        {pageNum === 1 && (
          <PateintInfo data={appointmentData} isLoading={appointmentLoading} />
        )}
      </div>
    </div>
  );
};

export default Appointments;
