import React, { useState, useEffect } from 'react';
import { Target, ShieldCheck, Dumbbell, ArrowRight, Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const smoothEasing = [0.16, 1, 0.3, 1];
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: smoothEasing } } };

export default function About() {
  const [index, setIndex] = useState(0);
  const mapUrl = "https://maps.google.com/?cid=6939187148432834076";

  const values = [
    { icon: <Target className="w-6 h-6 text-amber-400" />, title: "Results-Driven Focus", desc: "Programs and gear engineered to break plateaus and achieve tangible physical results." },
    { icon: <Dumbbell className="w-6 h-6 text-orange-400" />, title: "Uncompromising Gear", desc: "Biologically calibrated strength equipment and competition-grade barbells." },
    { icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />, title: "Elite Environment", desc: "A high-energy, focused atmosphere for athletes who take discipline seriously." },
  ];

  const reviews = [
    { quote: "Best gym at Ottapalam! Good facilities, friendly supportive trainers, and very affordable rates.", author: "Manjudas Ph" },
    { quote: "The gym is affordable and packed with all the necessary machines for complete workouts.", author: "Anand T" },
    { quote: "Great place to workout with good equipment and a spacious atmosphere. Friendly trainers to guide you.", author: "The Acoustic Nerd" },
    { quote: "Good place to workout and bodybuilding. You will have the best support from the trainer.", author: "Nikhil Das P" },
    { quote: "Very convenient and low cost gym. Friendly trainers who guide you well through every exercise.", author: "Vishnu K" },
  ];

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i === reviews.length - 1 ? 0 : i + 1)), 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-900 overflow-hidden">
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Our Philosophy & Story</h2>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">ABOUT INSHAPE</h1>
        <p className="text-zinc-400">Redefining fitness standards in Ottapalam with relentless focus and zero excuses.</p>
      </motion.div>

      {/* Story Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <motion.div whileHover={{ y: -4 }} className="bg-zinc-900/40 border border-zinc-800 p-8 sm:p-12 rounded-3xl text-center hover:border-amber-500/40 transition duration-300 backdrop-blur-md">
<motion.div 
  whileHover={{ scale: 1.05, rotate: 3 }} 
  transition={{ type: 'spring', stiffness: 300 }} 
  className="w-32 h-32 bg-white rounded-2xl p-0.5 border border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.15)] mx-auto mb-6 flex items-center justify-center overflow-hidden"
>
  <img src="/logo.png.jpeg" alt="Logo" className="w-full h-full object-contain" />
</motion.div>          <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">IN SHAPE FITNESS UNLIMITED</h3>
          <span className="inline-block text-[10px] font-bold uppercase text-amber-400 bg-amber-950/50 border border-amber-800/50 px-3 py-1 rounded-full tracking-widest">SINCE 2005</span>
        </motion.div>

        <div className="space-y-6">
          <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
            BUILT FOR THOSE WHO <br /><span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 bg-clip-text text-transparent">DEMAND MORE.</span>
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Founded with a vision to eliminate generic gym experiences, <strong className="text-white">IN SHAPE FITNESS UNLIMITED</strong> brings together state-of-the-art resistance training and structured coaching.
          </p>
          <a href="#contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:from-amber-300 hover:to-orange-400 transition">
            Get In Touch <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* Values */}
      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {values.map((v, idx) => (
          <motion.div key={idx} variants={itemVariants} whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/40 backdrop-blur-md transition group">
            <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl w-fit mb-6">{v.icon}</div>
            <h4 className="text-lg font-bold text-white mb-2 uppercase">{v.title}</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Reviews Section */}
      <motion.div variants={itemVariants} className="border-t border-zinc-900 pt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-800/40 bg-amber-950/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.6 / 5.0 Rating (120+ Reviews)
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">MEMBER REVIEWS</h3>
            <p className="text-zinc-400 text-sm mt-1">Real experiences shared by athletes on Google Maps.</p>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => setIndex((i) => (i === 0 ? reviews.length - 1 : i - 1))} className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-white hover:border-amber-500/40 transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => setIndex((i) => (i === reviews.length - 1 ? 0 : i + 1))} className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-white hover:border-amber-500/40 transition">
              <ChevronRight className="w-5 h-5" />
            </button>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-3 rounded-2xl shadow-lg hover:from-amber-300 transition">
              Google Maps <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Carousel Display */}
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900/40 border border-zinc-800/80 p-8 sm:p-12 min-h-[220px] backdrop-blur-md">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
            <Quote className="w-8 h-8 text-zinc-800" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={index} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4, ease: smoothEasing }}>
              <p className="text-zinc-200 text-lg sm:text-xl font-medium leading-relaxed italic mb-8">"{reviews[index].quote}"</p>
              <div className="border-t border-zinc-800/80 pt-6 flex justify-between items-center">
                <div>
                  <h4 className="text-white font-bold text-sm uppercase">{reviews[index].author}</h4>
                  <p className="text-zinc-500 text-xs mt-0.5">Verified Google Reviewer</p>
                </div>
                <span className="w-8 h-8 rounded-full bg-zinc-900 border border-amber-500/30 flex items-center justify-center text-xs font-bold text-amber-400">G</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`h-2 rounded-full transition-all duration-300 ${index === i ? 'w-8 bg-amber-400' : 'w-2 bg-zinc-800'}`} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}