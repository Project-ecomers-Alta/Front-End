import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addItem } from "@/utils/apis/products/api";
import { IProductType, productSchema } from "@/utils/apis/products/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const addProduct = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<IProductType>({
    resolver: zodResolver(productSchema),
  });

  const handleAddProduct = async (body: IProductType) => {
    const payload = {
      ...body,
      quantity: Number(body.quantity),
      price: Number(body.price),
    };

    try {
      const result = await addItem(payload);
      alert(result.message);
      navigate("/list-product");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col p-24">
        <div className="text-cyan-600 text-4xl font-semibold mb-5">
          Add Product
        </div>
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="justify-center bg-gray-200 p-5 rounded-lg"
        >
          <div className="space-y-1">
            <Label htmlFor="category">Category</Label>
            <Input {...register("category")} id="category" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="name">Name of your listing</Label>
            <Input {...register("name")} id="name" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="description">Description</Label>
            <Textarea {...register("description")} id="description" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="quantity">Quantity</Label>
            <Input {...register("quantity")} id="quantity" type="number" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Price</Label>
            <Input {...register("price")} id="price" type="number" />
          </div>
          <button className="bg-cyan-600 hover:bg-cyan-200 font-semibold mt-5 h-12 w-40 rounded-full text-xl transition duration-300 ease-in-out transform text-white hover:text-black hover:scale-105">
            List Product
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default addProduct;
