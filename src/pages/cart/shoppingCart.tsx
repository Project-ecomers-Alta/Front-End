import Layout from "@/components/Layout";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "../../assets/assics.jpg";
import { useState } from "react";

const shoppingCart = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter <= 0) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <Layout>
      <div className="ml-24 my-10">
        <p className="text-4xl font-semibold text-cyan-600">Shopping Cart</p>
      </div>
      <div className="flex justify-between mx-32 mb-4 bg-[#F8F4EA] rounded-tl-xl rounded-tr-xl py-5 px-14 shadow-xl">
        <div className="flex items-center">
          <Checkbox className="bg-gray-200 mr-4" />
          <p className="font-semibold">Select All</p>
        </div>
        <p className="text-cyan-600 font-semibold">Delete</p>
      </div>
      <div className="flex justify-between mx-32 mb-4 bg-[#F8F4EA] rounded-tl-xl rounded-tr-xl py-5 px-14 shadow-xl">
        <div>
          <div className="flex items-center mb-4">
            <Checkbox className="bg-gray-200 mr-4" />
            <p>Toko A</p>
          </div>
          <div className="flex items-center">
            <Checkbox className="bg-gray-200 mr-4" />
            <img src={Image} alt="" width={100} />
            <p className="text-2xl ml-6">Asics Gel Kayano UK10</p>
            <div className="flex gap-x-1 my-10 ml-[520px]">
              <button
                className="p-3 bg-white shadow-md rounded-lg font-semibold"
                onClick={handleDecrement}
              >
                -
              </button>
              <input
                className="bg-white shadow-md rounded-lg w-[60px] justify-center text-center"
                type="text"
                value={counter}
              />
              <button
                className="p-3 bg-white shadow-md rounded-lg font-semibold"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
            <p className="text-2xl ml-32">£175.00</p>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between mx-32 mb-4 bg-[#F8F4EA] rounded-tl-xl rounded-tr-xl py-5 px-14 shadow-xl">
        <div>
          <div className="flex items-center mb-4">
            <Checkbox className="bg-gray-200 mr-4" />
            <p>Toko B</p>
          </div>
          <div className="flex items-center">
            <Checkbox className="bg-gray-200 mr-4" />
            <img src={Image} alt="" width={100} />
            <p className="text-2xl ml-6">Asics Gel Kayano UK9.5</p>
            <div className="flex gap-x-1 my-10 ml-[520px]">
              <button
                className="p-3 bg-white shadow-md rounded-lg font-semibold"
                onClick={handleIncrement}
              >
                +
              </button>
              <input
                className="bg-white shadow-md rounded-lg w-[60px] justify-center text-center"
                type="text"
                value={counter}
              />
              <button
                className="p-3 bg-white shadow-md rounded-lg font-semibold"
                onClick={handleDecrement}
              >
                -
              </button>
            </div>
            <p className="text-2xl ml-32">£175.00</p>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export default shoppingCart;
