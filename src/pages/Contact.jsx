import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Clock, Phone, ExternalLink, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const smoothEasing = [0.16, 1, 0.3, 1];
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: smoothEasing } } };

export default function Contact() {
  const mapUrl = "https://maps.google.com/?cid=6939187148432834076";
  const [status, setStatus] = useState({ type: null, message: '' });
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = () => {
    setStatus({ type: 'success', message: 'Inquiry received. Our coaching team will reach out shortly.' });
    reset();
  };

  const onError = () => {
    setStatus({ type: 'warning', message: 'Please fix highlighted errors before submitting.' });
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white border-t border-zinc-900"
    >
      <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: smoothEasing }} className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Get In Touch</h2>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight uppercase mb-4">CONTACT INSHAPE</h1>
        <p className="text-zinc-400 text-sm leading-relaxed">Questions regarding facility access, personal training sessions, or membership details? Reach out below.</p>
      </motion.div>

      <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <motion.div variants={itemVariants} className="bg-zinc-900/40 border border-zinc-800/80 p-8 sm:p-10 rounded-3xl backdrop-blur-md hover:border-amber-500/40 transition duration-500 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-5">
            <AnimatePresence mode="wait">
              {status.type && (
                <motion.div initial={{ opacity: 0, y: -8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.98 }} transition={{ duration: 0.3 }} className={`flex items-center gap-3 p-4 rounded-xl text-xs font-medium border ${status.type === 'warning' ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}>
                  {status.type === 'warning' ? <AlertCircle className="w-4 h-4 flex-shrink-0" /> : <CheckCircle2 className="w-4 h-4 flex-shrink-0" />}
                  <span>{status.message}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Full Name</label>
              <input type="text" className={`w-full px-4 py-3.5 bg-zinc-950 border rounded-xl text-xs text-white focus:outline-none transition duration-300 ${errors.name ? 'border-red-500/80 bg-red-500/5 focus:border-red-500' : 'border-zinc-800 focus:border-amber-400'}`} placeholder="John Doe" {...register('name', { required: true })} />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Email Address</label>
              <input type="email" className={`w-full px-4 py-3.5 bg-zinc-950 border rounded-xl text-xs text-white focus:outline-none transition duration-300 ${errors.email ? 'border-red-500/80 bg-red-500/5 focus:border-red-500' : 'border-zinc-800 focus:border-amber-400'}`} placeholder="john@example.com" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Message</label>
              <textarea rows="4" className={`w-full px-4 py-3.5 bg-zinc-950 border rounded-xl text-xs text-white focus:outline-none transition duration-300 resize-none ${errors.message ? 'border-red-500/80 bg-red-500/5 focus:border-red-500' : 'border-zinc-800 focus:border-amber-400'}`} placeholder="State your athletic goals or questions..." {...register('message', { required: true })} />
            </div>

            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 350, damping: 20 }} type="submit" className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-zinc-950 font-black text-xs uppercase tracking-widest py-4 rounded-xl transition shadow-[0_0_20px_rgba(245,158,11,0.2)] flex items-center justify-center gap-2">
              <span>Submit Inquiry</span>
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>

        {/* Info Cards */}
        <motion.div variants={containerVariants} className="space-y-5">
          <motion.a variants={itemVariants} whileHover={{ y: -3 }} href={mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/40 transition duration-300 group backdrop-blur-md">
            <div className="flex items-center gap-5">
              <div className="p-3.5 bg-zinc-900 border border-zinc-800 rounded-2xl text-amber-400 group-hover:border-amber-500/50 transition duration-300"><MapPin className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-white text-sm uppercase">Facility Location</h4>
                <p className="text-xs text-zinc-400 mt-1">IN SHAPE FITNESS UNLIMITED</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">T.B Road, Ottapalam, Kerala 679101</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition" />
          </motion.a>

          <motion.div variants={itemVariants} whileHover={{ y: -2 }} className="flex items-center gap-5 p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/40 transition duration-300 backdrop-blur-md">
            <div className="p-3.5 bg-zinc-900 border border-zinc-800 rounded-2xl text-amber-400"><Clock className="w-6 h-6" /></div>
            <div>
              <h4 className="font-bold text-white text-sm uppercase">Gym Hours</h4>
              <p className="text-xs text-zinc-400 mt-1">Morning: 5:30 AM - 9:00 AM</p>
              <p className="text-xs text-zinc-400 mt-0.5">Evening: 3:30 PM - 9:30 PM</p>
            </div>
          </motion.div>

<motion.div variants={itemVariants} whileHover={{ y: -2 }} className="flex items-center gap-5 p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/40 transition duration-300 backdrop-blur-md">
  <a 
    href="tel:+918891474839" 
    aria-label="Call +91 88914 74839"
    className="p-3.5 bg-zinc-900 border border-zinc-800 rounded-2xl text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
  >
    <Phone className="w-6 h-6" />
  </a>
  <div>
    <h4 className="font-bold text-white text-sm uppercase">Direct Phone</h4>
    <p className="text-xs text-zinc-400 mt-1">+91 88914 74839</p>
  </div>
</motion.div>        </motion.div>
      </motion.div>
    </motion.section>
  );
}