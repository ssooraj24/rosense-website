"use client";

import { Shield, Lock, Cpu, FileCheck2, Database } from "lucide-react";

export default function TrustBar() {
  const trustBadges = [
    {
      icon: Shield,
      title: "Zero Model Training",
      subtitle: "Your data is never used to train public AI",
      highlight: true,
    },
    {
      icon: Cpu,
      title: "Air-Gapped Ready",
      subtitle: "Runs 100% offline on your hardware",
      highlight: false,
    },
    {
      icon: Lock,
      title: "AES-256 Encrypted",
      subtitle: "RAM-only decryption & storage safety",
      highlight: false,
    },
    {
      icon: FileCheck2,
      title: "DPDP & GDPR Compliant",
      subtitle: "Right to erasure in < 1 second",
      highlight: false,
    },
    {
      icon: Database,
      title: "100% Data Sovereignty",
      subtitle: "You own all key encryption keys",
      highlight: false,
    },
  ];

  return (
    <section
      id="trust-bar"
      className="py-10 bg-slate-50 border-y border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Enterprise Safeguarding & Compliance Architecture
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trustBadges.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={idx}
                className={`p-4 rounded-xl transition-all duration-200 flex flex-col items-center text-center ${
                  badge.highlight
                    ? "bg-white border-2 border-[#10B981]/40 shadow-sm"
                    : "bg-white/80 hover:bg-white border border-slate-200 hover:border-slate-300 shadow-2xs"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 ${
                    badge.highlight
                      ? "bg-[#10B981]/10 text-[#10B981]"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {badge.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-tight">
                  {badge.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
