import axios from "axios";
// https://7f2a-119-157-190-152.ngrok-free.app/varifyotp/
const api = axios.create({
  baseURL: "https://4d39-119-157-190-152.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export const postData = (userData) => {
  return api.post("/signup/", userData);
};
export const loginPostData = (loginUserData) => {
  return api.post("/login/", loginUserData);
};
export const verifyPostData = (verifyData) => {
  return api.post("/varifyotp/  ", verifyData);
};
export const ResendOtp = (verifyData) => {
  return api.post("/regenerateotp/", verifyData);
};
export const forgetVerifyPostData = (verifyData) => {
  return api.post("/password_reset/validate_token/  ", verifyData);
};
export const forgetPostData = (forgetData) => {
  return api.post("/password_reset/", forgetData);
};
export const resetUpdatePassword = (forgetData) => {
  return api.post("/password_reset/confirm/", forgetData);
};
