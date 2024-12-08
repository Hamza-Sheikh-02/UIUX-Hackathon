import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const HeroSection: React.FC = () => {
  return (
    <div
      className="h-screen md:h-[704px] w-full bg-cover bg-center flex flex-col md:flex-row justify-center md:justify-end items-center"
      style={{
        backgroundImage: "url('/herobg.jpeg')",
      }}
    >
      <Card className="w-[90%] max-w-[390px] md:w-[450px] bg-white shadow-lg mx-4 md:mr-12">
        <CardContent className="p-6 md:p-8">
          <CardTitle className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
            Luxury homeware for people who love timeless design quality
          </CardTitle>
          <CardDescription className="text-base md:text-lg text-gray-500 mb-6">
            Shop the new Spring 2022 collection today
          </CardDescription>
          <Link href={"/products"}>
            <button className="w-full md:w-auto px-6 py-3 bg-gray-200 text-black font-medium rounded hover:bg-gray-300">
              View collection
            </button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroSection;
