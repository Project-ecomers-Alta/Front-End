import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { User, History, Store } from "lucide-react";

const changePassword = () => {
  return (
    <Layout>
      <div className="ml-24 my-10">
        <p className="text-4xl font-semibold">My Profile</p>
        <p className="text-gray-600">Manage your shop profile information</p>
      </div>
      <div className="flex mb-40">
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
              <div>Profile</div>
              <div className="text-white font-semibold">Change Password</div>
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
        <div className="flex flex-col gap-8 ml-52">
          <div className="flex flex-row">
            <div className="w-[300px]">New Password</div>
            <Input />
          </div>
          <div className="flex justify-end gap-4">
            <button className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-32 rounded-full text-md transition duration-300 ease-in-out transform text-white hover:text-white hover:scale-105">
              Submit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default changePassword;
