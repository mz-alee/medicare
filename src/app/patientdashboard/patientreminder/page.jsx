"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import { getCookie } from "cookies-next";
import PatientHeader from "../components/PatientHeader";
import PateintReminderAppointments from './components/PateintReminderAppointments';
import PatientMedication from './components/patientmedication';
const PatientReminder = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [pageNum, setPageNum] = useState(0);
  const [userData, setUserData] = useState();
  const [Appointments, setApointments] = useState();
  console.log(name);

  // const { data, isLoading } = useQuery({
  //   queryKey: ["appointments"],
  //   queryFn: AppointmentsData,
  //   retry: false,
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //   },
  // });

  return (
    <div>
      <PatientHeader
        name="Reminders"
        links={["Appointments", "Medications"]}
        setPageNum={setPageNum}
        pageNum={pageNum}
      />
      <ToastContainer />
      <div>
        {pageNum === 0 && (
          <PateintReminderAppointments
            data={[]}
            // isLoading={isLoading}
            // profileEditMutation={profileEditMutation}
          />
        )}
        {pageNum === 1 && <PatientMedication data={[]}  />}
      </div>
    </div>
  );
};

export default PatientReminder;
