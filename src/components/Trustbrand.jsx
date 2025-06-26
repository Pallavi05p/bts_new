import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const TrustedBrands = () => {
  const logos = [
    "/image1.png", "/image2.jpg", "/image3.png", "/image5.png", "/image6.jpg",
    "/image8.jpg", "/image9.png", "/image10.jpg", "/image11.png", "/image12.jpg",
    "/image13.png", "/image14.png", "/image15.jpg", "/image16.jpg", "/image17.png",
    "/image18.jpg", "/image19.png", "/image20.png", "/image21.png", "/image22.png",
    "/image23.png", "/image24.png", "/image25.png", "/image26.png", "/image27.png",
    "/image28.webp", "/image29.avif", "/image30.png", "/image31.png", "/image32.jpg",
    "/image33.png"
  ];

  const duplicatedLogos = [...logos, ...logos]; 

  const [duration, setDuration] = useState(60);

  useEffect(() => {
    const updateDuration = () => {
      if (window.innerWidth < 768) {
        setDuration(20); 
      } else {
        setDuration(60);
      }
    };

    updateDuration();
    window.addEventListener('resize', updateDuration);
    return () => window.removeEventListener('resize', updateDuration);
  }, []);

  return (
    <section className="bg-black text-white py-12 px-6 text-center max-w-[98vw] overflow-x-hidden">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">BRANDS THAT TRUST US</h2>
      <p className="text-sm md:text-base text-[#D9D9D996] max-w-xl mx-auto mb-10">
        We’ve partnered with businesses across India to deliver bold ideas, impactful campaigns, and stunning branding—see the work we’re proud of.
      </p>

      <div className="relative w-full overflow-hidden py-6">
        <motion.div
          className="flex gap-6 md:gap-10 min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear"
          }}
        >
         
          {duplicatedLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="h-20 md:h-24 w-auto flex-shrink-0 pointer-events-none"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBrands;
