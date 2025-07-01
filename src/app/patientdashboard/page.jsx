"use client";
import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import { onMessage } from "firebase/messaging";
import { useMutation } from "@tanstack/react-query";
import { generateToken, messaging } from "../notifcations/firebase";
import { notificationsPost } from "../Api";
import { getCookie } from "cookies-next";
const Patient = () => {
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
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Patient;
