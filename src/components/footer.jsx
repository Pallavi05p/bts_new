import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

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
              className="bg-blue-500 text-white rounded-full w-32 h-12 flex items-center gap-3 hover:bg-blue-600 transition font-kumbh"
            >
              Send <img src="Group 5.png" className="h-10 ml-4" alt="Send Icon" />
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="flex-1 md:grid md:grid-cols-3 flex-row gap-2 lg:-ml-48 text-sm text-gray-600">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-2 text-left font-kumbh">Quick Links</h4>
            <ul className="space-y-1 text-left font-dmsans text-[#1E1E1E82]">
              <Link to="/"><li className="hover:underline cursor-pointer mt-1">Home</li></Link>
              <Link to="/about"><li className="hover:underline cursor-pointer mt-1">About</li></Link>
              <Link to="/services"><li className="hover:underline cursor-pointer mt-1">Services</li></Link>
              <Link to="/contact"><li className="hover:underline cursor-pointer mt-1">Contact Us</li></Link>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-2 text-left font-kumbh mt-2 md:mt-0">Services</h4>
            <ul className="space-y-1 text-left font-dmsans text-[#1E1E1E82]">
              <Link to="/services"><li className="hover:underline cursor-pointer">Digital Marketing</li></Link>
              <Link to="/services"><li className="hover:underline cursor-pointer mt-1">Printing</li></Link>
              <Link to="/services"><li className="hover:underline cursor-pointer mt-1">Social Media Marketing</li></Link>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-2 text-left font-kumbh mt-2 md:mt-0">Contact</h4>
            <ul className="space-y-1 text-left font-dmsans text-[#1E1E1E82]">
              <a href="tel:7741009500"><li className="hover:underline cursor-pointer">7741009500</li></a>
              <a href="mailto:marketing@btsadvertising.in">
                <li className="hover:underline cursor-pointer mt-1">marketing@btsadvertising.in</li>
              </a>
              <a href="https://maps.app.goo.gl/7tCBz8qgqSt5mqUg7">
                <li className="hover:underline cursor-pointer mt-1">
                  Golden City Center,<br />Chhatrapati Sambhajinagar
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="bg-white w-full py-4 px-5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-blue-600 hover:text-blue-700 cursor-pointer" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-blue-600 hover:text-pink-500 cursor-pointer" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="text-blue-600 hover:text-sky-500 cursor-pointer" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-blue-600 hover:text-blue-700 cursor-pointer" />
            </a>
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
