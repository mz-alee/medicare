"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import { getCookie } from "cookies-next";
import Header from "../components/Header";
import AllSchedule from "./components/AllSchedule";
const StaffManagement = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [pageNum, setPageNum] = useState(0);
  const [userData, setUserData] = useState();
  console.log(name);

  return (
    <div>
      <Header
        name="Availability"
        links={["All Schedule"]}
        setPageNum={setPageNum}
        pageNum={pageNum}
      />
      <ToastContainer />
      <div>
        {pageNum === 0 && (
          <AllSchedule
          // data={data}
          // profileEditMutation={profileEditMutation}
          />
        )}
        {/* {pageNum === 1 && <PateintInfo />} */}
      </div>
    </div>
  );
};

export default StaffManagement;
