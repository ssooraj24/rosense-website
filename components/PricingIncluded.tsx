"use client";

import { CheckCircle2, Sparkles, Brain, Shield, Sliders } from "lucide-react";

export default function PricingIncluded() {
  const pillars = [
    {
      category: "Intelligence & Analytics",
      icon: Brain,
      color: "text-[#10B981]",
      features: [
        {
          title: "AI Meeting Intelligence",
          desc: "Automated transcription, speaker identification, and timestamped audio sync.",
        },
        {
          title: "Decision & Risk Tracking",
          desc: "Automated extraction and tagging of key decisions, risks, and strategic commitments.",
        },
        {
          title: "Searchable Knowledge Base",
          desc: "Natural language search across historical audio, video, transcripts, and meeting notes.",
        },
        {
          title: "Action Item Extraction",
          desc: "Smart task detection, assignment tracking, and automated summary distribution.",
        },
      ],
    },
    {
      category: "Security & Governance",
      icon: Shield,
      color: "text-[#10B981]",
      features: [
        {
          title: "Role-Based Access Controls",
          desc: "Granular data visibility policies, department-level rules, and SSO integration.",
        },
        {
          title: "Air-Gapped Data Residency",
          desc: "Strict physical isolation ensuring zero data ever leaves your corporate network.",
        },
        {
          title: "Instant Crypto-Shredding",
          desc: "Hardware key-vault architecture enabling emergency data destruction in 1 second.",
        },
        {
          title: "Automated Audit Logging",
          desc: "Comprehensive compliance logging for all meeting accesses, searches, and exports.",
        },
      ],
    },
    {
      category: "Administration & Integrations",
      icon: Sliders,
      color: "text-[#10B981]",
      features: [
        {
          title: "Admin Governance Dashboard",
          desc: "Centralized panel for system health monitoring, licensing, and usage auditing.",
        },
        {
          title: "User & Seat Management",
          desc: "Flexible provisioning, department group management, and Active Directory sync.",
        },
        {
          title: "Enterprise APIs & Webhooks",
          desc: "Extensive REST API endpoints and real-time event webhooks for custom workflows.",
        },
        {
          title: "Multi-Language Support",
          desc: "Robust multilingual transcription and translation for global enterprise teams.",
        },
      ],
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Platform Baseline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Every Deployment Includes <span className="text-gradient-emerald">Full Core Capabilities</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Regardless of whether you choose Private Box, Enterprise On-Prem, or Cloud Deployment, you receive our complete enterprise feature suite.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center border border-[#10B981]/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{pillar.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {pillar.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                        <div>
                          <div className="text-sm font-bold text-white">{feat.title}</div>
                          <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">{feat.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
