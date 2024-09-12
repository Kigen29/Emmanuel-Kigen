"use client";
import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Interests from "@/components/Interests";
import Languages from "@/components/Languages";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <main>
          <Hero />
          <About />
          <Languages />
          <Projects />
          <Education />
          <Interests />
          <Contact />
        </main>
      </div>
    </>
  );
}
