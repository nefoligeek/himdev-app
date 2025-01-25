"use client";

import Navbar from "@/components/Navbar";
import AboutUs from "@/components/sections/AboutUs";
import CourseSection from "@/components/sections/CourseSection";
import HeroSection from "@/components/sections/HeroSection";
import Blog from "@/components/sections/Blog";
import OnlineRegistretion from "@/components/sections/OnlineRegistretion";
import ContactUs from "@/components/sections/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <CourseSection />
      <Blog />
      <OnlineRegistretion />
      <ContactUs />
      <Footer />
    </div>
  );
}
