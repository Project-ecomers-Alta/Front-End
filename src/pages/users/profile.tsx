import Layout from "@/components/Layout"
import { User, History, Store } from "lucide-react"
import useRetrieveProfileUser from "@/hooks/useRetrieveProfileUser"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import useRetrieveUpdateProfileUser from "@/hooks/useUpdateProfileUser"
import { useState } from "react"

interface User {
  UserName: string
  Domicile: string
  Email: string
  PhoneNumber: number
  Image: string
}

const Profile: React.FC = () => {
  const { data, isLoading, error } = useRetrieveProfileUser()
  const { updateProfile } = useRetrieveUpdateProfileUser()

  const [username, setUsername] = useState<string>(data?.UserName || "")
  const [domicile, setDomicile] = useState<string>(data?.Domicile || "")
  const [email, setEmail] = useState<string>(data?.Email || "")
  const [phoneNumber, setPhoneNumber] = useState<string>(
    data?.PhoneNumber?.toString() || ""
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    switch (name) {
      case "username":
        setUsername(value)
        break
      case "domicile":
        setDomicile(value)
        break
      case "email":
        setEmail(value)
        break
      case "phoneNumber":
        setPhoneNumber(value)
        break
      default:
        break
    }
  }

  const handleSubmit = () => {
    const updatedUserData: Partial<User> = {
      UserName: username,
      Domicile: domicile,
      Email: email,
      PhoneNumber: parseInt(phoneNumber, 10),
    }

    updateProfile(updatedUserData)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const user = data

  return (
    <Layout>
      <div className="ml-24 my-10">
        <p className="text-4xl font-semibold">My Profile</p>
        <p className="text-gray-600">Manage your shop profile information</p>
      </div>
      <div className="flex justify-between mb-40">
        <div className="ml-24 bg-white drop-shadow-2xl h-[280px] rounded">
          <div className="flex items-center gap-4 bg-cyan-600 py-2 m-4 rounded-lg">
            <div>
              <User
                color="#579BB1"
                size="40"
                className="bg-white item-center rounded-full py-1 ml-4"
              />
            </div>
            <div className="flex flex-col pr-4">
              <div>My Account</div>
              <Link to={"/profile"}>
                <div className="text-white font-semibold">Profile</div>
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
        <div className="flex flex-col gap-8">
          <div className="flex flex-row">
            <div className="w-[300px]">Username</div>
            <Input
              value={username}
              onChange={(e) => handleInputChange(e)}
              name="username"
            />
          </div>
          <div className="flex flex-row">
            <div className="w-[300px]">Domicile</div>
            <Input
              value={domicile}
              onChange={(e) => handleInputChange(e)}
              name="domicile"
            />
          </div>
          <div className="flex flex-row">
            <div className="w-[300px]">Email</div>
            <Input
              value={email}
              onChange={(e) => handleInputChange(e)}
              name="email"
            />
          </div>
          <div className="flex flex-row">
            <div className="w-[300px]">Phone Number</div>
            <Input
              value={phoneNumber}
              onChange={(e) => handleInputChange(e)}
              name="phoneNumber"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-32 rounded-full text-md transition duration-300 ease-in-out transform text-white hover:text-white hover:scale-105"
            >
              Submit
            </button>
            <button className="bg-red-600 hover:bg-red-600 font-semibold h-12 w-32 rounded-full text-md transition duration-300 ease-in-out transform text-white hover:text-white hover:scale-105">
              Delete Account
            </button>
          </div>
        </div>
        <div className="flex flex-col mr-40 gap-5">
          <div>
            <img
              src={user?.Image}
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

export default Profile
