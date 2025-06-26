import React from "react";
import circleImage from "/circle.png";
import triangleBg from "/Rectangle 18.png";
import triangleBg2 from "/Rectangle 19.png";
import arrow1 from "/Group 5.png";
import arrowMiddle from "/Arrow 02.png"; // Use the uploaded arrow image

const CreativeTeam = () => {
  return (
    <section className="relative bg-white w-full   p-4 md:p-12 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden">

      {/* Left Content */}
      <div className="md:w-1/2 w-full flex flex-col items-start justify-center z-10 gap-4">
        {/* Top Triangle */}
        <div className="relative">
          <img src={triangleBg} alt="Triangle Shape" className="object-contain h-[380px]" />
          <div className="absolute top-0 flex flex-col justify-center p-6">
            <div className="flex mt-2 md:mt-0 items-center space-x-6">
              <img src={arrow1} alt="" className=" size-16  md:size-12" />
              <h2 className="font-bold text-2xl md:text-3xl text-black mb-2">Multi-Channel Expertise</h2>
            </div>
            <p className="text-lg w-80 mt-8   text-gray-800">
              Our team is a powerhouse of designers, strategists, and content creators who bring bold ideas to life.
              With years of experience across industries.
            </p>
          </div>
        </div>

        {/* Bottom Triangle */}
        <div className="relative md:mt-4">
          <img src={triangleBg2} alt="Triangle Shape" className="object-contain h-[380px] w-auto" />
          <div className="absolute bottom-0 flex flex-col justify-center p-6">
            <p className="text-lg w-72 md:pb-4 md:w-80 mb-8 md:mb-0 md:text-lg text-gray-800">
              From logo creation and social media management to full-scale printing and packaging,
              we handle everything under one roof.
            </p>
            <div className="flex items-center mb-2 space-x-6">
              <img src={arrow1} alt="" className="size-16" />
              <h2 className="font-bold text-2xl  md:text-3xl text-black mb-2">End-to-End Branding Solutions</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Arrow */}
      <img
        src={arrowMiddle}
        alt="Middle Arrow"
        className=" hidden md:block  absolute left-1/3 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 md:w-52 rotate-[0deg] z-0"
      />

      {/* Right Content */}
      <div className="relative md:w-1/2 w-full flex items-center justify-center mt-10 md:mt-0 z-10">
        <img
          src={circleImage}
          alt="Creative Team Circle"
          className="w-full max-w-md md:max-w-lg"
        />
      </div>
    </section>
  );
};

export default CreativeTeam;
