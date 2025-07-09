import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import AddStaffModal from "./AddStaffModal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import profile from "../../../../../public/Images/empty.webp";
import {
  StaffAddPostApi,
  StaffDelApi,
  StaffGetApi,
  StaffListGetApi,
} from "@/app/Api";
import { toast } from "react-toastify";
import Loader from "@/app/components/Loader";
import moment from "moment";
import Swal from "sweetalert2";
import Image from "next/image";
const AllStaff = () => {
  const [addStaffisOpen, setAddStaffIsOpen] = useState(false);
  const [staffId, setStaffID] = useState(null);
  const queryClint = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["staff data "],
    queryFn: StaffGetApi,
    retry: false,

    onSuccess: (data) => {
      console.log(data);
    },

    onError: (error) => {
      console.log("staff list get api error", error);
    },
  });

  const createStaffMutation = useMutation({
    mutationFn: (data) => StaffAddPostApi(data),
    onSuccess: () => {
      toast("New Staff Added");
      queryClint.invalidateQueries(["create_staff"]);
    },
    onError: (error) => {
      toast.error("staff could not Add");
    },
  });
  const DelStaffMutation = useMutation({
    mutationFn: (id) => StaffDelApi(id),
    onSuccess: () => {
      queryClint.invalidateQueries(["remove_staff"]);

      toast(" Staff Deleted");
    },
    onError: (error) => {
      toast.error("staff could not del");
    },
  });
  console.log("data", data);

  return (
    <>
      <div id="root">
        <AddStaffModal
          setStaffID={setStaffID}
          staffId={staffId}
          // data={data}
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
        <div className="  rounded-2xl  h-[67vh] overflow-y-scroll hide-scrollbar">
          {isLoading ? (
            <div className="h-full w-full  flex justify-center items-center">
              <Loader />
            </div>
          ) : !data?.data?.results?.length ? (
            <div className="h-full w-full  flex justify-center items-center">
              <p className="text-gray-600 text-[12px] lg:text-[0.9vw] capitalize">
                no record found
              </p>
            </div>
          ) : (
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
                    staff name
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
                {data?.data?.results.map((items, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-black/10 cursor-default text-[10px] lg:text-[0.9vw]  border-gray-200"
                  >
                    <td className="px-4 py-2  text-gray-600">
                      {moment(items.assigned_at).format("DD MM YYYY")}
                    </td>
                    <td className="px-4 py-2  text-gray-600">
                      {moment(items?.assigned_at).format("hh mm a")}
                    </td>
                    <td className="px-4 py-2   flex items-center gap-1">
                      <span className="block border border-gray-400 w-7 h-7 overflow-hidden rounded-full">
                        <Image
                          src={items?.user_details?.image || profile}
                          className="w-7 h-7"
                        />
                      </span>
                      {items?.staff_detail?.username}
                    </td>
                    <td className="px-4 py-2  text-gray-600">
                      {items?.staff_role}
                    </td>
                    <td className="px-4 py-2  ">{items?.duty}</td>
                    <td className="px-4 py-2   flex text-lg justify-center gap-6 ">
                      <FaRegEdit className="hover:text-blue-600 cursor-pointer" />
                      <button
                        onClick={() => {
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              DelStaffMutation.mutate(items.id);
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                              });
                            }
                          });
                        }}
                      >
                        <MdOutlineDelete className=" text-red-600 cursor-pointer" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default AllStaff;
