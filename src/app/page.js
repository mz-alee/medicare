"use client";
import React, { useEffect, useState } from "react";
import {
  keepPreviousData,
  QueryClient,
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import LandingPage from "./LandingPage";
import { getData, delData, postData, updateData } from "./api";
import axios from "axios";
import { current } from "@reduxjs/toolkit";
const Home = () => {
  const [alldata, setAllData] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [taskData, setTaskData] = useState({
    title: "",
    des: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prevTasks) => [...prevTasks, taskData]);
    setTaskData({ title: "", des: "" });
  };
  // get data
  const { data, isLoading, isFetched, isError, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: getData,
    placeholderData: keepPreviousData,
  });
  const queryClient = useQueryClient();
  useEffect(() => {
    setAllData(data?.data);
  }, [data]);
  // console.log("query cache", queryClient);

  // del data
  const handleDelete = async (id) => {
    try {
      const res = await delData(id);
      const updatedData = data.data.filter((items, index) => items.id !== id);
      setAllData(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  // del data with query
  const deleteMutation = useMutation({
    mutationFn: (id) => delData(id),
    onSuccess: (data, id) => {
      queryClient.setQueriesData(["users"], (olddata) => {
        return {
          ...olddata,
          data: olddata.data.length
            ? olddata.data.filter((items) => items.id !== id)
            : [],
        };
      });
      toast("deleted successfull");
    },
  });

  const updateMutation = useMutation({
    mutationFn: (id) => updateData(id),
    onSuccess: (apiData, id) => {
      // console.log(apiData, id);
      queryClient.setQueriesData(["users"], (postData) => {
        return postData.data?.map((currentPost) => {

          return currentPost.id === id
            ? { ...currentPost, title: postData.data.title }
            : currentPost;
        });
      }); 
    },
  });

  // post data with query
  const postMutation = useMutation({
    mutationFn: () => postData(tasks),
    onSuccess: () => {
      if (tasks.length >= 1) {
        toast("new data posted");
      } else {
        toast.error("add some data");
      }
    },
  });

  // post data
  const handlePostData = async () => {
    try {
      const res = await postData(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full  min-h-screen  ">
      <ToastContainer />
      <LandingPage />

     
    </div>
  );
};

export default Home;
