import React from "react";
import { Rocket, Star, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <Rocket className="h-6 w-6 text-yellow-400" />
          <span className="font-semibold tracking-tight">Lumen Labs</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#demo" className="hover:text-white transition">Demo</a>
          <a href="#about" className="hover:text-white transition flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400" />
            About
          </a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 text-slate-300">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
