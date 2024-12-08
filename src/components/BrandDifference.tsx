import {
  FaShippingFast,
  FaHandHoldingHeart,
  FaTag,
  FaRecycle,
} from "react-icons/fa";

const BrandDifference = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-12 text-center">
        What makes our brand different
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 max-w-[1440px] w-full">
        <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg">
          <FaShippingFast className="text-4xl text-gray-800 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">
            Next day as standard
          </h3>
          <p className="text-gray-600 text-sm">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>

        <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg">
          <FaHandHoldingHeart className="text-4xl text-gray-800 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">
            Made by true artisans
          </h3>
          <p className="text-gray-600 text-sm">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>

        <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg">
          <FaTag className="text-4xl text-gray-800 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">
            Unbeatable prices
          </h3>
          <p className="text-gray-600 text-sm">
            For our materials and quality, you won’t find better prices anywhere
          </p>
        </div>

        <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg">
          <FaRecycle className="text-4xl text-gray-800 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">
            Recycled packaging
          </h3>
          <p className="text-gray-600 text-sm">
            We use 100% recycled to ensure our footprint is more manageable
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandDifference;
