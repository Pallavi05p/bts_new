import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { SlSocialYoutube } from 'react-icons/sl';
import { FiTwitter } from 'react-icons/fi';
import { RiFacebookLine } from 'react-icons/ri';
import { BiLogoInstagram } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="max-w-[100vw] overflow-x-hidden">
      {/* Top White Section */}
      <div className="bg-white rounded-t-3xl px-6 md:px-20 py-10 flex flex-col md:flex-row justify-between gap-12">
        {/* Contact Form */}
        <div className="flex-1">
          <div>
            <img src="BTS Remove.png" alt="BTS Logo" className="h-24 w-auto object-contain mb-8 -mt-5" />
          </div>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="rounded-full px-4 py-2 bg-[#D9D9D996] focus:outline-none md:w-72 w-full h-12 -mt-4"
            />
            <input
              type="text"
              placeholder="Contact No / Email"
              className="rounded-full px-4 py-2 bg-[#D9D9D996] focus:outline-none md:w-72 w-full h-12"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-full hover:bg-blue-600 transition w-44"
            >
              Send
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="flex-1 md:grid md:grid-cols-3 flex-row gap-2 lg:-ml-48 text-sm text-gray-600">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-2 text-left font-kumbh text-black">Quick Links</h4>
            <ul className="space-y-1 text-left font-dmsans text-[#1E1E1E82]">
              <Link to="/"><li className="hover:underline cursor-pointer mt-1 text-gray-400">Home</li></Link>
              <Link to="/about"><li className="hover:underline cursor-pointer mt-1 text-gray-400">About</li></Link>
              <Link to="/services"><li className="hover:underline cursor-pointer mt-1 text-gray-400">Services</li></Link>
              <Link to="/contact"><li className="hover:underline cursor-pointer mt-1 text-gray-400">Contact Us</li></Link>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-2 text-left font-kumbh mt-2 md:mt-0 text-black">Services</h4>
            <ul className="space-y-1 text-left font-dmsans text-[#1E1E1E82]">
              <Link to="/services"><li className="hover:underline cursor-pointer text-gray-400">Digital Marketing</li></Link>
              <Link to="/services"><li className="hover:underline cursor-pointer mt-1 text-gray-400">Printing</li></Link>
              <Link to="/services"><li className="hover:underline cursor-pointer mt-1 text-gray-400">Social Media Marketing</li></Link>
            </ul>
          </div>

          {/* Contact + Social Icons */}
          <div className="flex flex-col items-center md:items-start gap-4 mr-64">
            <div>
              <h4 className="font-semibold mb-2 text-left font-kumbh mt-2 md:mt-0 text-black">Contact</h4>
              <ul className="space-y-1 text-left font-dmsans text-[#1E1E1E82]">
                <a href="tel:9284979500"><li className="hover:underline cursor-pointer text-gray-400">9284979500</li></a>
                <a href="tel:7741009500"><li className="hover:underline cursor-pointer mt-1 text-gray-400">7741009500</li></a>
                <a href="mailto:marketing@btsadvertising.in">
                  <li className="hover:underline cursor-pointer mt-1 text-gray-400">marketing@btsadvertising.in</li>
                </a>
                <a href="https://maps.app.goo.gl/7tCBz8qgqSt5mqUg7" target="_blank" rel="noopener noreferrer">
                  <li className="hover:underline cursor-pointer mt-1 text-left text-gray-400">
                    Khinavasara August Heighstreet, Office No. F-12,<br />
                    Ulkanagari, Garkheda,<br />
                    Chh. Sambhajinagar 431001
                  </li>
                </a>
              </ul>
            </div>

            {/* Custom Styled Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-4 ">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-blue-600 flex items-center justify-center  hover:text-green-900 transition">
                <RiFacebookLine className="w-5 h-5 text-blue-600" />
              </a>
             <a
  href="https://youtube.com"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full border border-blue-600 flex items-center justify-center  hover:text-green-900 transition"
>
  <SlSocialYoutube className="w-5 h-5 text-blue-500" />
</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-blue-600 flex items-center justify-center  hover:text-green-900 transition">
                <FiTwitter className="w-5 h-5 text-blue-500" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-blue-600 flex items-center justify-center  hover:text-green-900 transition">
                <BiLogoInstagram className="w-5 h-5 text-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Branding Section */}
      <div className="bg-black text-center">
        <h2 className="text-blue-300 text-4xl md:text-8xl lg:text-9xl tracking-wide whitespace-nowrap mt-2">
          BTS ADVERTISING
        </h2>
      </div>

      {/* Copyright */}
      <div className="bg-black flex justify-center items-center px-6 py-4">
        <p className="text-sm text-[#D9D9D9] text-center">
          © 2025 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
