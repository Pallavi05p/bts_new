import React from "react";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative md:min-h-screen sm:min-h-screen md:w-full h-[70vh] bg-black text-white flex items-center px-6 md:px-20 overflow-hidden mt-0  lg:mt-0">

      {/* Laptop Image */}
      <div className="hidden md:block absolute lg:right-0 lg:bottom-0 lg:top-0 w-1/2 md:top-96 z-10">
        <img
          src="/Lap.png"
          alt="Laptop with graphs"
          className="h-[70rem] w-[70rem] object-contain -mt-48 lg:ml-24 md:ml-48"
        />
      </div>
      <div className="md:hidden absolute right-24 max-[640px]:top-64 top-36  w-full z-0">
        <img
          src="/Lap.png"
          alt="Laptop with graphs"
          className="h-[30rem] w-[30rem] object-contain ml-24"
        />
      </div>

      {/* Text content */}
      <div className="z-10 max-w-2xl w-full text-center md:text-left -mt-14">
        <h1 className="font-semibold leading-tight font-kumbh">
          {/* Mobile Layout */}
          <div className="flex flex-col items-center justify-center text-center  gap-1 md:hidden max-[640px]:-mt-60 md:mt-0 -mt-48  ">
            <div className="flex gap-2 ">
              <span className="text-[#D9D9D947] text-3xl tracking-wider">WHERE</span>
              <span className="text-white text-3xl tracking-wider">CREATIVITY</span>
            </div>
            <span className="text-[#D9D9D947] text-3xl tracking-wider ">MEETS STRATEGY</span>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex gap-4  lg:ml-0 md:-mt-96 lg:mt-0 ">
            <span className="text-gray-500 text-5xl md:text-6xl lg:text-8xl  text-exact-1024-6xl tracking-wider">WHERE</span>
            <span className="text-white text-5xl md:text-6xl lg:text-8xl text-exact-1024-6xl tracking-wider">CREATIVITY</span>
          </div>
          <span className="hidden md:block  lg:ml-0 mt-4 text-gray-500 text-5xl md:text-6xl lg:text-8xl text-exact-1024-6xl whitespace-nowrap tracking-wider">
            MEETS STRATEGY
          </span>

        </h1>

        <p className="mt-4 md:mt-6 text-[#FFFEFE] text-sm md:text-lg max-w-md mx-auto md:-ml-0 lg:ml-0">
          At BTS Advertising, we craft digital stories and print experiences
          that connect, engage, and convert.
        </p>

        <div className="flex items-center justify-center md:justify-start gap-4 mt-6  lg:ml-0">
          {/* Gradient Border Wrapper */}
          <div className="p-[2px] rounded-full bg-[linear-gradient(to_right,_#008CFB,_#0065B600,_#D9D9D9)]">
            <div className="bg-white rounded-full">
              <Link to="/services">
                <button className="px-4 py-2 md:px-6 md:py-3 flex items-center gap-2 bg-black text-white rounded-full hover:opacity-90 transition text-sm md:text-base">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>

          {/* Icon */}
          <Link to="/services">
            <img src="/Group 3898.svg" className="h-10 md:h-14" />
          </Link>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="hidden md:block absolute w-2/3 h-2/3 bottom-0 left-0 bg-gradient-to-br from-blue-500/30 to-black blur-3xl z-0" />
      <div className="md:hidden absolute w-full h-32 -bottom-32 left-0 bg-[#008CFB] blur-3xl z-0" />
    </section>
  );
};

export default HeroSection;
