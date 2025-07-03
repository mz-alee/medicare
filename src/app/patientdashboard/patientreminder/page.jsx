"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import { getCookie } from "cookies-next";
import PatientHeader from "../components/PatientHeader";
import PateintReminderAppointments from "./components/PateintReminderAppointments";
import PatientMedication from "./components/patientmedication";
import {
  MedicationReminderDel,
  MedicationReminderPost,
  PatientReminderAppointmentsDel,
  PatientReminderAppointmentsGet,
  PatientReminderAppointmentsPost,
  PatientReminderMedicationGet,
} from "@/app/Api";
const PatientReminder = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [pageNum, setPageNum] = useState(0);
  const [reminderModal, setReminderModal] = useState(false);
  const queryClient = useQueryClient();
  const [medicationModalOpen, setMedicationModalOpen] = useState(false);
  const PatientReminder = useMutation({
    mutationFn: (data) => PatientReminderAppointmentsPost(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["patient reminder"]),
        setReminderModal(false);
      toast("Reminder Set Successfully");
    },

    onError: (error) => {
      console.log("patient reminder post api error", error);
      toast.error(error?.response.data?.non_field_errors[0]);
    },
  });
  const PatientReminderDel = useMutation({
    mutationFn: (id) => PatientReminderAppointmentsDel(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["patient reminder del"]);
      toast("reminder deleted successfully");
    },
    onError: (error) => {
      console.log("patient reminder del api error", error);
    },
  });
  const { data, isLoading } = useQuery({
    queryKey: ["reminder_data"],
    queryFn: PatientReminderAppointmentsGet,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log("reminder get api error", error);
    },
  });
  const MedicationReminder = useMutation({
    mutationFn: (data) => MedicationReminderPost(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["medication reminder"]);
      setMedicationModalOpen(false);
      toast("medication reminder data post successfully");
    },
    onError: (error) => {
      toast.error("Medication reminder failed");
      console.log("medication reminder post api error", error);
    },
  });
  const MedicationReminderDelete = useMutation({
    mutationFn: (id) => MedicationReminderDel(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["medication reminder"]);

      toast("Medication Reminder Deleted Successfully");
    },
    onError: (error) => {
      console.log("medication reminder post api error", error);
    },
  });
  const { data: medicationData, isLoading: medicationLoading } = useQuery({
    queryKey: ["medication_data"],
    queryFn: PatientReminderMedicationGet,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log("reminder get api error", error);
    },
  });
  console.log("///////////////////", medicationData);

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
            PatientReminder={PatientReminder}
            PatientReminderDel={PatientReminderDel}
            data={data}
            reminderModal={reminderModal}
            setReminderModal={setReminderModal}
            isLoading={isLoading}
          />
        )}
        {pageNum === 1 && (
          <PatientMedication
            MedicationReminder={MedicationReminder}
            isLoading={medicationLoading}
            data={medicationData}
            medicationModalOpen={medicationModalOpen}
            setMedicationModalOpen={setMedicationModalOpen}
            MedicationReminderDelete={MedicationReminderDelete}
          />
        )}
      </div>
    </div>
  );
};

export default PatientReminder;
