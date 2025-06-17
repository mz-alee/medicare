"use client"
import React, { useEffect, useState } from "react";
import ContactsSection from "./components/ContactsSection";
import ChatSection from "./components/ChatSection";
import { ZIM } from "zego-zim-web";

const message = () => {
  const [zimInstance, setZimInstance] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [messageText, setMessageText] = useState(null);
  const [allMsg, setAllMsg] = useState([]);
  const [isLoggedin, setIsLoggedin] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const appId = 312323;
  // const tokenA =
  // const tokenb =
  useEffect(() => {
    const instance = ZIM.create(appId);
    setZimInstance(instance);
    instance.on("error", function (zim, errorInfo) {
      console.log("error", errorInfo.code, errorInfo.message);
    });
    instance.on(
      "connectionStateChanged",
      function (zim, { state, event, extendedData }) {
        console.log("connectionStateChanged", state, event, extendedData);
      }
    );
    instance.on(
      "peerMessageReceived",
      function (zim, { messageList, fromConversationID }) {
        setAllMsg((prev) => [...prev, messageList]);

        console.log("peerMessageReceived", messageList, fromConversationID);
      }
    );
    instance.on("tokenWillExpire", function (zim, { second }) {
      console.log("tokenWillExpire", second);
      // You can call the renewToken method to renew the token.
      // To generate a new Token, refer to the Prerequisites.
      zim
        .renewToken(token)
        .then(function ({ token }) {
          // Renewed successfully.
        })
        .catch(function (err) {
          // Renew failed.
        });
    });
  }, []);
  return (
    <div className="flex gap-4 items-center h-full">
      <ContactsSection />
      <ChatSection />
    </div>
  );
};

export default message;
