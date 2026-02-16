import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 relative h-80 md:h-auto">
              <img 
                src="/images/1718278619315.jpg" 
                alt="Sameer Ahmed Khan" 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                  Meet the Founder
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Sameer Ahmed Khan
                </h2>
                <p className="text-blue-400 font-medium mb-6">Experienced Data Analyst & Visionary</p>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  "Spiiny was born out of a simple frustration: data analysis shouldn't be a chore. With years of experience in data analytics, I wanted to build a tool that makes insights accessible to everyone, not just those who can write complex queries."
                </p>
                
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-slate-300">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                      <size={16} />
                    </div>
                    <span className="text-sm">+91 9573174142</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                      <Mail size={16} />
                    </div>
                    <span className="text-sm">sameer.khan@spiiny.in</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
