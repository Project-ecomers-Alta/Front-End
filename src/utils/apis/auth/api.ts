import axios from "axios";
import { LoginPayload, LoginType, RegisterType } from "./types";
import { ResponsePayload } from "@/utils/types/api";

export const userRegister = async (body: RegisterType) => {
  try {
    const response = await axios.post(
      "http://54.250.172.137:8080/register",
      body
    );
    return response.data as { message: string };
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const userLogin = async (body: LoginType) => {
  try {
    const response = await axios.post("http://54.250.172.137:8080/login", body);
    return response.data as ResponsePayload<LoginPayload>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
