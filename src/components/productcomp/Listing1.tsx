import Image from "next/image";

const ProductListing1 = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1440px] w-full">
        <div className="flex flex-col items-center">
          <Image
            src="/table1.jpg"
            alt="The Coffee Table"
            width={300}
            height={300}
            className="w-full h-auto object-cover mb-4"
          />
          <h3 className="text-base md:text-lg font-semibold text-gray-800">
            The Coffee Table
          </h3>
          <p className="text-gray-600 text-sm md:text-base">£250</p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/chair1.jpg"
            alt="Chair"
            width={300}
            height={300}
            className="w-full h-auto object-cover mb-4"
          />
          <h3 className="text-base md:text-lg font-semibold text-gray-800">
            The Luxury Chair
          </h3>
          <p className="text-gray-600 text-sm md:text-base">£200</p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/sofa1.jpg"
            alt="The Pakistani Sofa"
            width={300}
            height={300}
            className="w-full h-auto object-cover mb-4"
          />
          <h3 className="text-base md:text-lg font-semibold text-gray-800">
            The Pakistani Sofa
          </h3>
          <p className="text-gray-600 text-sm md:text-base">£325</p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/drawer1.jpg"
            alt="The Drawer"
            width={300}
            height={300}
            className="w-full h-auto object-cover mb-4"
          />
          <h3 className="text-base md:text-lg font-semibold text-gray-800">
            The Drawer
          </h3>
          <p className="text-gray-600 text-sm md:text-base">£275</p>
        </div>
      </div>
    </div>
  );
};

export default ProductListing1;
