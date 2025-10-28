import React from "react";
import { Sparkles, Zap, Cpu } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Playful motion",
    desc: "Smooth, high-performance animations powered by Framer Motion.",
  },
  {
    icon: Zap,
    title: "Lighting effects",
    desc: "Tasteful gradients and glows elevate your dark UI aesthetic.",
  },
  {
    icon: Cpu,
    title: "3D ready",
    desc: "Drop-in Spline scenes bring your hero to life with real-time 3D.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why teams choose Lumen</h2>
          <p className="mt-3 text-slate-400">A focused set of building blocks that look great and feel fast.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <Icon className="h-6 w-6 text-yellow-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
