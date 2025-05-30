"use client";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import CertificateModal from "./CertificateModal";
import { useMutation } from "@tanstack/react-query";
import {
  AwardDelApi,
  AwardPostApi,
  certificateDelApi,
  certificatePostApi,
  publicationDelApi,
  publicationPostApi,
} from "@/app/Api";
import { toast } from "react-toastify";
import PublicationModal from "./PublicationModal";
import AwardModal from "./AwardModal";
import * as yup from "yup";
const Achiements = ({ profiledata }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPublicationOpen, setIsPublicationOpen] = useState(false);
  const [isAwardOpen, setIsAwardOpen] = useState(false);
  const [certificateData, setCertificateData] = [
    profiledata.data.certificate_details,
  ];
  const certificateMutation = useMutation({
    mutationFn: (data) => certificatePostApi(data),
    onSuccess: (data) => {
      toast("certificate uploaded successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const publishingMutation = useMutation({
    mutationFn: (data) => publicationPostApi(data),
    onSuccess: (data) => {
      toast("publish uploaded successfully");
      console.log("alskdjflkasjdfklaj", data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const AwardMutation = useMutation({
    mutationFn: (data) => AwardPostApi(data),
    onSuccess: (data) => {
      toast("Award uploaded successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const certificateDel = useMutation({
    mutationFn: (data) => certificateDelApi(data),
    onSuccess: () => {
      toast("certificate deleted successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const publishDel = useMutation({
    mutationFn: (data) => publicationDelApi(data),
    onSuccess: () => {
      toast("certificate deleted successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const awardDel = useMutation({
    mutationFn: (data) => AwardDelApi(data),
    onSuccess: () => {
      toast("certificate deleted successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  console.log("profiledata", profiledata.data.award_details);

  return (
    <>
      <div id="root">
        <CertificateModal
          certificateMutation={certificateMutation}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          yup={yup}
        />
        <PublicationModal
          publishingMutation={publishingMutation}
          isOpen={isPublicationOpen}
          setIsOpen={setIsPublicationOpen}
        />
        <AwardModal
          AwardMutation={AwardMutation}
          isOpen={isAwardOpen}
          setIsOpen={setIsAwardOpen}
        />
      </div>
      <div className="w-full  flex flex-col gap-3 py-2">
        <div className=" border border-gray-200  gap-2 flex-col rounded-2xl w-full flex items-center py-2 px-8 min-h-28">
          <div className="flex justify-between w-full border-b border-gray-400 pb-2 items-center">
            <h1>Certifications</h1>
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="bg-black hover:bg-gray-800 cursor-pointer text-white py-1 rounded-2xl px-4 text-[12px]"
            >
              + Upload
            </button>
          </div>
          {certificateData?.map((items, index) => {
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
                  <button type="button">
                    <FaRegEdit className="hover:text-blue-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      console.log(items.id);
                      certificateDel.mutate(items.id);
                    }}
                  >
                    <AiFillDelete className="hover:text-red-600" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* personal information  */}
        <div className="border border-gray-200 rounded-2xl flex flex-col gap-4  py-2 min-h-60  px-8 w-full">
          <div className="flex justify-between w-full border-b border-gray-400 pb-2 items-center">
            <h1>Publications</h1>
            <button
              onClick={() => {
                setIsPublicationOpen(true);
              }}
              className="bg-black hover:bg-gray-800 cursor-pointer text-white py-1 rounded-2xl px-4 text-[12px]"
            >
              + Upload
            </button>
          </div>
          {profiledata?.data?.publication_details?.map((items, index) => {
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
                  <button>
                    <FaRegEdit className="hover:text-blue-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      console.log(items.id);
                      publishDel.mutate(items.id);
                    }}
                  >
                    <AiFillDelete className="hover:text-red-600" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border border-gray-200 rounded-2xl flex flex-col gap-4  py-2 min-h-60  px-8 w-full">
          <div className="flex justify-between w-full border-b border-gray-400 pb-2 items-center">
            <h1>Awards</h1>
            <button
              onClick={() => {
                setIsAwardOpen(true);
              }}
              className="bg-black hover:bg-gray-800 cursor-pointer text-white py-1 rounded-2xl px-4 text-[12px]"
            >
              + Upload
            </button>
          </div>
          {profiledata?.data?.award_details?.map((items, index) => {
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
                  <button>
                    <FaRegEdit className="hover:text-blue-400" />
                  </button>
                  <button
                    onClick={() => {
                      awardDel.mutate(items.id);
                    }}
                  >
                    <AiFillDelete className="hover:text-red-600" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Achiements;
