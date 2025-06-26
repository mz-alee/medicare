"use client";
import React from "react";
import StaffSchedule from "./components/staffschedule";
import StaffHeader from "./components/staffheader";
import StaffDashboardChart from "./components/staffdashboardchart";
import StaffAppointmentBox from "./components/staffappointmentbox";
import StaffRole from "./components/staffrole";
import { useQuery } from "@tanstack/react-query";
import { StaffDashboardGetApi } from "../Api";

const Dashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["staff_dashboard_Data"],
    queryFn: StaffDashboardGetApi,
    onSuccess: (data) => {},
    onError: (error) => {
      console.log("staf dashboard get api error", error);
    },
  });
  console.log("staff dashboard data", data?.data);

  return (
    <div className="w-full   ">
      <StaffHeader name="Dashboard" />

      <div className=" flex-col justify-center sm:flex-row gap-3 py-4 flex-wrap   flex items-center md:items-start">
        <StaffSchedule data={data} />
        <StaffRole data={data} />
        <StaffAppointmentBox data={data} />
        <StaffDashboardChart data={data} />
        {/* <UpcomingEvent />
        <Appointment />
        <Chart />
        <Article /> */}
      </div>
    </div>
  );
};

export default Dashboard;
