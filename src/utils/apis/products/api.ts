import { ResponsePayload } from "@/utils/types/api";
import axios from "axios";
import { IProduct, OrderType, ProductCart, ResponseOrder } from "./types";
import axiosWithConfig from "../axiosWithConfig";

export const getProduct = async () => {
  try {
    const response = await axios.get("https://be20.online/product");
    return response.data as ResponsePayload<IProduct[]>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const addItem = async (body: any) => {
  console.log(body);
  try {
    const response = await axiosWithConfig.post("product", body);
    console.log(response.data);
    return response.data as { message: string };
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getCart = async () => {
  try {
    const response = await axiosWithConfig.get(`cart`);
    return response.data as ResponsePayload<ProductCart[]>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const createOrder = async (body: OrderType) => {
  try {
    const response = await axiosWithConfig.post(`/order`, body);
    return response.data as ResponsePayload<ResponseOrder>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};