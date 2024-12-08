import React from "react";
import HeroSection from "@/components/Hero";
import BrandDifference from "@/components/BrandDifference";

const Home: React.FC = () => {
  return (
    <div>
      <main className="pt-[80px]">
        <HeroSection />
      </main>
      <main className="pt-[10px]">
        <BrandDifference />
      </main>
    </div>
  );
};

export default Home;
