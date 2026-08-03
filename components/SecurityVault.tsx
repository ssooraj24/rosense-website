"use client";

import { ShieldCheck, Lock, FileText, Cpu, Eye, Network, Key, Trash2 } from "lucide-react";

export default function SecurityVault() {
  const securityLayers = [
    {
      num: "01",
      icon: Lock,
      title: "RBAC & Tenant RLS Isolation",
      description: "Database Row-Level Security (RLS) ensures users only access data within their assigned company scope.",
    },
    {
      num: "02",
      icon: Eye,
      title: "Immutable Audit Trail (SOC2)",
      description: "Every decrypt, audio playback, search query, and export is recorded in an un-alterable audit log.",
    },
    {
      num: "03",
      icon: Cpu,
      title: "gVisor Processing Sandbox",
      description: "Audio processing runs inside isolated Docker gVisor containers with zero external network access.",
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "Prompt Injection Protection",
      description: "Transcripts are isolated inside XML tags before AI processing to prevent malicious prompt hijacking.",
    },
    {
      num: "05",
      icon: Network,
      title: "Air-Gapped Network Firewall",
      description: "In Private Appliance mode, zero audio bytes ever leave your local area network (LAN).",
    },
    {
      num: "06",
      icon: Key,
      title: "Envelope Vault Key Management",
      description: "AES-256 GCM envelope encryption manages KEK/DEK keys via Supabase Vault.",
    },
    {
      num: "07",
      icon: FileText,
      title: "Acoustic & PDF Watermarking",
      description: "Exported transcripts include user watermarks; audio playback includes inaudible 19kHz leak-tracing pulses.",
    },
    {
      num: "08",
      icon: Trash2,
      title: "1-Sec Crypto-Shredding (DPDP)",
      description: "Deleting a workspace key in Vault instantly renders all encrypted audio and transcripts unrecoverable.",
    },
  ];

  return (
    <section id="security" className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Vault Safeguarding Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            The <span className="text-gradient-emerald">8-Layer Vault Security</span> Shield
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Designed for Chief Information Security Officers (CISOs) and enterprise compliance teams.
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
