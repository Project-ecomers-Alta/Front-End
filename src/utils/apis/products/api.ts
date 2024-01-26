import { ResponsePayload } from "@/utils/types/api";
import axios from "axios";
import { IProduct } from "./types";

export const getProduct = async () => {
  try {
    const response = await axios.get("http://54.250.172.137:8080/product");
    return response.data as ResponsePayload<IProduct[]>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
