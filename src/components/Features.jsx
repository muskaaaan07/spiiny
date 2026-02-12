import React from 'react';
import { motion } from 'framer-motion';
import { Database, Wand2, BarChart, Shield, Zap, Globe } from 'lucide-react';

const features = [
  {
    title: "Auto-Data Cleaning",
    description: "Stop wasting hours on spreadsheets. Spiiny automatically detects and fixes errors in your raw data.",
    icon: Wand2,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "AI-Powered Insights",
    description: "Our AI engine analyzes your data to find hidden patterns and trends you might have missed.",
    icon: Zap,
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  {
    title: "Beautiful Dashboards",
    description: "Create stunning, interactive visualizations that make your data easy to understand and share.",
    icon: BarChart,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    title: "Secure & Private",
    description: "Your data is encrypted and stored securely. We prioritize your privacy and data integrity.",
    icon: Shield,
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    title: "Multi-Source Sync",
    description: "Connect to SQL, CSVs, APIs, and more. Keep all your data sources in one unified workspace.",
    icon: Database,
    color: "text-rose-500",
    bg: "bg-rose-50"
  },
  {
    title: "Global Collaboration",
    description: "Work together with your team in real-time. Share insights and build dashboards together.",
    icon: Globe,
    color: "text-indigo-500",
    bg: "bg-indigo-50"
  }
];

export default function Features({ onJoinWaitlist }) {
  return (
    <section id="features" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything you need to master your data
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Powerful tools designed for analysts, founders, and modern teams who want to move faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {feature.description}
              </p>
              <button 
                onClick={onJoinWaitlist}
                className="text-sm font-semibold text-slate-900 flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn more <span className="text-slate-400">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}