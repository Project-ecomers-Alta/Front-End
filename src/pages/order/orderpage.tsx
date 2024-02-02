import NavbarLogin from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {  ProductCart } from "@/utils/apis/products/types";
import { getCart } from "@/utils/apis/products/api";

function OrderPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<ProductCart[]>([]);

  const fetchCart = async () => {
    try {
      const response = await getCart();
      setCart(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleNext = () => {

  }

  return (
    <div>
      <NavbarLogin />
      <div className="px-28 ">
        <div className="text-[#579BB1] font-bold text-[20px] py-7">
          Shipping Details
        </div>
        <div className="border-[#D9D9D9] border-2 p-6 ">
          <div className="flex justify-between p-4">
            <div className="w-[475px]">
              <Input placeholder="First Name" />
            </div>
            <div className="w-[475px]">
              <Input placeholder="Last Name" />
            </div>
          </div>
          <div className="p-4">
            <Input placeholder="Address" />
          </div>
          <div className="p-4 flex justify-between">
            <div className="w-[475px]">
              <Input placeholder="Country" />
            </div>
            <div className="w-[475px]">
              <Input placeholder="City" />
            </div>
          </div>
          <div className="p-4 flex justify-between">
            <div className="w-[475px]">
              <Input placeholder="Postal Code" />
            </div>
            <div className="w-[475px]">
              <Input placeholder="Phone Number" />
            </div>
          </div>
          <div>
            <div className="p-4 font-semibold">Select Shipping</div>
            <RadioGroup defaultValue="option-one">
              <div className="flex px-4 justify-between">
                <div className="flex items-center space-x-2 border border-[#D9D9D9] w-[475px] p-5">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Option One</Label>
                </div>
                <div className="flex items-center space-x-2 border border-[#D9D9D9] w-[475px] p-5">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="text-[#579BB1] font-bold text-[20px] py-7">Summary</div>
        <table className="hidden md:table min-w-full border-2 p-6 border-[#D9D9D9] rounded-sm shadow-md text-left">
          <tbody className="">
            {cart &&
              cart.map((item, index) => (
                <tr key={index}>
                  <th className="py-12 px-4 font-normal max-w-40">
                    <div className="flex items-center ">
                      <img
                        className="w-20 h-20 mr-2 rounded-sm"
                        src=""
                        alt="Product Image"
                      />
                      <span className="font-semibold pl-2">
                        {item.product.name}
                      </span>
                    </div>
                  </th>
                  <th className="py-12 px-4 font-normal"></th>
                  <th className="py-12 px-4 font-normal">{item.quantity}</th>
                  <th className="py-12 px-4 text-right pr-12 font-semibold">{item.product.price}</th>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="flex justify-between border-2 border-[#D9D9D9] px-6 py-4 mb-8 text-[#D9D9D9] font-semibold">
          <div>Shop Vouchers</div>
          <div>Select Voucher</div>
        </div>
        <div className="flex justify-end gap-9 pb-28">
          <div>
            <Link to={"shopping-cart"}>
            <button className="w-[200px] h-[50px] bg-[#579BB1] text-white rounded-3xl">
              Cancel
            </button>
            </Link>
          </div>
          <div>
            <button className="w-[200px] h-[50px] bg-[#579BB1] text-white rounded-3xl">
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderPage;
