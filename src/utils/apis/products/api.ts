import { ResponsePayload } from "@/utils/types/api";
import axios from "axios";
import {
  IProduct,
  OrderType,
  ProductCart,
  ResponseOrder,
  ShopPhotoType,
  ShopProduct,
} from "./types";
import axiosWithConfig from "../axiosWithConfig";

export const getProduct = async () => {
  try {
    const response = await axios.get("https://be20.online/product");
    return response.data as ResponsePayload<IProduct[]>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getShopProduct = async () => {
  try {
    const response = await axios.get("https://be20.online/product");
    return response.data as ResponsePayload<ShopProduct[]>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const addItem = async (body: any) => {
  try {
    const response = await axiosWithConfig.post("product", body);
    console.log(response.data);
    return response.data as { message: string };
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const addPhotoProduct = async (body: ShopPhotoType, id: string) => {
  try {
    const formData = new FormData();
    formData.append("image_url", body.image_url[0]);
    const response = await axiosWithConfig.post(
      `product/${id}/image`,
      formData
    );
    return response.data as { message: string };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const addCart = async (id: number) => {
  try {
    const response = await axiosWithConfig.post(`cart`, {
      product_id : id
    });
    return response.data as { message: string };
  } catch (error: any) {
    throw new Error(error.message);
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
    const response = await axiosWithConfig.post(`order`, body);
    return response.data as ResponsePayload<ResponseOrder>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// export const deleteCart = async (body: DeleteCart) => {
//   try {
//     const response = await axiosWithConfig.delete(`cart`, body);
//     return response.data as { message: string };
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// };
