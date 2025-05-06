import React from "react";
import Logo from "../assets/RatheeLogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
function NavBar1() {
  const [active, setActive] = useState("");
  return (
    <div className="w-full flex items-center justify-between  md:justify-around md:m-0 overflow-hidden bg-white h-20 shadow-md">
      {/*Logo*/}
      <div className="ml-20">
        <img
          src={Logo}
          className="w-28 hover:scale-105 transition-all ml-4"
        ></img>
      </div>
      <ul className="hidden xl:flex items-center gap-5 font-semibold text-base">
        <li
          onClick={() => setActive("Home")}
          className={`px-2 cursor-pointer font-poppins transition-all ${
            active === "Home" ? "border-b- border-green-600" : ""
          }`}
        >
          Home
        </li>
        <li
          onClick={() => setActive("About")}
          className={`px-2 cursor-pointer font-poppins transition-all ${
            active === "About" ? "border-b-2 border-green-600" : ""
          }`}
        >
          About
        </li>
        <li
          onClick={() => setActive("Contact")}
          className={`px-2 cursor-pointer font-poppins transition-all ${
            active === "Contact" ? "border-b-2 border-green-600" : ""
          }`}
        >
          Contact
        </li>
        <li
          onClick={() => setActive("Our Services")}
          className={`px-2 cursor-pointer font-poppins transition-all ${
            active === "Our Services" ? "border-b-2 border-green-600" : ""
          }`}
        >
          Our Services
        </li>
        <li
          onClick={() => setActive("Gallery")}
          className={`px-2 cursor-pointer font-poppins transition-all ${
            active === "Gallery" ? "border-b-2 border-green-600" : ""
          }`}
        >
          Gallery
        </li>
        <li
          onClick={() => setActive("Videos")}
          className={`px-2 cursor-pointer font-poppins transition-all ${
            active === "Videos" ? "border-b-2 border-green-600" : ""
          }`}
        >
          Videos
        </li>
      </ul>
      {/* Icons */}
      <div className="flex items-center  justify-center space-x-6 mr-10 ">
        <FaFacebook size={20} className="text-green-600 cursor-pointer " />

        <FaXTwitter className="text-green-600 cursor-pointer" size={20} />
        <FaInstagram className="text-green-600 cursor-pointer " size={20} />
      </div>
    </div>
  );
}

export default NavBar1;
