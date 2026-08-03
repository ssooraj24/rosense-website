"use client";

import { Shield, Clock, Link2, Search, Check, X } from "lucide-react";

export default function OutcomeCards() {
  const outcomes = [
    {
      icon: Shield,
      title: "Total Boardroom Confidentiality",
      description:
        "Speak freely about mergers, pricing strategy, and confidential roadmaps. Your conversations never train public models or leak into vendor clouds.",
      rosense: "100% Zero-Trust, Encrypted RAM-Only execution, Optional Air-Gapped Appliance",
      traditional: "Public cloud storage, data retention for vendor model training",
    },
    {
      icon: Clock,
      title: "Zero Lost Details in Long Sessions",
      description:
        "Built specifically for multi-day strategy offsites, board meetings, and full-day workshops where standard note-takers fail or cut off.",
      rosense: "Mamba-3 State-Space Model handles 18+ hours without context memory crashes",
      traditional: "Optimized for short 30-60 min calls; degrades or fails on long audio",
    },
    {
      icon: Link2,
      title: "Decision Traceability & Proof",
      description:
        "Never argue about who agreed to what. Every decision, commitment, and risk links to the exact speaker and a 1-click 20s decrypted audio snippet.",
      rosense: "Instant 1-Click Audio Jump proof with speaker verification",
      traditional: "Decisions buried inside static text transcripts and generic summaries",
    },
    {
      icon: Search,
      title: "Instant Organizational Memory",
      description:
        "Stop asking 'didn't we discuss this six months ago?' Search across your entire company's conversation history as easily as searching Google.",
      rosense: "Unified pgvector RAG memory connecting workshops across teams",
      traditional: "Meeting notes remain isolated inside individual files or user inboxes",
    },
  ];

  return (
    <section id="outcomes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Why Enterprise Leaders Choose <span className="text-gradient-emerald">RoSense AI</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Beyond basic meeting notes. Built for enterprise decision-making, governance, and long-term memory.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#10B981]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#10B981] flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80 flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#059669] uppercase tracking-wide">
                          RoSense AI Solution
                        </div>
                        <div className="text-xs font-semibold text-slate-800 mt-0.5">
                          {item.rosense}
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                          Traditional Meeting Assistants
                        </div>
                        <div className="text-xs text-slate-600 mt-0.5">
                          {item.traditional}
                        </div>
                      </div>
                    </div>
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
