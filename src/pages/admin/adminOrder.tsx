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
import useRetrieveOrders from "@/hooks/useRetrieveOrders"
import useRetrieveOrdersForm from "@/hooks/useRetrieveOrdersForm"
import { Link } from "react-router-dom"

function AdminOrder() {
  const { search, handleSearch } = useRetrieveOrdersForm()

  const { data, isLoading } = useRetrieveOrders({
    search: search,
  })

  return (
    <div className="bg-[#D9D9D9] w-screen h-max">
      <div className="bg-[#579BB1] text-black flex w-screen pt-4 pb-5 px-32 justify-between">
        <div className="bg-white p-2 text-[20px]">LOGO</div>
      </div>
      <div className="flex flex-wrap">
        <div className="flex">
          <div className="px-5 bg-[#579BB1] w-32 h-screen">
            <div>
              <Link to={"/admin-user"}>
                <img className="w-[76px] h-[76px] mb-10" src={Person} alt="" />
              </Link>
              <Link to={"/admin-order"}>
                <img className="ps-2" src={Order} />
              </Link>
            </div>
            <footer className="fixed bottom-10 left-4 w-full  p-2 text-white text-center">
              <Link to={"/"}>
                <img className="ps-2" src={Logout} alt="Logout" />
              </Link>
            </footer>
          </div>
          <div>
            <div className="flex justify-between py-4 ps-2">
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
                  className="py-2 px-4 rounded-lg w-[400px]"
                  type="search"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="bg-white w-[1096px]">
              <div className="font-bold text-[20px] py-4 px-4 bg-white text-[#6c757d] ">
                Orders
              </div>
              {isLoading ? (
                <div>Loading...</div>
              ) : (
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
                    {data?.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.order_id}</TableCell>
                        <TableCell>{order.product_name}</TableCell>
                        <TableCell>{order.quantity}</TableCell>
                        <TableCell>{order.created_at}</TableCell>
                        <TableCell>{order.credit_card}</TableCell>
                        <TableCell>{order.sub_total}</TableCell>
                        <TableCell>{order.addres}</TableCell>
                        <TableCell>{order.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}

              <div className="bg-white p-5">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem className=" text-black">
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
      </div>
    </div>
  )
}

export default AdminOrder
