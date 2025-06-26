"use client";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import CertificateModal from "./CertificateModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  AwardDelApi,
  AwardEditApi,
  AwardPostApi,
  certificateDelApi,
  certificateEditApi,
  certificatePostApi,
  publicationDelApi,
  PublicationEditApi,
  publicationPostApi,
} from "@/app/Api";
import { toast, ToastContainer } from "react-toastify";
import PublicationModal from "./PublicationModal";
import AwardModal from "./AwardModal";
import * as yup from "yup";
import Loader from "@/app/components/Loader";
const Achiements = ({ profiledata, isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPublicationOpen, setIsPublicationOpen] = useState(false);
  const [isAwardOpen, setIsAwardOpen] = useState(false);
  const [isEdit, setIsEdit] = useState();
  const [certificateData, setCertificateData] = [
    profiledata?.data?.certificate_details,
  ];
  const queryClient = useQueryClient();
  const certificateMutation = useMutation({
    mutationFn: (data) => certificatePostApi(data),
    onSuccess: (data) => {
      toast("certificate uploaded successfully");
      queryClient.invalidateQueries(["certificate"]);
      setIsOpen(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  console.log(profiledata?.data?.certificate_details);

  const certificateEditMutation = useMutation({
    mutationFn: (data) => certificateEditApi(data),

    onSuccess: (data) => {
      toast("Certificate edit successfully");
      queryClient.invalidateQueries(["certificate"]);
      setIsOpen(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const publishingMutation = useMutation({
    mutationFn: (data) => publicationPostApi(data),
    onSuccess: (data) => {
      toast("Publish uploaded successfully");
      console.log("alskdjflkasjdfklaj", data);
      queryClient.invalidateQueries(["publish"]);
      setIsPublicationOpen(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const PublishingEditMutation = useMutation({
    mutationFn: (data) => PublicationEditApi(data),

    onSuccess: (data) => {
      toast("Publish edit successfully");
      queryClient.invalidateQueries(["certificate"]);
      setIsOpen(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const AwardMutation = useMutation({
    mutationFn: (data) => AwardPostApi(data),
    onSuccess: (data) => {
      toast("Award uploaded successfully");
      queryClient.invalidateQueries(["awards"]);
      setIsAwardOpen(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const AwardEditMutation = useMutation({
    mutationFn: (data) => AwardEditApi(data),

    onSuccess: (data) => {
      toast("Award edit successfully");
      queryClient.invalidateQueries(["certificate"]);
      setIsOpen(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const certificateDel = useMutation({
    mutationFn: (data) => certificateDelApi(data),
    onSuccess: () => {
      toast("certificate deleted successfully");
      queryClient.invalidateQueries(["certificate"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const publishDel = useMutation({
    mutationFn: (data) => publicationDelApi(data),
    onSuccess: () => {
      toast("Publish deleted successfully");
      queryClient.invalidateQueries(["certificate"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const awardDel = useMutation({
    mutationFn: (data) => AwardDelApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["certificate"]);

      toast("Award deleted successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  console.log("profiledata", profiledata);
  return (
    <>
      <ToastContainer />
      <div id="root">
        <CertificateModal
          certificateMutation={certificateMutation}
          certificateEditMutation={certificateEditMutation}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          yup={yup}
          isEdit={isEdit}
        />
        <PublicationModal
          publishingMutation={publishingMutation}
          PublishingEditMutation={PublishingEditMutation}
          isOpen={isPublicationOpen}
          setIsOpen={setIsPublicationOpen}
          isEdit={isEdit}
        />
        <AwardModal
          AwardMutation={AwardMutation}
          AwardEditMutation={AwardEditMutation}
          isOpen={isAwardOpen}
          setIsOpen={setIsAwardOpen}
          isEdit={isEdit}
        />
      </div>
      <div className="w-full  flex flex-col  gap-3 py-2">
        <div className=" border border-gray-200  gap-2 flex-col rounded-2xl w-full flex items-center py-2 px-8 min-h-28">
          <div className="flex justify-between w-full border-b border-gray-400 pb-2 items-center">
            <h1>Certifications</h1>
            <button
              onClick={() => {
                setIsOpen(true);
                setIsEdit("upload");
              }}
              className="bg-black hover:bg-gray-800 cursor-pointer text-white py-1 rounded-2xl px-4 text-[12px]"
            >
              + Upload
            </button>
          </div>
          {isLoading ? (
            <div className=" my-auto mx-auto">
              <Loader />
            </div>
          ) : (
            certificateData?.map((items, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex justify-between border-b border-gray-400 pb-2 "
                >
                  <div className="flex gap-2 items-center">
                    <p className="w-15 text-[9px]   lg:w-30  lg:text-[0.9vw] text-gray-700">
                      {items.date_issued}
                    </p>
                    <p className="w-15 text-[9px] lg:w-30  lg:text-[0.9vw] text-gray-700">
                      status
                    </p>
                    <p className="w-15 text-[9px]   lg:w-30  lg:text-[0.9vw] text-gray-700">
                      {items.certificate_title}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() => {
                        setIsEdit(items);
                        setIsOpen(true);
                      }}
                      type="button"
                    >
                      <FaRegEdit className="cursor-pointer hover:text-blue-400" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        console.log(items.id);

                        certificateDel.mutate(items.id);
                      }}
                    >
                      <AiFillDelete className="hover:text-red-600 cursor-pointer" />
                    </button>
                  </div>
                </div>
              );
            }) || (
              <p className="text-center my-auto text-gray-600 capitalize text-[12px] lg:text-[0.9vw]">
                no certificate
              </p>
            )
          )}
        </div>

        <div className="border border-gray-200 rounded-2xl flex flex-col gap-4  py-2 min-h-60  px-8 w-full">
          <div className="flex justify-between w-full border-b border-gray-400 pb-2 items-center">
            <h1>Publications</h1>
            <button
              onClick={() => {
                setIsPublicationOpen(true);
                setIsEdit("upload");
              }}
              className="bg-black hover:bg-gray-800 cursor-pointer text-white py-1 rounded-2xl px-4 text-[12px]"
            >
              + Upload
            </button>
          </div>
          {isLoading ? (
            <div className=" my-auto mx-auto">
              <Loader />
            </div>
          ) : (
            profiledata?.data?.publication_details?.map((items, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex justify-between border-b border-gray-400 pb-2 "
                >
                  <div className="flex gap-2 items-center">
                    <p className="w-15 text-[9px]   lg:w-30  lg:text-[0.9vw] text-gray-700">
                      {items.publish_date || "null"}
                    </p>
                    <p className="w-15 text-[9px]   lg:w-30  lg:text-[0.9vw] text-gray-700">
                      status
                    </p>
                    <p className="w-15 text-[9px]   lg:w-30  lg:text-[0.9vw] text-gray-700">
                      {items.publication_title || "null"}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() => {
                        setIsPublicationOpen(true);
                        setIsEdit(items);
                        // console.log(items.id);
                        // publishDel.mutate(items.id);
                      }}
                    >
                      <FaRegEdit className="hover:text-blue-400 cursor-pointer" />
                    </button>
                    <button
                      onClick={() => {
                        publishDel.mutate(items.id);
                      }}
                      type="button
                  
                    "
                    >
                      <AiFillDelete className="hover:text-red-600 cursor-pointer" />
                    </button>
                  </div>
                </div>
              );
            }) || (
              <p className="text-center my-auto text-gray-600 capitalize text-[12px] lg:text-[0.9vw]">
                no publication
              </p>
            )
          )}
        </div>
        <div className="border border-gray-200 rounded-2xl flex flex-col gap-4  py-2 min-h-60  px-8 w-full">
          <div className="flex justify-between w-full border-b border-gray-400 pb-2 items-center">
            <h1>Awards</h1>
            <button
              onClick={() => {
                setIsEdit("upload");
                setIsAwardOpen(true);
              }}
              className="bg-black hover:bg-gray-800 cursor-pointer text-white py-1 rounded-2xl px-4 text-[12px]"
            >
              + Upload
            </button>
          </div>
          {isLoading ? (
            <div className=" my-auto mx-auto">
              <Loader />
            </div>
          ) : (
            profiledata?.data?.award_details?.map((items, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex justify-between border-b border-gray-400 pb-2 "
                >
                  <div className="flex gap-2 items-center">
                    <p className="w-15 text-[9px]   lg:w-30  lg:text-[0.9vw] text-gray-700">
                      {items.receive_date || "null"}
                    </p>
                    <p className="w-15 text-[9px] lg:w-30  lg:text-[0.9vw] text-gray-700">
                      status
                    </p>
                    <p className="w-15 text-[9px]   lg:w-30  lg:text-[0.9vw] text-gray-700">
                      {items.award_name || "null"}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() => {
                        setIsAwardOpen(true);
                        setIsEdit(items);
                      }}
                    >
                      <FaRegEdit className="hover:text-blue-400 cursor-pointer" />
                    </button>
                    <button
                      onClick={() => {
                        awardDel.mutate(items.id);
                      }}
                    >
                      <AiFillDelete className="hover:text-red-600 cursor-pointer" />
                    </button>
                  </div>
                </div>
              );
            }) || (
              <p className="text-center my-auto text-gray-600 capitalize text-[12px] lg:text-[0.9vw]">
                no award
              </p>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Achiements;
