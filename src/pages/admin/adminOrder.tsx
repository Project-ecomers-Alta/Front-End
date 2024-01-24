import React, { useState, useEffect } from "react"
import axios from "axios"
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

interface Order {
  orderId: string
  product: string
  quantity: number
  createdAt: string
  payment: string
  subTotal: string
  address: string
  status: string
}

function AdminOrder() {
  const [orders, setUsers] = useState<Order[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get<Order[]>(
        "http://54.250.172.137:8080/users",
        {
          headers: {
            Authorization: "Bearer []",
          },
        }
      )

      setUsers(response.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const handleSearch = async () => {
    try {
      const response = await axios.get<Order[]>(
        `http://54.250.172.137:8080/users/search?query=${searchQuery}`,
        {
          headers: {
            Authorization: "",
          },
        }
      )

      setUsers(response.data)
    } catch (error) {
      console.error("Error fetching search results:", error)
    }
  }

  return (
    <div className="bg-[#D9D9D9] w-screen h-max">
      <div className="bg-[#579BB1] text-black flex w-screen pt-4 pb-5 px-32 justify-between">
        <div className="bg-white p-2 text-[20px]">LOGO</div>
      </div>
      <div className="flex">
        <div className="px-5 bg-[#579BB1] w-32 h-screen">
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
              <div>View orders information</div>
            </div>
            <div>
              <input
                className="py-2 px-4 rounded-lg w-[400px] me-5"
                type="search"
                placeholder="Cari"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="bg-[#579BB1] py-2 px-6 rounded-xl text-white"
                onClick={handleSearch}
              >
                SEARCH
              </button>
            </div>
          </div>

          <div className="font-bold text-[20px] py-4 px-4 bg-white text-[#6c757d]">
            Orders
          </div>
          <Table className="bg-white rounded-md">
            <TableHeader>
              <TableRow className="bg-[#F8F8F8]">
                <TableHead className="w-[100px]">ORDER ID</TableHead>
                <TableHead>PRODUCT</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>CREATED AT</TableHead>
                <TableHead>PAYMENT</TableHead>
                <TableHead className="">SUB TOTAL</TableHead>
                <TableHead className="">ADDRESS</TableHead>
                <TableHead className="">STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.orderId}>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>{order.createdAt}</TableCell>
                  <TableCell>{order.payment}</TableCell>
                  <TableCell>{order.subTotal}</TableCell>
                  <TableCell>{order.address}</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))}
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

export default AdminOrder
