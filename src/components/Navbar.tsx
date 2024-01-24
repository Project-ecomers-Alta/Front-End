import { SearchIcon, ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <div className="bg-[#579BB1] text-black flex py-6 px-28 justify-between">
      <div className="bg-white p-2 text-[20px]">LOGO</div>
      <div className="flex items-center">
        <div className="relative">
          <input
            className="py-2 px-4 rounded-md w-[500px] pr-10"
            type="search"
            placeholder="Search"
          />
          <div className="absolute top-2 right-3 text-gray-500">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="bg-white py-2 px-4 rounded-md">Login/Register</div>
        <div className="bg-white py-2 px-4 rounded-xl mx-6">
          <ShoppingCart color="#000000" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
