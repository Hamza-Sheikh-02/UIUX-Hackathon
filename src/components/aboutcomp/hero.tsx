"use client";

import React from "react";

const AboutHeroSection = () => {
  return (
    <section
      className="relative w-full bg-white flex items-center justify-center"
      style={{ minHeight: "277px" }}
    >
      <div className="max-w-[1440px] w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-8 md:py-12 mx-auto">
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed max-w-[600px]">
            A brand built on the love of craftsmanship, quality and outstanding
            customer service
          </h2>
        </div>
        <div className="mt-6 md:mt-0">
          <button className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded shadow hover:shadow-md hover:bg-gray-200 transition-all">
            View our products
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
