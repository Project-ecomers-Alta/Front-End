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
import useRetrieveUsers from "@/hooks/useRetrieveUsers"
import useRetrieveUsersForm from "@/hooks/useRetrieveUsersForm"

function AdminUser() {
  const { search, handleSearch } = useRetrieveUsersForm()

  const { data, isLoading } = useRetrieveUsers({
    search: search,
  })

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
        <div className="">
          <div className="flex space-x-[300px] py-4 ps-2">
            <div>
              <div className="text-[#579BB1] font-bold text-[20px]">
                Dashboard
              </div>
              <div>
                <hr className="border-[#579BB1]" />
              </div>
              <div>View users information</div>
            </div>
            <div className="">
              <input
                className="py-2 px-4 rounded-lg w-[400px]"
                type="search"
                placeholder="Search"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="font-bold text-[20px] py-4 px-4 bg-white text-[#6c757d]">
            Users
          </div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <Table className="bg-white rounded-md">
              <TableHeader>
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
                {data?.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.id}</TableCell>
                    <TableCell>{user.full_name}</TableCell>
                    <TableCell>{user.user_name}</TableCell>
                    <TableCell className="">{user.email}</TableCell>
                    <TableCell className="">{user.role}</TableCell>
                    <TableCell className="">{user.created_at}</TableCell>
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
