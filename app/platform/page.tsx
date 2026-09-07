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
  UserCheck,
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
  CheckSquare,
  ShieldAlert,
  Repeat,
  BarChart3,
  LineChart,
  Target,
  ArrowDown,
  Award,
  Server,
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

  // Section 03: Flow Timeline Steps with Model Capabilities
  const flowSteps = [
    {
      step: "01",
      icon: Mic,
      title: "Intake",
      desc: "Captures multi-hour audio streams across physical rooms and virtual calls.",
      modelTech: "Multi-Channel Audio Intake Engine",
      spec: "High-Fidelity Audio • Redundant Local Ring Buffer",
      details: "Captures room microphones, video conferences, and board room discussions privately without public cloud transmission.",
    },
    {
      step: "02",
      icon: Database,
      title: "Isolate",
      desc: "Acoustic noise cancellation and speaker isolation in real time.",
      modelTech: "Acoustic Signal Processing",
      spec: "Real-Time Noise Filter • Reverberation Removal",
      details: "Removes room echo, background chatter, and HVAC noise before passing clean spectral frames to intelligence models.",
    },
    {
      step: "03",
      icon: Brain,
      title: "Identify",
      desc: "Multi-speaker diarization and deep conversational context preservation.",
      modelTech: "Multi-Speaker Audio Intelligence",
      spec: "Precise Speaker Separation • Word-Level Timestamps",
      details: "Performs precise speaker identification with exact timestamps and overlapping speech resolution.",
    },
    {
      step: "04",
      icon: Zap,
      title: "Extract",
      desc: "Captures decisions, commitments, owners, and risks without context limits.",
      modelTech: "Zero-Shot Decision Extraction",
      spec: "Full-Context Retention • Sub-second Extraction",
      details: "Identifies strategic decisions, action items, risks, and commitments without context degradation or lost details.",
    },
    {
      step: "05",
      icon: Layers,
      title: "Structure",
      desc: "Normalizes unstructured dialogue into structured enterprise schemas.",
      modelTech: "Structured Enterprise Schema Engine",
      spec: "Normalized Entity Graphs • Linked Timelines",
      details: "Normalizes raw conversations into structured records linked to explicit owners, deadlines, and strategic themes.",
    },
    {
      step: "06",
      icon: Network,
      title: "Connect",
      desc: "Connects decisions across months of past and present organizational discussions.",
      modelTech: "Enterprise Memory Graph",
      spec: "Sub-50ms Graph Traversal • Cross-Session Linkage",
      details: "Connects today's decisions to historical strategy sessions from quarters ago into a living, interconnected memory graph.",
    },
    {
      step: "07",
      icon: Search,
      title: "Search",
      desc: "Instant semantic search across your organization's entire conversation history.",
      modelTech: "Instant Enterprise Semantic Search",
      spec: "Sub-Second Retrieval • 1-Click Audio Proof",
      details: "Enables natural language search across thousands of hours of historical conversations with instant audio proof.",
    },
    {
      step: "08",
      icon: Share2,
      title: "Share",
      desc: "Instant onboarding for new team members with granular access control.",
      modelTech: "Enterprise Access Control Gateway",
      spec: "Role-Based Access • Zero-Leakage Encryption",
      details: "Safely surfaces historical context to new team members according to department-level permissions and governance rules.",
    },
    {
      step: "09",
      icon: TrendingUp,
      title: "Act",
      desc: "Flawless execution with zero forgotten commitments or repeated debates.",
      modelTech: "Continuous Execution Tracking",
      spec: "100% Decision Traceability • Automated Task Sync",
      details: "Guarantees that every agreement made in meetings translates directly into tracked, verifiable business execution.",
    },
  ];

  // Section 04: Business Transformation (Before vs After)
  const transformationItems = [
    {
      before: "Decisions forgotten in unread transcripts",
      after: "Every decision indexed and searchable in <200ms",
    },
    {
      before: "Notes scattered across Slack, docs & emails",
      after: "One centralized, interconnected enterprise memory graph",
    },
    {
      before: "Manual follow-up requiring constant checking",
      after: "Automatic task attribution & execution tracking",
    },
    {
      before: "Repeated discussions on previously settled topics",
      after: "Permanent institutional knowledge retained across quarters",
    },
    {
      before: "Hours searching for who agreed to what",
      after: "Instant answers backed by 1-click audio proof",
    },
    {
      before: "Critical context leaves when employees depart",
      after: "Knowledge remains permanently with the organization",
    },
  ];

  // Section 05: Built for Every Business Team
  const teamRoles = [
    {
      role: "Executive Leadership",
      icon: Users,
      desc: "Gain instant visibility into strategic decisions, cross-department alignment, and organizational risks across all executive sessions.",
      highlights: ["Strategic Alignment", "Risk Tracking", "Board Briefing Export"],
    },
    {
      role: "Sales & Revenue",
      icon: TrendingUp,
      desc: "Capture exact customer commitments, deal risks, contract objections, and action items automatically synced to your CRM.",
      highlights: ["Deal Risk Alerts", "CRM Auto-Sync", "Customer Voice Search"],
    },
    {
      role: "Operations & Delivery",
      icon: BarChart3,
      desc: "Track execution, resolve project bottlenecks, enforce clear accountability, and ensure commitments are never missed.",
      highlights: ["Owner Attribution", "Blocker Resolution", "SLAs & Deadlines"],
    },
    {
      role: "HR & People",
      icon: UserCheck,
      desc: "Preserve deep interview insights, streamline new employee onboarding, and retain institutional memory during team transitions.",
      highlights: ["Instant Onboarding", "Interview Archival", "Talent Context"],
    },
    {
      role: "Engineering & Product",
      icon: FileCode2,
      desc: "Record architectural decisions, system design trade-offs, technical debts, and RFC discussions with precise audio proof.",
      highlights: ["Architecture Docs", "Tech Spec Search", "Audio Proof Verification"],
    },
  ];

  // Section 06: What Will Your Organization Never Miss Again? (Reframed Taxonomy)
  const protectionItems = [
    { label: "Decisions", icon: CheckCircle2, desc: "Strategic choices & binding management agreements", category: "Governance" },
    { label: "Action Items", icon: CheckSquare, desc: "Assigned tasks linked to explicit owners & timelines", category: "Execution" },
    { label: "Risks", icon: AlertTriangle, desc: "Identified operational, technical & financial threats", category: "Risk Mgmt" },
    { label: "Customer Feedback", icon: User, desc: "Direct client insights, feature requests & objections", category: "Market" },
    { label: "Blockers", icon: ShieldAlert, desc: "Cross-functional dependencies holding up delivery", category: "Operations" },
    { label: "Deadlines", icon: Calendar, desc: "Hard target dates, SLA milestones & launch windows", category: "Timeline" },
    { label: "Escalations", icon: TrendingUp, desc: "Priority bottlenecks requiring executive intervention", category: "Leadership" },
    { label: "Compliance Issues", icon: Shield, desc: "Regulatory mandates, policy flags & audit trails", category: "Legal" },
  ];

  // Section 10: Turn Conversations Into Action (Workflow Pipeline)
  const workflowSteps = [
    { title: "Meeting Ends", desc: "Local audio streams finalized", color: "border-slate-300 bg-white" },
    { title: "Decision Captured", desc: "Extracts decisions & commitments", color: "border-[#10B981]/50 bg-[#10B981]/10 text-[#10B981]" },
    { title: "Owner Assigned", desc: "Speaker linked to action item", color: "border-emerald-500/50 bg-white" },
    { title: "Task Created", desc: "Normalized structured record", color: "border-teal-500/50 bg-white" },
    { title: "Slack Notification", desc: "Instant channel dispatch", color: "border-slate-300 bg-white" },
    { title: "Jira Updated", desc: "Backlog ticket auto-populated", color: "border-slate-300 bg-white" },
    { title: "CRM Updated", desc: "Salesforce & HubSpot sync", color: "border-[#10B981]/80 bg-[#10B981]/20 text-slate-900" },
  ];

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

  // Section 11: Deployment Models
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

  // Section 12: Measurable ROI & Business Impact
  const roiMetrics = [
    {
      stat: "80%",
      unit: "Reduction",
      title: "Meeting Administration",
      desc: "Eliminate manual note-taking, transcript cleanup, and post-meeting status report writing.",
    },
    {
      stat: "3x",
      unit: "Faster",
      title: "Decision Follow-Up",
      desc: "Accelerate task execution with automatic owner attribution and immediate integration dispatch.",
    },
    {
      stat: "100%",
      unit: "Retention",
      title: "Institutional Knowledge",
      desc: "Preserve historical context permanently, ensuring critical decisions survive team transitions.",
    },
    {
      stat: "0",
      unit: "Re-debates",
      title: "Zero Duplicate Discussions",
      desc: "Prevent re-discussing settled decisions with instant audio citations and historical memory graphs.",
    },
    {
      stat: "60%",
      unit: "Shorter",
      title: "Employee Onboarding Time",
      desc: "New hires quickly get up to speed by searching historical decisions, project context, and meeting recordings.",
    },
    {
      stat: "Instant",
      unit: "Audit",
      title: "Compliance & Governance",
      desc: "Produce verifiable audio proof for regulatory audits, internal controls, and policy mandates.",
    },
  ];

  // Section 13: Designed for Enterprise Trust (Social Proof Placeholders)
  const trustSignals = [
    {
      badge: "Architecture Mandate",
      title: "Zero Cloud Data Leakage",
      desc: "All audio processing and model inference runs strictly inside your local network. No external API calls, no third-party cloud data harvesting.",
      icon: Shield,
    },
    {
      badge: "Compliance Ready",
      title: "DPDP & SOC2 Alignment",
      desc: "Built from the ground up for strict data privacy requirements, complete audit trails, and enterprise role-based access control (RBAC).",
      icon: Lock,
    },
    {
      badge: "Enterprise Proven",
      title: "Hardware Hardware Isolation",
      desc: "Deploy on dedicated air-gapped physical appliances (RoSense Box) or existing enterprise private cloud infrastructure.",
      icon: Server,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-[#10B981] selection:text-white">
      <Navbar />

      <main className="pt-24" id="platform-main">
        {/* =========================================================================
            SECTION 01: HERO — "ORGANIZATIONAL MEMORY"
           ========================================================================= */}
        <section className="bg-white text-slate-900 py-24 sm:py-32 relative overflow-hidden border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The RoSense Platform</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                Your organization&apos;s collective memory.{" "}
                <span className="text-gradient-emerald">In one place.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
                RoSense captures conversations, extracts decisions and commitments, and transforms them into a living organizational memory that your teams can search and reuse—privately, securely, and entirely on your terms.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/company/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all"
                  id="hero-demo-btn"
                >
                  <span>Experience RoSense</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#how-it-works"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-base px-7 py-4 rounded-xl border border-slate-200 transition-all"
                  id="hero-how-it-works-btn"
                >
                  <span>See How It Works</span>
                </a>
              </div>

              {/* Visual Stylized Knowledge Graph Container */}
              <div className="pt-12 max-w-4xl mx-auto">
                <div className="rounded-2xl bg-slate-950 text-white border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden emerald-glow-sm">
                  <div className="flex flex-wrap items-center justify-around gap-6 text-left">
                    <div className="flex items-center gap-3 bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                      <div className="w-10 h-10 rounded-lg bg-[#10B981]/20 text-[#10B981] flex items-center justify-center font-bold">
                        Q1
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-mono">Board Offsite</div>
                        <div className="text-sm font-semibold text-white">Migration Approved</div>
                      </div>
                    </div>

                    <div className="hidden sm:block text-slate-600 font-mono text-xl">➔</div>

                    <div className="flex items-center gap-3 bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                      <div className="w-10 h-10 rounded-lg bg-[#10B981]/20 text-[#10B981] flex items-center justify-center font-bold">
                        Q2
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-mono">Risk Workshop</div>
                        <div className="text-sm font-semibold text-white">Latency Trade-offs Resolved</div>
                      </div>
                    </div>

                    <div className="hidden sm:block text-slate-600 font-mono text-xl">➔</div>

                    <div className="flex items-center gap-3 bg-[#10B981]/10 p-3.5 rounded-xl border border-[#10B981]/40">
                      <div className="w-10 h-10 rounded-lg bg-[#10B981] text-slate-950 flex items-center justify-center font-bold">
                        NOW
                      </div>
                      <div>
                        <div className="text-xs text-[#10B981] font-mono">Instant Search</div>
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
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Conversations don&apos;t have to <span className="text-gradient-emerald">end.</span>
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                Most meetings are forgotten. Yours become part of a living memory.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Traditional Side */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-slate-400 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Traditional Approach
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <X className="w-5 h-5 text-rose-500" />
                  Meeting Bots & Transcripts
                </h3>

                <div className="space-y-4 font-medium text-slate-700">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-slate-500">Input</span>
                    <span className="font-semibold text-slate-800">Raw Conversation</span>
                  </div>
                  <div className="text-center text-slate-400 text-sm">↓</div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-rose-50 border border-rose-100 text-rose-900">
                    <span>Processing</span>
                    <span className="font-semibold">Unstructured 40-Page Transcript</span>
                  </div>
                  <div className="text-center text-slate-400 text-sm">↓</div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-900">
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
              <div className="rounded-2xl bg-slate-950 text-white border border-[#10B981]/50 p-8 shadow-xl relative overflow-hidden emerald-glow-sm">
                <div className="absolute top-0 right-0 bg-[#10B981] text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  RoSense
                </div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                  Organizational Memory
                </h3>

                <div className="space-y-4 font-medium text-slate-200">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">Input</span>
                    <span className="font-semibold text-white">Raw Conversation</span>
                  </div>
                  <div className="text-center text-[#10B981] text-sm">↓</div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span>Processing</span>
                    <span className="font-semibold text-[#10B981]">Captured & Structured Automatically</span>
                  </div>
                  <div className="text-center text-[#10B981] text-sm">↓</div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span>Outcome</span>
                    <span className="font-semibold text-[#10B981]">Connected Memory Graph</span>
                  </div>
                  <div className="text-center text-[#10B981] text-sm">↓</div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#10B981]/20 border border-[#10B981] text-white font-bold">
                    <span>Result</span>
                    <span className="flex items-center gap-1.5 text-[#10B981]">
                      <Check className="w-4 h-4 stroke-[3]" /> Searchable Forever with Audio Proof
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
        <section id="how-it-works" className="py-24 bg-white text-slate-900 relative border-b border-slate-100 scroll-mt-20">
          <div id="audio-intelligence" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <Network className="w-3.5 h-3.5" />
                <span>End-to-End Pipeline</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                The RoSense <span className="text-gradient-emerald">Intelligence Flow</span>
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                From raw speech to structured action. Explore each stage of the organizational memory pipeline.
              </p>
            </div>

            {/* Horizontal Flow Stepper Nav (01 -> 09) */}
            <div className="mb-12 overflow-x-auto pb-4 scrollbar-thin">
              <div className="flex items-center min-w-max justify-between gap-2 bg-slate-100 border border-slate-200 p-3 rounded-2xl">
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
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/80"
                      }`}
                      id={`stepper-btn-${step.step}`}
                    >
                      <span
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                          isActive ? "bg-slate-950 text-[#10B981]" : "bg-white text-slate-700 border border-slate-200"
                        }`}
                      >
                        {step.step}
                      </span>
                      <span>{step.title}</span>
                      {idx < flowSteps.length - 1 && (
                        <span className="text-slate-400 font-normal ml-1">➔</span>
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
                        ? "bg-slate-950 border-[#10B981] shadow-2xl shadow-emerald-500/10 ring-1 ring-[#10B981]/50 p-6 text-white"
                        : "bg-slate-900 border-slate-800 hover:border-slate-700 p-6 hover:bg-slate-900/90 text-white"
                    }`}
                    id={`flow-card-${step.step}`}
                  >
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border transition-colors ${
                          isActive
                            ? "text-slate-950 bg-[#10B981] border-[#10B981]"
                            : "text-[#10B981] bg-[#10B981]/10 border-[#10B981]/20"
                        }`}
                      >
                        STAGE {step.step}
                      </span>
                      <div className="flex items-center gap-2">
                        <IconComponent
                          className={`w-5 h-5 transition-colors ${
                            isActive ? "text-[#10B981]" : "text-slate-400"
                          }`}
                        />
                        <span className="text-xs text-slate-400 font-mono">
                          {isActive ? "▼ Active" : "▶ Details"}
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
                          <span className="text-[#10B981] font-bold">Private Processing</span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-[11px] font-mono text-slate-400 hover:text-[#10B981] transition-colors flex items-center gap-1 pt-1">
                        <span>Show Specification</span>
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
            SECTION 04: BUSINESS OUTCOMES — WHAT CHANGES AFTER ROSENSE?
           ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Business Transformation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                What Changes After <span className="text-[#10B981]">RoSense?</span>
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                Stop treating meetings as isolated events. Transform unstructured conversation into permanent operational leverage.
              </p>
            </div>

            <div className="max-w-5xl mx-auto rounded-3xl bg-slate-950 text-white p-6 sm:p-10 border border-slate-800 shadow-2xl emerald-glow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-slate-800 font-mono text-xs uppercase tracking-wider text-slate-400">
                <div className="flex items-center gap-2 text-rose-400">
                  <X className="w-4 h-4" />
                  <span>Before RoSense (Fragmented Operations)</span>
                </div>
                <div className="flex items-center gap-2 text-[#10B981]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>After RoSense (Enterprise Knowledge Engine)</span>
                </div>
              </div>

              <div className="divide-y divide-slate-800/80">
                {transformationItems.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5 items-center">
                    <div className="flex items-start gap-3 text-slate-400">
                      <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-2" />
                      <span className="text-sm line-through text-slate-400">{item.before}</span>
                    </div>

                    <div className="flex items-start gap-3 bg-[#10B981]/10 p-3.5 rounded-xl border border-[#10B981]/30 text-white font-medium">
                      <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5 stroke-[3]" />
                      <span className="text-sm font-semibold text-slate-100">{item.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 05: BUILT FOR EVERY BUSINESS TEAM
           ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <Users className="w-3.5 h-3.5" />
                <span>Role-Based Enterprise Value</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Built for <span className="text-gradient-emerald">Every Business Team</span>
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                Whether you lead strategy, drive revenue, run operations, hire talent, or architect systems—RoSense empowers your team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {teamRoles.map((team, idx) => {
                const IconComponent = team.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200 hover:border-[#10B981] p-6 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl group"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 group-hover:bg-[#10B981]/10 group-hover:text-[#10B981] flex items-center justify-center transition-colors mb-4">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#10B981] transition-colors">
                        {team.role}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-6">{team.desc}</p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      {team.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-[11px] text-[#10B981] font-mono">
                          <Check className="w-3 h-3 stroke-[3]" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 06: WHAT WILL YOUR ORGANIZATION NEVER MISS AGAIN? (REFRAMED TAXONOMY)
           ========================================================================= */}
        <section id="intelligence" className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <Target className="w-3.5 h-3.5" />
                <span>Business Protection Framework</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                What Will Your Organization <span className="text-[#10B981]">Never Miss Again?</span>
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                RoSense automatically parses and indexes 8 core business protection dimensions across every single meeting.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {protectionItems.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#10B981] hover:shadow-lg transition-all group relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 group-hover:bg-[#10B981]/10 group-hover:text-[#10B981] flex items-center justify-center transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase bg-slate-100 px-2 py-0.5 rounded-md">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#10B981] transition-colors mb-2">
                      {item.label}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 07: DECISION TRACEABILITY — PROOF IN A CLICK
           ========================================================================= */}
        <section id="decision-intelligence" className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <Shield className="w-3.5 h-3.5" />
                <span>Enterprise Trust Anchor</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Proof in a <span className="text-gradient-emerald">click.</span>
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                Every decision links to the moment it was spoken. Listen in 20 seconds.
              </p>
            </div>

            {/* Interactive Decision Card */}
            <div className="max-w-3xl mx-auto rounded-2xl bg-white border border-slate-200 p-8 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Extracted Decision
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Verified Confidence: High</span>
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
                  <span>{playingAudio ? "Playing Audio Proof (20s)..." : "Play Audio Proof (20s)"}</span>
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
            SECTION 08: ENTERPRISE MEMORY — CONNECTED KNOWLEDGE
           ========================================================================= */}
        <section id="organizational-memory" className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Brain className="w-3.5 h-3.5" />
                  <span>Interconnected Context</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  Your company remembers <span className="text-gradient-emerald">everything.</span>
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
              <div className="rounded-2xl bg-slate-950 text-white p-8 border border-slate-800 shadow-xl space-y-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
                    <span>Q1 Strategic Planning</span>
                    <span className="text-[#10B981]">Jan 12</span>
                  </div>
                  <p className="text-sm font-semibold text-white">Decision: Migration target set for Q4 launch.</p>
                </div>
                <div className="text-center text-[#10B981] text-xs font-mono">│ Link: Entity &quot;ERP&quot;</div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
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
            SECTION 09: SEARCH ACROSS EVERYTHING (REUSING SEARCHSANDBOX COMPONENT)
           ========================================================================= */}
        <SearchSandbox />

        {/* =========================================================================
            SECTION 10: TURN CONVERSATIONS INTO ACTION (WORKFLOW AUTOMATION UPGRADED)
           ========================================================================= */}
        <section id="workflow-automation" className="py-24 bg-white text-slate-900 relative border-b border-slate-100 scroll-mt-20">
          <div id="executive-summaries" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <Zap className="w-3.5 h-3.5" />
                <span>Operational Execution Flow</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Turn Conversations Into <span className="text-gradient-emerald">Action</span>
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                RoSense doesn&apos;t just capture spoken words—it drives execution by automatically routing structured outcomes directly into your enterprise stack.
              </p>
            </div>

            {/* Visual Workflow Sequential Diagram */}
            <div className="mb-16 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-6 text-center">
                Automated Post-Meeting Operational Sequence
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 relative">
                {workflowSteps.map((step, sIdx) => (
                  <div key={sIdx} className="flex flex-col items-center text-center relative group">
                    <div className={`w-full p-3.5 rounded-xl border ${step.color} transition-all duration-300 hover:scale-105 shadow-sm`}>
                      <span className="font-mono text-[10px] text-[#10B981] block mb-1 font-bold">
                        STEP 0{sIdx + 1}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-[10px] text-slate-500 leading-tight">{step.desc}</p>
                    </div>

                    {sIdx < workflowSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-sm z-10">
                        ➔
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowCards.map((card, idx) => {
                const CardIcon = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#10B981] shadow-sm transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                          <CardIcon className="w-5 h-5 text-[#10B981]" />
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                            card.isComingSoon
                              ? "bg-amber-500/10 text-amber-600 border-amber-500/30"
                              : "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/30"
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
            SECTION 12: ROI & BUSINESS IMPACT
           ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Quantifiable Value</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                ROI & Business <span className="text-[#10B981]">Impact</span>
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                Enterprise buyers expect results. RoSense delivers immediate operational ROI across every business metric.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {roiMetrics.map((roi, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-slate-200 shadow-md hover:border-[#10B981] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900 group-hover:text-[#10B981] transition-colors">
                        {roi.stat}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#10B981] font-mono">
                        {roi.unit}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">{roi.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{roi.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 11: ENTERPRISE READY — PRIVATE DEPLOYMENT (ACT II START)
           ========================================================================= */}
        <section id="private-deployment" className="py-24 bg-slate-950 text-white relative border-b border-slate-800 scroll-mt-20">
          <div id="air-gapped" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <Lock className="w-3.5 h-3.5" />
                <span>Zero Data Leakage Guarantee</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Your data. Your infrastructure. <span className="text-gradient-emerald">Your rules.</span>
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
            SECTION 13: DESIGNED FOR ENTERPRISE TRUST
           ========================================================================= */}
        <section className="py-24 bg-slate-950 text-white relative border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Enterprise Trust Signals</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Designed for <span className="text-gradient-emerald">Enterprise Trust</span>
              </h2>
              <p className="mt-3 text-slate-300 text-base">
                Architected for high-compliance environments, sensitive executive discussions, and mission-critical deployments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {trustSignals.map((ts, idx) => {
                const TsIcon = ts.icon;
                return (
                  <div key={idx} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                    <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-md border border-[#10B981]/30">
                      <TsIcon className="w-3.5 h-3.5" />
                      <span>{ts.badge}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white">{ts.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{ts.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 14: FINAL CTA — EXPERIENCE ROSENSE
           ========================================================================= */}
        <section className="py-24 bg-slate-950 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 border border-slate-800 p-10 sm:p-16 text-center relative overflow-hidden emerald-glow-sm">
              <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                  Ready to see your organization <span className="text-gradient-emerald">think better?</span>
                </h2>
                <p className="text-slate-300 text-base sm:text-lg">
                  See how RoSense gives your conversations a permanent, searchable memory.
                </p>
                <div className="pt-4">
                  <Link
                    href="/company/contact"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#10B981] hover:bg-[#059669] text-slate-950 text-base font-bold px-9 py-4.5 rounded-xl shadow-xl shadow-emerald-500/20 hover:scale-[1.02] transition-all"
                    id="final-cta-demo-btn"
                  >
                    <span>Experience RoSense</span>
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
