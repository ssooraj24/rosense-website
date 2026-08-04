"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchSandbox from "@/components/SearchSandbox";
import {
  Sparkles,
  ArrowRight,
  Check,
  X,
  Mic,
  Brain,
  Search,
  CheckCircle2,
  AlertTriangle,
  Clock,
  User,
  Play,
  Volume2,
  Copy,
  Bookmark,
  Share2,
  FileText,
  Database,
  Lock,
  Layers,
  ArrowUpRight,
  Shield,
  Zap,
  Building2,
  Network,
  ChevronRight,
  Bot,
  FileCode2,
  Calendar,
  Users,
  Briefcase,
  HelpCircle,
  TrendingUp,
  Sliders,
  Server,
  HardDrive,
} from "lucide-react";

export default function PlatformOverviewPage() {
  const [playingAudio, setPlayingAudio] = useState(false);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [activeFlowIndex, setActiveFlowIndex] = useState<number>(0);

  const copyToClipboard = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Flow Timeline Steps (Section 3) with Model Capabilities
  const flowSteps = [
    {
      step: "01",
      icon: Mic,
      title: "Meeting",
      desc: "Captures multi-hour audio streams across physical rooms & virtual calls.",
      modelTech: "Multi-Channel Audio Intake Engine",
      spec: "Sample Rate: 16kHz | 24-bit FLAC | Dual-stream redundancy",
      details: "Captures physical room microphones, Zoom/Teams webhooks, and raw board room audio without cloud transmission.",
    },
    {
      step: "02",
      icon: Database,
      title: "Capture",
      desc: "High-fidelity local capture with automatic acoustic noise cancellation.",
      modelTech: "Acoustic DSP & Reverberation Removal",
      spec: "SNR Boost: +18dB | Zero-latency local ring buffer",
      details: "Filters HVAC rumble, room echo, and keyboard clicks before passing clean spectral frames to speech models.",
    },
    {
      step: "03",
      icon: Brain,
      title: "Understand",
      desc: "WhisperX speaker diarization & deep context preservation.",
      modelTech: "WhisperX + Pyannote 3.1 Diarization",
      spec: "Word Error Rate < 2.8% | Diarization Accuracy 97.4%",
      details: "Performs precise speaker identification with word-level phoneme timestamps and overlapping speech resolution.",
    },
    {
      step: "04",
      icon: Zap,
      title: "Extract",
      desc: "Mamba-3 SSM parses decisions, commitments, owners & risks.",
      modelTech: "Mamba-3 State Space Model (SSM)",
      spec: "128k Context Window | Sub-second extraction latency",
      details: "Identifies decisions, action items, risks, and commitments without context window truncation or hallucination.",
    },
    {
      step: "05",
      icon: Layers,
      title: "Structure",
      desc: "Normalizes unstructured conversations into standard schema & entity relationships.",
      modelTech: "JSON-LD & Enterprise Schema Engine",
      spec: "Schema.org + Custom Enterprise Taxonomies",
      details: "Normalizes raw transcript snippets into structured JSON-LD entity nodes linked to owners, dates, and topics.",
    },
    {
      step: "06",
      icon: Network,
      title: "Enterprise Memory",
      desc: "Connects decisions across months of past and present organization meetings.",
      modelTech: "Temporal Graph Vector Engine",
      spec: "Sub-50ms Graph Traversal | Cross-meeting linkage",
      details: "Connects today's decisions to historical strategy sessions from months or years ago into a cohesive memory graph.",
    },
    {
      step: "07",
      icon: Search,
      title: "Search",
      desc: "Sub-second RAG search via pgvector across all company knowledge.",
      modelTech: "pgvector + bge-large-en-v1.5 RAG",
      spec: "Dense Retrieval Latency < 180ms | Hybrid BM25 + HNSW",
      details: "Enables instant natural language search across thousands of hours of historical transcript data with 1-click audio proof.",
    },
    {
      step: "08",
      icon: Share2,
      title: "Reuse",
      desc: "Instant onboarding for new hires and seamless multi-team context sharing.",
      modelTech: "Multi-Tenant Access Control & RBAC Gateway",
      spec: "Row-Level Security (RLS) | AES-256 encrypted payload",
      details: "Safely surfaces historical context to new team members according to department-level access control rules.",
    },
    {
      step: "09",
      icon: TrendingUp,
      title: "Business Outcomes",
      desc: "Flawless execution with zero forgotten commitments or repeated discussions.",
      modelTech: "Continuous Execution Audit & Task Sync",
      spec: "100% Traceability to audio proof | Zero lost commitments",
      details: "Guarantees that every agreement made in meetings translates directly into tracked, verifiable business execution.",
    },
  ];

  // Taxonomy Grid (Section 4)
  const taxonomyItems = [
    { label: "Decisions", icon: CheckCircle2, desc: "Agreed strategies & strategic choices" },
    { label: "Commitments", icon: Briefcase, desc: "Promised deliverables & milestones" },
    { label: "Action Items", icon: FileText, desc: "Assigned tasks with assigned owners" },
    { label: "Risks", icon: AlertTriangle, desc: "Identified threats & blockers" },
    { label: "Issues", icon: HelpCircle, desc: "Current operational bottlenecks" },
    { label: "Dependencies", icon: Network, desc: "Cross-functional team blockers" },
    { label: "Deadlines", icon: Calendar, desc: "Target dates & SLAs" },
    { label: "Owners", icon: Users, desc: "Accountable leaders & assignees font-semibold" },
    { label: "Questions", icon: HelpCircle, desc: "Unresolved queries needing follow-up" },
    { label: "Customer Feedback", icon: User, desc: "Direct voice of customer insights" },
    { label: "Business Insights", icon: Brain, desc: "Market & operational observations" },
    { label: "Knowledge Gaps", icon: Sliders, desc: "Areas requiring additional research" },
  ];

  // Deliver to Workflows (Section 8)
  const workflowCards = [
    {
      icon: FileText,
      title: "Executive Briefings",
      desc: "Export structured, board-ready PDF summaries immediately following high-stakes strategy sessions.",
      tag: "PDF Export",
    },
    {
      icon: Building2,
      title: "CRM Integration",
      desc: "Automatically push client commitments, objections, and deal risks directly into Salesforce or HubSpot.",
      tag: "Salesforce / CRM",
    },
    {
      icon: Share2,
      title: "Team Hub Sync",
      desc: "Dispatch instant action items and key decisions directly into Notion databases and Slack channels.",
      tag: "Notion & Slack",
    },
    {
      icon: FileCode2,
      title: "API & Webhooks",
      desc: "Build custom automated workflows into your existing enterprise software via high-throughput webhooks.",
      tag: "Coming Soon",
      isComingSoon: true,
    },
  ];

  // Deployment Models (Section 9)
  const deploymentModels = [
    {
      name: "Cloud Sandbox",
      subtitle: "Instant Evaluation",
      desc: "Ideal for testing and small teams evaluating RoSense capabilities in a secure cloud environment.",
      features: [
        "5 Hours / month free processing",
        "Sub-second RAG search",
        "Standard decision extraction",
        "Web browser access",
      ],
      ctaText: "Start Free Trial",
      ctaLink: "/pricing",
      highlight: false,
    },
    {
      name: "Private Appliance",
      subtitle: "Flagship Hardware Box",
      desc: "Dedicated physical server box (Ryzen 9 + RTX 5060) placed directly in your office server room.",
      features: [
        "100% On-premise offline processing",
        "14.3GB pre-loaded local AI models",
        "Zero data transmission outside your LAN",
        "Hardware security isolation",
      ],
      ctaText: "Explore Appliance Specs",
      ctaLink: "/platform/appliance",
      highlight: true,
    },
    {
      name: "Air-Gapped Enterprise",
      subtitle: "Maximum Sovereignty",
      desc: "Completely isolated deployment for defense, financial, and government organizations with strict data mandates.",
      features: [
        "Zero internet connection required",
        "Custom compliance & DPDP audit logs",
        "Full database encryption at rest",
        "Dedicated enterprise SLA & support",
      ],
      ctaText: "Contact Sales",
      ctaLink: "/company/contact",
      highlight: false,
    },
  ];

  // Outcomes (Section 10)
  const outcomes = [
    { title: "Faster Decisions", desc: "Eliminate days wasted re-discussing topics already settled in previous meetings." },
    { title: "Better Accountability", desc: "Clear owner attribution and audio-proven commitments ensure follow-through." },
    { title: "Zero Lost Knowledge", desc: "Preserve historical context even when key employees or project leads transition." },
    { title: "Reduced Overhead", desc: "Dramatically decrease unnecessary status check-ins and follow-up synchronization calls." },
    { title: "Organizational Memory", desc: "Build an interconnected knowledge graph that grows smarter with every meeting." },
    { title: "AI Search Across All", desc: "Find any past agreement, objection, or technical decision in under 200 milliseconds." },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-[#10B981] selection:text-white">
      <Navbar />

      <main className="pt-24" id="platform-main">
        {/* =========================================================================
            SECTION 01: HERO — "ENTERPRISE MEMORY ENGINE"
           ========================================================================= */}
        <section className="bg-slate-950 text-white py-24 relative overflow-hidden border-b border-slate-800">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Enterprise Memory Engine</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                Every Important Conversation Becomes{" "}
                <span className="text-gradient-emerald">Actionable Knowledge</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
                RoSense captures business discussions, identifies decisions, commitments, risks, and insights, and transforms them into structured organizational memory that your teams can search and reuse—deployed securely on your terms.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/company/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all"
                  id="hero-demo-btn"
                >
                  <span>Book a Private Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/platform/appliance"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base px-7 py-4 rounded-xl border border-slate-700 transition-all"
                  id="hero-appliance-btn"
                >
                  <Lock className="w-4 h-4 text-[#10B981]" />
                  <span>Explore Appliance Specs</span>
                </Link>
              </div>

              {/* Visual Stylized Knowledge Graph Container */}
              <div className="pt-12 max-w-4xl mx-auto">
                <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden emerald-glow-sm">
                  <div className="flex flex-wrap items-center justify-around gap-6 text-left">
                    <div className="flex items-center gap-3 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                      <div className="w-10 h-10 rounded-lg bg-[#10B981]/20 text-[#10B981] flex items-center justify-center font-bold">
                        Q1
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-mono">Board Offsite</div>
                        <div className="text-sm font-semibold text-white">SAP Migration Approved</div>
                      </div>
                    </div>

                    <div className="hidden sm:block text-slate-600 font-mono text-xl">➔</div>

                    <div className="flex items-center gap-3 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                      <div className="w-10 h-10 rounded-lg bg-[#10B981]/20 text-[#10B981] flex items-center justify-center font-bold">
                        Q2
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-mono">Risk Workshop</div>
                        <div className="text-sm font-semibold text-white">Legacy Latency Flagged</div>
                      </div>
                    </div>

                    <div className="hidden sm:block text-slate-600 font-mono text-xl">➔</div>

                    <div className="flex items-center gap-3 bg-[#10B981]/10 p-3.5 rounded-xl border border-[#10B981]/40">
                      <div className="w-10 h-10 rounded-lg bg-[#10B981] text-slate-950 flex items-center justify-center font-bold">
                        NOW
                      </div>
                      <div>
                        <div className="text-xs text-[#10B981] font-mono">Sub-second Search</div>
                        <div className="text-sm font-bold text-white">Connected Memory Active</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 02: TRADITIONAL VS. ROSENSE (SIDE-BY-SIDE COMPARISON)
           ========================================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Traditional Meeting Assistants vs. <span className="text-[#10B981]">RoSense AI</span>
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                Why standard transcription bots fail enterprise organizations—and how structured company memory solves it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Traditional Side */}
              <div className="rounded-2xl bg-white border border-rose-200 p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Legacy Paradigm
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <X className="w-5 h-5 text-rose-500" />
                  Traditional Assistant
                </h3>

                <div className="space-y-4 font-medium text-slate-700">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-slate-500">Input</span>
                    <span className="font-semibold text-slate-800">Raw Conversation</span>
                  </div>
                  <div className="text-center text-slate-400 text-sm">↓</div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-rose-50/50 border border-rose-100 text-rose-900">
                    <span>Processing</span>
                    <span className="font-semibold">Unstructured Notes / Transcript</span>
                  </div>
                  <div className="text-center text-slate-400 text-sm">↓</div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-rose-50/80 border border-rose-200 text-rose-900">
                    <span>Outcome</span>
                    <span className="font-semibold">Forgotten in Silos</span>
                  </div>
                  <div className="text-center text-slate-400 text-sm">↓</div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-rose-100 border border-rose-300 text-rose-950 font-bold">
                    <span>Result</span>
                    <span className="flex items-center gap-1.5 text-rose-700">
                      <X className="w-4 h-4" /> Knowledge Lost
                    </span>
                  </div>
                </div>
              </div>

              {/* RoSense Side */}
              <div className="rounded-2xl bg-slate-900 text-white border border-[#10B981]/50 p-8 shadow-xl relative overflow-hidden emerald-glow-sm">
                <div className="absolute top-0 right-0 bg-[#10B981] text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  RoSense Enterprise
                </div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                  RoSense AI Memory Engine
                </h3>

                <div className="space-y-4 font-medium text-slate-200">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800 border border-slate-700">
                    <span className="text-slate-400">Input</span>
                    <span className="font-semibold text-white">Raw Conversation</span>
                  </div>
                  <div className="text-center text-[#10B981] text-sm">↓</div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                    <span>Processing</span>
                    <span className="font-semibold text-[#10B981]">Captured & Structured (Mamba-3)</span>
                  </div>
                  <div className="text-center text-[#10B981] text-sm">↓</div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/90 border border-slate-700">
                    <span>Outcome</span>
                    <span className="font-semibold text-[#10B981]">Connected Knowledge Graph</span>
                  </div>
                  <div className="text-center text-[#10B981] text-sm">↓</div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#10B981]/20 border border-[#10B981] text-white font-bold">
                    <span>Result</span>
                    <span className="flex items-center gap-1.5 text-[#10B981]">
                      <Check className="w-4 h-4 stroke-[3]" /> Searchable Forever ✅
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 03: THE ROSENSE INTELLIGENCE FLOW (VISUAL TIMELINE)
           ========================================================================= */}
        <section className="py-24 bg-slate-950 text-white relative border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <Network className="w-3.5 h-3.5" />
                <span>End-to-End Pipeline</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                The RoSense <span className="text-gradient-emerald">Intelligence Flow</span>
              </h2>
              <p className="mt-3 text-slate-300 text-base">
                Click or hover over any of the 9 stages below to expand its underlying local AI model specifications directly inside the card.
              </p>
            </div>

            {/* Horizontal Flow Stepper Nav (01 -> 09) */}
            <div className="mb-12 overflow-x-auto pb-4 scrollbar-thin">
              <div className="flex items-center min-w-max justify-between gap-2 bg-slate-900/90 border border-slate-800 p-3 rounded-2xl">
                {flowSteps.map((step, idx) => {
                  const isActive = activeFlowIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveFlowIndex(idx)}
                      onMouseEnter={() => setActiveFlowIndex(idx)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                        isActive
                          ? "bg-[#10B981] text-slate-950 shadow-md shadow-emerald-500/20 scale-105"
                          : "text-slate-400 hover:text-white hover:bg-slate-800/80"
                      }`}
                      id={`stepper-btn-${step.step}`}
                    >
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                        isActive ? "bg-slate-950 text-[#10B981]" : "bg-slate-800 text-slate-300"
                      }`}>
                        {step.step}
                      </span>
                      <span>{step.title}</span>
                      {idx < flowSteps.length - 1 && (
                        <span className="text-slate-600 font-normal ml-1">➔</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 9-Stage Grid with Direct In-Card Inline Expansion */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {flowSteps.map((step, idx) => {
                const IconComponent = step.icon;
                const isActive = activeFlowIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveFlowIndex(isActive ? -1 : idx)}
                    onMouseEnter={() => setActiveFlowIndex(idx)}
                    className={`rounded-2xl transition-all duration-300 border cursor-pointer relative overflow-hidden ${
                      isActive
                        ? "bg-slate-900 border-[#10B981] shadow-2xl shadow-emerald-500/10 ring-1 ring-[#10B981]/50 p-6"
                        : "bg-slate-900/60 border-slate-800 hover:border-slate-700 p-6 hover:bg-slate-900/80"
                    }`}
                    id={`flow-card-${step.step}`}
                  >
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border transition-colors ${
                        isActive
                          ? "text-slate-950 bg-[#10B981] border-[#10B981]"
                          : "text-[#10B981] bg-[#10B981]/10 border-[#10B981]/20"
                      }`}>
                        STAGE {step.step}
                      </span>
                      <div className="flex items-center gap-2">
                        <IconComponent
                          className={`w-5 h-5 transition-colors ${
                            isActive ? "text-[#10B981]" : "text-slate-400"
                          }`}
                        />
                        <span className="text-xs text-slate-500 font-mono">
                          {isActive ? "▼ Active" : "▶ Click/Hover"}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">{step.desc}</p>

                    {/* Inline Expandable Model Specs Drawer */}
                    {isActive ? (
                      <div className="mt-4 pt-4 border-t border-slate-800/90 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-md border border-[#10B981]/30">
                          <Bot className="w-3.5 h-3.5" />
                          <span>{step.modelTech}</span>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-[#10B981] leading-tight">
                          {step.spec}
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/50 p-3 rounded-xl border border-slate-800/80">
                          {step.details}
                        </p>

                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
                          <span>Latency Target: &lt; 200ms</span>
                          <span className="text-[#10B981] font-bold">100% Offline LAN</span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-[11px] font-mono text-slate-500 hover:text-[#10B981] transition-colors flex items-center gap-1 pt-1">
                        <span>Show Model Specification</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 04: WHAT ROSENSE UNDERSTANDS (TAXONOMY GRID)
           ========================================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                What RoSense <span className="text-[#10B981]">Understands</span>
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                Our taxonomy engine automatically categorizes raw conversations into 12 distinct structural dimensions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {taxonomyItems.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#10B981] hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#10B981] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#10B981] transition-colors mb-1">
                      {item.label}
                    </h3>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 05: DECISION TRACEABILITY — 1-CLICK PROOF (TRUST ANCHOR)
           ========================================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <Shield className="w-3.5 h-3.5" />
                <span>Enterprise Trust Anchor</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Decision Traceability — <span className="text-[#10B981]">1-Click Proof</span>
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                Never argue about who agreed to what. Every extracted decision links directly back to exact audio proof.
              </p>
            </div>

            {/* Interactive Decision Card */}
            <div className="max-w-3xl mx-auto rounded-2xl bg-white border border-slate-300 p-8 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    📋 Extracted Decision Card
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">Confidence Score: 0.98</span>
              </div>

              <div className="mb-6">
                <p className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  &ldquo;Approved Q4 expansion strategy targeting European enterprise accounts with initial focus on DACH region.&rdquo;
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-5 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-xs text-slate-600">
                <div className="flex items-center gap-2 font-medium">
                  <User className="w-4 h-4 text-[#10B981]" />
                  <span>Speaker: <strong>Rahul (VP Ops)</strong></span>
                </div>
                <div className="flex items-center gap-2 font-mono">
                  <Clock className="w-4 h-4 text-[#10B981]" />
                  <span>Timestamp: <strong>02:14:10</strong></span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Briefcase className="w-4 h-4 text-[#10B981]" />
                  <span>Source: <strong>Strategy Offsite Day 1</strong></span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setPlayingAudio(!playingAudio)}
                  className={`inline-flex items-center gap-2 text-xs font-bold px-5 py-3 rounded-xl transition-all ${
                    playingAudio
                      ? "bg-amber-500 text-white animate-pulse"
                      : "bg-[#10B981] hover:bg-[#059669] text-slate-950"
                  }`}
                  id="play-audio-proof-btn"
                >
                  {playingAudio ? <Volume2 className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{playingAudio ? "Playing Audio Proof (20s)..." : "🔊 Play Audio Proof (20s)"}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={copyToClipboard}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>{copied ? "Copied!" : "Copy"}</span>
                  </button>

                  <button
                    onClick={() => setSaved(!saved)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg border transition-colors ${
                      saved
                        ? "bg-slate-900 text-[#10B981] border-slate-800"
                        : "border-slate-200 hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>{saved ? "Saved" : "Save"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 06: ENTERPRISE MEMORY — CONNECTED KNOWLEDGE
           ========================================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Brain className="w-3.5 h-3.5" />
                  <span>Interconnected Context</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  Enterprise Memory — <span className="text-[#10B981]">Connected Knowledge</span>
                </h2>

                <p className="text-base text-slate-600 leading-relaxed">
                  Every discussion becomes part of a unified organizational memory. Previous meetings connect automatically—so when you search for &quot;ERP migration,&quot; you see decisions from Q1 planning, risks raised in Q2 workshops, and commitments made yesterday.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">Teams stop losing context across employee transitions.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">New employees onboard 3x faster with searchable meeting timelines.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">Decisions are preserved permanently with verbatim audio citations.</span>
                  </div>
                </div>
              </div>

              {/* Timeline Diagram */}
              <div className="rounded-2xl bg-slate-900 text-white p-8 border border-slate-800 shadow-xl space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
                    <span>Q1 Strategic Planning</span>
                    <span className="text-[#10B981]">Jan 12</span>
                  </div>
                  <p className="text-sm font-semibold text-white">Decision: Migration target set for Q4 launch.</p>
                </div>
                <div className="text-center text-[#10B981] text-xs font-mono">│ Link: Entity &quot;ERP&quot;</div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
                    <span>Q2 Engineering Review</span>
                    <span className="text-[#10B981]">Apr 24</span>
                  </div>
                  <p className="text-sm font-semibold text-white">Risk: Legacy database schema incompatibilities.</p>
                </div>
                <div className="text-center text-[#10B981] text-xs font-mono">│ Link: Entity &quot;ERP&quot;</div>
                <div className="p-4 rounded-xl bg-[#10B981]/20 border border-[#10B981]/60">
                  <div className="flex items-center justify-between text-xs text-[#10B981] font-mono mb-1">
                    <span>Yesterday&apos;s Standup</span>
                    <span>Aug 03</span>
                  </div>
                  <p className="text-sm font-bold text-white">Commitment: Finalize migration script by Aug 15.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 07: SEARCH ACROSS EVERYTHING (REUSING SEARCHSANDBOX COMPONENT)
           ========================================================================= */}
        <SearchSandbox />

        {/* =========================================================================
            SECTION 08: DELIVER TO YOUR WORKFLOWS
           ========================================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Deliver to Your <span className="text-[#10B981]">Workflows</span>
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                RoSense doesn&apos;t just store intelligence—it delivers it directly into the tools your team uses every day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowCards.map((card, idx) => {
                const CardIcon = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#10B981] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#10B981] flex items-center justify-center">
                          <CardIcon className="w-5 h-5" />
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                            card.isComingSoon
                              ? "bg-amber-50 text-amber-600 border-amber-200"
                              : "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20"
                          }`}
                        >
                          {card.tag}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 09: ENTERPRISE READY — PRIVATE DEPLOYMENT
           ========================================================================= */}
        <section className="py-24 bg-slate-950 text-white relative border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <Lock className="w-3.5 h-3.5" />
                <span>Zero Data Leakage Guarantee</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Enterprise Ready — <span className="text-gradient-emerald">Private Deployment</span>
              </h2>
              <p className="mt-3 text-slate-300 text-base">
                Deploy RoSense on your terms. Cloud sandbox for evaluation or private appliance for complete sovereignty.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {deploymentModels.map((model, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-8 flex flex-col justify-between border relative ${
                    model.highlight
                      ? "bg-slate-900 border-[#10B981] shadow-2xl emerald-glow-sm scale-[1.02]"
                      : "bg-slate-900/50 border-slate-800"
                  }`}
                >
                  {model.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#10B981] text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                      Flagship On-Prem Hardware
                    </div>
                  )}

                  <div>
                    <div className="mb-4">
                      <span className="text-xs font-mono text-[#10B981] uppercase tracking-wider">
                        {model.subtitle}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-1">{model.name}</h3>
                    </div>

                    <p className="text-xs text-slate-300 mb-6 leading-relaxed">{model.desc}</p>

                    <ul className="space-y-3 mb-8 text-xs text-slate-300">
                      {model.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={model.ctaLink}
                    className={`w-full inline-flex items-center justify-center gap-2 font-bold text-xs px-5 py-3.5 rounded-xl transition-all ${
                      model.highlight
                        ? "bg-[#10B981] hover:bg-[#059669] text-slate-950"
                        : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                    }`}
                  >
                    <span>{model.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: OUTCOMES — WHAT YOU GAIN
           ========================================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Outcomes — <span className="text-[#10B981]">What You Gain</span>
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                Beyond transcription. Beyond summaries. Organizational intelligence.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {outcomes.map((out, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#10B981] transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-3">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{out.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{out.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 11: FINAL CTA
           ========================================================================= */}
        <section className="py-24 bg-slate-950 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 border border-slate-800 p-10 sm:p-16 text-center relative overflow-hidden emerald-glow-sm">
              <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                  Ready to See Your Organization <span className="text-gradient-emerald">Think Better?</span>
                </h2>
                <p className="text-slate-300 text-base sm:text-lg">
                  Book a private demo and experience how RoSense turns business conversations into permanent, searchable enterprise memory.
                </p>
                <div className="pt-4">
                  <Link
                    href="/company/contact"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#10B981] hover:bg-[#059669] text-slate-950 text-base font-bold px-9 py-4.5 rounded-xl shadow-xl shadow-emerald-500/20 hover:scale-[1.02] transition-all"
                    id="final-cta-demo-btn"
                  >
                    <span>Book a Private Demo</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
