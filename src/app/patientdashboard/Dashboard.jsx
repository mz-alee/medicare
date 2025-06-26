"use client";
import React from "react";
import Chart from "./components/Chart";
import BasicInformation from "./components/informationCard";
import ReminderCard from "./components/reminderCard";
import PhysicalCondition from "./components/physicalConditionCard";
import DiagnosisHistoryCard from "./components/diagnosisHistoryCard";
import ReportsCard from "./components/reportsCard";
import PatientHeader from "./components/PatientHeader";
import { useQuery } from "@tanstack/react-query";
import { PatientDashboardGetApi } from "../Api";

const Dashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["patient dashboard"],
    retry: false,
    queryFn: PatientDashboardGetApi,
    onSuccess: (data) => {
      ///
    },
    onError: (error) => {
      console.log("patient dashboard api error", error);
    },
  });
  console.log("pateint dashboard data", data?.data);

  return (
    <div className="w-full   ">
      <PatientHeader name="Dashboard" />

      <div className=" justify-center  md:flex-row gap-3 py-4 flex-wrap   flex items-center md:items-start">
        <BasicInformation data={data} isLoading={isLoading} />
        <ReminderCard data={data} isLoading={isLoading} />
        <PhysicalCondition data={data} isLoading={isLoading} />
        <Chart data={data} isLoading={isLoading} />
        <DiagnosisHistoryCard data={data} isLoading={isLoading} />
        <ReportsCard data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Dashboard;
