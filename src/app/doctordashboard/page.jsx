"use client";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Schedule from "./components/Schedule";
import UpcomingEvent from "./components/upcomingEvent";
import Appointments from "./components/Appointments";
import Article from "./components/Article";
import Chart from "./components/Chart";
import "aos/dist/aos.css";
import Aos from "aos";
import Dashboard from "./Dashboard";

const DoctorDashboard = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
    Aos.refresh(); // <-- important
  }, []);

  return (
    <>
      <Dashboard />
    </>
  );
};

export default DoctorDashboard;
