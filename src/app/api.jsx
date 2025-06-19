import axios from "axios";
import { getCookie } from "cookies-next";
const api = axios.create({
  baseURL: "https://fc3e-110-39-164-238.ngrok-free.app",
  headers: {
    "Content-Type": "multipart/form-data",
    // "Content-Type": "application/json",
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

// personal profile edit api

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
export const certificateEditApi = (data) => {
  return api.patch(`/certification/${data.id}/`, data, {
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
export const PublicationEditApi = (data) => {
  return api.patch(`/publication/${data.id}/`, data, {
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
export const AwardEditApi = (data) => {
  return api.patch(`/awards/${data.id}/`, data, {
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

// patient api

// appointments create api
export const AppointmentCreate = () => {
  return api.post("/appointments/", {
    header: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};
// export const PatientEmergencyPost = (data) => {
//   console.log("daataaaaaaaaaaaa",data);

//   return api.post(`/emrgency_contact/`, data, {
//     header: {
//       Authorization: `Bearer ${getCookie("token")}`,
//     },
//     withCredentials:true,
//   });
// };
export const PatientEmergencyPost = (data) => {
  return api.post(`/emrgency_contact/`, data, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

// patient profile api

export const PatientProfile = () => {
  console.log("first");
  return api.get("/patientprofile/", {
    // credentials: "include",
    headers: {
      Authorization: `Bearer ${getCookie("token")} `,
    },
    withCredentials: true,
  });
};

export const PatientprofileEditApi = (data) => {

  return api.patch(`/userprofile/${getCookie("user_id")}/`, data, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};
