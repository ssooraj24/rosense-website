"use client";

import { ShieldCheck, Lock, FileText, Cpu, Eye, Network, Key, Trash2 } from "lucide-react";

export default function SecurityVault() {
  const securityLayers = [
    {
      num: "01",
      icon: Lock,
      title: "Complete Data Isolation",
      description: "Your data is invisible to everyone else on the system. Full tenant-level separation.",
    },
    {
      num: "02",
      icon: Eye,
      title: "Full Audit Trail",
      description: "Every access, playback, search, and export is recorded. Nothing goes unnoticed.",
    },
    {
      num: "03",
      icon: Cpu,
      title: "Isolated Processing",
      description: "Audio processing runs in complete isolation — no external network access, no data leakage.",
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "AI Safety",
      description: "Built-in protections prevent data manipulation or unauthorized extraction.",
    },
    {
      num: "05",
      icon: Network,
      title: "Zero Network Leakage",
      description: "In private mode, no data ever leaves your local network. Not even once.",
    },
    {
      num: "06",
      icon: Key,
      title: "Enterprise Encryption",
      description: "Military-grade AES-256 encryption. You control the keys. Always.",
    },
    {
      num: "07",
      icon: FileText,
      title: "Leak Traceability",
      description: "Every export is watermarked. Every playback is traceable. Leaks don't go unnoticed.",
    },
    {
      num: "08",
      icon: Trash2,
      title: "Instant Data Destruction",
      description: "Delete everything in under one second. Irrecoverably. Full compliance with DPDP and GDPR.",
    },
  ];

  return (
    <section id="security" className="py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Privacy & Security</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What you say <span className="text-gradient-emerald">stays yours</span>. Always.
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Built for organizations where privacy isn't a feature — it's a requirement.
          </p>
        </div>

        {/* 8-Layer Security Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityLayers.map((layer) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.num}
                className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-[#10B981]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded">
                      LAYER {layer.num}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {layer.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {layer.description}
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
