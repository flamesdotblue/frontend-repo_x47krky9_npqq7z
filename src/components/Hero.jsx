import React from "react";
import Spline from "@splinetool/react-spline";
import { LampContainer } from "./ui/lamp";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full bg-slate-950 pt-16">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/tQoseAAHmVqmck9e/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950"></div>

      <div className="relative z-10">
        <LampContainer className="bg-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-yellow-300 to-white bg-clip-text text-transparent">
              Illuminate your product ideas
            </h1>
            <p className="mt-4 text-slate-300 text-base md:text-lg">
              A creative toolkit for building interactive, light-inspired experiences with delightful motion.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#demo" className="px-5 py-2.5 rounded-md bg-yellow-400 text-slate-900 font-medium hover:bg-yellow-300 transition">
                See Live Demo
              </a>
              <a href="#features" className="px-5 py-2.5 rounded-md border border-white/20 text-white hover:bg-white/10 transition">
                Explore Features
              </a>
            </div>
          </div>
        </LampContainer>
      </div>
    </section>
  );
}
