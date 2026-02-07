"use client";

import React from "react";
import { Code, Brain, Zap, Shield, Bot } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Generative Code",
    desc: "Autonomous full-stack development. Describe the app, and Nexus builds it pixel-perfect.",
    icon: Code,
    colSpan: "col-span-12 md:col-span-8",
    bg: "from-purple-900/20 to-transparent",
  },
  {
    title: "Predictive Analytics",
    desc: "Forecast market shifts with 99.4% accuracy using our deep-learning transformers.",
    icon: Brain,
    colSpan: "col-span-12 md:col-span-4",
    bg: "from-cyan-900/20 to-transparent",
  },
  {
    title: "Instant Processing",
    desc: "Zero-latency inferencing at the edge.",
    icon: Zap,
    colSpan: "col-span-12 md:col-span-4",
    bg: "from-blue-900/20 to-transparent",
  },
  {
    title: "Enterprise Security",
    desc: "Military-grade encryption for your data models.",
    icon: Shield,
    colSpan: "col-span-12 md:col-span-4",
    bg: "from-indigo-900/20 to-transparent",
  },
  {
    title: "Autonomous Agents",
    desc: "Deploy swarms of self-correcting agents that manage customer support, sales, and operations 24/7.",
    icon: Bot,
    colSpan: "col-span-12 md:col-span-4",
    bg: "from-violet-900/20 to-transparent",
  },
];

export default function BentoGridFeatures() {
  return (
    <section className="py-24 bg-nexus-dark relative overflow-hidden">
       {/* Section Header */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Neural <span className="text-neon-purple">Capabilities</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative ${item.colSpan} rounded-2xl border border-white/5 bg-nexus-gray overflow-hidden hover:border-white/20 transition-all duration-300`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8 h-full flex flex-col justify-between z-10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-gray-300 group-hover:text-neon-cyan transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                <div className="w-full flex justify-end">
                   <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                     <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
                   </div>
                </div>
              </div>

              {/* Glow Border Effect */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-neon-purple/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}