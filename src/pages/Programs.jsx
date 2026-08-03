import React from 'react';
import { Dumbbell, HeartPulse, Layers, ShieldCheck, Users, Salad, TrendingUp, ClipboardCheck, Repeat, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const smoothEasing = [0.16, 1, 0.3, 1];
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: smoothEasing } },
};

export default function Programs() {
  const facilities = [
    { icon: <Dumbbell className="w-5 h-5 text-amber-400" />, title: 'Strength Training', desc: 'A full range of free weights, barbells, squat racks, and plate-loaded machines for building raw strength.' },
    { icon: <HeartPulse className="w-5 h-5 text-orange-400" />, title: 'Cardio Training', desc: 'Treadmills, cross-trainers, and cycling stations to build endurance and support fat loss.' },
    { icon: <Layers className="w-5 h-5 text-emerald-400" />, title: 'Modern Equipment', desc: 'Regularly maintained machines covering every muscle group, suitable for beginners through advanced lifters.' },
    { icon: <ShieldCheck className="w-5 h-5 text-amber-400" />, title: 'Clean, Spacious Floor', desc: 'A well-ventilated, hygienic training environment with enough space to train safely and comfortably.' },
    { icon: <Users className="w-5 h-5 text-orange-400" />, title: 'Trainer Support', desc: 'Our coaches are on the floor to correct your form, plan your sessions, and keep you motivated.' },
    { icon: <TrendingUp className="w-5 h-5 text-emerald-400" />, title: 'Member Benefits', desc: 'Fitness assessments, flexible timings, and a supportive community that keeps you accountable.' },
  ];

  const bodybuildingPoints = [
    { icon: <Dumbbell className="w-4 h-4" />, text: 'Structured muscle-building workouts for every body type' },
    { icon: <TrendingUp className="w-4 h-4" />, text: 'Progressive overload programming to keep you improving' },
    { icon: <ClipboardCheck className="w-4 h-4" />, text: 'Guidance on proper form and safe lifting technique' },
    { icon: <Salad className="w-4 h-4" />, text: 'Practical nutrition guidance to support muscle growth' },
  ];

  const personalTrainingPoints = [
    { icon: <UserCheck className="w-4 h-4" />, text: 'One-to-one sessions built entirely around your goals' },
    { icon: <ClipboardCheck className="w-4 h-4" />, text: 'Initial fitness assessment to set a realistic starting point' },
    { icon: <Repeat className="w-4 h-4" />, text: 'Regular progress tracking with plans adjusted as you improve' },
    { icon: <Users className="w-4 h-4" />, text: 'Weight-loss, muscle-building, and general fitness programs' },
  ];

  return (
    <motion.section
      id="programs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-900"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Facilities &amp; Programs</h2>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">TRAIN THE RIGHT WAY</h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          From strength and cardio equipment to structured bodybuilding programs and one-to-one coaching, InShape gives you everything you need to reach your fitness goals.
        </p>
      </motion.div>

      {/* Facilities Grid */}
      <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
        {facilities.map((f, idx) => (
          <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -4 }} className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/40 backdrop-blur-md transition">
            <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-xl w-fit mb-4">{f.icon}</div>
            <h4 className="text-sm font-bold text-white mb-1.5 uppercase tracking-wide">{f.title}</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bodybuilding Section */}
      <motion.div id="bodybuilding" variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-24 scroll-mt-24">
        <motion.div whileHover={{ y: -4 }} className="relative rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl aspect-[4/3] order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1750698544890-2cd9c8c2ce23?q=80&w=1200&auto=format&fit=crop"
            alt="Bodybuilder training with weights at InShape Gym"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
        </motion.div>

        <div className="space-y-6 order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-800/40 text-amber-400 font-bold text-xs tracking-widest uppercase">
            <Dumbbell className="w-3.5 h-3.5" /> Bodybuilding
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
            BUILD STRENGTH. <br /><span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 bg-clip-text text-transparent">TRANSFORM YOUR BODY.</span>
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            At InShape Gym, our bodybuilding programs are designed to help members increase muscle mass, improve strength, and build a well-balanced physique. With modern strength-training equipment and professional guidance, members follow structured workout routines based on their fitness level and goals — whether you're stepping into the weights section for the first time or preparing for a competition.
          </p>
          <ul className="space-y-3">
            {bodybuildingPoints.map((p, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-amber-400 flex-shrink-0">{p.icon}</span>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Personal Training Section */}
      <motion.div id="personal-training" variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center scroll-mt-24">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-800/40 text-amber-400 font-bold text-xs tracking-widest uppercase">
            <UserCheck className="w-3.5 h-3.5" /> Personal Training
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
            PERSONAL TRAINING <br /><span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 bg-clip-text text-transparent">DESIGNED FOR YOU.</span>
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Achieve your fitness goals faster with personalized guidance from our experienced trainers. Whether your goal is weight loss, muscle gain, improved endurance, or overall fitness, our trainers create a workout plan based on your body type, experience, and personal objectives — with your progress reviewed and adjusted along the way.
          </p>
          <ul className="space-y-3">
            {personalTrainingPoints.map((p, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-amber-400 flex-shrink-0">{p.icon}</span>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <motion.div whileHover={{ y: -4 }} className="relative rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=1200&auto=format&fit=crop"
            alt="One-to-one personal training session at InShape Gym"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
