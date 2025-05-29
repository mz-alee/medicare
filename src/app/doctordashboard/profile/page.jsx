"use client";
import React, { useState } from "react";
import Image from "next/image";
import profile from "../../../../public/Images/person1.png";
import { useSearchParams } from "next/navigation";
import ModalEditProfile from "./components/ModalEditProfile";
import PersonalInformationModal from "./components/ModalPersonal";
import EditProfessionModal from "./components/EditProfessionModal";
import { EditProfileGetData, profilePersonalEditApi } from "../../Api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import { getCookie } from "cookies-next";
import Header from "../components/Header";
import Personalinformation from "./components/Personalinformation";
import Achiements from './components/Achiements';
const Profile = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [isprofile, setisprofile] = useState(false);
  const [isPersonalOpen, setisPersonalIsOpen] = useState(false);
  const [isProfessionalOpen, setProfessionalIsOpen] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [userData, setUserData] = useState();
  console.log(name);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["profileData"],
    queryFn: EditProfileGetData,
    onSuccess: (data) => {
      setUserData(data);
      console.log(data);
      toast("data fetch successfully");
    },
    onError: (error) => {
      console.error(error);
    },
  });
  console.log(data?.data.profession_details);

  console.log("tokennn", getCookie("token"));
  const profileEditMutation = useMutation({
    mutationFn: ({ data, id }) => profilePersonalEditApi(data, id),
    onSuccess: () => {
      toast("Profile updated successfully");
    },
    onError: (error) => {
      console.error("Profile update failed:", error);
      toast.error("Failed to update profile");
    },
  });
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
            profileEditMutation={profileEditMutation}
          />
        )}
        {pageNum === 1 && (
          <Achiements
            data={data}
            profileEditMutation={profileEditMutation}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
