"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Cpu,
  FileCheck,
  UserCheck,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-50/60 via-slate-50/40 to-transparent pointer-events-none -z-10 rounded-b-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Outcome Copy & Dual CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Privacy Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-slate-200">100% Data Sovereignty</span>
              <span className="text-slate-500">•</span>
              <span className="text-[#10B981] flex items-center gap-1 font-mono">
                <Lock className="w-3 h-3" /> On-Prem & Cloud
              </span>
            </div>

            {/* Outcome Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]" id="hero-headline">
              Turn Every Business Conversation into{" "}
              <span className="text-gradient-emerald">Structured Action.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal" id="hero-subheadline">
              RoSense captures every business discussion, extracts decisions, commitments,
              risks, and insights, then builds a permanent, searchable memory for your
              enterprise—without compromising privacy.
            </p>

            {/* Dual CTAs Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2" id="hero-cta-group">
              <Link
                href="#appliance"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#10B981] hover:bg-[#059669] text-white text-base font-semibold px-7 py-4 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                id="cta-request-box"
              >
                <Cpu className="w-5 h-5" />
                <span>Request Private Box Demo</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                href="#sandbox"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 text-base font-semibold px-7 py-4 rounded-xl border border-slate-300 hover:border-slate-400 shadow-sm transition-all duration-200"
                id="cta-try-sandbox"
              >
                <Sparkles className="w-4 h-4 text-[#10B981]" />
                <span>Try Live Sandbox</span>
              </Link>
            </div>

            {/* Quick Micro-Trust Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 border-t border-slate-100 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span className="text-xs text-slate-600 font-medium">Zero Model Training</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span className="text-xs text-slate-600 font-medium">Air-Gapped Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span className="text-xs text-slate-600 font-medium">AES-256 Encrypted</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Visual Waveform & Decision Transformation Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Card Glass Container */}
              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl text-white relative overflow-hidden">
                {/* Accent Top Ribbon Glow */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#10B981]/20 rounded-full blur-2xl pointer-events-none" />

                {/* Card Header: Live Audio Ingestion Simulation */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="w-10 h-10 rounded-full bg-[#10B981] hover:bg-[#059669] flex items-center justify-center text-white transition-all shadow-md"
                      aria-label="Simulate audio playback"
                      id="hero-audio-play-toggle"
                    >
                      {isPlayingAudio ? (
                        <Pause className="w-4 h-4 fill-white" />
                      ) : (
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      )}
                    </button>
                    <div>
                      <div className="text-xs font-semibold text-white flex items-center gap-2">
                        <span>Strategy_Offsite_Day1.m4a</span>
                        <span className="text-[10px] font-mono bg-[#10B981]/20 text-[#10B981] px-1.5 py-0.5 rounded">
                          RAM-Only
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        Duration: 04:18:22 • Diarized (4 Speakers)
                      </div>
                    </div>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-[#10B981] animate-ping" />
                </div>

                {/* Waveform Visualization */}
                <div className="py-4 flex items-center justify-between gap-1 h-12">
                  {[40, 65, 30, 80, 95, 45, 60, 100, 75, 40, 90, 50, 70, 85, 35, 95, 60, 80, 45, 75, 90, 40, 60].map(
                    (height, idx) => (
                      <div
                        key={idx}
                        className={`w-1 rounded-full transition-all duration-300 ${
                          isPlayingAudio
                            ? "bg-[#10B981] animate-pulse"
                            : "bg-slate-700"
                        }`}
                        style={{ height: `${isPlayingAudio ? Math.max(15, (height * Math.random()) + 20) : height}%` }}
                      />
                    )
                  )}
                </div>

                {/* Live Extraction Stream Badge */}
                <div className="my-2 flex items-center gap-2 text-[11px] font-mono text-[#10B981] bg-[#10B981]/10 px-3 py-1.5 rounded-lg border border-[#10B981]/20">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>Mamba-3 SSM Extracting Decisions & Commitments...</span>
                </div>

                {/* Output Transformation Preview Cards */}
                <div className="space-y-3 pt-2">
                  {/* Decision Item */}
                  <div className="rounded-xl bg-slate-800/80 border border-slate-700/80 p-3.5 hover:border-[#10B981]/50 transition-colors">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                        <FileCheck className="w-3.5 h-3.5" /> DECISION #01
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Timestamp [01:42:15]</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed font-medium">
                      "Approved Q4 expansion strategy targeting European enterprise accounts."
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-400">
                      <UserCheck className="w-3 h-3 text-slate-400" />
                      <span>Speaker: Rahul (VP Ops)</span>
                    </div>
                  </div>

                  {/* Commitment Item */}
                  <div className="rounded-xl bg-slate-800/80 border border-slate-700/80 p-3.5 hover:border-[#10B981]/50 transition-colors">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-semibold text-amber-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" /> ACTION COMMITMENT
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Due: Aug 15</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed font-medium">
                      "Finalize security audit compliance documentation for DPDP readiness."
                    </p>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Owner: Priya (Security Lead)</span>
                      <span className="text-[#10B981] hover:underline cursor-pointer font-mono text-[10px]">
                        ▶ Listen Proof (20s)
                      </span>
                    </div>
                  </div>

                  {/* Risk Alert */}
                  <div className="rounded-xl bg-slate-800/80 border border-slate-700/80 p-3.5">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-rose-400 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5" /> RISK IDENTIFIED
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">[03:10:04]</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Third-party API latency on legacy systems could delay migration.
                    </p>
                  </div>
                </div>

                {/* Footer Vault Shield Callout */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" /> AES-256 Encrypted at Rest
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">
                    Vault Key: company_k39a
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
