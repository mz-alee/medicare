import axios from "axios";
import { getCookie } from "cookies-next";
const api = axios.create({
  baseURL: "https://f959-119-154-159-245.ngrok-free.app",
  headers: {
    "Content-Type": "multipart/form-data",
    // "Content-Type": "    application/json",
  },
});

// auth screens

export const postData = (userData) => {
  return api.post("/signup/", userData);
};
export const loginPostData = (loginUserData) => {
  return api.post("/login/", loginUserData);
};
export const verifyPostData = (verifyData) => {
  return api.post("/varifyotp/", verifyData);
};
export const ResendOtp = (verifyData) => {
  return api.post("/password_reset/", verifyData);
};
export const forgetVerifyPostData = (verifyData) => {
  return api.post("/password_reset/validate_token/", verifyData);
};
export const forgetPostData = (forgetData) => {
  return api.post("/password_reset/", forgetData);
};
export const resetUpdatePassword = (forgetData) => {
  return api.post("/password_reset/confirm/", forgetData);
};
export const verifyResendOtp = (data) => {
  return api.post("/regenerateotp/", data);
};

// docter profile

export const profileProfessionApi = (data) => {
  return api.post("/profession/", data, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};
export const profilePersonalEditApi = (data, id) => {
  return api.patch(`/userprofile/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

// docter achievements

export const certificatePostApi = (data) => {
  return api.post(`/certification/`, data, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};
export const certificateDelApi = (id) => {
  return api.delete(`/certification/${id}/`, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};
export const publicationPostApi = (data) => {
  return api.post(`/publication/`, data, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};
export const publicationDelApi = (id) => {
  return api.delete(`/publication/${id}/`, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};
export const AwardPostApi = (data) => {
  return api.post(`/awards/`, data, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};
export const AwardDelApi = (id) => {
  return api.delete(`/awards/${id}/`, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const EditProfileGetData = () => {
  return api.get("/mainprofile/", {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};
