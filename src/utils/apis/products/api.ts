import { ResponsePayload } from "@/utils/types/api";
import axios from "axios";
import { IProduct } from "./types";

export const getProduct = async () => {
  try {
    const response = await axios.get(
      "https://virtserver.swaggerhub.com/DWIMIRANDAA/E-CommerceApp/1.0.0/product"
    );
    return response.data as ResponsePayload<IProduct[]>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
