// Import the functions you need from the SDKs you need
import { setCookie } from "cookies-next";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyD8UohIXdE5Mx-6uHbW8Kgu5eGkCbAmpqU",
  authDomain: "medicare-69ff6.firebaseapp.com",
  projectId: "medicare-69ff6",
  storageBucket: "medicare-69ff6.firebasestorage.app",
  messagingSenderId: "1023470775759",
  appId: "1:1023470775759:web:482d555f736cfac76fb6ba",
  measurementId: "G-K7HV79K31K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission);
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BNtZSOBJYxN3GN7_kT9R794h7P5ykM-bPcjaaUB3SyDiIiSz8uOK7gmZGHKmZP7WYLlN-pJN2L3ZlhpA4VI5rek",
    });
    setCookie("notification_token", token);
    console.log(token);
  }
};
