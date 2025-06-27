import React from "react";

const services = [
  {
    title: "Digital Marketing",
    desc: "From visibility to virality let’s grow your online brand.",
    image: "/image(11).png",
    tags: ["Social Media Marketing", "Google Ads (PPC)", "Content Marketing", "Online Reputation Mgmt","Influencer Marketing"],
  },
  {
    title: "Printing & Branding",
    desc: "From business cards to van wraps we deliver bold, beautiful, and consistent print solutions.",
    image: "/image(12).png",
    tags: ["Client Logo Printing", "Store Branding", "Custom Merchandise", "Brochures & Flyers","Vehicle, Wall & Glass Branding"],
  },
  {
    title: "Graphic Design",
    desc: "Creativity meets clarity in every design we craft tailored to your goals.",
    image: "image37.png",
    tags: ["Logo & Branding", "Social Post Design","Business Profiles", "Posters & Leaflets", "Packaging & Label Design"],
  },
  {
    title: "Video Editing & Reels",
    desc: "We produce scroll-stopping reels, ad edits, and branded motion graphics.",
    video: "/BTS1.mp4",
    tags: ["Motion Graphics", "Reel Editing", "Corporate Videos", "Youtube Videos"],
  },
  {
    title: "Packaging Design",
    desc: "Visually striking packaging that aligns with your brand and grabs consumer attention.",
    image: "/image(15).png",
    tags: ["Product Packaging", "Label & Pouch Design", "Creative Tag Punch Prints"],
  },
  {
    title: "Vehicle Branding",
    desc: "We wrap cars, vans, autos, and trucks with high-impact branding solutions.",
    image: "/image35.png",
    tags: ["Delivery Vehicle Wraps", "Commercial Vehicle Prints", "Biker & Car Branding"],
  },
  {
    title: "Outdoor Advertising",
    desc: "Boost local visibility with bold, effective outdoor advertising.",
    image: "/image(17).png",
    tags: ["Hoarding Ads", "Billboard Rentals", "Bus Stop Branding", "Pole Banners"],
  },
  {
    title: "Shop & Office Branding",
    desc: "Transform your business space with strategic, aesthetic, and professional branding.",
    image: "/image36.png",
    tags: ["LED Signs", "Reception Branding", "Interior Wall Wraps", "Glass Stickers"],
  },
];

export default function ServicesGrid() {
  return (
    <div className="bg-black px-4 py-10 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col rounded-2xl overflow-hidden h-full shadow-lg rounded-tr-3xl"
          >
            {service.video ? (
              <video
                src={service.video}
                className="w-full h-52 object-cover rounded-tr-3xl"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover rounded-tr-3xl"
              />
            )}
            <div className="bg-white flex flex-col justify-between flex-grow p-4">
              <div>
                <h3 className="font-semibold text-black text-lg font-kumbh">{service.title}</h3>
                <p className="text-sm text-gray-500 mb-4 font-dmsans">{service.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, i) => (
                  <button
                    key={i}
                    className="bg-white border border-blue-400 text-[#008CFB] px-3 py-1 text-xs rounded-full hover:bg-blue-50"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
