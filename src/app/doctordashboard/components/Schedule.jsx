"use client";
import React from "react";
import AppointmentBox from "./appointmentBox";
import file from "../../../../public/Images/docterImages/file.svg";
import pendingAppointments from "../../../../public/Images/docterImages/pendingAppointments.svg";
import activeStaff from "../../../../public/Images/docterImages/activeStaff.svg";
import patient from "../../../../public/Images/docterImages/patient.svg";
import Loader from "@/app/components/Loader";
const Schedule = ({ data, isLoading }) => {
  return (
    <div
      // data-aos="zoom-in-right"
      // data-aos-duration="1000"
      className="w-full     lg:w-[30vw] lg:h-[50vh] xl:h-[50vh] xl:w-[30vw]   bg-white  flex flex-col gap-4  rounded-2xl p-3"
    >
      <h1 className="heading italic font-[400] ">today's schedule</h1>
      <div className="w-full   flex items-center ">
        {isLoading ? (
          <div className="flex justify-center h-[250px] items-center w-full ">
            <Loader />
          </div>
        ) : (
          <div className="flex flex-wrap    lg:flex-col   gap-2 w-full items-center    justify-center  ">
            <div className="flex gap-2">
              <AppointmentBox
                color="#daedff"
                number={data?.data?.overview?.total_appointments}
                text="Appointments"
                icon={file}
              />
              <AppointmentBox
                color="#fffacf"
                number={data?.data?.overview?.pending_appointments}
                text="Pending Appointments"
                icon={pendingAppointments}
              />
            </div>
            <div className="flex gap-2">
              <AppointmentBox
                color="#dbffe5"
                number={data?.data?.overview?.new_patients}
                text="new patients"
                icon={patient}
              />
              <AppointmentBox
                color="#ead9ff"
                number={data?.data?.overview?.active_staff}
                text="active staff"
                icon={activeStaff}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
