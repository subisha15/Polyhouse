import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function TopNavbar() {
  return (
    <div className="   hidden lg:flex justify-end items-center bg-[#2d6a4f] w-full h-[35px] py-4   relative">
      <div className=" flex w-1/2 items-center justify-center gap-4 ">
        <p className="text-white font-normal font-poppins">
          Haryana’s Leading Hub for Sustainable Farming Excellence
        </p>
      </div>

      <div className=" flex w-1/2 items-center justify-center gap-7">
        <div className="flex items-center justify-between gap-1 cursor-pointer">
          <FaPhone className="text-white font-semibold text-lg text-center" />
          <span className="text-white font-medium text-md font-poppins">
            +91-9992117565
          </span>
        </div>
        <div
          div
          className="flex items-center justify-between gap-0.5 cursor-pointer"
        >
          <MdOutlineEmail className="text-white font-bold text-lg text-center" />
          <span className="text-white font-medium text-md font-poppins">
            info@ratheegreenhouse.com
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
