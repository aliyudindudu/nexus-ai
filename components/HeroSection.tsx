"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Send } from "lucide-react";

export default function HeroSection() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSimulateAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setIsTyping(true);
    setResponse("");
    
    // Simulate latency
    setTimeout(() => {
      const fakeResponses = [
        "Optimizing neural pathways... Done. Efficiency increased by 400%.",
        "Analyzing dataset... Insight generated: Market trends predict a 15% growth vector.",
        "Generating code module... Deployed to staging. 0 errors found.",
      ];
      const randomResponse = fakeResponses[Math.floor(Math.random() * fakeResponses.length)];
      
      let i = 0;
      const stream = setInterval(() => {
        setResponse(randomResponse.slice(0, i + 1));
        i++;
        if (i === randomResponse.length) {
          clearInterval(stream);
          setIsTyping(false);
        }
      }, 30);
    }, 800);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-nexus-dark text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3], 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2], 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[100px]" 
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">The Future of </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-cyan animate-pulse-glow">
              Intelligence is Here
            </span>
          </h1>
          
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Supercharge your workflow with our next-gen cognitive engine. Faster, smarter, and entirely autonomous.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-1">
              Start Free Trial
            </button>
            <button className="flex items-center justify-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
              <Play className="w-5 h-5 fill-current" />
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Fake Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-xl border border-white/10 bg-[#0F0F0F] shadow-2xl overflow-hidden backdrop-blur-sm">
            <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 text-xs text-gray-500 font-mono">nexus_core_v4.2.exe</div>
            </div>
            
            <div className="p-6 h-64 flex flex-col justify-between font-mono text-left">
              <div className="space-y-2">
                <div className="text-gray-400 text-sm">
                  <span className="text-neon-cyan">sys_admin@nexus:~$</span> initiate_sequence --target=all
                </div>
                <div className="text-gray-500 text-sm">
                  [SUCCESS] Core modules loaded.<br/>
                  [READY] Awaiting user input...
                </div>
                {response && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="text-neon-purple text-sm mt-4 p-2 bg-neon-purple/5 border-l-2 border-neon-purple"
                  >
                    <span className="font-bold text-xs uppercase tracking-wider mb-1 block text-neon-purple/70">Nexus Output</span>
                    {response}
                    <span className="inline-block w-2 h-4 bg-neon-purple ml-1 animate-pulse" />
                  </motion.div>
                )}
              </div>

              <form onSubmit={handleSimulateAI} className="mt-4 relative flex items-center">
                <span className="text-neon-cyan mr-2">{">"}</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Nexus anything..."
                  className="w-full bg-transparent border-none text-white focus:ring-0 placeholder-gray-700 outline-none"
                />
                <button type="submit" className="text-gray-500 hover:text-white transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}