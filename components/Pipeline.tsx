"use client";

import { useState } from "react";
import { Mic, FileCode2, Share2, Sparkles, Check, ArrowRight } from "lucide-react";

export default function Pipeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "listen",
      number: "01",
      title: "Listen",
      subtitle: "Multi-Hour Audio Ingestion & Speaker Diarization",
      description:
        "Upload multi-hour recordings, boardroom sessions, or multi-day workshop audio. RoSense accurately transcribes and identifies every speaker without losing context.",
      icon: Mic,
      details: [
        "Handles 18+ hour recordings without context degradation",
        "Pyannote 3.1 speaker diarization identifies who spoke when",
        "RAM-only decryption preserves raw audio confidentiality",
      ],
      badge: "WhisperX + Pyannote 3.1",
    },
    {
      id: "structure",
      number: "02",
      title: "Structure",
      subtitle: "Zero-Shot Decision & Commitment Extraction",
      description:
        "Instead of generic text paragraphs, Mamba-3 SSM parses conversations to extract concrete business decisions, action commitments, owners, and open risks.",
      icon: FileCode2,
      details: [
        "Extracts Decisions, Commitments (Who, What, By When), and Risks",
        "No KV-cache memory crashes on long-form discussions",
        "Prompt-shielded against human speech injection",
      ],
      badge: "Mamba-3 State-Space Model",
    },
    {
      id: "deliver",
      number: "03",
      title: "Deliver",
      subtitle: "Executive Memory & Workflow Integration",
      description:
        "Output structured intelligence into your internal tools, export executive briefing PDFs, or query months of company memory with sub-second RAG search.",
      icon: Share2,
      details: [
        "1-Click Audio Jump links decisions back to exact 20s audio proof",
        "Automated Webhooks to Nisol Studio, CRM & internal workflows",
        "Sub-second RAG semantic search powered by pgvector",
      ],
      badge: "pgvector RAG + Webhooks",
    },
  ];

  return (
    <section
      id="pipeline"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Transformation Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            How RoSense AI Works:{" "}
            <span className="text-gradient-emerald">Listen ➔ Structure ➔ Deliver</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From raw, chaotic meeting audio to structured, actionable enterprise intelligence.
          </p>
        </div>

        {/* Step Selector Buttons */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 border ${
                  isActive
                    ? "bg-slate-900 text-white border-slate-800 shadow-xl scale-[1.02]"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200"
                }`}
                id={`pipeline-step-${step.id}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md ${
                      isActive
                        ? "bg-[#10B981] text-slate-950"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    STEP {step.number}
                  </span>
                  <Icon
                    className={`w-6 h-6 ${
                      isActive ? "text-[#10B981]" : "text-slate-500"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                <p
                  className={`text-xs ${
                    isActive ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {step.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 text-white shadow-2xl relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full border border-[#10B981]/20">
                <span>{steps[activeStep].badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {steps[activeStep].title}: {steps[activeStep].subtitle}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="space-y-3 pt-2">
                {steps[activeStep].details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-slate-200">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Mock View */}
            <div className="lg:col-span-5 rounded-xl bg-slate-950 border border-slate-800 p-6 space-y-4 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-800 text-[11px]">
                <span>STAGE {steps[activeStep].number} EXECUTION</span>
                <span className="text-[#10B981]">Status: Complete</span>
              </div>

              {activeStep === 0 && (
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-emerald-400 text-[11px] font-semibold mb-1">
                      ▶ Ingesting 14.3GB Audio Stream
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      File: Executive_Offsite_FullDay.m4a (18h 45m)
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-slate-300 text-[11px] font-semibold mb-1">
                      Pyannote Diarization Matrix
                    </div>
                    <div className="text-slate-400 text-[10px] space-y-1">
                      <div>Speaker 01: CEO (34% talk time)</div>
                      <div>Speaker 02: VP Engineering (28% talk time)</div>
                      <div>Speaker 03: Lead Counsel (18% talk time)</div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-amber-400 text-[11px] font-semibold mb-1">
                      JSON Extraction Output
                    </div>
                    <pre className="text-[10px] text-slate-300 overflow-x-auto">
{`{
  "decision": "Migrate core DB to pgvector",
  "owner": "Siddharth",
  "due_date": "2026-09-01",
  "risk": "Legacy API dependency"
}`}
                    </pre>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[#10B981] text-[11px] font-semibold mb-1">
                      Enterprise Search Query
                    </div>
                    <div className="text-slate-300 text-[11px]">
                      "What did CEO decide regarding European launch?"
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-emerald-500/30">
                    <div className="text-slate-200 text-[11px]">
                      Result: Approved Q4 rollout. [02:14:10]
                    </div>
                    <div className="mt-2 text-[#10B981] text-[10px] font-bold">
                      ▶ Play 20s Audio Proof
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                  className="text-xs font-semibold text-[#10B981] hover:underline flex items-center gap-1"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
