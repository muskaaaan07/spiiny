import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Navbar({ onJoinWaitlist }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-full shadow-sm"
      >
        <Logo />

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#founder" className="hover:text-slate-900 transition-colors">Founder</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
        </div>

        <button 
          onClick={onJoinWaitlist}
          className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all active:scale-95"
        >
          Join Waitlist
        </button>
      </motion.div>
    </nav>
  );
}