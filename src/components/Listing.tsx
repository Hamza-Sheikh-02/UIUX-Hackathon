import Image from "next/image";

const ProductListing = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1440px] w-full">
        <div className="flex flex-col items-center">
          <Image
            src="/dandy-chair.png"
            alt="The Dandy Chair"
            width={300}
            height={300}
            className="w-full h-auto object-cover mb-4"
          />
          <h3 className="text-base md:text-lg font-semibold text-gray-800">
            The Dandy Chair
          </h3>
          <p className="text-gray-600 text-sm md:text-base">£250</p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/rustic-vase-set.png"
            alt="Rustic Vase Set"
            width={300}
            height={300}
            className="w-full h-auto object-cover mb-4"
          />
          <h3 className="text-base md:text-lg font-semibold text-gray-800">
            Rustic Vase Set
          </h3>
          <p className="text-gray-600 text-sm md:text-base">£155</p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/the-silky-vase.png"
            alt="The Silky Vase"
            width={300}
            height={300}
            className="w-full h-auto object-cover mb-4"
          />
          <h3 className="text-base md:text-lg font-semibold text-gray-800">
            The Silky Vase
          </h3>
          <p className="text-gray-600 text-sm md:text-base">£125</p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/the-lucy-lamp.png"
            alt="The Lucy Lamp"
            width={300}
            height={300}
            className="w-full h-auto object-cover mb-4"
          />
          <h3 className="text-base md:text-lg font-semibold text-gray-800">
            The Lucy Lamp
          </h3>
          <p className="text-gray-600 text-sm md:text-base">£399</p>
        </div>
      </div>

      <button className="mt-8 bg-gray-100 text-gray-800 text-sm md:text-base font-medium py-2 px-6 rounded-lg hover:bg-gray-200 transition">
        View collection
      </button>
    </div>
  );
};

export default ProductListing;
