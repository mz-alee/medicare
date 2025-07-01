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
import { onMessage } from "firebase/messaging";
import { useMutation } from "@tanstack/react-query";
import { notificationsPost } from "../Api";
import { generateToken, messaging } from "../notifcations/firebase";
import { getCookie } from "cookies-next";
const DoctorDashboard = () => {
  const notifcationsMutation = useMutation({
    mutationFn: (data) => notificationsPost(data),
    onSuccess: () => {},
    retry: false,
    onError: (error) => {
      console.log("notification api error", error);
    },
  });

  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log("messaging payload ", payload);
    });

    notifcationsMutation.mutate({
      registration_id: getCookie("notification_token"),
      type: "web",
    });
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <Dashboard />
    </>
  );
};

export default DoctorDashboard;
