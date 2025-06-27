import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const WhatWeDo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="flex flex-col md:flex-row bg-black text-white px-6 md:px-20 mt-12 md:mt-48 py-20 gap-10 items-start font-kumbh">
      {/* Mobile View Title + Description */}
      <div className="md:hidden">
        <h2 className="text-4xl font-semibold mb-2 ml-4">WHAT WE DO BEST</h2>
        <p className="text-lg text-[#D9D9D994] mb-6 font-kumbh text-left whitespace-nowrap">
          From Digital Screens To Printed Streets,<br />
          BTS Advertising Delivers Creative,<br />
          Results-Driven Solutions That Elevate<br />
          Your Brand Across Every Medium.
        </p>
      </div>

      {/* Left - Digital Marketing */}
      <div className="flex-1">
        <div className="relative rounded-3xl overflow-hidden">
          <video
            ref={videoRef}
            src="/Level up.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-3xl object-cover mt-3 w-full h-96"
          />
          {/* Label */}
          <div className="absolute top-4 left-4 bg-white text-black text-base font-semibold px-4 py-2 rounded-full">
            Digital Marketing
          </div>
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayback}
            className="absolute bottom-4 right-4 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
          >
            {isPlaying ? (
              <Pause className="text-white" size={36} />
            ) : (
              <Play className="text-white" size={36} />
            )}
          </button>
        </div>
        <p className="mt-4 text-lg text-[#D9D9D994] leading-relaxed font-dmsans">
          From social media strategy and video ads to influencer outreach and SEO, we help your brand grow in the digital space.
        </p>
      </div>

      {/* Right - What We Do Best */}
      <div className="flex-1">
        <h2 className="hidden md:block text-4xl font-semibold mb-2 text-right">
          WHAT WE DO BEST
        </h2>
        <p className="hidden md:block text-base text-[#D9D9D994] mb-6 text-right">
          From Digital Screens To Printed Streets, BTS Advertising Delivers Creative, Results-Driven Solutions That Elevate Your Brand Across Every Medium.
        </p>
<div className="bg-[#B7D8FB] w-full text-[#1E1E1E] md:p-6 p-4 rounded-3xl">
  <h3 className="font-semibold text-2xl md:text-3xl mb-4">Printing & Branding</h3>

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
    <img
      src="/what1.png"
      alt="Print 1"
      className="rounded-xl w-full h-40 md:h-48 object-cover"
    />
    <img
      src="/what2.png"
      alt="Print 2"
      className="rounded-xl w-full h-40 md:h-48 object-cover"
    />
    <img
      src="/what3.png"
      alt="Print 3"
      className="rounded-xl w-full h-40 md:h-48 object-cover"
    />
  </div>

  <p className="text-sm md:text-base text-[#1E1E1E] leading-relaxed">
    We deliver stunning print materials and branding solutions — from brochures to van wraps — that capture attention and build credibility.
  </p>
</div>

      </div>
    </section>
  );
};

export default WhatWeDo;
