import axios from "axios";
import { LoginPayload, LoginType, RegisterType } from "./types";
import { ResponsePayload } from "@/utils/types/api";

export const userRegister = async (body: RegisterType) => {
  try {
    const response = await axios.post("https://be20.online/register", body);
    return response.data as { message: string };
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const userLogin = async (body: LoginType) => {
  try {
    const response = await axios.post("https://be20.online/login", body);
    return response.data as ResponsePayload<LoginPayload>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
