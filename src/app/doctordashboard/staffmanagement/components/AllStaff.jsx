import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import AddStaffModal from "./AddStaffModal";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  StaffAddPostApi,
  StaffDelApi,
  StaffGetApi,
  StaffListGetApi,
} from "@/app/Api";
import { toast } from "react-toastify";
const AllStaff = () => {
  const [addStaffisOpen, setAddStaffIsOpen] = useState(false);
  const [staffId, setStaffID] = useState(null);
  const { data, isLoading } = useQuery({
    queryKey: ["staff list"],
    queryFn: StaffListGetApi,
    retry: false,
    onSuccess: (data) => {
      // console.log(data);
    },
    onError: (error) => {
      console.log("staff list get api error", error);
    },
  });
  const { data: StaffManagementData, StaffManagementLoading } = useQuery({
    queryKey: ["staff list"],
    queryFn: StaffGetApi,
    retry: false,
    onSuccess: (data) => {
      // console.log(data);
    },
    onError: (error) => {
      console.log("staff list get api error", error);
    },
  });

  console.log(
    "staff management data .....",
    StaffManagementData?.data?.results
  );

  const createStaffMutation = useMutation({
    mutationFn: (data) => StaffAddPostApi(data),
    onSuccess: () => {
      toast("New Staff Added");
    },
    onError: (error) => {
      toast.error("staff could not Add");
    },
  });
  const DelStaffMutation = useMutation({
    mutationFn: (id) => StaffDelApi(id),
    onSuccess: () => {
      toast(" Staff Deleted");
    },
    onError: (error) => {
      toast.error("staff could not del");
    },
  });
  return (
    <>
      <div id="root">
        <AddStaffModal
          setStaffID={setStaffID}
          staffId={staffId}
          data={data}
          isOpen={addStaffisOpen}
          setIsOpen={setAddStaffIsOpen}
          createStaffMutation={createStaffMutation}
        />
      </div>
      <div className="bg-white rounded-2xl p-2">
        <div className="flex justify-end">
          <button
            onClick={() => {
              setAddStaffIsOpen(true);
            }}
            className="cursor-pointer border-none rounded-2xl italic px-6  text-[8px]  md:text-[0.8vw] bg-[#41797a] text-white capitalize p-1"
          >
            + add new staff
          </button>
        </div>
        <div className="  rounded-2xl  h-[90vh] overflow-y-scroll hide-scrollbar">
          <table className="min-w-full   table-auto border-collapse text-left">
            <thead className="">
              <tr>
                <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                  Date
                </th>
                <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                  Time
                </th>
                <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                  patient name
                </th>
                <th className="px-4 py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                  Role
                </th>
                <th className="px-3  py-2 lg:text-[0.9vw] text-sm font-medium text-gray-700">
                  Duty
                </th>
                <th className="px-4  py-2 text-sm lg:text-[0.9vw] text-center font-medium text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {StaffManagementData?.data?.results.map((items, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-black/10 cursor-default text-[10px] lg:text-[0.9vw]  border-gray-200"
                >
                  <td className="px-4 py-2  text-gray-600">02/12/2012</td>
                  <td className="px-4 py-2  text-gray-600">8:00 AM</td>
                  <td className="px-4 py-2   flex items-center gap-1">
                    <span className="block border border-gray-600 w-7 h-7 rounded-full"></span>
                    {items.patient_name}
                  </td>
                  <td className="px-4 py-2  text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt, voluptatum.
                  </td>
                  <td className="px-4 py-2  ">cleaner</td>
                  <td className="px-4 py-2   flex text-lg justify-center gap-6 ">
                    <FaRegEdit className="hover:text-blue-600" />
                    <button
                      onClick={() => {
                        DelStaffMutation.mutate(items.id);
                      }}
                    >
                      <MdOutlineDelete className=" text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllStaff;
