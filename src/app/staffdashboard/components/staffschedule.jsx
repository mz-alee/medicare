"use client";
import React from "react";
import file from "../../../../public/Images/docterImages/file.svg";
import pendingAppointments from "../../../../public/Images/docterImages/pendingAppointments.svg";
import activeStaff from "../../../../public/Images/docterImages/activeStaff.svg";
import patient from "../../../../public/Images/docterImages/patient.svg";
import AppointmentBox from "@/app/doctordashboard/components/appointmentBox";
const StaffSchedule = () => {
  return (
    <div
      // data-aos="zoom-in-right"
      // data-aos-duration="1000"
      className="w-full     lg:w-[30vw] lg:h-[50vh] xl:h-[30vh] xl:min-w-[50vw]   bg-white  flex flex-col gap-4  rounded-2xl p-3"
    >
      <div className='flex  justify-between items-center'>
      <h1 className="heading italic font-[400] ">today's schedule</h1>
      <select className='text-[12px] lg:text-[0.9vw] text-gray-600 outline-none' name="" id="">
        <option  value="">weekly</option>
      </select>
      </div>
      <div className="w-full gap-2  flex items-center ">
        <div className="flex    gap-4 w-full items-center    justify-center  ">
          <div className="flex gap-4">
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
          <div className="flex gap-4">
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

export default StaffSchedule;
