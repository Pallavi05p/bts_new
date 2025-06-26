import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Portfolio', to: '/services' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="w-full h-24 md:px-16 px-2 py-2 flex justify-between items-center bg-black text-white sticky top-0 z-40">
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src="BTS Remove.png" alt="BTS Logo" className="md:h-24 md:w-44 h-12 w-18" />
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4">
        {navLinks.map(({ name, to }, index) => {
          const isActive = location.pathname === to;

          return (
            <Link key={index} to={to}>
              <div className="p-[2px] rounded-full bg-gradient-to-r from-[#008CFB] to-white inline-block">
                <div className={`rounded-full ${isActive ? 'bg-white' : 'bg-black'}`}>
                  <button
                    className={`w-28 h-9 text-center rounded-full bg-transparent text-sm font-semibold shadow transition-all
                      ${isActive ? 'text-black' : 'text-white hover:text-black hover:bg-white'}`}
                  >
                    {name}
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#008CFB] bg-transparent"
        >
          {menuOpen ? <X size={24} /> : <Menu size={36} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col justify-center items-center gap-6 z-90 md:hidden">
          {navLinks.map(({ name, to }, index) => {
            const isActive = location.pathname === to;

            return (
              <Link
                key={index}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="w-3/4"
              >
                <div className="p-[3px] rounded-full bg-gradient-to-r from-[#008CFB] to-white inline-block w-full">
                  <div className={`rounded-full w-full ${isActive ? 'bg-white' : 'bg-black'}`}>
                    <button
                      className={`w-full h-12 text-center text-lg rounded-full bg-transparent font-bold transition-all
                        ${isActive ? 'text-black' : 'text-white hover:text-black hover:bg-white'}`}
                    >
                      {name}
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
