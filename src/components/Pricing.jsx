import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for individuals and side projects.",
    features: [
      "Up to 1,000 rows per month",
      "Basic data cleaning",
      "3 Dashboards",
      "Community support"
    ],
    buttonText: "Join Waitlist",
    highlight: false
  },
  {
    name: "Pro",
    price: "49",
    description: "For professional analysts and growing teams.",
    features: [
      "Unlimited rows",
      "AI-powered insights",
      "Unlimited Dashboards",
      "Priority email support",
      "Custom branding",
      "Team collaboration"
    ],
    buttonText: "Join Waitlist",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced security and dedicated support.",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Dedicated account manager",
      "Custom integrations",
      "On-premise deployment",
      "SLA guarantee"
    ],
    buttonText: "Contact Sales",
    highlight: false
  }
];

export default function Pricing({ onJoinWaitlist }) {
  return (
    <section id="pricing" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose the plan that's right for you. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl bg-white border ${plan.highlight ? 'border-blue-500 shadow-xl ring-4 ring-blue-500/5' : 'border-slate-200'} flex flex-col`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price === "Custom" ? "" : "$"}
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && <span className="text-slate-500">/mo</span>}
                </div>
                <p className="text-slate-600 text-sm">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <button
                onClick={onJoinWaitlist}
                className={`w-full py-3 rounded-xl font-bold transition-all active:scale-[0.98] ${
                  plan.highlight 
                    ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}