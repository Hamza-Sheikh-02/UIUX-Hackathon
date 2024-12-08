import React from "react";

const AboutNewsletterSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 md:py-16 md:px-12 flex items-center justify-center">
      <div className="max-w-[1273px] bg-white w-full text-center px-8 md:px-14 py-8 md:py-12 rounded-lg shadow-sm">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
          Join the club and get the benefits
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-6">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center max-w-[600px] mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full md:w-[70%] py-3 px-4 mb-4 md:mb-0 md:mr-4 border border-gray-300 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-[rgb(42,37,75)] text-white py-3 px-6 rounded-md hover:bg-[rgb(102,88,192)] transition"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutNewsletterSection;
