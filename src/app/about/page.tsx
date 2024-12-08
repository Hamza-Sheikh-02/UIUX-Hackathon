import React from "react";
import AboutHeroSection from "@/components/aboutcomp/hero";
import FeatureSection from "@/components/Feature";
import AboutFeature from "@/components/aboutcomp/feature";
import BrandDifference from "@/components/BrandDifference";
import AboutNewsletterSection from "@/components/aboutcomp/NewsletterSection";

const About: React.FC = () => {
  return (
    <div>
      <main className="pt-[0px]">
        <AboutHeroSection />
      </main>
      <main className="pt-[10px]">
        <FeatureSection />
      </main>
      <main className="pt-[60px]">
        <AboutFeature />
      </main>
      <main className="pt-[60px]">
        <BrandDifference />
      </main>
      <main className="pt-[10px]">
        <AboutNewsletterSection />
      </main>
    </div>
  );
};

export default About;
