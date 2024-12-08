"use client";

import React, { useState } from "react";

const EmailSignUp = () => {
  const [exclusiveOffers, setExclusiveOffers] = useState(false);
  const [freeEvents, setFreeEvents] = useState(false);
  const [largeDiscounts, setLargeDiscounts] = useState(false);

  return (
    <div
      className="relative flex justify-center items-center h-[370px] sm:h-[444px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/emailsignup.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative text-center text-white max-w-[90%] sm:max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-xl sm:text-3xl font-semibold mb-3 sm:mb-4 leading-tight sm:leading-snug">
          Join the club and get the benefits
        </h1>
        <p className="text-sm sm:text-lg mb-5 sm:mb-6 leading-relaxed">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop-up stores, and more.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-3 sm:gap-4 text-xs sm:text-sm mb-4 sm:mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={exclusiveOffers}
              onChange={(e) => setExclusiveOffers(e.target.checked)}
              className="w-4 h-4 accent-white"
            />
            <span>Exclusive offers</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={freeEvents}
              onChange={(e) => setFreeEvents(e.target.checked)}
              className="w-4 h-4 accent-white"
            />
            <span>Free events</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={largeDiscounts}
              onChange={(e) => setLargeDiscounts(e.target.checked)}
              className="w-4 h-4 accent-white"
            />
            <span>Large discounts</span>
          </label>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="px-3 sm:px-4 py-2 rounded-md sm:rounded-l-md border text-black border-gray-300 outline-none w-full sm:w-[300px] mb-3 sm:mb-0"
          />
          <button className="bg-[rgb(42,37,75)] hover:bg-[rgb(102,88,192)] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-md sm:rounded-r-md">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSignUp;
