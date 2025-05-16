import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Schedule from "./components/Schedule";
import UpcomingEvent from "./components/upcomingEvent";
import Appointments from "./components/Appointments";
import Article from "./components/Article";
import Chart from './components/Chart';

const page = () => {
  return (
    <div className="flex h-screen w-full  bg-[#f9f9f9] ">
      <Navbar />
      {/* header  */}
      <div className="w-full  overflow-y-scroll px-6">
        <Header />
        {/* content  */}
        <div className="  flex-col md:flex-row gap-3 py-4 flex-wrap md:justify-between  flex items-center md:items-start   ">
          <Schedule />
          <UpcomingEvent />
          <Appointments />
          <Chart/>
          <Article />
        </div>
      </div>
    </div>
  );
};

export default page;
