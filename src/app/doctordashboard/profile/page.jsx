"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProfileGetData, profilePersonalEditApi } from "../../Api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import { getCookie, setCookie } from "cookies-next";
import Header from "../components/Header";
import Personalinformation from "./components/Personalinformation";
import Achiements from "./components/Achiements";
const Profile = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [isprofile, setisprofile] = useState(false);
  const [isPersonalOpen, setisPersonalIsOpen] = useState(false);
  const [isProfessionalOpen, setProfessionalIsOpen] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [userData, setUserData] = useState();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["profiledata"],
    queryFn: ProfileGetData,
    onSuccess: (data) => {
      toast("data fetch successfully");
    },
    retry: "false",
    onError: (error) => {
      console.error(error);
    },
  });
  setCookie("professional_id", data?.data?.profession_details?.id);

  console.log("profile dataaaaaaaaaa", data?.data);

  return (
    <div>
      <Header
        name="profile"
        links={["personal information", "achievements"]}
        setPageNum={setPageNum}
        pageNum={pageNum}
      />
      <ToastContainer />
      <div>
        {pageNum === 0 && (
          <Personalinformation
            data={data}
            isLoading={isLoading}
            // profileEditMutation={profileEditMutation}
          />
        )}
        {pageNum === 1 && (
          <Achiements
            profiledata={data}
            // profileEditMutation={profileEditMutation}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
