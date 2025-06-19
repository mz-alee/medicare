import React from "react";
import StaffSchedule from "./components/staffschedule";
import StaffHeader from "./components/staffheader";
import StaffDashboardChart from "./components/staffdashboardchart";
import StaffAppointmentBox from "./components/staffappointmentbox";
import StaffRole from './components/staffrole';

const Dashboard = () => {
  return (
    <div className="w-full   ">
      <StaffHeader name="Dashboard" />

      <div className=" flex-col md:flex-row gap-3 py-4 flex-wrap   flex items-center md:items-start">
        <StaffSchedule />
        <StaffRole/>
        <StaffAppointmentBox />
        <StaffDashboardChart />
        {/* <UpcomingEvent />
        <Appointment />
        <Chart />
        <Article /> */}
      </div>
    </div>
  );
};

export default Dashboard;
