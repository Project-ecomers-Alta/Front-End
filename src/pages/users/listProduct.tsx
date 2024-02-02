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
import { SquarePen, Trash2 } from "lucide-react";
import Shoes from "../../assets/assics.jpg";

const listProduct = () => {
  return (
    <Layout>
      <div className="flex justify-between ml-24 my-10">
        <p className="text-cyan-600 text-4xl font-semibold">List My Product</p>

        <button className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-80 rounded-full mr-24 text-xl transition duration-300 ease-in-out transform text-white hover:text-black hover:scale-105">
          Add Product
        </button>
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
