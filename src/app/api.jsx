import axios from "axios";
import { getCookie } from "cookies-next";
const api = axios.create({
  baseURL: "https://25dd-119-157-176-164.ngrok-free.app",
  headers: {
    // "Content-Type": "multipart/form-data",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
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

// export const profileProfessionApi = (data) => {
//   return api.post(`/profession/`, data, {
//     headers: {
//       Authorization: `Bearer ${getCookie("token")}`,
//     },
//   });
// };
export const profileProfessionApi = (data) => {
  return api.patch(`/profession/${getCookie("professional_id")}/`, data, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};
// export const profilePersonalEditApi = (data) => {
//   return api.patch(`/userprofile/${getCookie("user_id")}/`, data, {
//     headers: {
//       Authorization: `Bearer ${getCookie("token")}`,
//     },
//   });
// };
export const profilePersonalEditApi = (data) => {
  console.log("data(())))))", data);

  return api.patch(`/userprofile/${getCookie("user_id")}/`, data, {
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

// export const ProfileGetData = () => {
//   try {
//     return api.get("/mainprofile/", {
//       withCredentials: true,
//       headers: {
//         Authorization: `Bearer ${getCookie("token")} `,
//         "ngrok-skip-browser-warning": "true",
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const ProfileGetData = () => {
  console.log("first");
  return api.get("/mainprofile/", {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};
export const AppointmentsData = () => {
  console.log("first");
  return api.get("/appointments/", {
    // credentials: "include",
    headers: {
      Authorization: `Bearer ${getCookie("token")} `,
    },
    withCredentials: true,
  });
};
