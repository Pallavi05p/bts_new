import React from 'react';

const BrandPurposeSection = () => {
  return (
    <section className="bg-black text-white w-full px-10 md:px-20 py-16 font-sans">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-10 md:items-start md:justify-between">
        {/* Left */}
        <div className="md:w-1/3 space-y-6">
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-semibold leading-snug font-kumbh text-left whitespace-nowrap ml-3">
            BUILDING BRANDS WITH <br /> PURPOSE & PASSION
          </h2>
          <p className="text-sm text-[#D9D9D996] font-kumbh leading-relaxed md:hidden text-left whitespace-nowrap">
            At BTS Advertising, we believe great branding<br />
            starts with great storytelling. Founded in India,<br />
            our mission is to help businesses of all sizes <br />
            build powerful identities both online and<br />
            offline. Whether it's a viral digital campaign or<br />
            a stunning print rollout, we make your brand<br />
            unforgettable.
          </p>
          <img
            src="/About1.png"
            alt="Branding Marketing"
            className="rounded-[30px] max-[640px]:w-80 max-[640px]:h-auto md:max-h-[360px] object-cover md:w-96 md:h-96 w-full h-96 ml-3"
          />
        </div>

        {/* Middle */}
        <div className="flex flex-col gap-6 md:mt-48">
          <img
            src="/About2.png"
            alt="Printing"
            className="rounded-[30px] max-[640px]:w-80 max-[640px]:h-auto md:max-h-[260px] object-cover md:w-72 md:h-64 w-full h-96"
          />
        </div>

        {/* Right */}
        <div className="md:w-1/3 space-y-4">
          <p className="hidden md:block text-sm md:text-xs lg:text-sm text-[#D9D9D996] font-kumbh leading-relaxed">
            At BTS Advertising, we believe great branding starts with great storytelling. Founded in India, our mission is to help businesses of all sizes build powerful identities both online and offline. Whether it's a viral digital campaign or a stunning print rollout, we make your brand unforgettable.
          </p>
          <img
            src="/About3.png"
            alt="Meeting"
            className="rounded-[30px] max-[640px]:w-80 max-[640px]:h-auto w-full h-96 object-contain md:h-96"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row justify-center items-start mt-12 gap-10">
        {/* Mobile Title + Description */}
        <div className="md:hidden">
          <h2 className="text-2xl font-semibold leading-tight font-kumbh whitespace-nowrap">
            PROVEN RESULTS.
            <br />
            REAL GROWTH
          </h2>
          <p className="mt-4 text-sm text-[#D9D9D996] font-kumbh whitespace-nowrap">
            Our journey is defined by numbers that<br />
            reflect trust, creativity, and consistency. <br />
            From local businesses to large enterprises,<br />
            our work delivers impact that lasts.
          </p>
        </div>

        {/* Mobile Blue Box */}
        <div className="bg-[#007DFE] mt-14 rounded-3xl grid grid-cols-1 md:hidden gap-4 w-[70%] h-80 relative font-kumbh">
          {/* Box 1 */}
          <div className="bg-white rounded-2xl p-4 absolute md:w-80 w-[80%] h-36 left-32 bottom-40">
            <h3 className="text-2xl text-black font-semibold">200 +</h3>
            <p className="text-[#1E1E1EAB] text-sm">Projects Delivered</p>
            <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
              <div className="bg-blue-500 h-2 w-[80%] rounded-full"></div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-2xl p-4 absolute md:w-56 w-[50%] h-36 top-44 left-4">
            <h3 className="text-2xl text-black font-semibold">100 +</h3>
            <p className="text-[#1E1E1EAB] text-sm">Happy Clients</p>
            <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
              <div className="bg-green-500 h-2 w-[70%] rounded-full"></div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white rounded-2xl p-4 col-span-2 sm:col-span-1 absolute top-44 left-2/3 md:w-56 w-[60%] h-36">
            <h3 className="text-2xl text-black font-semibold">5 +</h3>
            <p className="text-[#1E1E1EAB] text-sm">Years Experience</p>
            <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
              <div className="bg-yellow-500 h-2 w-[40%] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Desktop Section: Blue Box + Right Text */}
        <div className="hidden md:flex flex-row justify-center items-start gap-16 mt-20 mb-11">
          {/* Blue Box */}
          <div className="bg-[#007DFE] md:w-96 xl:w-96 p-6 rounded-3xl relative font-kumbh h-64 xl:h-[300px]">
            {/* Box 1 */}
            <div className="bg-white rounded-2xl p-4 shadow-md absolute w-64 h-32 left-32 bottom-52">
              <h3 className="text-4xl text-black font-bold">200 +</h3>
              <p className="text-[#1E1E1EAB] text-lg">Projects Delivered</p>
              <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
                <div className="bg-blue-500 h-2 w-[80%] rounded-full"></div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white rounded-2xl p-4 shadow-md absolute w-48 h-32 top-28 left-4">
              <h3 className="text-4xl text-black font-bold">100 +</h3>
              <p className="text-[#1E1E1EAB] text-lg">Happy Clients</p>
              <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
                <div className="bg-green-500 h-2 w-[70%] rounded-full"></div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white rounded-2xl p-4 shadow-md absolute top-28 left-64 w-48 h-32">
              <h3 className="text-4xl text-black font-bold">5 +</h3>
              <p className="text-[#1E1E1EAB] text-lg">Years Experience</p>
              <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
                <div className="bg-yellow-500 h-2 w-[40%] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="md:w-[400px] text-left ml-7">
            <h2 className="lg:text-4xl md:text-2xl font-semibold leading-tight font-kumbh">
              PROVEN RESULTS. REAL GROWTH
            </h2>
            <p className="mt-4 text-lg text-[#D9D9D996] font-kumbh">
              Our journey is defined by numbers that
              reflect trust, creativity, and consistency. From
              local businesses to large enterprises, our
              work delivers impact that lasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPurposeSection;
