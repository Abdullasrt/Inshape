import React from 'react';
import { Users } from 'lucide-react';
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

export default function Trainers() {
  const trainers = [
    { name: 'Ramsheed c u', role: 'Head Strength Coach', spec: 'Powerlifting, strength training & workout technique', experience: '12+ Years Experience' },
    { name: 'Female trainer', role: 'Available', spec: 'Weight management & functional fitness', experience: '8+ Years Experience' },
  ];

  return (
    <motion.section
      id="trainers"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-900"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Expert Guidance</h2>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">ELITE COACHING STAFF</h1>
        <p className="text-zinc-400">Certified coaches dedicated to guiding you toward your fitness goals, every step of the way.</p>
      </motion.div>

      {/* Grid */}
      <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
        {trainers.map((t, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl text-center group hover:border-amber-500/40 transition duration-300 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              {/* Avatar Badge */}
              <motion.div 
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-24 h-24 bg-zinc-900 border border-zinc-800 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-950/20 transition duration-300 shadow-inner"
              >
                <Users className="w-10 h-10 text-amber-400 transition duration-300" />
              </motion.div>

              <h3 className="text-2xl font-black text-white uppercase group-hover:text-amber-300 transition-colors">{t.name}</h3>
              <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mt-1 mb-4">{t.role}</p>
              
              <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-4 mb-4">
                <p className="text-zinc-400 text-xs">
                  <span className="text-zinc-200 font-semibold block mb-0.5">Specialization</span> {t.spec}
                </p>
              </div>
            </div>

          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}