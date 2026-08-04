"use client";

import { ShieldCheck, Server, Key, Cpu, Sparkles } from "lucide-react";

export default function PricingTrust() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "100% Private Deployment",
      subtitle: "Zero Data Leakage",
      description: "All speech processing, meeting intelligence, and vector indexes remain strictly within your physical perimeter.",
    },
    {
      icon: Server,
      title: "Runs on Your Infrastructure",
      subtitle: "Flexible Hardware Topology",
      description: "Deploy on turnkey Private Box appliances, your existing data center GPU clusters, or secure private cloud environments.",
    },
    {
      icon: Key,
      title: "Own Your AI Models",
      subtitle: "Full Intellectual Sovereignty",
      description: "Retain complete ownership over your domain-specific fine-tuned models, meeting transcripts, and knowledge graphs.",
    },
    {
      icon: Cpu,
      title: "No Per-Token Billing",
      subtitle: "Predictable Financial Planning",
      description: "Eliminate unexpected usage meters. Pay straightforward infrastructure licensing that scales predictably with your organization.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#10B981]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Enterprise Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Why Enterprises Choose <span className="text-gradient-emerald">RoSense AI</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Built from the ground up for organizations that demand total data sovereignty and transparent infrastructure costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/60 border border-slate-700/70 rounded-2xl p-6 hover:border-[#10B981]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-5 border border-[#10B981]/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{pillar.title}</h3>
                  <div className="text-xs font-semibold text-[#10B981] mb-3">{pillar.subtitle}</div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
