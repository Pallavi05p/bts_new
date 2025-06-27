import React from 'react';
import Navbar from "../components/navbar";
import HeroSection from "../components/Hero";
import About from "../components/About";
import Whatwedo from "../components/Whatwedo"
import Creative from "../components/Creative";
import Trust from "../components/Trustbrand";

const Home = () => {
  return (
    <div className="bg-black min-h-screen  md:w-full lg:w-full  max-w-[100vw]  ">
      <HeroSection />
      <About/>
      <Whatwedo/>
      <Creative/>
     <Trust/>
    </div>
  );
};

export default Home;
