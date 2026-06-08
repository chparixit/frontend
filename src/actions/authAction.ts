import { loginApi, registerApi } from "../api/authApi";

export const registerAction = async (data: any) => {
  return await registerApi(data);
};

export const loginAction = async (data: any) => {
  return await loginApi(data);
};