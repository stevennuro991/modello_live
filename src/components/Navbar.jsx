import React from 'react';
import logo from '../assets/images/modello.png';
import xmasLogo from "../assets/images/xmas_logo.png"
import instagram from '../assets/icons/instagram.svg';
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import phone from '../assets/icons/phone.svg';
import clock from '../assets/icons/clock.svg';
import email from '../assets/icons/email.svg'

const TopBar = () => {
  return (
    <div className="bg-gray-200 text-black py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex  gap-2 items-center ' ><img className='h-6 w-8' src={phone} alt="" /><p className="text-sm">(+233) 547 898 6097/(+233) 24 168 8813</p></div>
        <div className='flex  gap-2 items-center ' ><img className='h-6 w-8' src={clock} alt="" /><p className="text-sm">Mon - Fri: 9:00 - 19:00 / Closed on Weekends</p></div>
        <div className='flex  gap-2 items-center ' ><img className='h-6 w-8' src={email} alt="" /><p className="text-sm">info@modellogh.com</p></div>
        <div className="flex items-center space-x-4">
          {/* <span className="text-sm">Call us: (+233) 547 896 097</span>
          <span className="text-sm"><img src="" alt="" /></span> */}
         <span className="">
    <a href="https://www.instagram.com/modelloghana" target="_blank" rel="noopener noreferrer">
        <img className='h-8 w-8' src={instagram} alt="Instagram" />
    </a>
</span>
<span className="">
    <a href="https://web.facebook.com/modelloghana/" target="_blank" rel="noopener noreferrer">
        <img className='h-8 w-8' src={facebook} alt="Facebook" />
    </a>
</span>
<span className="">
    <a href="https://twitter.com/modelloghana" target="_blank" rel="noopener noreferrer">
        <img className='h-8 w-8' src={twitter} alt="Twitter" />
    </a>
</span>

        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <TopBar />
      <nav className="bg-blue-300 text-white py-1">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo and Navigation Links */}
          <div className="flex items-center space-x-10">
            <div className="text-xl font-bold"><img height="100" width="100" src= {xmasLogo} alt="" /></div>
            <div className="hidden md:flex space-x-4">
              <a href="/" className="px-3 py-2 rounded-md text-white text-ls font-medium">Home</a>
              <a href="/about" className="px-3 py-2 rounded-md text-ls text-white font-medium">About</a>
              <a href="/service" className="px-3 py-2 rounded-md text-white text-ls font-medium">Services</a>
              <a href="/pricing" className="px-3 py-2 rounded-md text-ls text-white font-medium">Pricing</a>
              <a href="/contact" className="px-3 py-2 rounded-md text-ls text-white font-medium">Contact Us</a>
              {/* Other navigation items */}
            </div>
          </div>

        
        </div>
      </nav>
    </>
  );
};

export default Navbar;
