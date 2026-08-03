import React from "react";
import { 
  ArrowRight, Zap, Award, Activity, Sparkles, Users, Flame, 
  ShieldCheck, Dumbbell, Clock, ChevronRight, Target, HeartPulse, UserCheck 
} from 'lucide-react';
import { motion } from "framer-motion";

const smoothEasing = [0.16, 1, 0.3, 1];
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const fadeInUp = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: smoothEasing } } };

const FEATURES = [
  { icon: <Zap className="w-6 h-6 text-amber-400" />, title: "Complete Strength Setup", desc: "Free weights, barbells, squat racks, and plate-loaded machines covering every major muscle group.", tag: "Strength" },
  { icon: <Award className="w-6 h-6 text-orange-400" />, title: "Cardio & Conditioning", desc: "Treadmills, cross-trainers, and cycling stations to build endurance and support fat loss.", tag: "Cardio" },
  { icon: <Activity className="w-6 h-6 text-emerald-400" />, title: "Hands-On Trainer Support", desc: "Trainers on the floor to correct your form, plan your sessions, and keep you accountable.", tag: "Coaching" },
];

const STATS = [
  { value: "10K+", label: "Athletes Trained" },
  { value: "100%", label: "Precision Gear" },
  { value: "15+", label: "Master Coaches" },
];

const BODYBUILDING_HIGHLIGHTS = [
  { icon: Target, text: "Progressive Overload Tracking", color: "text-amber-400" },
  { icon: ShieldCheck, text: "Form & Safety Corrections", color: "text-orange-400" },
  { icon: HeartPulse, text: "Nutritional Macros Guidance", color: "text-emerald-400" },
  { icon: Users, text: "Beginner to Pro Support", color: "text-amber-400" },
];

const PT_POINTS = [
  { title: "1-on-1 Focused Sessions:", desc: "Dedicated attention during every movement.", color: "bg-amber-400" },
  { title: "Comprehensive Assessments:", desc: "Regular body composition and mobility checks.", color: "bg-orange-400" },
  { title: "Continuous Motivation:", desc: "Structured updates to prevent plateaus.", color: "bg-emerald-400" },
];

export default function Home() {
  return (
    <motion.div id="home" initial="hidden" animate="visible" className="relative space-y-24 md:space-y-32 bg-zinc-950 text-zinc-100 min-h-screen overflow-hidden selection:bg-amber-400 selection:text-black">
      {/* Background Radial Glow Accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/15 via-amber-600/5 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-gradient-to-br from-orange-600/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <motion.section variants={stagger} className="relative pb-4 md:pb-3 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" alt="Gym Background" className="w-full h-full object-cover opacity-20 filter grayscale contrast-125" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="w-14 h-14 bg-white rounded-2xl p-0.5 border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.15)] flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img src="/logo.png.jpeg" alt="InShape Gym Logo" className="w-full h-full object-contain" />
                </motion.div>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-400 block">Welcome To</span>
                  <span className="text-lg font-black tracking-wider uppercase text-white">INSHAPE GYM UNLIMITED</span>
                </div>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.88] mb-6">
                BUILD STRENGTH. <br /><span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 bg-clip-text text-transparent">TRANSFORM LIFE.</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-zinc-400 text-base sm:text-lg leading-relaxed font-light max-w-xl">
                Achieve your dream physique with biomechanically calibrated equipment, personalized training programs, and motivational coaching designed to dismantle plateaus.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#pricing" className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 font-black px-8 py-4 rounded-xl text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(245,158,11,0.25)] hover:from-amber-300 hover:to-orange-400 transition-all">
                  Claim Free Pass <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#programs" className="inline-flex items-center justify-center bg-zinc-900/80 text-zinc-200 border border-zinc-800 hover:border-amber-500/40 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest backdrop-blur-md transition-all">
                  Explore Programs
                </a>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="lg:col-span-5 relative group ">
              <div className="relative rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-900/60 p-7 shadow-2xl backdrop-blur-xl hover:border-amber-500/40">
                <div className="flex items-center justify-between pb-5 border-b border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-400"><Dumbbell className="w-6 h-6" /></div>
                    <div>
                      <h3 className="font-black text-white text-base uppercase">Ottapalam Gym Facility</h3>
                      <p className="text-xs text-zinc-400">T.B. Road, Kerala</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> OPEN TODAY
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 py-6">
                  <div className="p-4 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl">
                    <Clock className="w-4 h-4 text-amber-400 mb-2" />
                    <div className="text-xs text-zinc-400 font-medium">Morning Session</div>
                    <div className="text-sm font-bold text-white mt-0.5">05:30 AM – 09:00 AM</div>
                  </div>
                  <div className="p-4 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl">
                    <Clock className="w-4 h-4 text-orange-400 mb-2" />
                    <div className="text-xs text-zinc-400 font-medium">Evening Session</div>
                    <div className="text-sm font-bold text-white mt-0.5">03:30 PM – 09:30 PM</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-zinc-800/80">
                  {STATS.map((s, i) => (
                    <div key={i} className="text-center p-2">
                      <div className="text-lg font-black text-white">{s.value}</div>
                      <div className="text-[10px] text-zinc-400">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 4. BENTO GRID FEATURES SECTION */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-800/40 text-amber-400 font-bold text-xs tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Designed For Performance
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">WHY ATHLETES CHOOSE INSHAPE</h2>
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f, idx) => (
            <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -5 }} className="group p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/40 backdrop-blur-md flex flex-col justify-between transition-all hover:bg-zinc-900/70">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-zinc-950 border border-zinc-800/80 rounded-2xl group-hover:border-amber-500/30 transition-colors">{f.icon}</div>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-zinc-950 text-amber-400 border border-zinc-800">{f.tag}</span>
                </div>
                <h3 className="font-black text-white text-xl uppercase tracking-tight mb-2 group-hover:text-amber-400 transition-colors">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">{f.desc}</p>
              </div>
              <a href="#pricing" className="mt-8 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400 uppercase font-semibold group-hover:text-amber-400 transition-colors">
                <span>Explore Membership</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
}