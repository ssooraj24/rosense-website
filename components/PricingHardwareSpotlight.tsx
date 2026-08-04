"use client";

import { useState } from "react";
import { Cpu, ShieldCheck, HardDrive, Key, Lock, ArrowRight, Zap, CheckCircle2, SlidersHorizontal, Award, Layers } from "lucide-react";
import Link from "next/link";

export default function PricingHardwareSpotlight() {
  const [activeTab, setActiveTab] = useState<string>("hardware");

  const tabs = [
    { id: "hardware", label: "Hardware & GPU", icon: Cpu },
    { id: "deployment", label: "Deployment", icon: Zap },
    { id: "security", label: "Security & Air-Gap", icon: Lock },
    { id: "expandability", label: "Expandability", icon: Layers },
    { id: "support", label: "Warranty & Support", icon: Award },
  ];

  const tabDetails: Record<string, { title: string; desc: string; items: string[] }> = {
    hardware: {
      title: "High-Performance Turnkey Hardware Specification",
      desc: "Pre-configured workstation/server chassis equipped with dedicated onboard GPU acceleration optimized for continuous local meeting processing.",
      items: [
        "Compact ITX Server Chassis with Silent Cooling Architecture",
        "Onboard GPU Acceleration for High-Speed Local Speech Ingestion",
        "High-Speed NVMe Storage RAID for Low-Latency Vector Indexing",
        "Low-Power Operational Footprint Built for Continuous Duty",
      ],
    },
    deployment: {
      title: "Plug-and-Play LAN Deployment Topology",
      desc: "Zero complex cloud dependencies. Simply plug the Private Box into your network switch and access the local web console immediately.",
      items: [
        "Turnkey `rosense.local` Network Switch Connection",
        "Pre-Loaded Local AI Models & Meeting Processing Pipeline",
        "Zero Internet Connection Required for Processing",
        "On-Site Network Setup & Domain Integration Included",
      ],
    },
    security: {
      title: "100% Air-Gapped Data Sovereignty & Encryption",
      desc: "Complete physical data isolation ensuring no audio, video, or transcription data ever crosses your corporate perimeter.",
      items: [
        "100% Offline Processing — Zero Third-Party API Calls",
        "1-Second Instant Crypto-Shredding Key Vault",
        "AES-256 Encrypted Local Meeting Vault",
        "Granular Role-Based Access Controls (RBAC)",
      ],
    },
    expandability: {
      title: "Modular Component Scaling & Upgradeability",
      desc: "Designed to evolve as your organization's meeting volume and AI model parameter requirements scale over time.",
      items: [
        "Expandable GPU Capacity for Higher Concurrent Processing",
        "Upgradeable RAM for Larger Context Window Requirements",
        "Modular Storage Bays for Extended Archive Retention",
        "Seamless In-Field Component Swap Support",
      ],
    },
    support: {
      title: "Enterprise Warranty & On-Site Operational Support",
      desc: "Complete hardware warranty coverage backed by dedicated AI support engineers for seamless operational reliability.",
      items: [
        "1-Year Comprehensive Hardware Warranty & Advance Replacement",
        "Annual Maintenance Contract (AMC) for Software Updates",
        "Dedicated Enterprise AI Engineering Support",
        "On-Site Staff Training & Administrator Onboarding",
      ],
    },
  };

  const currentContent = tabDetails[activeTab];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Ambient Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#10B981]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Product Showcase Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Product Showcase Launch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            RoSense Private Box — <span className="text-gradient-emerald">Enterprise AI Appliance</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Turnkey AI infrastructure ready in minutes. Physical data sovereignty, zero cloud latency, and 100% air-gapped security.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-[#10B981] text-slate-950 shadow-lg shadow-emerald-950/50 scale-[1.02]"
                    : "bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Showcase Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Showcase Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {currentContent.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {currentContent.desc}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {currentContent.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/60 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/company/contact"
                  className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg text-sm"
                >
                  <span>Request Private Box Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Product Graphic Visual Container */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[320px]">
              <div className="w-24 h-24 rounded-3xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-6 border border-[#10B981]/30 shadow-2xl animate-pulse">
                <Cpu className="w-12 h-12" />
              </div>

              <div className="text-lg font-black text-white">RoSense Private Box</div>
              <div className="text-xs font-mono text-[#10B981] mt-1">Status: Air-Gapped / Active</div>

              <div className="mt-6 inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-xs text-slate-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span>Local Web Console: `rosense.local`</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
