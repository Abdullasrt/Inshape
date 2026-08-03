import React, { useState } from 'react';
import { Calculator, RotateCcw, AlertCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const smoothEasing = [0.16, 1, 0.3, 1];
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: smoothEasing } } };

function getCategory(bmi) {
  if (bmi < 18.5) {
    return { label: 'Underweight', color: 'text-sky-400', border: 'border-sky-500/40', bg: 'bg-sky-500/10', message: 'You may benefit from a structured strength program to build healthy muscle mass. Our trainers can help you plan a safe weight-gain routine.' };
  }
  if (bmi < 25) {
    return { label: 'Healthy Weight', color: 'text-emerald-400', border: 'border-emerald-500/40', bg: 'bg-emerald-500/10', message: "You're in a healthy weight range. Keep up a balanced routine of strength and cardio training to maintain it." };
  }
  if (bmi < 30) {
    return { label: 'Overweight', color: 'text-amber-400', border: 'border-amber-500/40', bg: 'bg-amber-500/10', message: 'A combination of cardio and strength training, along with balanced nutrition, can help you move toward a healthier range. Our trainers can build a plan around your goals.' };
  }
  return { label: 'Obesity Range', color: 'text-red-400', border: 'border-red-500/40', bg: 'bg-red-500/10', message: 'We recommend speaking with our trainers to build a gradual, sustainable fitness and nutrition plan suited to your needs.' };
}

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = (e) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (height.trim() === '' || weight.trim() === '') {
      setError('Please enter both your height and weight to calculate BMI.');
      setResult(null);
      return;
    }
    if (isNaN(h) || isNaN(w)) {
      setError('Height and weight must be valid numbers.');
      setResult(null);
      return;
    }
    if (h < 90 || h > 250) {
      setError('Please enter a height between 90 cm and 250 cm.');
      setResult(null);
      return;
    }
    if (w < 20 || w > 300) {
      setError('Please enter a weight between 20 kg and 300 kg.');
      setResult(null);
      return;
    }

    const heightInMeters = h / 100;
    const bmi = w / (heightInMeters * heightInMeters);
    setError('');
    setResult(Math.round(bmi * 10) / 10);
  };

  const handleReset = () => {
    setHeight('');
    setWeight('');
    setResult(null);
    setError('');
  };

  const category = result !== null ? getCategory(result) : null;

  return (
    <motion.section
      id="bmi"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-900"
    >
      <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Know Where You Stand</h2>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">BMI CALCULATOR</h1>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Get a quick estimate of your Body Mass Index and see where it falls, then let our trainers help you build a plan around it.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
        <form onSubmit={handleCalculate} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <div>
            <label htmlFor="bmi-height" className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Height (cm)</label>
<input
  id="bmi-height"
  type="number"
  inputMode="decimal"
  value={height}
  onChange={(e) => setHeight(e.target.value)}
  className="w-full px-4 py-3.5 bg-zinc-950 border border-zinc-800 focus:border-amber-400 rounded-xl text-sm text-white focus:outline-none transition duration-300 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
/>          </div>
          <div>
            <label htmlFor="bmi-weight" className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Weight (kg)</label>
<input
  id="bmi-weight"
  type="number"
  inputMode="decimal"
  value={weight}
  onChange={(e) => setWeight(e.target.value)}
  className="w-full px-4 py-3.5 bg-zinc-950 border border-zinc-800 focus:border-amber-400 rounded-xl text-sm text-white focus:outline-none transition [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
/>          </div>

          <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-zinc-950 font-black text-xs uppercase tracking-widest py-4 rounded-xl transition shadow-[0_0_20px_rgba(245,158,11,0.2)]"
            >
              <Calculator className="w-4 h-4" /> Calculate BMI
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-amber-500/40 font-black text-xs uppercase tracking-widest py-4 rounded-xl transition"
            >
              <RotateCcw className="w-4 h-4" /> Reset
            </button>
          </div>
        </form>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex items-center gap-3 p-4 rounded-xl text-xs font-medium border bg-red-500/10 border-red-500/30 text-red-400 mb-2"
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </motion.div>
          )}

          {result !== null && category && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className={`rounded-2xl border p-6 sm:p-8 ${category.bg} ${category.border}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Your BMI</div>
                  <div className="text-4xl font-black text-white font-mono">{result}</div>
                </div>
                <div className={`text-sm font-black uppercase tracking-wider px-4 py-2 rounded-full border ${category.border} ${category.color} ${category.bg} w-fit`}>
                  {category.label}
                </div>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">{category.message}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BMI Category Reference */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-8 border-t border-zinc-800/80">
          <div className="text-center p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
            <div className="text-sky-400 text-xs font-bold uppercase mb-1">Underweight</div>
            <div className="text-zinc-500 text-[11px] font-mono">Below 18.5</div>
          </div>
          <div className="text-center p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
            <div className="text-emerald-400 text-xs font-bold uppercase mb-1">Healthy</div>
            <div className="text-zinc-500 text-[11px] font-mono">18.5 – 24.9</div>
          </div>
          <div className="text-center p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
            <div className="text-amber-400 text-xs font-bold uppercase mb-1">Overweight</div>
            <div className="text-zinc-500 text-[11px] font-mono">25.0 – 29.9</div>
          </div>
          <div className="text-center p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
            <div className="text-red-400 text-xs font-bold uppercase mb-1">Obesity Range</div>
            <div className="text-zinc-500 text-[11px] font-mono">30.0 and above</div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-3 mt-6 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-zinc-500 text-xs leading-relaxed">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-zinc-500" />
          <p>BMI is a general screening measurement based on height and weight. It does not account for muscle mass, bone density, or body composition, and is not a medical diagnosis. Speak with a doctor or one of our trainers for personalized advice.</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
