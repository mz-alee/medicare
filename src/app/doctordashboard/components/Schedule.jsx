"use client";
import React from "react";
import AppointmentBox from "./appointmentBox";
import file from "../../../../public/Images/docterImages/file.svg";
import pendingAppointments from "../../../../public/Images/docterImages/pendingAppointments.svg";
import activeStaff from "../../../../public/Images/docterImages/activeStaff.svg";
import patient from "../../../../public/Images/docterImages/patient.svg";
const Schedule = () => {
  return (
    <div
      // data-aos="zoom-in-right"
      // data-aos-duration="1000"
      className="w-full     lg:w-[30vw] lg:h-[50vh] xl:h-[50vh] xl:w-[30vw]   bg-white  flex flex-col gap-4  rounded-2xl p-3"
    >
      <h1 className="heading italic font-[400] ">today's schedule</h1>
      <div className="w-full   flex items-center ">
        <div className="flex flex-wrap   lg:flex-col   gap-2 w-full items-center    justify-center  ">
          <div className="flex gap-2">
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
          </div>
          <div className="flex gap-2">
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
    </div>
  );
};

export default Schedule;
