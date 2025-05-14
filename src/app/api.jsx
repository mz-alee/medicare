import axios from "axios";

const api = axios.create({
  // baseURL: "https://7f2a-119-157-190-152.ngrok-free.app/signup/",
  baseURL: "https://jsonplaceholder.typicode.com",
    // headers: {
    //   "Content-Type": "application/json",
    // },
});

export const getData = () => {
  return api.get("/posts");
};
export const delData = (id) => {
  return api.delete(`/posts/${id}`);
};

export const postData = (newData)=>{
  return api.post("/posts",newData)
}
export const updateData = (id, newData)=>{
  return api.patch(`/posts/${id}`,{title:"i have updated"})
}

export const signupUser = async (userData) => {
  try {
    const res = await api.post("/signup/", userData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
