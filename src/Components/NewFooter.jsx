import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../assets/footer_logo.png";
const NewFooter = () => {
  return (
    <footer className="bg-black text-white text-sm px-6 py-10 font-poppins">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Contact Info */}
        <div className="text-left space-y-1">
          <div className="flex  gap-3">
            {" "}
            <FaLocationDot className="text-white text-xl" />
            <span className="font-poppins font-medium">
              Street 7239 AlUla 43512
            </span>
          </div>

          <div className="flex  gap-3">
            {" "}
            <FaPhoneAlt className="text-white text-xl" />
            <span className="font-poppins font-medium"> +91 9992117565</span>
          </div>
          <div className="flex  gap-3">
            {" "}
            <MdEmail className="text-white text-xl" />
            <span className="font-poppins font-medium">
              info@ratheegreenhouse.com
            </span>
          </div>
        </div>

        {/* Logo */}
        <div>
          <img
            src={Logo}
            alt=" Rathee Agrotech"
            className="w-36  h-auto text-white"
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#3c2b28] my-6"></div>

      {/* Nav Links */}
      <div className="flex flex-wrap justify-center gap-6 font-poppins text-lg font-semibold tracking-wide">
        {[
          "About Us",
          "The Agrotech  news",
          "Contact Us",
          "Our Services",
          "Gallery",
          "Videos",
        ].map((link) => (
          <a href="#" key={link} className="hover:text-[#dfae8b]">
            {link}
          </a>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center border-t border-[#3c2b28] pt-4 text-xs">
        <p className="text-sm">
          Copyrights © 2025 Agrotech. All Rights Reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="text-sm">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="#" className="text-sm">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
