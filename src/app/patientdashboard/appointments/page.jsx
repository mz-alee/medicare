"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import { getCookie } from "cookies-next";
import {
  AppointmentGetApi,
  DoctorsListDataAPi,
  TimeSlotGetAPi,
} from "@/app/Api";
import PateintAppointments from "./PatientAppointments";
import PateintInfo from "./PatientInfo";
import PatientHeader from "../components/PatientHeader";
import moment from "moment";
const Appointments = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [pageNum, setPageNum] = useState(0);
  const [userData, setUserData] = useState();
  const [Appointments, setApointments] = useState();

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
    queryKey: ["appointment_data"],
    queryFn: AppointmentGetApi,
    retry: false,
    onSuccess: (data) => {
      // console.log(data);
    },
    onError: (error) => {
      console.log("appointment get api error", error);
    },
  });

  return (
    <div>
      <PatientHeader
        name="Patient Listing"
        links={["All Appointments", "patient info"]}
        setPageNum={setPageNum}
        pageNum={pageNum}
      />
      <ToastContainer />
      <div>
        {pageNum === 0 && (
          <PateintAppointments
            data={data}
            appointmentData={appointmentData}
            isLoading={appointmentLoading}
            // profileEditMutation={profileEditMutation}
          />
        )}
        {pageNum === 1 && (
          <PateintInfo
            appointmentData={appointmentData}
            isLoading={appointmentLoading}
          />
        )}
      </div>
    </div>
  );
};

export default Appointments;
