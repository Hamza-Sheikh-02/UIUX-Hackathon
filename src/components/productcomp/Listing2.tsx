import Image from "next/image";

const ProductListing2 = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1440px] w-full">
        <div className="flex flex-col items-center">
          <Image
            src="/bed2.jpeg"
            alt="The Bed"
            width={300}
            height={300}
            className="w-full h-auto object-cover mb-4"
          />
          <h3 className="text-base md:text-lg font-semibold text-gray-800">
            The Bed
          </h3>
          <p className="text-gray-600 text-sm md:text-base">£325</p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/cupboard2.jpg"
            alt="The Chinese Cupboard"
            width={300}
            height={300}
            className="w-full h-auto object-cover mb-4"
          />
          <h3 className="text-base md:text-lg font-semibold text-gray-800">
            The Chinese Cupboard
          </h3>
          <p className="text-gray-600 text-sm md:text-base">£200</p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/mirror2.jpeg"
            alt="The American Mirror"
            width={300}
            height={300}
            className="w-full h-auto object-cover mb-4"
          />
          <h3 className="text-base md:text-lg font-semibold text-gray-800">
            The American Mirror
          </h3>
          <p className="text-gray-600 text-sm md:text-base">£365</p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/bottle2.jpeg"
            alt="The Bottle"
            width={300}
            height={300}
            className="w-full h-auto object-cover mb-4"
          />
          <h3 className="text-base md:text-lg font-semibold text-gray-800">
            The Bottle
          </h3>
          <p className="text-gray-600 text-sm md:text-base">£125</p>
        </div>
      </div>
    </div>
  );
};

export default ProductListing2;
