"use client";
import React from "react";
import AppointmentBox from "./appointmentBox";
import file from "../../../../public/Images/docterImages/file.svg";
import pendingAppointments from "../../../../public/Images/docterImages/pendingAppointments.svg";
import activeStaff from "../../../../public/Images/docterImages/activeStaff.svg";
import patient from "../../../../public/Images/docterImages/patient.svg";
const Schedule = () => {
  return (
    <div className="w-full min-h-80    lg:w-[40vw] lg:h-[50vh] xl:h-[50vh] xl:w-[30vw]   bg-white  flex flex-col gap-2  rounded-2xl p-4">
      <h1 className="heading italic font-[400] ">today's schedule</h1>
      <div className="w-full h-full">
        <div className="flex  gap-2 w-full items-center  h-50 flex-wrap justify-center  ">
          <AppointmentBox
            color="#daedff"
            number="100"
            text="Appointments"
            icon={file}
          />
          <AppointmentBox
            color="#fffacf"
            number="400"
            text="Pending Appointments"
            icon={pendingAppointments}
          />
          <AppointmentBox
            color="#dbffe5"
            number="50"
            text="new patients"
            icon={patient}
          />
          <AppointmentBox
            color="#ead9ff"
            number="90"
            text="active staff"
            icon={activeStaff}
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
