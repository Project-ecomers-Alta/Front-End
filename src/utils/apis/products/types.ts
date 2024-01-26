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
  name: z.string().min(1, { message: "name is required" }),
  description: z.string().min(6, { message: "description is required" }),
  category: z.string().min(1, { message: "category is required" }),
  quantity: z.number().min(1, { message: "quantity is required" }),
  price: z.number().min(1, { message: "price is required" }),
});

export type IProductType = z.infer<typeof productSchema>;
