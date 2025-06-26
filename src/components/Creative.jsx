import React from "react";

const CreativeTeam = () => {
  return (
    <section className="bg-white px-4 md:px-32 md:mx-6 py-20 rounded-[40px] font-kumbh flex flex-col md:flex-row items-center justify-between gap-16 max-[640px]:max-w-[100vw]  md:max-h-[120vh] ">

      {/* Team Circle - Mobile First */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center order-1 md:order-2">
        {/* Center Circle Text */}
        <div className="absolute text-center z-10">
          <img src="/ellipse.png" alt="Creative Icon" className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2" />
          <p className="font-semibold text-lg md:text-2xl leading-tight">
            Experienced <br /> Creative  <br />Team
          </p>  
        </div>

       <div className="relative flex items-center justify-center w-full">
  {/* Orbit Circle */}
  <div className="w-[100vw] max-w-[440px] md:max-w-[560px] md:w-[560px] md:h-[560px] aspect-square border border-dashed border-blue-500 rounded-full flex items-center justify-center">
    <div className="w-4/5 h-4/5 border border-dashed border-blue-500 rounded-full flex items-center justify-center">
      <div className="w-3/5 h-3/5 border border-dashed border-blue-500 rounded-full" />
    </div>
  </div>

  {/* Avatars - keep position same visually with md: overrides */}
  <img src="/Ellipse 9.png" alt="Person 1" className="absolute top-[18rem] right-64 md:top-[21rem] md:right-[67%] transform -translate-x-1/2 md:w-24 md:h-24 max-[640px]:w-16 max-[640px]:h-16 h-20 w-20 rounded-full border-2 border-white shadow-md" />
  
  <img src="/Ellipse 10.png" alt="Person 2" className="absolute max-[640px]:-right-4 right-28 top-1/3 md:-right-8 md:top-[38%] md:w-20 md:h-20 max-[640px]:w-12 max-[640px]:h-12 h-16 w-16 rounded-full border-2 border-white shadow-md" />
  
  <img src="/Ellipse 11.png" alt="Person 3" className="absolute right-[30%] bottom-[18rem] md:right-[32%] md:bottom-[22rem] md:w-20 md:h-20 max-[640px]:w-16 max-[640px]:h-16 h-18 w-18 rounded-full border-2 border-white shadow-md" />
  
  <img src="/Ellipse 12.png" alt="Person 4" className="absolute left-[70%] bottom-0 md:left-[72%] md:bottom-[-1rem] transform -translate-x-1/2 md:w-20 md:h-20 max-[640px]:w-16 max-[640px]:h-16 rounded-full border-2 border-white shadow-md" />
  
  <img src="/Ellipse 8.png" alt="Person 6" className="absolute top-1/3 left-[6%] md:top-[38%] md:left-[4%] md:w-20 md:h-20 max-[640px]:w-16 max-[640px]:h-16 rounded-full border-2 border-white shadow-md" />
  
  <img src="/Ellipse 7.png" alt="Person 7" className="absolute -top-6 max-[640px]:right-[16%] right-[28%] md:-top-10 md:right-[14%] md:w-24 md:h-24 max-[640px]:w-16 max-[640px]:h-16 h-16 w-16 rounded-full border-2 border-white shadow-md" />
</div>


        {/* Arrow (Desktop Only) */}
        <img src="/Arrow 02.png" alt="Arrow" className="absolute -left-80 top-1/2 transform -translate-y-1/2 lg:w-64 md:w-40 hidden md:block md:-right-8 lg:right-0" />
      </div>

      {/* Text Cards - Mobile Second */}
      <div className="w-full max-w-2xl order-2 md:order-1">

       {/* Box 1 */}
<div className="relative w-full md:-ml-24 mb-6  aspect-[2/3] overflow-hidden rounded-xl max-h-[400px] md:max-h-[350px]">
  <img
    src="/Rectangle 18.png"
    alt="Background Shape"
    className="w-full h-full object-contain rounded-xl"
  />
  <div className="absolute inset-0 p-3 md:p-2 lg:p-12 md:ml-16 lg:ml-0 lg:-mt-24 mr-4 md:mr-0 lg:mr-0  margintop-exact-1024  flex flex-col justify-center items-center md:items-start text-black z-10 text-center md:text-left">
    <div className="flex items-center mb-2 md:mb-3 padding-exact-1024 mx-10 lg:-ml-1 ">
      <img src="/Group 5.png" className="w-12 lg:w-16 h-12 lg:h-16 mr-2 " />
      <h3 className="text-xl lg:text-2xl mx-0 md:mt-10 lg:mt-0 font-semibold leading-tight md:whitespace-nowrap lg:whitespace-nowrap whitespace-nowrap lg:mr-3 ">
        Multi-Channel<br className="hidden md:block" /> Expertise
      </h3>
    </div>
    <p className="text-base text-left lg:mx-8 md:text-sm lg:text-lg leading-snug md:whitespace-nowrap lg:whitespace-nowrap  xs-exact-1024 lg:-ml-2 xl:ml-5 xl:-mb-7">
      Our team is a powerhouse of<br />
      designers, strategists, and content<br />
      creators who bring bold ideas to life.<br />
      With years of experience across<br />
      industries.
    </p>
  </div>
</div>

        {/* Box 2 */}
      <div className="relative w-full -mt-16 md:mt-0 lg:mt-0  md:-ml-24 aspect-[2/3] overflow-hidden rounded-xl max-h-[400px] md:max-h-[350px]">
  <img
    src="/Rectangle 19.png"
    alt="Background Shape"
    className="w-full h-full object-contain rounded-xl  "
  />
  <div className="absolute inset-0  md:p-4 flex lg:mt-32 flex-col justify-center items-center md:items-center text-black z-10 text-center md:text-left marginbottom-exact-1024 -ml-12">
    <p className="text-base -mx-8 text-left md:text-sm lg:text-lg mb-2 md:mb-3 leading-snug xl:-mt-11 ">
      From logo creation and social<br />
      media management to full-scale<br />
      printing and packaging, we<br />
      handle everything under one roof.
    </p>
    <div className="flex items-center">
      <img src="/Group 5.png" className="w-12 lg:w-16 h-12 lg:h-16 ml-4 md:ml-0 lg:-ml-8" />
      <h3 className="text-xl lg:text-2xl font-semibold leading-tight mr-8 md:mr-0 lg:mr-0 ml-2 whitespace-nowrap lg:whitespace-normal">
        End-to-End<br className="hidden md:block" /> Branding Solutions
      </h3>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default CreativeTeam; 
