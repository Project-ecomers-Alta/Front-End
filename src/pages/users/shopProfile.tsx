import Layout from "@/components/Layout"
import { Input } from "@/components/ui/input"
import { User, History, Store } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import useRetrieveShop from "@/hooks/useRetrieveShop"
import { Link } from "react-router-dom"
import useUpdateShopProfile from "@/hooks/useUpdateShopProfile"
import { useState } from "react"

interface ShopData {
  id: number
  ShopName: string
  Tagline: string
  Province: string
  City: string
  Subdistrict: string
  Address: string
  ShopImage: string
}

const ShopProfile: React.FC = () => {
  const { data, isLoading, error } = useRetrieveShop()
  const { updateShop } = useUpdateShopProfile()

  const [shopData, setShopData] = useState<Partial<ShopData>>({
    ShopName: "",
    Tagline: "",
    Province: "",
    City: "",
    Subdistrict: "",
    Address: "",
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const user = data

  const handleInputChange = (
    field: keyof ShopData,
    value: string | undefined
  ) => {
    setShopData((prevShopData) => ({
      ...prevShopData,
      [field]: value || "",
    }))
  }

  const handleShopUpdate = async () => {
    await updateShop(shopData)
  }

  return (
    <Layout>
      <div className="ml-24 my-10">
        <p className="text-4xl font-semibold">My Profile</p>
        <p className="text-gray-600">Manage your shop profile information</p>
      </div>
      <div className="flex justify-between mb-40">
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
          <div className="flex items-center gap-4 bg-gray-300 py-2 m-4 rounded-lg">
            <div>
              <History
                color="#ffffff"
                size="40"
                className="bg-cyan-600 item-center rounded-full py-2 ml-4"
              />
            </div>
            <Link to={"/history-order"}>
              <div>My Purchase</div>
            </Link>
          </div>
          <div className="flex items-center gap-4 bg-cyan-600 py-2 m-4 rounded-lg">
            <div>
              <Store
                color="#579BB1"
                size="40"
                className="bg-white item-center rounded-full py-2 ml-4"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-white font-semibold">Shop Profile</div>
              <Link to={"/list-product"}>
                <div>My Product</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gray-200 p-6 gap-8 rounded-lg">
          <div className="text-4xl font-semibold">Edit Shop</div>
          <div className="flex gap-2">
            <div>
              <div className="w-[250px]">Shop Name</div>
              <Input
                value={shopData.ShopName || ""}
                onChange={(e) => handleInputChange("ShopName", e.target.value)}
              />
            </div>
            <div className="ml-auto">
              <div className="w-[250px]">Tag Line</div>
              <Input
                value={shopData.Tagline || ""}
                onChange={(e) => handleInputChange("Tagline", e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <div>
                <div className="w-[170px]">Province</div>
                <Input
                  value={shopData.Province || ""}
                  onChange={(e) =>
                    handleInputChange("Province", e.target.value)
                  }
                />
              </div>
            </div>
            <div>
              <div>
                <div className="w-[170px]">City</div>
                <Input
                  value={shopData.City || ""}
                  onChange={(e) => handleInputChange("City", e.target.value)}
                />
              </div>
            </div>
            <div>
              <div>
                <div className="w-[170px]">Subdistrict</div>
                <Input
                  value={shopData.Subdistrict}
                  onChange={(e) =>
                    handleInputChange("Subdistrict", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
          <div>
            Address
            <Textarea
              value={shopData.Address}
              onChange={(e) => handleInputChange("Address", e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              onClick={handleShopUpdate}
              className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-32 rounded-full text-md transition duration-300 ease-in-out transform text-white hover:text-white hover:scale-105"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="flex flex-col mr-40 gap-5">
          <div>
            <img
              src={user?.ShopImage}
              className="rounded-full"
              width={160}
              alt=""
            />
          </div>
          <button className="bg-gray-300 hover:bg-gray-300 font-semibold h-12 w-40 rounded-full text-md transition duration-300 ease-in-out transform text-gray-600 hover:text-gray-600 hover:scale-105">
            Select image
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default ShopProfile
