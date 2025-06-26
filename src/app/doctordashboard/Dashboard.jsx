import React from "react";
import Schedule from "./components/Schedule";
import UpcomingEvent from "./components/upcomingEvent";
import Chart from "./components/Chart";
import Article from "./components/Article";
// import Appointment from "./components/Appointments";
import Header from "./components/Header";
import { useQuery } from "@tanstack/react-query";
import { DoctorsDashboardApi } from "../Api";
import DoctorAppointment from './components/Appointments';

const Dashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["doctor_dashboard "],
    queryFn: DoctorsDashboardApi,
    retry: false,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log("doctor dashboard api error", error);
    },
  });
  return (
    <div className="w-full   ">
      <Header name="Dashboard" />

      <div className=" flex-col justify-center sm:flex-row gap-3 py-4 flex-wrap flex items-center md:items-start">
        <Schedule isLoading={isLoading} data={data} />
        <UpcomingEvent />
        <DoctorAppointment isLoading={isLoading} data={data} />
        <Chart isLoading={isLoading} data={data} />
        <Article />
      </div>
    </div>
  );
};

export default Dashboard;
