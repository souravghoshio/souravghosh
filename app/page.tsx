"use client";

import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/sections/hero";
import ContactSection from "@/components/sections/contact";
import AboutSection from "@/components/sections/about";
import TechStackSection from "@/components/sections/tech-stack";
import SectionDivider from "@/components/ui/section-divider";
import PageFrame from "@/components/layout/page-frame";

const Home = () => {
  return (
    <main className="px-2">
      <Navbar />
      <PageFrame>
        <HeroSection />
        <SectionDivider />
        <ContactSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <TechStackSection />
        <SectionDivider />
      </PageFrame>
    </main>
  );
};

export default Home;
