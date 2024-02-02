import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { addPhotoProduct } from "@/utils/apis/products/api";
import { ShopPhotoType, photoSchema } from "@/utils/apis/products/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImagePlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";

const editProduct = () => {
  const { state } = useLocation();
  console.log(state);

  const fetchAddPhoto = async (body: ShopPhotoType, id: string) => {
    try {
      const response = await addPhotoProduct(body, id);
      toast({
        title: "Succesfully added to Photo",
        description: response.message,
      });
    } catch (error) {
      toast({
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(photoSchema),
    defaultValues: {
      image_url: "",
    },
  });

  return (
    <Layout>
      <div className="flex flex-wrap justify-between m-24">
        <Link to={"/list-product"}>
          <button className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-28 mb-5 rounded-full text-md transition duration-300 ease-in-out transform text-white hover:text-white hover:scale-105">
            Back
          </button>
        </Link>
        <form>
          <div className="mb-10">
            <div className="bg-gray-300 p-40 flex flex-col items-center rounded-lg">
              <ImagePlus color="#000000" className="mb-5" />
              <input
                type="file"
                className=" font-semibold h-12 w-24 text-md transition duration-300 ease-in-out transform text-white hover:text-white hover:scale-105"
                {...register("image_url", {
                  onChange: (e) => {
                    setImage(URL.createObjectURL(e.target.files[0]));
                  },
                })}
              />
            </div>
          </div>
          <button
            className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-32 rounded-full text-md transition duration-300 ease-in-out transform text-white hover:text-white hover:scale-105"
            onClick={() => fetchAddPhoto}
          >
            Submit Photo
          </button>
        </form>
        <form>
          <div className="bg-gray-200 p-5 mb-5 w-[800px] rounded-lg">
            <div className="space-y-1">
              <Label htmlFor="category">Category</Label>
              <Input id="category" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Name of your listing</Label>
              <Input id="name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" type="number" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Price</Label>
              <Input id="price" type="number" />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-40 rounded-full mr-24 text-xl transition duration-300 ease-in-out transform text-white hover:text-black hover:scale-105">
              Edit Product
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default editProduct;
