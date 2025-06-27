import React from "react";

export default function SolutionsThatBuildBrands() {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-20 flex flex-col md:flex-row items-center justify-center gap-10">
      <h2 className="md:hidden text-4xl px-[3%] font-semibold">
        SOLUTIONS THAT BUILD BRANDS
      </h2>
      <p className="md:hidden text-gray-300 text-xl whitespace-nowrap">
        From strategy to execution, discover <br className="md:hidden"></br>  our wide range of digital, design,<br></br>
        and branding services.
      </p>

      {/* Left Side: Full Image */}
      <div className="w-full md:w-1/2 flex justify-center md:-mt-24 lg:-ml-48">
        <img
          src="/Group 3896.png"
          alt="Solutions Illustration"
          className="w-full max-w-[500px]"
        />
      </div>

      {/* Right Side Text */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-6 max-w-md -mt-24">
        <h2 className="hidden md:block text-2xl md:text-4xl font-semibold ">
          SOLUTIONS THAT BUILD BRANDS
        </h2>
        <p className="hidden md:block text-gray-300 text-xl md:text-base whitespace-nowrap">
          From strategy to execution, discover our wide range of digital, design,<br></br>
          and branding services.
        </p>

        <div className="mt-32">
          <div className="md:w-72 md:ml-[40%] lg:ml-[70%]  w-full  h-px bg-white " />
          {/* Arrow + Description */}
          <div className="flex items-center gap-4  ">

            {/* Circle with Arrow Down */}
            <div className="hidden md:flex ml-[20%] lg:ml-[50%]">
              <div className="w-20 h-20 rounded-full border bg-white border-gray-300 flex items-center justify-center">
                <img
                  src="/downarrow.svg"
                  alt="Scroll Down"
                  className="w-48 h-48"
                />
              </div>
            </div>


            {/* Small Caption Text */}
            <p className="text-base text-[#D9D9D996] leading-relaxed  mt-4 whitespace-nowrap">
              we specialize in crafting impactful brand <br></br> stories through digital marketing,<br></br>
              creative design, high-quality printing,<br></br> and on-ground activations.
            </p>

          </div>
          {/* Circle with Arrow Down */}
          <div className="md:hidden ml-[40%] mt-4 w-20 h-20 rounded-full border bg-white border-gray-300 flex items-center justify-center">
            <img
              src="/downarrow.svg"
              alt="Scroll Down"
              className="w-48 h-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
