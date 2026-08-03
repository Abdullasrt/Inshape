import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const smoothEasing = [0.16, 1, 0.3, 1];
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: smoothEasing } },
};

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Standard Pass',
      price: billingCycle === 'monthly' ? '₹1000' : '₹800',
      period: '/mo',
      description: 'Complete entry-level access for consistent individual training.',
      features: ['Access to main gym floor', 'Locker & sauna access', 'Biometric assessment', 'Mobile app tracking'],
      highlighted: false,
    },
    {
      name: 'Pro Athlete',
      price: billingCycle === 'monthly' ? '₹1500' : '₹1200',
      period: '/mo',
      description: 'Comprehensive membership designed for total performance.',
      features: ['Full access during all gym hours', 'All group functional classes', 'Custom monthly programming', 'Sauna & Infrared recovery zone', '1 Monthly Personal Coaching session'],
      highlighted: true,
    },
    {
      name: 'Elite VIP',
      price: billingCycle === 'monthly' ? '₹2000' : '₹1600',
      period: '/mo',
      description: 'All-inclusive 1-on-1 personal coaching & recovery suite.',
      features: ['All Pro Athlete features', 'Unlimited Personal Training', 'Custom Macro & Nutrition plans', 'Free guest pass on every visit', 'Private VIP Lounge & Locker'],
      highlighted: false,
    },
  ];

  return (
    <motion.section
      id="pricing"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-900"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Flexible Access Plans</h2>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">MEMBERSHIP TIERS</h1>
        <p className="text-zinc-400">Straightforward pricing with no locked-in long-term commitments.</p>

        <div className="inline-flex items-center bg-zinc-900 border border-zinc-800 rounded-2xl p-1.5 mt-8">
          {['monthly', 'yearly'].map((cycle) => (
            <button
              key={cycle}
              onClick={() => setBillingCycle(cycle)}
              className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition duration-300 ${
                billingCycle === cycle
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {cycle === 'monthly' ? 'Monthly' : 'Yearly (20% OFF)'}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Cards Grid */}
      <motion.div variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 backdrop-blur-md ${
              plan.highlighted
                ? 'bg-zinc-900/80 border-2 border-amber-500/60 shadow-[0_0_30px_rgba(245,158,11,0.15)] lg:-translate-y-2'
                : 'bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/40'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                Most Popular
              </div>
            )}
            <div>
              <h3 className="text-2xl font-black text-white uppercase">{plan.name}</h3>
              <p className="text-zinc-400 text-xs mt-2 min-h-[32px]">{plan.description}</p>

              <div className="my-6 flex items-baseline overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={plan.price}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="text-5xl font-black text-white font-mono"
                  >
                    {plan.price}
                  </motion.span>
                </AnimatePresence>
                <span className="text-zinc-500 font-medium text-xs ml-1.5">{plan.period}</span>
              </div>

              <div className="h-px w-full bg-zinc-800 my-6" />

              <ul className="space-y-3.5">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-xs text-zinc-300">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className={`mt-10 block text-center py-4 rounded-xl font-black text-xs uppercase tracking-widest transition duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:from-amber-300'
                  : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-amber-500/40'
              }`}
            >
              Select Plan
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}