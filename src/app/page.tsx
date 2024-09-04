"use client";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import CategorySection from "../components/CategorySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CategorySection />
      <Footer />
    </main>
  );
}
