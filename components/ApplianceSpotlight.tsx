"use client";

import Link from "next/link";
import { Server, Shield, Lock, CheckCircle2, ArrowRight, ShieldCheck, Cpu, Database } from "lucide-react";

export default function ApplianceSpotlight() {
  return (
    <section id="appliance" className="py-24 bg-gradient-dark text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Turnkey On-Premise Appliance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            The <span className="text-gradient-emerald">RoSense Private Box</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Private AI. Complete Data Sovereignty. Run enterprise conversation intelligence entirely inside your organization&apos;s infrastructure with zero public cloud dependency.
          </p>
        </div>

        {/* Enterprise Appliance Visual Showcase & Specs Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Virtual ITX Appliance Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-8 shadow-2xl emerald-glow">
              {/* Box Top Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#10B981]">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-white flex items-center gap-2">
                      <span>RoSense Private Appliance</span>
                      <span className="text-[10px] font-mono bg-[#10B981]/20 text-[#10B981] px-2 py-0.5 rounded border border-[#10B981]/30">
                        rosense.local
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      High-Performance Local AI • Plug & Play LAN Server
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-full border border-[#10B981]/20">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>AIR-GAPPED READY</span>
                </div>
              </div>

              {/* 3 Pillars Grid */}
              <div className="py-6 space-y-4 font-mono text-xs">
                <div className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                  Enterprise Capability Architecture:
                </div>

                <div className="grid grid-cols-3 gap-2 text-left">
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                    <Cpu className="w-4 h-4 text-emerald-400 mb-1" />
                    <div className="text-white text-[11px] font-bold mb-1">Private AI</div>
                    <div className="text-[10px] text-slate-400 space-y-0.5">
                      <div>✓ 100% Local</div>
                      <div>✓ Zero Internet</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                    <Database className="w-4 h-4 text-amber-400 mb-1" />
                    <div className="text-white text-[11px] font-bold mb-1">Intelligence</div>
                    <div className="text-[10px] text-slate-400 space-y-0.5">
                      <div>✓ Decisions</div>
                      <div>✓ Commitments</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                    <ShieldCheck className="w-4 h-4 text-purple-400 mb-1" />
                    <div className="text-white text-[11px] font-bold mb-1">Deployment</div>
                    <div className="text-[10px] text-slate-400 space-y-0.5">
                      <div>✓ On-Premises</div>
                      <div>✓ Air-Gapped</div>
                    </div>
                  </div>
                </div>

                {/* Enterprise Security Checklist Container */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 space-y-2">
                  <div className="text-[11px] font-bold text-white mb-2 font-mono">Enterprise Safeguards:</div>
                  <div className="space-y-1.5 text-[11px] font-sans">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Conversations never leave your infrastructure</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Zero customer data used for AI model training</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Customer-controlled deployment & auditability</span>
                    </div>
                  </div>
                </div>

                {/* Enterprise Ready Bottom Strip */}
                <div className="p-3 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-between text-xs text-[#10B981]">
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4" /> Enterprise Ready
                  </span>
                  <span className="font-mono text-[10px] text-slate-300">
                    Automated Backup • Recovery • Business Continuity
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Appliance Benefits & Value Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Complete Infrastructure Sovereignty for Your Organization.
            </h3>

            <p className="text-slate-300 text-base leading-relaxed">
              Designed for organizations with the highest security and compliance requirements. The RoSense Private Box operates strictly inside your LAN—no external AI cloud calls, no data transmission outside your perimeter.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Zero byte transmitted outside your local area network (LAN)",
                "Compact, high-performance turn-key local AI server",
                "Automated business continuity with local encrypted backups",
                "Instant 1-second master key crypto-shredding capability",
                "Role-based access control & complete audit trail integration",
                "Turnkey installation backed by dedicated enterprise AMC support",
              ].map((spec, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-slate-200">{spec}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white text-base font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all"
                id="cta-appliance-demo"
              >
                <span>Book a Private Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
