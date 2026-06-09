import axios from "axios";

const API = "http://localhost:5000/api/auth";

const api = axios.create({
  baseURL: API,
  timeout: 10000,
});

export const loginApi = (data: { email: string; password: string }) => {
  return api.post("/login", data);
};

export const registerApi = (data: any) => {
  return api.post("/register", data);
};