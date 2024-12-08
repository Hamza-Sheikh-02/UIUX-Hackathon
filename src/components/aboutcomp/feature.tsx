import React from "react";
import Image from "next/image";

const AboutFeature: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="grid md:grid-cols-2 items-center max-w-[1440px] w-full">
        <div className="relative w-full h-[50vh] md:h-screen">
          <Image
            src="/abtft.png"
            fill
            alt="Decorative"
            className="object-cover"
          />
        </div>
        <div className="bg-gray-100 flex items-center justify-center">
          <div className="text-center md:text-left px-6 md:px-12">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Our service isn’t just personal, it’s actually hyper personally
              exquisite
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
              When we started Avion, the idea was simple. Make high-quality
              furniture affordable and available for the mass market. Handmade,
              and lovingly crafted furniture and homeware is what we live,
              breathe and design so our Chelsea boutique become the hotbed for
              the London interior design community.
            </p>
            <button className="bg-transparent text-black py-2 px-6 border border-black rounded-md hover:bg-gray-200 transition">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFeature;
