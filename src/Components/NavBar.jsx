import React, { useState } from "react";
import Logo from "../assets/RatheeLogo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

function NavBar() {
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Contact",
    "Our Services",
    "Gallery",
    "Videos",
  ];

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 ml-2">
            <img
              src={Logo}
              alt="Logo"
              className="w-28 hover:scale-105 transition-all"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex items-center gap-6 font-semibold text-base">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className={`cursor-pointer font-poppins transition-all px-2 ${
                  active === item ? "border-b-2 border-green-600" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <FaFacebook size={20} className="text-green-600 cursor-pointer" />
            <FaXTwitter size={20} className="text-green-600 cursor-pointer" />
            <FaInstagram size={20} className="text-green-600 cursor-pointer" />
          </div>

          {/* Mobile Hamburger */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-green-600 focus:outline-none ml-4"
            >
              {isMobileMenuOpen ? (
                <HiX className="text-black" size={28} />
              ) : (
                <HiMenu className="text-black" size={28} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="xl:hidden flex flex-col bg-white shadow-md px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => {
                setActive(item);
                setIsMobileMenuOpen(false);
              }}
              className={`cursor-pointer font-poppins transition-all ${
                active === item ? "border-b-2 border-green-600" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
