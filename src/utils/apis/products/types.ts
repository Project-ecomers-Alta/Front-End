import * as z from "zod";

export interface IProduct {
  id: number;
  product_name: string;
  category: string;
  price: number;
  user_id: number;
  details_images: {
    product_id: number;
    images: string;
  }[];
  user: {
    user_id: number;
    user_name: string;
    tag_line: string;
    email: string;
    province: string;
    city: string;
    domicile: string;
    address: string;
    phone_number: number;
  };
}

export const productSchema = z.object({
  category: z.string().min(1, { message: "category is required" }),
  name: z.string().min(1, { message: "name is required" }),
  description: z.string().min(1, { message: "description is required" }),
  quantity: z.string().min(1, { message: "quantity is required" }),
  price: z.string().min(1, { message: "price is required" }),
});

export type IProductType = z.infer<typeof productSchema>;

export interface OrderType {
  address : string
  payment_method : string
}

export interface ResponseOrder {
  order_id: string;
  address: string;
  Payment: PaymentOrder;
}

export interface PaymentOrder {
  status_message: string;
  status: string;
  bank: string;
  gross_amount: number;
  va_number: number;
  transaction_id: string;
  transaction_time: string;
  expired_at: string;
}


export interface ProductCart {
  id: number,
  product_id: number,
  user_id: number,
  quantity: number,
  product: SelectedProduct
}

export interface SelectedProduct {
  id: number,
  user_id: number,
  name: string,
  description: string,
  quantity: number,
  price: number,
  category: string,
  user: UserDetail
}

export interface UserDetail {
  id: number,
  user_name: string,
  email: string,
  domicile: string,
  phone_number: number,
  image: string,
  tag_line: string,
  provinci: string,
  city: string,
  subdistrict: string,
  address: string,
  category: string
}
