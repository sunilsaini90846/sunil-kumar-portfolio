"use client";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import IntuneSection from "@/components/IntuneSection";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <IntuneSection />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
