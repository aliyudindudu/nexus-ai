import React from "react";
import { Sparkles, Twitter, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-nexus-dark border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-neon-purple" />
              <span className="font-bold text-xl text-white">NEXUS AI</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Architecting the next generation of digital intelligence. 
              Autonomous, adaptive, and endlessly scalable.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-neon-cyan cursor-pointer transition-colors">Features</li>
              <li className="hover:text-neon-cyan cursor-pointer transition-colors">Integrations</li>
              <li className="hover:text-neon-cyan cursor-pointer transition-colors">Enterprise</li>
              <li className="hover:text-neon-cyan cursor-pointer transition-colors">Changelog</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-neon-cyan cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-neon-cyan cursor-pointer transition-colors">API Reference</li>
              <li className="hover:text-neon-cyan cursor-pointer transition-colors">Community</li>
              <li className="hover:text-neon-cyan cursor-pointer transition-colors">Research</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Nexus AI Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-600">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}