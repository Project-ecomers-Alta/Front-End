import NavbarLogin from "@/components/Navbarlogin"
import Footer from "@/components/Footer"
import { Input } from "@/components/ui/input"
import Shoes from "../../assets/img.png"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import React from "react"

function OrderPage() {
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
        <div className="border-2 border-[#D9D9D9] p-8 mb-8">
          <div className="flex items-center">
            <div>
              <img
                className="w-[227px] h-[105px] border border-[#D9D9D9]"
                src={Shoes}
              />
            </div>
            <div className="ps-6">
              <div>PRODUCT NAME</div>
              <div>£175.00</div>
            </div>
          </div>
          <div className="flex py-6 items-center">
            <div>
              <img
                className="w-[227px] h-[105px] border border-[#D9D9D9]"
                src={Shoes}
              />
            </div>
            <div className="ps-6">
              <div>PRODUCT NAME</div>
              <div>£175.00</div>
            </div>
          </div>
          <div>
            <hr className="border-1 border-[#D9D9D9]" />
          </div>
          <div className="flex justify-between py-4">
            <div>TOTAL</div>
            <div>£350.00</div>
          </div>
        </div>
        <div className="flex justify-between border-2 border-[#D9D9D9] px-6 py-4 mb-8 text-[#D9D9D9] font-semibold">
          <div>Shop Vouchers</div>
          <div>Select Voucher</div>
        </div>
        <div className="flex justify-end gap-9 pb-28">
          <div>
            <button className="w-[200px] h-[50px] bg-[#579BB1] text-white rounded-3xl">
              Cancel
            </button>
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
  )
}

export default OrderPage
