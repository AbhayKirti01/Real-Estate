'use client'

import dynamic from 'next/dynamic'
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CinematicAbout from "@/components/CinematicAbout";
import PropertyCategories from "@/components/PropertyCategories";
import FeaturedProperties from "@/components/FeaturedProperties";
import SavedProperties from "@/components/SavedProperties";
import ThreeDShowcase from "@/components/ThreeDShowcase";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Lazy load Three.js components for performance
const DynamicThreeDShowcase = dynamic(() => import("@/components/ThreeDShowcase"), { 
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-[#050505] flex items-center justify-center rounded-3xl border border-white/5">
    <div className="w-10 h-10 border-2 border-accent/20 border-t-accent rounded-full animate-spin" />
  </div>
});

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#050505] selection:bg-accent selection:text-white overflow-hidden">
        <Preloader />
        <CustomCursor />
        <Navbar />
        
        {/* Navigation Rail (Minimal) */}
        <div className="fixed left-10 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-10">
          {[
            { num: '01', href: '#home' },
            { num: '02', href: '#about' },
            { num: '03', href: '#properties' },
            { num: '04', href: '#saved' },
            { num: '05', href: '#showcase' },
            { num: '06', href: '#contact' }
          ].map((item, i) => (
            <a 
              key={i} 
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group flex items-center gap-4 cursor-pointer"
            >
              <span className="text-[10px] font-mono text-white/20 group-hover:text-accent transition-colors duration-300">{item.num}</span>
              <div className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-accent transition-all duration-500" />
            </a>
          ))}
        </div>

        {/* Sections */}
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <CinematicAbout />
        </div>
        <PropertyCategories />
        <div id="properties">
          <FeaturedProperties />
        </div>
        <SavedProperties />
        <div id="showcase">
          <DynamicThreeDShowcase />
        </div>
        <TrustSection />
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
