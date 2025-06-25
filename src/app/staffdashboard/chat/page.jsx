"use client";
import React, { useEffect, useRef, useState } from "react";
// import ContactsSection from "./components/ContactsSection";
// import ChatSection from "./components/ChatSection";
import { ZIM } from "zego-zim-web";
import { toast } from "react-toastify";

const Message = () => {
  // const msgEndRed = useRef(null);
  const [zimInstance, setZimInstance] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [allMsg, setAllMsg] = useState([]);
  const [isLoggedin, setIsLoggedin] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  // useEffect(() => {
  //   if (msgEndRed.current) {
  //     msgEndRed.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [allMsg]);
  const appId = 135771681;
  const tokenA =
    "04AAAAAGhcRAMADNSdvWjnHiuPLYROAACt2wlQVmoxaFCSQTTH/uR4uWlNXBZNOx58uKY/6dfPvMuRPMzF31Y6UE2UTsRQZi8HCqWXGpF2/+NPJTlRotNCR6rvCeNv8zcOF4Ey70oq5OcLaY82EAgtTxNqIryWc92l+Wt3s2tPUVN/OTaWDOFWsMpITXIC837z3dXRfnPrf/HvYPcN/Hag9ZT6nefliPaa2QbnR7Ojnhf8uMORTT9NorDhSijH92D1xjuvztwB";
  const tokenB =
    "04AAAAAGhcRBsADJi0iUGMAbHazuHmsQCuU8AjTNSbHvK/onq3obAydMsi1cMlpKbm7nBrC2K+jmMP5+XRw/GLvVU3bAWSLQv8L8xYoj+g5SX4zPxRg774ADhKHskk7OiwH8QdVUjY4BsC6zieoH8o+H4IHqfXwPdbprqdgH2S87CWjhD8XVDbSmbbvpduchYWvygwTelflSzMOVEgtJyyEqXPi36Ajz9D0TDjNvoMIpdXjhOjICyFCZIP6qS5vWSoVxqIbqRXAQ==";
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
        setAllMsg((prev) => [...prev, ...messageList]);

        console.log("peerMessageReceived", messageList, fromConversationID);
      }
    );
    instance.on("tokenWillExpire", function (zim, { second }) {
      console.log("tokenWillExpire", second);
      // You can call the renewToken method to renew the token.
      // To generate a new Token, refer to the Prerequisites.
      zim
        .renewToken(selectedUser === "ali" ? tokenA : tokenB)
        .then(function ({ token }) {
          console.log("roken-renewed");

          // Renewed successfully.
        })
        .catch(function (err) {
          console.log(err);
        });
    });
    return () => {
      instance.destroy();
    };
  }, []);

  const handleLogin = () => {
    const info = {
      userID: selectedUser,
      userName: selectedUser === "ali" ? "hamza" : "ali",
    };
    setUserInfo(info);
    const loginToken = selectedUser === "ali" ? tokenA : tokenB;
    if (zimInstance) {
      zimInstance
        .login(info, loginToken)
        .then(function () {
          // Login successful.
          setIsLoggedin(true);
          console.log("login sucessfully");
        })
        .catch(function (err) {
          // Login failed.
          console.log("login failed");
          if (err?.code === 6000014) {
            toast.error("Zego is setting up your app. Try again in 5 minutes.");
          } else {
            toast.error("Login failed. Please check credentials.");
          }
          console.error("Login Error:", err);
        });
    } else {
      console.log("instence error");
    }
  };
  const handleSendMSG = () => {
    if (!isLoggedin) {
      console.log("user not logged in");
      return;
    }
    if (!messageText.trim()) {
      toast.error("plz type a message");
      return;
    }
    var toConversationID = selectedUser === "ali" ? "hamza" : "ali"; // Peer user's ID.
    var conversationType = 0; // Message type; One-to-one chat: 0, in-room chat: 1, group chat:2
    var config = {
      priority: 1, // Set priority for the message. 1: Low (by default). 2: Medium. 3: High.
    };
    var messageTextObj = {
      type: 1,
      message: messageText,
      extendedData: "Message extended info(optional)",
    };
    zimInstance
      .sendMessage(
        messageTextObj,
        toConversationID,
        conversationType,
        config
        // notification
      )
      .then(function ({ message }) {
        // Message sent successfully.
        toast("msg send successfully");
        setAllMsg((prev) => [...prev, message]);
      })
      .catch(function (err) {
        // Failed to send a message.
        toast.error("msg send failed");
        console.log("msg send failed error", err);
      });
    setMessageText("");
  };
  const formatTime = (timeStamp) => {
    const date = new Date(timeStamp);
    return date.toLocaleDateString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  return (
    <div className="flex gap-4 items-center h-full">
      <h1>chat </h1>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
          {!isLoggedin ? (
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-center">Login</h2>
              <select
                className="w-full p-2 border rounded"
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
              >
                <option value="">Select User</option>
                <option value="ali">Ali (Doctor)</option>
                <option value="hamza">Hamza (Patient)</option>
              </select>
              <button
                onClick={handleLogin}
                className="w-full bg-blue-500 text-white py-2 rounded shadow hover:bg-blue-600 transition"
              >
                Login
              </button>
            </div>
          ) : (
            <div className="flex flex-col h-[80vh]">
              {/* Header */}
              <div className="bg-blue-600 text-white px-4 py-2 font-semibold shadow">
                Logged in as: {userInfo?.userName}
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-2">
                {allMsg.map((msg, index) => {
                  const isOwn = msg.senderUserID === selectedUser;
                  return (
                    <div
                      key={index}
                      className={`max-w-xs px-4 py-2 rounded-lg shadow text-sm ${
                        isOwn
                          ? "bg-blue-500 text-white ml-auto"
                          : "bg-gray-200 text-gray-800 mr-auto"
                      }`}
                    >
                      {msg.message}
                    </div>
                  );
                })}
                {/* <div ref={msgEndRef}></div> */}
              </div>

              {/* Input */}
              <div className="p-3 bg-white border-t flex gap-2">
                <input
                  type="text"
                  className="flex-1 border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Type a message"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMSG()}
                />
                <button
                  onClick={handleSendMSG}
                  className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
