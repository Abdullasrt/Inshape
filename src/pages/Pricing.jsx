import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const pricingData = {
  gents: {
    standard: [
      { name: '1 Month Standard', price: '₹1000', period: '/mo', desc: 'Entry-level access for training.', features: ['Full main gym floor access', 'Locker room access', 'Basic fitness evaluation', 'Mobile app tracking'] },
      { name: '2 Months Standard', price: '₹1700', originalPrice: '₹1900', period: '/2 mos', desc: 'Short-term plan with savings.', features: ['Full main gym floor access', 'Locker room access', 'Basic fitness evaluation', 'Save ₹200 off regular rate'] },
      { name: '3 Months Standard', price: '₹2300', originalPrice: '₹2850', period: '/3 mos', desc: 'Quarterly membership package.', features: ['Full main gym floor access', 'Locker room access', 'Progress assessment & tracking', 'Save ₹550 off regular rate'], highlighted: true, badge: 'Most Popular' },
      { name: '6 Months Standard', price: '₹4000', originalPrice: '₹5700', period: '/6 mos', desc: 'Half-year transformation plan.', features: ['Full main gym floor access', 'Locker room access', 'Bi-monthly progress review', 'Free custom workout guidance'] }
    ],
    cardio: [
      { name: '1 Month + Cardio', price: '₹1500', period: '/mo', desc: 'Gym floor & full cardio access.', features: ['Full main gym floor access', 'Unlimited Cardio Zone access', 'Treadmill & Elliptical machines', 'Locker room access'] },
      { name: '3 Months + Cardio', price: '₹4000', originalPrice: '₹4500', period: '/3 mos', desc: 'High intensity conditioning plan.', features: ['Full main gym floor access', 'Unlimited Cardio Zone access', 'Endurance & stamina tracking', 'Save ₹500 off regular rate'], highlighted: true, badge: 'Most Popular' },
      { name: '6 Months + Cardio', price: '₹7500', originalPrice: '₹9000', period: '/6 mos', desc: 'Ultimate half-year fitness package.', features: ['Full main gym floor access', 'Unlimited Cardio Zone access', 'Complete body composition review', 'Free diet & routine guide'] }
    ]
  },
  ladies: {
    standard: [
      { name: '1 Month Standard', price: '₹850', period: '/mo', desc: 'Flexible monthly access.', features: ['Full main gym floor access', 'Locker room access', 'Female-friendly environment', 'Basic fitness evaluation'] },
      { name: '2 Months Standard', price: '₹1500', originalPrice: '₹1700', period: '/2 mos', desc: 'Starter package for habits.', features: ['Full main gym floor access', 'Locker room access', 'Fitness evaluation', 'Save ₹200 off regular rate'] },
      { name: '3 Months Standard', price: '₹2000', originalPrice: '₹2550', period: '/3 mos', desc: 'Optimal transformation package.', features: ['Full main gym floor access', 'Locker room access', 'Progress & fitness review', 'Save ₹550 off regular rate'], highlighted: true, badge: 'Best Value' }
    ],
    cardio: [
      { name: '1 Month + Cardio', price: '₹1400', period: '/mo', desc: 'Full gym & cardio suite access.', features: ['Full main gym floor access', 'Unlimited Cardio Zone access', 'Treadmill & Cardio Equipment', 'Locker room access'] },
      { name: '3 Months + Cardio', price: '₹3700', originalPrice: '₹4200', period: '/3 mos', desc: 'Cardio & toning quarterly plan.', features: ['Full main gym floor access', 'Unlimited Cardio Zone access', 'Stamina & Fat Loss Guidance', 'Save ₹500 off regular rate'], highlighted: true, badge: 'Most Popular' },
      { name: '6 Months + Cardio', price: '₹6000', originalPrice: '₹8400', period: '/6 mos', desc: 'Maximum savings health plan.', features: ['Full main gym floor access', 'Unlimited Cardio Zone access', 'Personalized Workout Plan', 'Free Diet Guidance'] }
    ]
  }
};

export default function Pricing() {
  const [cat, setCat] = useState('gents');
  const [cardio, setCardio] = useState(false);
  const activePlans = pricingData[cat][cardio ? 'cardio' : 'standard'];

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-900">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">In Shape Fitness Unlimited</h2>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">MEMBERSHIP TIERS</h1>
        <p className="text-zinc-400">Straightforward pricing with discounted multi-month packages.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="inline-flex items-center bg-zinc-900 border border-zinc-800 rounded-2xl p-1.5">
            {['gents', 'ladies'].map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition ${cat === c ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 shadow-md' : 'text-zinc-400 hover:text-white'}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="inline-flex items-center bg-zinc-900 border border-zinc-800 rounded-2xl p-1.5">
            <button onClick={() => setCardio(false)} className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition ${!cardio ? 'bg-zinc-800 text-white shadow-md' : 'text-zinc-400 hover:text-white'}`}>Standard Gym</button>
            <button onClick={() => setCardio(true)} className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition ${cardio ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 shadow-md' : 'text-zinc-400 hover:text-white'}`}>+ Cardio Included</button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={`${cat}-${cardio}`} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }} className={`grid grid-cols-1 gap-8 ${activePlans.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
          {activePlans.map((p, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className={`relative flex flex-col justify-between rounded-3xl p-8 backdrop-blur-md ${p.highlighted ? 'bg-zinc-900/80 border-2 border-amber-500/60 shadow-[0_0_30px_rgba(245,158,11,0.15)] lg:-translate-y-2' : 'bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/40'}`}>
              {p.highlighted && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">{p.badge}</div>}
              <div>
                <h3 className="text-2xl font-black text-white uppercase">{p.name}</h3>
                <p className="text-zinc-400 text-xs mt-2 min-h-[32px]">{p.desc}</p>
                <div className="my-6 flex items-baseline flex-wrap gap-2">
                  <span className="text-5xl font-black text-white font-mono">{p.price}</span>
                  {p.originalPrice && <span className="text-zinc-500 text-lg font-bold line-through font-mono">{p.originalPrice}</span>}
                  <span className="text-zinc-500 font-medium text-xs ml-1">{p.period}</span>
                </div>
                <div className="h-px w-full bg-zinc-800 my-6" />
                <ul className="space-y-3.5">
                  {p.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className={`mt-10 block text-center py-4 rounded-xl font-black text-xs uppercase tracking-widest transition ${p.highlighted ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:from-amber-300' : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800'}`}>Select Plan</a>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}