"use client";
import React, { useEffect, useRef, useState } from "react";
import ContactsSection from "./components/ContactsSection";
import ChatSection from "./components/ChatSection";
import { ZIM } from "zego-zim-web";
import { toast } from "react-toastify";

const message = () => {
  const [zimInstance, setZimInstance] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [messageText, setMessageText] = useState(null);
  const [allMsg, setAllMsg] = useState([]);
  const [isLoggedin, setIsLoggedin] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  // const appId = 312323;
  // // const tokenA =
  // // const tokenb =
  // useEffect(() => {
  //   const instance = ZIM.create(appId);
  //   setZimInstance(instance);
  //   instance.on("error", function (zim, errorInfo) {
  //     console.log("error", errorInfo.code, errorInfo.message);
  //   });
  //   instance.on(
  //     "connectionStateChanged",
  //     function (zim, { state, event, extendedData }) {
  //       console.log("connectionStateChanged", state, event, extendedData);
  //     }
  //   );
  //   instance.on(
  //     "peerMessageReceived",
  //     function (zim, { messageList, fromConversationID }) {
  //       setAllMsg((prev) => [...prev, messageList]);

  //       console.log("peerMessageReceived", messageList, fromConversationID);
  //     }
  //   );
  //   instance.on("tokenWillExpire", function (zim, { second }) {
  //     console.log("tokenWillExpire", second);
  //     // You can call the renewToken method to renew the token.
  //     // To generate a new Token, refer to the Prerequisites.
  //     zim
  //       .renewToken(selectedUser === "ali")
  //       .then(function ({ token }) {
  //         console.log("roken-renewed");

  //         // Renewed successfully.
  //       })
  //       .catch(function (err) {
  //         console.log(err);
  //       });
  //   });
  //   const msgEndRed = useRef(null);
  //   return () => {
  //     instance.destroy();
  //   };
  // }, []);
  // useEffect(() => {
  //   if (msgEndRed.current) {
  //     msgEndRed.current.scrollIntoView({ behavior: "smooth " });
  //   }
  // });
  // const handleLogin = () => {
  //   const info = {
  //     userID: selectedUser,
  //     userName: selectedUser === "ali" ? "hamza" : "asim",
  //   };
  //   setUserInfo(info);
  //   const loginToken = selectedUser === "ali" ? tokenA : tokenB;
  //   if (zimInstance) {
  //     zimInstance
  //       .login(userInfo, loginToken)
  //       .then(function () {
  //         // Login successful.
  //         setIsLoggedin(true);
  //         console.log("login sucessfully");
  //       })
  //       .catch(function (err) {
  //         // Login failed.
  //         console.log("login failed");
  //       });
  //   } else {
  //     console.log("instence error");
  //   }
  // };
  // const handleSendMSG = () => {
  //   if (!isLoggedin) {
  //     console.log("user not logged in");
  //     return;
  //   }
  //   var toConversationID = selectedUser === "ali" ? "hamza" : "ali"; // Peer user's ID.
  //   var conversationType = 0; // Message type; One-to-one chat: 0, in-room chat: 1, group chat:2
  //   var config = {
  //     priority: 1, // Set priority for the message. 1: Low (by default). 2: Medium. 3: High.
  //   };
  //   var messageTextObj = {
  //     type: 1,
  //     message: messageText,
  //     extendedData: "Message extended info(optional)",
  //   };
  //   zimInstance
  //     .sendMessage(
  //       messageTextObj,
  //       toConversationID,
  //       conversationType,
  //       config
  //       // notification
  //     )
  //     .then(function ({ message }) {
  //       // Message sent successfully.
  //       toast("msg send successfully");
  //       setAllMsg((prev) => [...prev, message]);
  //     })
  //     .catch(function (err) {
  //       // Failed to send a message.
  //       toast.error("msg send failed");
  //       console.log("msg send failed error", err);
  //     });
  //   setMessageText("");
  // };
  // const formatTime = (timeStamp) => {
  //   const date = new Date(timeStamp);
  //   return date.toLocaleDateString([], {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   });
  // };
  return (
    <div className="flex gap-4 items-center h-full">
      <ContactsSection />
      <ChatSection />
    </div>
  );
};

export default message;
