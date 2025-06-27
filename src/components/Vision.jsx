import React from "react";

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-64 -mt-16 md:mt-0 max-w-[100vw] lg:mt-6">
      <div className="max-w-6xl w-full flex flex-col gap-8 items-center justify-center">
        {/* Title */}
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-kumbh leading-tight md: whitespace-nowrap lg:whitespace-normal ">
            <span className="text-[#D9D9D996] lg:ml-[15%] md:ml-16">DRIVEN BY </span>
            <span className="text-white">VISION</span><br />
            <div className="mt-4">
            <span className="text-white ">GROUNDED BY </span>
            <span className="text-[#D9D9D996]">PURPOSE</span>
            </div>
          </h1>
        </div>

        {/* Content */}
        <div className="bg-black text-white flex flex-col md:flex-row justify-center items-center gap-10 relative text-center md:text-left">
          
          {/* Left text */}
          <div className=" text-sm md:text-base leading-relaxed text-[#D9D9D996] font-dmsans md:text-right">
            <p>
              We’re not just building brands. We’re shaping<br className="md:hidden max-[640px]:hidden"></br> the future of impactful
              communication, one story at a time.
            </p>
          </div>

          {/* Center image and tags */}
          <div className="relative flex justify-center">
            <img
              src="/Mobile2.png"
              alt="Digital Marketing Mobile"
              className="w-[260px] md:w-[1440px] md:h-[640px]"
            />

            {/* Vision box */}
            <div className="absolute top-6 left-[50%] md:top-16 md:left-64 w-48 md:w-64 bg-white rounded-lg px-3 py-2 shadow-lg flex items-center space-x-2">
              <div className="bg-blue-500 p-1 rounded-lg">
                <img src="/bulb.png" className="w-6 h-6 md:w-10 md:h-10" alt="Bulb Icon" />
              </div>
              <span className="text-black text-xs md:text-sm font-medium">Vision That Inspires</span>
            </div>

            {/* Mission box */}
            <div className="absolute bottom-4 right-[30%] md:bottom-8 md:right-40 w-44 md:w-56 bg-white rounded-lg px-3 py-2 shadow-lg flex items-center justify-between space-x-2">
              <span className="text-black text-xs md:text-sm font-medium">Mission That Delivers</span>
              <div className="bg-blue-500 p-1 rounded-lg">
                <img src="/rocket.png" className="w-6 h-6 md:w-10 md:h-10" alt="Rocket Icon" />
              </div>
            </div>
          </div>

          {/* Right text */}
          <div className=" text-sm md:text-base md:mt-[30%] leading-relaxed text-[#D9D9D996] font-dmsans">
            <p>
              To empower Indian businesses with bold creativity,<br className="md:hidden max-[640px]:hidden"></br> strategic execution,
              and full-spectrum branding solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
