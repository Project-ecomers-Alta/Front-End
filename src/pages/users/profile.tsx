import Layout from "@/components/Layout"
import { User, History, Store } from "lucide-react"
import useRetrieveProfileUser from "@/hooks/useRetrieveProfileUser"
import { Input } from "@/components/ui/input"

const Profile: React.FC = () => {
  const { data, isLoading, error } = useRetrieveProfileUser()

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const user = data;

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
              <div className="text-white font-semibold">Profile</div>
              <div>Change Password</div>
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
            <div>My Purchase</div>
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
              <div>Shop Profile</div>
              <div>My Product</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row">
            <div className="w-[300px]">Username</div>
            <Input value={user?.UserName} />
          </div>
          <div className="flex flex-row">
            <div className="w-[300px]">Domicile</div>
            <Input value={user?.Domicile} />
          </div>
          <div className="flex flex-row">
            <div className="w-[300px]">Email</div>
            <Input value={user?.Email} />
          </div>
          <div className="flex flex-row">
            <div className="w-[300px]">Phone Number</div>
            <Input value={user?.PhoneNumber} />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="submit"
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
  );
};

export default Profile
