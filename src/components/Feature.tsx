import Image from "next/image";
import Link from "next/link";

const FeatureSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white max-w-[1264px] mx-auto md:space-x-4 space-y-4 md:space-y-0 px-4 md:px-0">
      <div className="w-full md:w-[634px] h-[380px] md:h-[478px] bg-[rgb(42,37,75)] text-white flex flex-col justify-center px-8 py-6 rounded-lg shadow-md">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          It started with a small idea
        </h2>
        <p className="text-sm md:text-base leading-relaxed mb-6">
          A global brand with local beginnings, our story began in a small
          studio in South London in early 2014.
        </p>
        <Link href={"/products"}>
          <button className="bg-gray-600 text-white text-sm font-medium py-2 px-6 rounded-lg hover:bg-gray-300 transition">
            View collection
          </button>
        </Link>
      </div>

      <div className="w-full md:w-[630px] h-[380px] md:h-[478px] relative rounded-lg shadow-md">
        <Image
          src="/feature.png"
          alt="Furniture"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default FeatureSection;
