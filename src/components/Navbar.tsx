import { useToken } from "@/utils/context/token";
import { SearchIcon, ShoppingCart } from "lucide-react";
import User from "../assets/unnamed.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "@/utils/context/cartContext";

function Navbar() {
  const { token, changeToken } = useToken();
  const { carts } = useCart();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    changeToken("");
  };

  return (
    <div className="bg-[#579BB1] text-black flex py-6 px-28 justify-between">
      <Link to={"/"} className="bg-white p-2 text-[20px]">LOGO</Link>
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
      {token ? (
        <div className="flex">
          <Link
            to={"/shopping-cart"}
            className="bg-white py-4 px-4 rounded-xl mx-4"
          >
            <ShoppingCart color="#000000" />
            <span className="absolute z-10 -top-2 -right-2 bg-white font-medium text-black size-4 flex items-center justify-center text-xs rounded-full p-2">
              {carts ? carts.length : 0}
            </span>
          </Link>
          <div className="relative">
            <button
              id="dropdownDefaultButton"
              onClick={handleDropdownToggle}
              className="focus:outline-none"
            >
              <img
                className="rounded-full w-12 h-12 items-center"
                src={User}
                alt="User"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-12 right-0 bg-white rounded-md shadow-md p-2">
                <Link to="/profile">Profile</Link>
                <button onClick={() => handleLogout()}>Logout</button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex">
          <Link to={"/login"}>
            <div className="bg-white py-2 px-4 rounded-md">Login/Register</div>
          </Link>
          <div className="bg-white py-2 px-4 rounded-xl mx-6">
            <ShoppingCart color="#000000" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
