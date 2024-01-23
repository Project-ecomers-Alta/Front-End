import React from "react"
import Person from "../../assets/person.png"
import Order from "../../assets/order-history.png"
import Logout from "../../assets/logout.png"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

function AdminUser() {
  return (
    <div className="bg-[#D9D9D9] w-screen h-max">
      <div className="bg-[#579BB1] text-black flex w-screen pt-4 pb-5 px-32 justify-between">
        <div className="bg-white p-2 text-[20px]">LOGO</div>
      </div>
      <div className="flex">
        <div className="px-5 bg-[#579BB1] w-32">
          <div>
            <img className="w-[76px] h-[76px] mb-10" src={Person} alt="" />
            <img className="ps-2" src={Order} />
          </div>
          <footer className="fixed bottom-10 left-4 w-full  p-2 text-white text-center">
            <img className="ps-2" src={Logout} alt="Logout" />
          </footer>
        </div>
        <div>
          <div className="flex pe-28 space-x-[300px] py-4 ps-2">
            <div>
              <div className="text-[#579BB1] font-bold text-[20px]">
                Dashboard
              </div>
              <div>
                <hr className="border-[#579BB1]" />
              </div>
              <div>View users information</div>
            </div>
            <div>
              <input
                className="py-2 px-4 rounded-lg w-[500px]"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>

          <Table className="bg-white rounded-md">
            <TableHeader>
              <TableHead className="text-[20px]">Users</TableHead>
              <TableRow className="bg-[#F8F8F8]">
                <TableHead className="w-[100px]">USER ID</TableHead>
                <TableHead>NAME</TableHead>
                <TableHead>USERNAME</TableHead>
                <TableHead>EMAIL</TableHead>
                <TableHead>ROLE</TableHead>
                <TableHead className="">CREATED AT</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>Frans</TableCell>
                <TableCell>Frans134</TableCell>
                <TableCell className="">frans@gmail.com</TableCell>
                <TableCell className="">Buyer</TableCell>
                <TableCell className="">01-01-2024</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2</TableCell>
                <TableCell>Gumaran</TableCell>
                <TableCell>Gumaran987</TableCell>
                <TableCell className="">gumaran@gmail.com</TableCell>
                <TableCell className="">Buyer</TableCell>
                <TableCell className="">03-01-2024</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">3</TableCell>
                <TableCell>Sinambela</TableCell>
                <TableCell>Sinambela35584</TableCell>
                <TableCell className="">sinambela@gmail.com</TableCell>
                <TableCell className="">Seller</TableCell>
                <TableCell className="">05-08-2023</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">4</TableCell>
                <TableCell>Example</TableCell>
                <TableCell>example2797317</TableCell>
                <TableCell className="">example@gmail.com</TableCell>
                <TableCell className="">Seller</TableCell>
                <TableCell className="">01-01-2023</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">5</TableCell>
                <TableCell>Example</TableCell>
                <TableCell>example2797317</TableCell>
                <TableCell className="">example@gmail.com</TableCell>
                <TableCell className="">Seller</TableCell>
                <TableCell className="">01-01-2023</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">6</TableCell>
                <TableCell>Example</TableCell>
                <TableCell>example2797317</TableCell>
                <TableCell className="">example@gmail.com</TableCell>
                <TableCell className="">Seller</TableCell>
                <TableCell className="">01-01-2023</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">7</TableCell>
                <TableCell>Example</TableCell>
                <TableCell>example2797317</TableCell>
                <TableCell className="">example@gmail.com</TableCell>
                <TableCell className="">Seller</TableCell>
                <TableCell className="">01-01-2023</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">8</TableCell>
                <TableCell>Example</TableCell>
                <TableCell>example2797317</TableCell>
                <TableCell className="">example@gmail.com</TableCell>
                <TableCell className="">Seller</TableCell>
                <TableCell className="">01-01-2023</TableCell>
              </TableRow>
              <TableRow></TableRow>
            </TableBody>
          </Table>
          <div className="bg-white p-5">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem className="bg-black text-white">
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem className=" text-black">
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem className=" text-black">
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem className=" text-black">
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem className=" text-black">
                  <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminUser
