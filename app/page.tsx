"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

// Dynamic imports for below-fold heavy components with loading states
const Achievements = dynamic(() => import("@/components/Achievements"), {
  loading: () => <div className="h-96 w-full flex items-center justify-center text-accent/50">Loading Achievements...</div>
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="h-96 w-full flex items-center justify-center text-accent/50">Loading Projects...</div>
});
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience"));
const Qualification = dynamic(() => import("@/components/Qualification"));
const Profiles = dynamic(() => import("@/components/Profiles"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Suspense fallback={<div className="h-20" />}>
        <Projects />
      </Suspense>
      <Skills />
      <Suspense fallback={<div className="h-20" />}>
        <Achievements />
      </Suspense>
      <Qualification />
      <Profiles />
      <Contact />
      <Footer />
    </main>
  );
}
