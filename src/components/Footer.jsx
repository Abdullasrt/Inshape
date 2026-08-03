import React from 'react';
import { Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950/90 border-t border-zinc-900 py-16 text-zinc-400 text-sm z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <a href="#home" className="flex items-center gap-3 group">
<div className="w-10 h-10 bg-white rounded-xl overflow-hidden flex items-center justify-center border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)] transition duration-300 group-hover:scale-105">
  <img 
    src="/logo.png.jpeg" 
    alt="In Shape Fitness Unlimited Logo" 
    className="w-full h-full object-cover scale-140"
  />
</div>      <div className="flex flex-col">
              <span className="text-lg font-black text-white tracking-widest leading-none">
                IN <span className="text-amber-400">SHAPE</span>
              </span>
              <span className="text-[8px] font-bold tracking-widest uppercase text-zinc-500 mt-0.5">
                Fitness Unlimited
              </span>
            </div>
          </a>
          <p className="text-zinc-500 text-xs leading-relaxed">
            Modern strength and cardio equipment, structured training programs, and dedicated coaching to help you reach your fitness goals.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-white font-bold mb-4 text-xs tracking-widest uppercase">Navigation</h4>
          <ul className="space-y-2.5 text-xs">
            <li><a href="#programs" className="hover:text-amber-400 transition">Programs & Facilities</a></li>
            <li><a href="#bmi" className="hover:text-amber-400 transition">BMI Calculator</a></li>
            <li><a href="#pricing" className="hover:text-amber-400 transition">Membership Tiers</a></li>
            <li><a href="#trainers" className="hover:text-amber-400 transition">Certified Coaches</a></li>
            <li><a href="#contact" className="hover:text-amber-400 transition">Facility Location</a></li>
          </ul>
        </div>

        {/* Operating Hours */}
        <div>
          <h4 className="text-white font-bold mb-4 text-xs tracking-widest uppercase">Operating Hours</h4>
          <ul className="space-y-2 text-xs text-zinc-500">
            <li className="flex justify-between"><span>Morning</span> <span className="text-white font-mono">5:30 - 9:00 AM</span></li>
            <li className="flex justify-between"><span>Evening</span> <span className="text-white font-mono">3:30 - 9:30 PM</span></li>
            <li className="text-amber-400 font-semibold pt-2">Open 7 Days a Week</li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-white font-bold mb-4 text-xs tracking-widest uppercase">Insider Access</h4>
          <p className="text-xs text-zinc-500 mb-3">Get workout programming insights delivered weekly.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="athlete@domain.com"
              className="bg-zinc-900 border border-zinc-800 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none flex-grow transition"
            />
            <button type="submit" className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 text-zinc-950 px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-md">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-900/80 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-600 gap-4">
        <p>© {new Date().getFullYear()} In Shape Fitness Unlimited. All rights reserved.</p>
        <div className="flex gap-6 text-zinc-500">
          <a href="#contact" className="hover:text-amber-400 transition">Privacy Policy</a>
          <a href="#contact" className="hover:text-amber-400 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}