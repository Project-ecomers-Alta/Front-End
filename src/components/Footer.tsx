import React from "react";

function Footer() {
  return (
    <div className=" bg-[#579BB1]">
      <div className="flex flex-col justify-between py-16 px-28 lg:flex-row">
        <div>
          <div className="font-bold text-3xl text-white py-4">LOGO</div>
          <div className="text-base">
            <div>Quality, Savings, and Simplicity.</div>
            <div className="pb-6">More Than Just Transaction!</div>
          </div>
        </div>
        <div className="text-white">
          <div className="pb-4 text-xl font-semibold">Usefull Links</div>
          <div className="text-base">
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
            <div className="pb-6">Terms & Condition</div>
          </div>
        </div>
        <div className="text-white">
          <div className="pb-4 text-xl font-semibold">Contact Us</div>
          <div className="text-base">
            <div>
              <img src="" alt="" />
              <p>WhatsApp</p>
              <p>0812-1212-1212</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>Call Us</p>
              <p>0812-1212-1212</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-28">
        <hr className="border-white" />
      </div>

      <div className="flex flex-col px-28 justify-between p-6 text-white lg:flex-row">
        <div>Terms Of Use | Privacy Environmental Policy</div>
        <div>©2024 All rights reserved. Name E-commerce Ltd.</div>
      </div>
    </div>
  );
}

export default Footer;
