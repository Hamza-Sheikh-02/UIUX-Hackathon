import React from "react";
import HeroSection from "@/components/Hero";
import BrandDifference from "@/components/BrandDifference";
import ProductListing from "@/components/Listing";
import FeatureSection from "@/components/Feature";
import EmailSignUp from "@/components/EmailSignUp";

const Home: React.FC = () => {
  return (
    <div>
      <main className="pt-[80px]">
        <HeroSection />
      </main>
      <main className="pt-[10px]">
        <BrandDifference />
      </main>
      <main className="pt-[10px]">
        <ProductListing />
      </main>
      <main className="pt-[10px]">
        <FeatureSection />
      </main>
      <main className="pt-[30px]">
        <EmailSignUp />
      </main>
    </div>
  );
};

export default Home;
