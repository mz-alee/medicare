import axios from "axios";
import { getCookie } from "cookies-next";
const api = axios.create({
  baseURL: "https://4e62-119-154-198-82.ngrok-free.app",
  // baseURL: process.env.NEXT_API_KEY,
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

// doctors api

export const ProfileGetData = () => {
  return api.get("/mainprofile/", {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};
export const DoctorsDashboardApi = () => {
  return api.get("/doctor_dashboard/", {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};
export const AppointmentsData = (filterUrl) => {
  return api.get("/appointments/", {
    // credentials: "include",
    headers: {
      Authorization: `Bearer ${getCookie("token")} `,
    },
    withCredentials: true,
  });
};
export const StaffListGetApi = () => {
  return api.get("/staff/", {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};
export const StaffGetApi = () => {
  return api.get("/staff_management/", {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};
export const StaffDelApi = (id) => {
  return api.delete(`/staff_management/${id}/`, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};
export const StaffAddPostApi = (data) => {
  return api.post(`/staff_management/`, data, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};

export const DoctorWorkingHour = (data) => {
  return api.post(`/workinghours/`, data, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};
export const EditDoctorWorkingHour = (data) => {
  console.log("data from api ", data);

  return api.patch(`/workinghours/${data.id}/`, data, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};
export const DoctorGetWorkingHour = () => {
  return api.get(`/workinghours/`, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};
export const DoctorDeleteWorkingHour = (id) => {
  return api.delete(`/workinghours/${id}/`, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};

// patient api
// dashborad
export const PatientDashboardGetApi = () => {
  return api.get(`/patient_dashboard/`, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};

// appointments create api
export const AppointmentCreate = (data) => {
  return api.post("/appointments/", data, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};
export const AppointmentGetApi = (filters) => {
  return api.get(`/appointments/?status=${filters}`, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};
export const TimeSlotGetAPi = (data) => {
  return api.get(
    `/appointments/available_slots/?doctor_id=${data.doctorId}&date=${data.date}`,
    {
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
      withCredentials: true,
    }
  );
};
// patient profile api

export const PatientEmergencyPost = (data) => {
  return api.post(`/emrgency_contact/`, data, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const PatientProfile = () => {
  return api.get("/patientprofile/", {
    // credentials: "include",
    headers: {
      Authorization: `Bearer ${getCookie("token")} `,
    },
    withCredentials: true,
  });
};
export const PatientDiagnosisData = () => {
  return api.get("/diagnosis_detail/", {
    // credentials: "include",
    headers: {
      Authorization: `Bearer ${getCookie("token")} `,
    },
    withCredentials: true,
  });
};
export const PatientReportData = () => {
  return api.get("/lab_report/", {
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
export const DoctorsListDataAPi = () => {
  return api.get("/doctors/", {
    // credentials: "include",
    headers: {
      Authorization: `Bearer ${getCookie("token")} `,
    },
    withCredentials: true,
  });
};

export const PatientReminderAppointmentsPost = (data) => {
  return api.post("/appointment_reminder/", data, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};
export const PatientReminderAppointmentsDel = (id) => {
  return api.delete(`/appointment_reminder/${id}/`, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};
export const MedicationReminderPost = (data) => {
  return api.post("/medicine_reminder/", data, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};
export const MedicationReminderDel = (id) => {
  return api.delete(`/medicine_reminder/${id}/`, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};
export const PatientReminderAppointmentsGet = () => {
  return api.get("/appointment_reminder/", {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};
export const PatientReminderMedicationGet = () => {
  return api.get("/medicine_reminder/", {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};

// staff site api

export const StaffDashboardGetApi = () => {
  return api.get("/staff_dashboard/", {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    withCredentials: true,
  });
};

// notifications
export const notificationsPost = (data) => {
  return api.post(`/fcm/`, data, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};
