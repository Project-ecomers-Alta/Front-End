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
  user_info: {
    user_id: number;
    nama_user: string;
    tag_line: string;
    email: string;
    province: string;
    city: string;
    domicile: string;
    address: string;
    phone_number: number;
  };
}
