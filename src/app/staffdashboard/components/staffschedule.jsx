"use client";
import React from "react";
import file from "../../../../public/Images/docterImages/file.svg";
import pendingAppointments from "../../../../public/Images/docterImages/pendingAppointments.svg";
import activeStaff from "../../../../public/Images/docterImages/activeStaff.svg";
import patient from "../../../../public/Images/docterImages/patient.svg";
import AppointmentBox from "@/app/doctordashboard/components/appointmentBox";
import StaffDashAppointmentBox from "./staffDashAppointmentBox";
const StaffSchedule = ({ data }) => {
  console.log(data?.data?.pending_appointments);

  return (
    <div
      // data-aos="zoom-in-right"
      // data-aos-duration="1000"
      className="w-full sm:w-[55vw] md:w-[44vw] lg:w-[48vw] xl:w-[50vw] lg:justify-center  md:h-[50vh]   lg:h-[30vh]   bg-white  flex flex-col gap-4  rounded-2xl p-3"
    >
      <div className="flex  justify-between items-center">
        <h1 className="heading italic font-[400] ">today's schedule</h1>
        <select
          className="text-[12px] lg:text-[0.9vw] text-gray-600 outline-none"
          name=""
          id=""
        >
          <option value="">weekly</option>
        </select>
      </div>
      <div className="w-full gap-2   flex items-center ">
        <div className="flex   flex-col lg:flex-row  gap-4 w-full items-center    justify-center  ">
          <div className="flex  gap-4">
            <StaffDashAppointmentBox
              color="#daedff"
              number={data?.data?.overview?.total_appointments}
              text="Appointments"
              icon={file}
            />
            <StaffDashAppointmentBox
              color="#fffacf"
              number={data?.data?.overview?.checked_in_patients}
              text="Checked-in-patients"
              icon={pendingAppointments}
            />
          </div>
          <div className="flex gap-4">
            <StaffDashAppointmentBox
              color="#dbffe5"
              number={data?.data?.overview?.new_patients}
              text="new patients"
              icon={patient}
            />
            <StaffDashAppointmentBox
              color="#ead9ff"
              number={data?.data?.overview?.pending_patients}
              text="waiting patient"
              icon={activeStaff}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffSchedule;
