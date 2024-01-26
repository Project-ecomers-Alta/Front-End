import Layout from "@/components/Layout";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImagePlus, SquarePen, Trash2 } from "lucide-react";
import Shoes from "../../assets/assics.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IProductType, productSchema } from "@/utils/apis/products/types";

const listProduct = () => {
  const [page, setPage] = useState<number>(0);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isSubmitSuccessful },
  } = useForm<IProductType>({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      close();
    }
  }, [isSubmitSuccessful]);

  return (
    <Layout>
      <div className="flex justify-between ml-24 my-10">
        <p className="text-cyan-600 text-4xl font-semibold">List My Product</p>
        <Dialog>
          <DialogTrigger
            onClick={() => setPage(0)}
            className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-80 rounded-full mr-24 text-xl transition duration-300 ease-in-out transform text-white hover:text-black hover:scale-105"
          >
            Add Product
          </DialogTrigger>
          {page === 0 ? (
            <form>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Product</DialogTitle>
                  <div>
                    <div className="flex flex-row justify-end my-4">
                      <Input placeholder="Category" {...register("category")} />
                    </div>
                    <div className="flex flex-row mb-4">
                      <Input
                        placeholder="Name Yout Listing"
                        {...register("name")}
                      />
                    </div>
                    <div className="mb-4">
                      About the item
                      <Textarea
                        placeholder="Description..."
                        {...register("description")}
                      />
                    </div>
                    <div className="mb-4">
                      Quantity
                      <Input {...register("quantity")} />
                    </div>
                    <div className="mb-4">
                      Price
                      <Input {...register("price")} />
                    </div>
                  </div>
                </DialogHeader>
                <div>
                  <button
                    onClick={() => setPage(1)}
                    className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-40 rounded-full mr-24 text-xl transition duration-300 ease-in-out transform text-white hover:text-black hover:scale-105"
                  >
                    Next
                  </button>
                </div>
              </DialogContent>
            </form>
          ) : (
            <form>
              <DialogContent>
                <DialogHeader>
                  <div className="flex justify-center mb-5">
                    <div className="bg-gray-300 py-20 px-32 flex flex-col items-center">
                      <ImagePlus color="#000000" className="mb-5" />
                      <button className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-32 rounded-full text-md transition duration-300 ease-in-out transform text-white hover:text-white hover:scale-105">
                        Add Photo
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-40 rounded-full text-md transition duration-300 ease-in-out transform text-white hover:text-white hover:scale-105">
                      List Now
                    </button>
                  </div>
                </DialogHeader>
              </DialogContent>
            </form>
          )}
        </Dialog>
      </div>
      <div className="mx-24">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Product Name</TableHead>
              <TableHead>Photo</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                Asics Gel Kayano UK10
              </TableCell>
              <TableCell>
                <div>
                  <img src={Shoes} width={100} alt="" />
                </div>
              </TableCell>
              <TableCell>£175.00</TableCell>
              <TableCell>2</TableCell>
              <TableCell className="flex flex-row justify-end items-center h-40">
                <SquarePen
                  color="#ffffff"
                  size="40"
                  className="bg-cyan-600 item-center rounded-full py-1 ml-4"
                />
                <Trash2
                  color="#ffffff"
                  size="40"
                  className="bg-red-600 item-center rounded-full py-1 ml-4"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Asics Gel Kayano UK9.5
              </TableCell>
              <TableCell>
                <div>
                  <img src={Shoes} width={100} alt="" />
                </div>
              </TableCell>
              <TableCell>£175.00</TableCell>
              <TableCell>2</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex ">
                  <SquarePen
                    color="#ffffff"
                    size="40"
                    className="bg-cyan-600 item-center rounded-full py-1 ml-4"
                  />
                  <Trash2
                    color="#ffffff"
                    size="40"
                    className="bg-red-600 item-center rounded-full py-1 ml-4"
                  />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Layout>
  );
};

export default listProduct;
