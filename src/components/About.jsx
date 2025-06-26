import React from 'react';

const BrandSection = () => {
  return (
    <section className="bg-white lg:h-[570px] md:h-[470px] text-black py-16 px-4 md:px-16 rounded-3xl font-kumbh max-w-8xl md:mx-6 md:mt-20 mt-20 ">
      {/* Headings */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-4xl lg:text-8xl font-semibold text-gray-300 whitespace-nowrap md:whitespace-normal text-exact-1024-6xl">
          WE BUILD BRANDS
        </h2>
        <h3 className="text-4xl md:text-4xl lg:text-8xl font-bold -mt-1 md:mt-4 text-black text-exact-1024-6xl">
          THAT SPEAK
        </h3>
      </div>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-6">
        
        {/* Left Card (Mobile on top) */}
        <div className="bg-[#94BDF338] rounded-2xl p-4 lg:p-6 w-full md:max-h-64 md:text-xs md:max-w-4xl lg:max-w-sm max-w-lg lg:text-sm text-sm text-gray-700 flex flex-row  text-right gap-4 order-1 md:order-none">
          <p>
            We don’t just market — we transform. From digital campaigns to physical branding, BTS Advertising is your one-stop destination for complete visibility.
          </p>
          <img
            src="/about1.png"
            alt="Digital Campaign"
            className="rounded-xl w-full md:h-40 h-40 object-cover"
          />
        </div>

        {/* Center Phone */}
        <div className="z-10 -mt-24 md:scale-125 md:-mt-32 order-2 md:order-none">
          <img src="/BTSMobile.png" alt="BTS Phone" className="h-[850px] lg:h-[550px] md:w-[650px] md:h-[550px]" />
        </div>

        {/* Right Card (Mobile on bottom) */}
        <div className="bg-[#94BDF338] rounded-2xl p-4 lg:p-6 md:max-h-64 md:text-xs w-full lg:max-w-sm max-w-2xl lg:text-sm text-sm text-gray-700 flex flex-row md:text-left gap-4 order-3 md:order-none -mt-20 md:-mt-0">
          <img
            src="/about2.png"
            alt="Client Results"
            className="rounded-xl w-full h-40 object-cover"
          />
          <p>
            Our results speak for themselves. Small startups to established brands across India trust BTS for creative, consistent, and conversion-driven branding.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BrandSection;
