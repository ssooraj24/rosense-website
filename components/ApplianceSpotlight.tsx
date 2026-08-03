"use client";

import Link from "next/link";
import { Cpu, Server, Shield, Lock, HardDrive, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export default function ApplianceSpotlight() {
  return (
    <section id="appliance" className="py-24 bg-gradient-dark text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Turnkey On-Premise Hardware</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            The <span className="text-gradient-emerald">RoSense Private Box</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            For organizations with extreme data confidentiality requirements. A physical ITX appliance pre-configured to run 100% offline inside your server room.
          </p>
        </div>

        {/* Hardware Render Showcase & Specs Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Virtual ITX Appliance Chassis Visual */}
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
                      <span>RoSense Appliance v3.0</span>
                      <span className="text-[10px] font-mono bg-[#10B981]/20 text-[#10B981] px-2 py-0.5 rounded border border-[#10B981]/30">
                        rosense.local
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      Ryzen 9 • RTX 5060 8GB GPU • 14.3GB Offline Models
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-full border border-[#10B981]/20">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>AIR-GAPPED READY</span>
                </div>
              </div>

              {/* Internal Architecture Stream Simulation */}
              <div className="py-6 space-y-4 font-mono text-xs">
                <div className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                  Local Processing Pipeline (Zero Public Internet):
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                    <Cpu className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                    <div className="text-white text-[11px] font-bold">WhisperX</div>
                    <div className="text-[10px] text-slate-400">4GB CUDA</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                    <Zap className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                    <div className="text-white text-[11px] font-bold">bge-large</div>
                    <div className="text-[10px] text-slate-400">CPU Embed</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                    <HardDrive className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                    <div className="text-white text-[11px] font-bold">Mamba SSM</div>
                    <div className="text-[10px] text-slate-400">5.8GB VRAM</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 space-y-2">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">Network Firewall Status:</span>
                    <span className="text-emerald-400 font-bold">UFW DENY ALL INBOUND</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">Decryption Mode:</span>
                    <span className="text-slate-200">RAM-Only BytesIO (No Temp File)</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">Local Domain:</span>
                    <span className="text-[#10B981]">http://rosense.local:3001</span>
                  </div>
                </div>

                {/* Automated 3-2-1 Backup Banner */}
                <div className="p-3 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-between text-xs text-[#10B981]">
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4" /> 3-2-1 Automated Backup Topology Active
                  </span>
                  <span className="font-mono text-[10px]">L1/L2/L3 USB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Appliance Benefits & Spec Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Complete Infrastructure Sovereignty for Your Building.
            </h3>

            <p className="text-slate-300 text-base leading-relaxed">
              The RoSense Box is a plug-and-play ITX server pre-installed with PostgreSQL pgvector, Redis, and 14.3GB of pre-loaded AI models. Plug it into your LAN, and every workshop audio file is processed strictly inside your office.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Zero byte transmitted outside your local area network (LAN)",
                "Pre-configured Ryzen 9 processor with RTX 5060 8GB GPU",
                "Stage-swapped model pipeline prevents VRAM out-of-memory crashes",
                "Automated 3-2-1 local backup (Layer 1 SATA, Layer 2 NAS, Layer 3 USB)",
                "Includes Master Vault Key with instant 1-second crypto-shredding",
                "Turnkey installation backed by dedicated security team & AMC support",
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
                <span>Request Appliance Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
