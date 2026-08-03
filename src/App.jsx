import React from 'react';

// Layout & Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Sections
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import BMICalculator from './pages/BMICalculator';
import Pricing from './pages/Pricing';
import Trainers from './pages/Trainers';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-400 selection:text-black flex flex-col justify-between relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-amber-500/[0.04] blur-[160px] pointer-events-none rounded-full z-0" />

      {/* Persistent Navigation */}
      <Navbar />

      {/* Single Page Stacked Sections */}
      <main className="flex-grow pt-20 z-10 space-y-12 md:space-y-20">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        {/* 2. Add Programs here */}
        <Programs />

        <BMICalculator />

        <section id="pricing">
          <Pricing />
        </section>

        <section id="trainers">
          <Trainers />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}