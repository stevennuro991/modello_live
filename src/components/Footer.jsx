import React from 'react';

import logo from '../assets/images/modello.png'

const Footer = () => {
  return (
    <>
      {/* Blog Subscription Section */}
      <div className="bg-blue-800  text-white p-8">
        <div className="container flex justify-between mx-auto text-center">
          <h2 className="font-bold text-lg text-start mb-4 w-[280px]">Join our subscription and get 
          instant updates about offers and discounts.</h2>

          <div className='flex flex-col'>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="text-gray-700 p-2 w-full outline-none rounded-l"
              // You may want to add more styling to the input
            />
            <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r">
              Go
            </button>
          </div>
          <p className="text-xs mt-1">Please read terms and Conditions before subscribing to the newsletter.</p>
          </div>
       
        </div>
      </div>


      <footer className="bg-blue-900 text-white p-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div>
            <h5 className="font-bold text-lg mb-3"><img src={logo} alt="" /></h5>
            <p className="text-sm">
              We are professional cleaning company founded in 1997 and providing leading commercial and residential cleaning solutions in the US.
            </p>
            <p className="text-sm mt-3">
              Mail: <a href="mailto:info@modellogh.com" className="underline">info@modellogh.com</a>
            </p>
            <p className="text-sm">
              Call: <a href="tel:+1 970 524 5455" className="underline">+1 970 524 5455</a>
            </p>
            {/* Social Icons */}
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="font-bold text-lg mb-3">Pages</h5>
            <ul className="text-sm">
              <li><a href="/home" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/pricing" className="hover:underline">Pricing</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="font-bold text-lg mb-3">Services</h5>
            <ul className="text-sm">
              {/* Repeat your services here */}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h5 className="font-bold text-lg mb-3">Recent Post</h5>
            <ul className="text-sm">
              {/* List recent posts here */}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-blue-800 text-center py-4 mt-4">
          <p className="text-xs">
            © 2023 - Modello. Modello Copyrights Reserved | Corporate website Modello
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;


