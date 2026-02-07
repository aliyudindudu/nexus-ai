"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nexus-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-neon-purple" />
            <span className="font-bold text-xl tracking-tight text-white">
              NEXUS AI
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#" className="hover:text-neon-cyan transition-colors text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Features</Link>
              <Link href="#" className="hover:text-neon-cyan transition-colors text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Solutions</Link>
              <Link href="#" className="hover:text-neon-cyan transition-colors text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white px-5 py-2 rounded-full font-medium hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all transform hover:scale-105">
              Get Early Access
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-nexus-gray border-b border-white/5"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</Link>
            <Link href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Solutions</Link>
            <Link href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</Link>
            <button className="w-full mt-4 bg-gradient-to-r from-neon-purple to-neon-cyan text-white px-5 py-2 rounded-full font-medium">
              Get Early Access
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}