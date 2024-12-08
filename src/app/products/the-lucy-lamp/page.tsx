import React from "react";
import Image from "next/image";
import ProductListing from "@/components/Listing";
import BrandDifference from "@/components/BrandDifference";
import AboutNewsletterSection from "@/components/aboutcomp/NewsletterSection";

const LucyLamp = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between max-w-[1440px] mx-auto p-4 lg:p-8">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/the-lucy-lamp.png"
            width={721}
            height={750}
            alt="The Lucy Lamp"
            className="object-contain w-full lg:w-[90%] max-h-[400px] lg:max-h-[600px]"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 mt-6 lg:mt-0">
          <h1 className="text-3xl lg:text-4xl font-semibold">The Lucy Lamp</h1>
          <p className="text-2xl text-gray-600 font-medium">£399</p>

          <p className="text-gray-700">
            The Lucy Lamp brings a bold and modern design to your living space.
            Its sleek, matte finish and warm glow make it the perfect choice for
            adding character to any room.
          </p>

          <ul className="text-gray-700 list-disc list-inside">
            <li>Matte black finish</li>
            <li>Warm, ambient lighting</li>
            <li>Durable and energy-efficient</li>
          </ul>

          <div className="space-y-2">
            <p className="font-medium">Dimensions</p>
            <div className="flex justify-center lg:justify-start space-x-8">
              <div>
                <p className="font-semibold">Height</p>
                <p>45cm</p>
              </div>
              <div>
                <p className="font-semibold">Width</p>
                <p>20cm</p>
              </div>
              <div>
                <p className="font-semibold">Depth</p>
                <p>20cm</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-4">
            <label htmlFor="quantity" className="font-medium">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              defaultValue="1"
              className="w-16 border border-gray-300 rounded-md text-center"
            />
          </div>

          <button className="bg-[rgb(42,37,75)] hover:bg-[rgb(102,88,192)] text-white py-3 px-6 rounded-lg transition">
            Add to cart
          </button>
        </div>
      </div>
      <h1 className="text-left pl-10 text-3xl font-semibold my-10">
        You might also like
      </h1>
      <ProductListing />
      <BrandDifference />
      <AboutNewsletterSection />
    </>
  );
};

export default LucyLamp;
