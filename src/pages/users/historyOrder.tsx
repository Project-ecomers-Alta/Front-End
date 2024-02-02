import Layout from "@/components/Layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, History, Store } from "lucide-react"
import { Table, TableBody, TableCaption } from "@/components/ui/table"
import Shoes from "../../assets/assics.jpg"
import { Link } from "react-router-dom"

const historyOrder = () => {
  return (
    <Layout>
      <div className="ml-24 my-10">
        <p className="text-4xl font-semibold">My Profile</p>
        <p className="text-gray-600">Manage your shop profile information</p>
      </div>
      <div className="flex mb-40">
        <div className="ml-24 bg-white drop-shadow-2xl h-[280px] rounded">
          <div className="flex items-center gap-4 bg-gray-300 py-2 m-4 rounded-lg">
            <div>
              <User
                color="#ffffff"
                size="40"
                className="bg-cyan-600 item-center rounded-full py-1 ml-4"
              />
            </div>
            <div className="flex flex-col pr-4">
              <div>My Account</div>
              <Link to={"/profile"}>
                <div>Profile</div>
              </Link>
              <Link to={"/change-password"}>
                <div>Change Password</div>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-cyan-600 py-2 m-4 rounded-lg">
            <div>
              <History
                color="#579BB1"
                size="40"
                className="bg-white item-center rounded-full py-2 ml-4"
              />
            </div>
            <div className="text-white font-semibold">My Purchase</div>
          </div>
          <div className="flex items-center gap-4 bg-gray-300 py-2 m-4 rounded-lg">
            <div>
              <Store
                color="#ffffff"
                size="40"
                className="bg-cyan-600 item-center rounded-full py-2 ml-4"
              />
            </div>
            <div className="flex flex-col">
              <Link to={"/shop-profile"}>
                <div>Shop Profile</div>
              </Link>
              <Link to={"/list-product"}>
                <div>My Product</div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Tabs defaultValue="all" className="w-[1000px] px-40">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="complete">Complete</TabsTrigger>
              <TabsTrigger value="canceled">Canceled</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableBody>
                  <div className="bg-gray-200 p-2 rounded-lg mb-4">
                    <div className="flex justify-between mb-2">
                      <p>Andre Shop</p>
                      <p className="text-cyan-600 font-semibold">Shipped</p>
                    </div>
                    <div className="flex">
                      <div>
                        <img src={Shoes} width={100} alt="" />
                      </div>
                      <div className="flex flex-col justify-center ml-4">
                        <div>Asics Gel Kayano UK10</div>
                        <div>x 1</div>
                      </div>
                      <div className="flex flex-col justify-center items-center ml-auto mr-5">
                        <div>£175.00</div>
                        <div className="bg-cyan-600 p-1 rounded-lg">
                          Order Received
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p>17/01/2024</p>
                      <p>INV/73621489</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 p-2 rounded-lg mb-4">
                    <div className="flex justify-between mb-2">
                      <p>Frans Shop</p>
                      <p className="text-cyan-600 font-semibold">Canceled</p>
                    </div>
                    <div className="flex">
                      <div>
                        <img src={Shoes} width={100} alt="" />
                      </div>
                      <div className="flex flex-col justify-center ml-4">
                        <div>Asics Gel Kayano UK9.5</div>
                        <div>x 1</div>
                      </div>
                      <div className="flex flex-col justify-center items-center ml-auto mr-5">
                        <div>£175.00</div>
                        <div className="bg-red-600 p-1 rounded-lg">
                          Order Canceled
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p>17/01/2024</p>
                      <p>INV/73600000</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 p-2 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <p>Amanda Shop</p>
                      <p className="text-cyan-600 font-semibold">Shipped</p>
                    </div>
                    <div className="flex">
                      <div>
                        <img src={Shoes} width={100} alt="" />
                      </div>
                      <div className="flex flex-col justify-center ml-4">
                        <div>Asics Gel Kayano UK8</div>
                        <div>x 1</div>
                      </div>
                      <div className="flex flex-col justify-center items-center ml-auto mr-5">
                        <div>£175.00</div>
                        <div className="bg-cyan-600 p-1 rounded-lg">
                          Order Received
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p>17/01/2024</p>
                      <p>INV/73621500</p>
                    </div>
                  </div>
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="complete">
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableBody>
                  <div className="bg-gray-200 p-2 rounded-lg mb-4">
                    <div className="flex justify-between mb-2">
                      <p>Andre Shop</p>
                      <p className="text-cyan-600 font-semibold">Shipped</p>
                    </div>
                    <div className="flex">
                      <div>
                        <img src={Shoes} width={100} alt="" />
                      </div>
                      <div className="flex flex-col justify-center ml-4">
                        <div>Asics Gel Kayano UK10</div>
                        <div>x 1</div>
                      </div>
                      <div className="flex flex-col justify-center items-center ml-auto mr-5">
                        <div>£175.00</div>
                        <div className="bg-cyan-600 p-1 rounded-lg">
                          Order Received
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p>17/01/2024</p>
                      <p>INV/73621489</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 p-2 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <p>Amanda Shop</p>
                      <p className="text-cyan-600 font-semibold">Shipped</p>
                    </div>
                    <div className="flex">
                      <div>
                        <img src={Shoes} width={100} alt="" />
                      </div>
                      <div className="flex flex-col justify-center ml-4">
                        <div>Asics Gel Kayano UK8</div>
                        <div>x 1</div>
                      </div>
                      <div className="flex flex-col justify-center items-center ml-auto mr-5">
                        <div>£175.00</div>
                        <div className="bg-cyan-600 p-1 rounded-lg">
                          Order Received
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p>17/01/2024</p>
                      <p>INV/73621500</p>
                    </div>
                  </div>
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="canceled">
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableBody>
                  <div className="bg-gray-200 p-2 rounded-lg mb-4">
                    <div className="flex justify-between mb-2">
                      <p>Frans Shop</p>
                      <p className="text-cyan-600 font-semibold">Canceled</p>
                    </div>
                    <div className="flex">
                      <div>
                        <img src={Shoes} width={100} alt="" />
                      </div>
                      <div className="flex flex-col justify-center ml-4">
                        <div>Asics Gel Kayano UK9.5</div>
                        <div>x 1</div>
                      </div>
                      <div className="flex flex-col justify-center items-center ml-auto mr-5">
                        <div>£175.00</div>
                        <div className="bg-red-600 p-1 rounded-lg">
                          Order Canceled
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p>17/01/2024</p>
                      <p>INV/73600000</p>
                    </div>
                  </div>
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  )
}

export default historyOrder
