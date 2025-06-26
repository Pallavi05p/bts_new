import React from "react";

export default function PortfolioShowcase() {
  return (
    <div className="bg-white py-12 px-4 md:px-16 rounded-3xl shadow-md font-Kumbh Sans -mt-16 md:mt-8 lg:mt-14">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-black text-center md:text-left font-kumbh ml-4 ">
        OUR WORK SPEAKS LOUDER THAN WORDS 
      </h2>
      <p className="text-gray-500  md:text-left font-dmsans ml-5 mt-7">
        Real Results. Bold Creativity. Proven Impact.
      </p>

      {/* First Project */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 mb-16 ml-4 mt-24">
        <img
          src="Aboutt1.png"
          alt="Arya Naturals"
          className="rounded-xl w-full h-auto md:w-[280px] md:h-[280px] object-cover ml-15"
        />
        <div className="md:col-span-2 lg:-ml-16 ml-exact-1024-0  md:text-left ">
          <h3 className="text-xl md:text-2xl font-semibold text-black mb-2 font-dmsans  ">
          Agrocil – Organic Fertilizer 
          for Sustainable Growth
          </h3>
          <p className="text-[#1E1E1E82] text-sm md:text-base leading-relaxed font-dmsans">
            We spearheaded the digital launch of Arya Naturals, an<br className="hidden md:block" />
            Ayurvedic skincare brand. The campaign encompassed logo<br className="hidden md:block" />
            design, social media strategy, influencer collaborations,<br className="hidden md:block" />
            and video content creation – resulting in over 1 million<br className="hidden md:block" />
            impressions within the first month.
          </p>
        </div>
      </div>
<div className="w-full h-px bg-gray-200 mb-2 "></div>

      {/* Second Project */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 mb-16 md:ml-64 md:mt-12  ">
        <div className="md:col-span-2 md:order-1  text-center md:text-right hidden md:block lg:mx-8 ">
          <h3 className="text-xl md:text-2xl font-semibold text-black mb-2 font-dmsans mr-4 ">
           Tata Motors – <br /> Vehicle Branding
          </h3>
          <p className="text-[#1E1E1E82] text-sm md:text-base leading-relaxed font-dmsans mr-4 ">
            To enhance local visibility, BTS Advertising designed and<br className="hidden md:block" />
            implemented vibrant vehicle wraps for Ramesh Ice Creams.<br className="hidden md:block" />
            The mobile advertisements significantly increased brand<br className="hidden md:block" />
            recognition in targeted neighborhoods.
          </p>
        </div>
        <img
          src="Aboutt2.png"
          alt="Ramesh Ice Creams"
          className="rounded-xl w-full h-auto md:w-[280px] md:h-[280px] object-cover md:order-2"
        />
        <div className="md:col-span-2 md:order-1 text-center md:text-right md:hidden">
          <h3 className="text-xl md:text-2xl font-semibold text-black mb-2 font-dmsans ">
            Tata Motors – <br/> Vehicle Branding
          </h3>
          <p className="text-[#1E1E1E82] text-sm md:text-base leading-relaxed font-dmsans  ">
            To enhance local visibility, BTS Advertising designed and<br className="hidden md:block" />
            implemented vibrant vehicle wraps for Ramesh Ice Creams.<br className="hidden md:block" />
            The mobile advertisements significantly increased brand<br className="hidden md:block" />
            recognition in targeted neighborhoods.
          </p>
        </div>
      </div>
      <div className="w-full h-px bg-gray-200 mb-4"></div>

      {/* Third Project */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 mt-12">
        <img
          src="Aboutt3.png"
          alt="Intech Solutions"
          className="rounded-xl w-full h-auto md:w-[280px] md:h-[280px] object-contain"
        />
        <div className="md:col-span-2 lg:-ml-16 ml-exact-1024-0 text-center md:text-left ">
          <h3 className="text-xl md:text-2xl font-semibold text-black mb-2 font-dmsans -ml-5">
          Rajlaxmi School – <br /> Branding Post
          </h3>
          <p className="text-[#1E1E1E82] text-sm md:text-base leading-relaxed font-dmsans -ml-5  ">
           We developed a vibrant and trust-building branding <br className="hidden md:block" />
            campaign for Rajlaxmi International School to highlight its <br className="hidden md:block" />
            CBSE affiliation, nurturing learning environment, and strong <br className="hidden md:block" />
           academic values.
          </p>
        </div>
      </div>
    </div>
  );
}
