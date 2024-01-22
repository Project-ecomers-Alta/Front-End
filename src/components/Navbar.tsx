import React from "react";

function Navbar() {
  return (
    <div className="bg-[#579BB1] text-black flex py-6 px-28 justify-between">
      <div className="bg-white p-2 text-[20px]">LOGO</div>
      <div>
        <input
          className="py-2 px-4 rounded-md w-[500px]"
          type="search"
          placeholder="Search"
        />
      </div>
      <div className="flex">
        <div className="bg-white py-2 px-4 rounded-md">Login/Register</div>
        <div className="bg-white py-2 px-4 rounded-xl mx-6">
          <img src="./images/shopping_cart 1.png" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
