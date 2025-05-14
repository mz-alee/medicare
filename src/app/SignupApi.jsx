import axios from "axios";
const api = axios.create({
  baseURL: "https://7f2a-119-157-190-152.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export const postData = (userData) => {
  return api.post("/signup/", userData);
};
