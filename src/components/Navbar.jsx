import React, { useState } from "react";
import logo from "../assets/images/modello.png";
import xmasLogo from "../assets/images/xmas_logo.png";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import phone from "../assets/icons/phone.svg";
import clock from "../assets/icons/clock.svg";
import email from "../assets/icons/email.svg";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const TopBar = () => {
  return (
    <div className="hidden md:block bg-gray-200 text-black py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex  gap-2 items-center ">
          <img className="h-6 w-8" src={phone} alt="" />
          <p className="text-sm">(+233) 547 898 6097/(+233) 24 168 8813</p>
        </div>
        <div className="flex  gap-2 items-center ">
          <img className="h-6 w-8" src={clock} alt="" />
          <p className="text-sm">
            Mon - Fri: 9:00 - 19:00 / Closed on Weekends
          </p>
        </div>
        <div className="flex  gap-2 items-center ">
          <img className="h-6 w-8" src={email} alt="" />
          <p className="text-sm">info@modellogh.com</p>
        </div>
        <div className="flex items-center space-x-4">
          {/* <span className="text-sm">Call us: (+233) 547 896 097</span>
          <span className="text-sm"><img src="" alt="" /></span> */}
          <span className="">
            <a
              href="https://www.instagram.com/modelloghana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-8 w-8" src={instagram} alt="Instagram" />
            </a>
          </span>
          <span className="">
            <a
              href="https://web.facebook.com/modelloghana/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-8 w-8" src={facebook} alt="Facebook" />
            </a>
          </span>
          <span className="">
            <a
              href="https://twitter.com/modelloghana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-8 w-8" src={twitter} alt="Twitter" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ setScroll }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <TopBar />
      <nav className="hidden md:block bg-blue-300 text-white py-1">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo and Navigation Links */}
          <div className="flex items-center space-x-10">
            <div className="text-xl font-bold">
              <img height="100" width="100" src={xmasLogo} alt="" />
            </div>
            <div className="hidden md:flex space-x-4">
              <a
                href="/"
                className="px-3 py-2 rounded-md text-white text-ls font-medium"
              >
                Home
              </a>
              <a
                href="/about"
                className="px-3 py-2 rounded-md text-ls text-white font-medium"
              >
                About
              </a>
              <a
                href="/service"
                className="px-3 py-2 rounded-md text-white text-ls font-medium"
              >
                Services
              </a>
              {/* <a href="/pricing" className="px-3 py-2 rounded-md text-ls text-white font-medium">Pricing</a> */}
              <a
                href="/contact"
                className="px-3 py-2 rounded-md text-ls text-white font-medium"
              >
                Contact Us
              </a>
              {/* Other navigation items */}
            </div>
          </div>
        </div>
      </nav>

      {/* FOR SMALL SCREENS */}

      <nav className="md:hidden flex bg-blue-300 w-full text-white py-1 z-50">
        <div className="w-full flex items-center justify-between">
          {/* Logo and Navigation Links */}
          <div className="flex items-center w-full px-5">
            <div className="text-xl font-bold w-full flex justify-start">
              <img height="100" width="100" src={xmasLogo} alt="" />
            </div>
            <div className="w-full flex justify-end">
              <HiOutlineMenu
                onClick={() => {
                  setToggleMenu(true);
                  setScroll(false);
                }}
                className="text-white w-7 h-7"
              />
            </div>
            <div
              className={`${
                toggleMenu && window.innerWidth < 900
                  ? "absolute z-50 flex-col items-center top-0 left-0 w-full block bg-blue-300 h-screen overflow-hidden"
                  : "hidden"
              }`}
            >
              <div className="flex justify-between items-center w-full px-5">
                <div className="flex">
                  <div className="flex items-center">
                    <img height="100" width="100" src={xmasLogo} alt="" />
                  </div>
                </div>
                <AiOutlineClose
                  onClick={() => {
                    setToggleMenu(false);
                    setScroll(true);
                  }}
                  className=" text-white w-7 h-7"
                />
              </div>

              <div className="md:hidden flex flex-col items-center justify-center space-y-5 my-10">
                <a
                  href="/"
                  className="px-3 py-2 rounded-md text-white text-ls font-medium"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="px-3 py-2 rounded-md text-ls text-white font-medium"
                >
                  About
                </a>
                <a
                  href="/service"
                  className="px-3 py-2 rounded-md text-white text-ls font-medium"
                >
                  Services
                </a>
                <a
                  href="/contact"
                  className="px-3 py-2 rounded-md text-ls text-white font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>
            {/* <div className="hidden md:flex space-x-4">
              <a
                href="/"
                className="px-3 py-2 rounded-md text-white text-ls font-medium"
              >
                Home
              </a>
              <a
                href="/about"
                className="px-3 py-2 rounded-md text-ls text-white font-medium"
              >
                About
              </a>
              <a
                href="/service"
                className="px-3 py-2 rounded-md text-white text-ls font-medium"
              >
                Services
              </a>
              <a
                href="/contact"
                className="px-3 py-2 rounded-md text-ls text-white font-medium"
              >
                Contact Us
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
