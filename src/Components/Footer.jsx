import React from "react";
import Logo from "../assets/RatheeLogo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import footerBg from "../assets/whitebg.png";

function Footer() {
  return (
    <div
      className="relative z-10 px-6 py-10 bg-cover bg-center bg-no-repeat flex flex-col  bg-black text-white "
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 max-w-6xl mx-auto">
        {/* Logo & Caption */}
        <div className="lg:w-1/4 text-center lg:text-left">
          <img className="w-30 mx-auto lg:mx-0 mb-4 " src={Logo} alt="Logo" />
        </div>

        {/* Site Links */}
        <div className="lg:w-1/4 text-center lg:text-left">
          <h4 className="font-bold text-lg mb-3 text-[#4baf47] font-poppins">
            Site Links
          </h4>
          <ul className="space-y-1 text-md font-semibold">
            <li>&gt; Home</li>
            <li>&gt; About</li>
            <li>&gt; Contact</li>
            <li>&gt; Services</li>
            <li>&gt; Gallery</li>
            <li>&gt; Videos</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="lg:w-1/4 text-center lg:text-left">
          <h4 className="font-bold text-lg mb-3 text-[#4baf47]">Contact Us</h4>
          <ul className="space-y-2 text-md font-semibold">
            <li className="flex items-center justify-center lg:justify-start gap-3">
              <FaMapMarkerAlt /> 631 Elgin ST. Celina, State
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-2">
              <MdOutlineEmail className="text-xl" /> info@ratheegreenhouse.com
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-2">
              <FaPhone /> +91 9992117565
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="lg:w-1/4 text-center lg:text-left">
          <h4 className="font-bold text-lg mb-3 text-[#4baf47]">Follow Us</h4>
          <p className="text-sm mb-3 font-medium">
            Follow us to see how technology and nature grow together.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a href="#">
              <FaInstagram className="text-green-800 text-2xl hover:scale-110 transition" />
            </a>
            <a href="#">
              <FaFacebook className="text-green-800 text-2xl hover:scale-110 transition" />
            </a>
            <a href="#">
              <FaXTwitter className="text-green-800 text-2xl hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-green-800 text-sm font-bold mt-4 text-center">
        ©{new Date().getFullYear()} All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
