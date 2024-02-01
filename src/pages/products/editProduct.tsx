import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus } from "lucide-react";

const editProduct = () => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-between m-24">
        <button className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-28 mb-5 rounded-full text-md transition duration-300 ease-in-out transform text-white hover:text-white hover:scale-105">
          Back
        </button>
        <form>
          <div className="mb-10">
            <div className="bg-gray-300 p-40 flex flex-col items-center rounded-lg">
              <ImagePlus color="#000000" className="mb-5" />
              <button className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-32 rounded-full text-md transition duration-300 ease-in-out transform text-white hover:text-white hover:scale-105">
                Add Photo
              </button>
            </div>
          </div>
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
