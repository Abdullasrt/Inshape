import React, { useState, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'BMI Calc', id: 'bmi' },
        { name: 'Programs', id: 'programs' },

    { name: 'Membership', id: 'pricing' },
    { name: 'Trainers', id: 'trainers' },
    { name: 'Contact', id: 'contact' },
  ];

  // Observe scroll position to highlight active section in Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/85 backdrop-blur-2xl border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* BRAND LOGO */}
          <a href="#home" className="flex items-center gap-3 group">
<div className="w-14 h-14 bg-white rounded-2xl overflow-hidden flex items-center justify-center border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)] transition duration-300 group-hover:scale-105">
  <img
    src="/logo.png.jpeg"
    alt="In Shape Fitness Unlimited Logo"
    className="w-full h-full object-contain scale-135"
  />
</div>          <div className="flex flex-col">
              <span className="text-xl font-black tracking-widest text-white leading-none">
                IN <span className="text-amber-400">SHAPE</span>
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[9px] font-bold tracking-widest uppercase text-zinc-400">
                  Fitness Unlimited
                </span>
              </div>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-800/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-400 text-zinc-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA BUTTON */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-black uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:from-amber-300 hover:to-orange-400 transition duration-300 active:scale-95"
            >
              Connect
            </a>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 px-6 pt-4 pb-6 space-y-3 backdrop-blur-2xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 text-sm font-semibold uppercase tracking-wider ${
                activeSection === link.id ? 'text-amber-400 font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-center bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 py-3 rounded-xl font-black uppercase text-xs tracking-widest mt-4 shadow-lg"
          >
            Connect
          </a>
        </div>
      )}
    </header>
  );
}