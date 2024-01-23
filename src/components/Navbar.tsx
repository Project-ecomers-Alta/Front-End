import React from "react"
import Cart from "../assets/shopping_cart.png"

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
          <img className="w-8 h-7" src={Cart} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
