"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Server,
  Shield,
  Cpu,
  Lock,
  HardDrive,
  Zap,
  CheckCircle2,
  ArrowRight,
  Database,
  RefreshCw,
  Award,
  Building2,
  FileText,
  Users,
  ShieldAlert,
  ShieldCheck,
  ChevronRight,
  Flame,
  Activity,
  Layers,
  Search,
  Check,
  Sparkles,
  Key,
  ServerOff,
  Terminal,
  Info,
  PackageCheck,
} from "lucide-react";

export default function RoSenseBoxPage() {
  const [activeTab, setActiveTab] = useState("pharma");

  const industries = [
    {
      id: "rd",
      title: "Research & Development",
      icon: Sparkles,
      desc: "Protect confidential product discussions, experiments, patents, and innovation roadmaps.",
    },
    {
      id: "pharma",
      title: "Pharma & Biotechnology",
      icon: Activity,
      desc: "Capture molecule research, clinical discussions, formulation reviews, regulatory meetings, and drug development knowledge.",
    },
    {
      id: "healthcare",
      title: "Healthcare & Hospitals",
      icon: Users,
      desc: "Securely document multidisciplinary case reviews, medical boards, operational meetings, and administrative discussions while maintaining strict control over sensitive patient information.",
    },
    {
      id: "banking",
      title: "Banking & Financial Services",
      icon: Building2,
      desc: "Protect investment strategies, compliance meetings, risk committees, customer advisory discussions, and internal financial planning.",
    },
    {
      id: "insurance",
      title: "Insurance",
      icon: Shield,
      desc: "Capture underwriting decisions, claims reviews, fraud investigations, and policy discussions.",
    },
    {
      id: "defense",
      title: "Defense & Aerospace",
      icon: ShieldAlert,
      desc: "Maintain complete control over classified discussions, engineering programs, procurement meetings, and mission planning.",
    },
    {
      id: "government",
      title: "Government & Public Sector",
      icon: LandmarkIcon,
      desc: "Keep citizen data and confidential policy discussions within government-controlled infrastructure.",
    },
    {
      id: "legal",
      title: "Legal Firms",
      icon: FileText,
      desc: "Preserve privileged client discussions, litigation strategy meetings, arbitration preparation, and legal knowledge securely.",
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      icon: Cpu,
      desc: "Capture production reviews, quality investigations, engineering changes, supplier meetings, and plant operations.",
    },
    {
      id: "automotive",
      title: "Automotive",
      icon: Layers,
      desc: "Track vehicle programs, design reviews, supplier collaboration, manufacturing quality, and compliance discussions.",
    },
    {
      id: "semiconductor",
      title: "Semiconductor & Electronics",
      icon: Zap,
      desc: "Protect chip design reviews, architecture meetings, IP discussions, and manufacturing processes.",
    },
    {
      id: "energy",
      title: "Energy & Utilities",
      icon: RefreshCw,
      desc: "Capture operational reviews, compliance audits, maintenance planning, and infrastructure decisions.",
    },
    {
      id: "oilgas",
      title: "Oil & Gas",
      icon: Flame,
      desc: "Document exploration meetings, refinery operations, drilling reviews, HSE discussions, and regulatory compliance.",
    },
    {
      id: "telecom",
      title: "Telecommunications",
      icon: Server,
      desc: "Preserve network planning, infrastructure decisions, customer escalations, and technology roadmaps.",
    },
    {
      id: "consulting",
      title: "Consulting Firms",
      icon: Users,
      desc: "Turn every client engagement into reusable organizational knowledge without exposing customer information.",
    },
    {
      id: "software",
      title: "Enterprise Software",
      icon: Terminal,
      desc: "Protect product strategy, engineering discussions, customer discovery, architecture decisions, and roadmap planning.",
    },
    {
      id: "universities",
      title: "Universities & Research",
      icon: BookOpenIcon,
      desc: "Secure research collaboration, grant discussions, laboratory meetings, and intellectual property.",
    },
    {
      id: "chemical",
      title: "Chemical & Materials Science",
      icon: Activity,
      desc: "Capture formulation reviews, laboratory experiments, material innovation, and manufacturing knowledge.",
    },
    {
      id: "nuclear",
      title: "Nuclear & Space Programs",
      icon: Lock,
      desc: "Support highly secure environments where internet connectivity may be restricted or strictly prohibited.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-[#10B981] selection:text-white">
      <Navbar />

      <main className="pt-24">
        {/* HERO SECTION */}
        <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#10B981]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider shadow-inner">
                <Lock className="w-3.5 h-3.5" />
                <span>RoSense Box ⭐ — Private AI for Enterprise</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Enterprise AI Without <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#10B981] via-emerald-300 to-teal-400">
                  Compromising Your Data
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
                Deploy RoSense inside your own environment and keep every conversation, decision, and strategic insight under your 100% control.
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/company/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Book On-Premises Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/company/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base px-7 py-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-all"
                >
                  <Users className="w-4 h-4 text-[#10B981]" />
                  <span>Talk to an Enterprise Architect</span>
                </Link>
              </div>

              <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>100% Air-Gapped Physical ITX Hardware</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Zero Cloud Data Footprint</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>DPDP & Enterprise Compliance Ready</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: WHO IS ROSENSE BOX BUILT FOR? */}
        <section id="industries" className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider">
                Tailored Industry Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Who Is RoSense Box Built For?
              </h2>
              <p className="text-base text-slate-600">
                Designed for knowledge-intensive organizations where data privacy, intellectual property, and regulatory compliance are non-negotiable.
              </p>
            </div>

            {/* Industry Selector Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {industries.map((ind) => {
                const IconComponent = ind.icon;
                const isSelected = activeTab === ind.id;
                return (
                  <div
                    key={ind.id}
                    onClick={() => setActiveTab(ind.id)}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white border-[#10B981] shadow-xl ring-2 ring-[#10B981]/20 scale-[1.01]"
                        : "bg-white/80 border-slate-200/80 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "bg-[#10B981] text-white"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {ind.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY ORGANIZATIONS CHOOSE ROSENSE BOX */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider">
                  Strategic Drivers
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Why Security-Conscious Organizations Choose RoSense Box
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  Instead of compromising with public cloud APIs, enterprise leaders deploy RoSense Box to solve critical business and compliance challenges.
                </p>
                <div className="pt-2">
                  <Link
                    href="/company/trust"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#10B981] hover:text-[#059669] hover:underline"
                  >
                    <span>Read Security Whitepaper</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Intellectual Property Protection", desc: "Keep R&D blueprints, trade secrets, and patent discussions locked strictly inside your firewall." },
                  { title: "Regulatory & Legal Compliance", desc: "Satisfy DPDP, HIPAA, GDPR, and industry audit mandates without third-party data processor agreements." },
                  { title: "Complete Data Sovereignty", desc: "Ensure all raw audio, transcripts, and AI vector embeddings remain 100% physically on premise." },
                  { title: "Air-Gapped LAN Operations", desc: "Operate full AI transcription and RAG search in environments with zero internet access." },
                  { title: "Confidential Board & Executive Privacy", desc: "Capture C-suite strategy meetings and merger discussions without external risk." },
                  { title: "Long-Term Organizational Memory", desc: "Turn decades of meeting knowledge into a searchable asset that stays within company walls." },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: BUILT FOR REGULATED INDUSTRIES (COMPLIANCE) */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider">
                Enterprise Governance
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Built for Heavily Regulated Architecture
              </h2>
              <p className="text-base text-slate-300">
                Enterprise security controls built directly into the physical appliance operating system.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Strict Data Residency", icon: Server, desc: "Zero outbound network traffic. All model weights and database chunks reside on local NVMe storage." },
                { title: "Comprehensive Audit Trails", icon: Shield, desc: "Immutable local activity logs tracking every search query, transcript view, and data access event." },
                { title: "Role-Based Access (RBAC)", icon: Key, desc: "Granular access control policies restricting sensitive transcripts to authorized personnel only." },
                { title: "AES-256 & TLS Encryption", icon: Lock, desc: "Full-disk encryption at rest and TLS 1.3 encryption across your local intranet in transit." },
                { title: "Private Networking & SSO", icon: Building2, desc: "Seamless SAML / OAuth / Active Directory SSO integration over your internal domain (`rosense.local`)." },
                { title: "Automated Retention Policies", icon: HardDrive, desc: "Custom retention rules with crypto-shredding support for sensitive board or clinical audio." },
              ].map((spec, idx) => {
                const IconComp = spec.icon;
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <IconComp className="w-7 h-7 text-[#10B981]" />
                    <h3 className="text-lg font-bold text-white">{spec.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{spec.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: DEPLOYMENT MODELS */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider">
                Flexible Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                4 Deployment Models Tailored to Your Risk Profile
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Cloud Sandbox", badge: "Evaluation", desc: "Ideal for fast POCs, feature evaluation, and team pilots on isolated cloud instances." },
                { name: "Hybrid Deployment", badge: "Flexible", desc: "Keep sensitive meeting audio private on-premise while leveraging selective cloud analytics." },
                { name: "RoSense Box ⭐", badge: "Flagship Appliance", featured: true, desc: "Dedicated physical turn-key server pre-configured with offline AI models for local LAN." },
                { name: "Air-Gapped Enterprise", badge: "Strict Air-Gap", desc: "100% offline physical deployment requiring zero internet connection or external telemetry." },
              ].map((model, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border flex flex-col justify-between ${
                    model.featured
                      ? "bg-slate-900 text-white border-slate-800 shadow-2xl ring-2 ring-[#10B981]"
                      : "bg-white text-slate-800 border-slate-200"
                  }`}
                >
                  <div className="space-y-3">
                    <span
                      className={`inline-block px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase ${
                        model.featured
                          ? "bg-[#10B981] text-slate-950"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {model.badge}
                    </span>
                    <h3 className={`text-xl font-bold ${model.featured ? "text-white" : "text-slate-900"}`}>
                      {model.name}
                    </h3>
                    <p className={`text-xs leading-relaxed ${model.featured ? "text-slate-300" : "text-slate-600"}`}>
                      {model.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: INTERACTIVE DATA FLOW ("WHAT NEVER LEAVES YOUR ORGANIZATION") */}
        <section id="data-flow" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider">
                Zero Data Footprint
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                What Never Leaves Your Organization
              </h2>
              <p className="text-base text-slate-600">
                Every step of the audio-to-knowledge pipeline is computed locally inside the physical appliance.
              </p>
            </div>

            {/* Step Pipeline Flow */}
            <div className="bg-slate-950 text-white p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="grid md:grid-cols-7 gap-4 text-center items-center relative z-10">
                {[
                  { step: "01", title: "Meetings", sub: "Audio intake" },
                  { step: "02", title: "Audio File", sub: "Local storage" },
                  { step: "03", title: "Transcripts", sub: "Speech engine" },
                  { step: "04", title: "Decisions", sub: "Action extraction" },
                  { step: "05", title: "Action Items", sub: "Owner assignment" },
                  { step: "06", title: "Knowledge", sub: "Local vector search" },
                  { step: "07", title: "AI Search", sub: "Private RAG" },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-[10px] font-mono font-bold text-[#10B981]">{item.step}</span>
                    <div className="text-sm font-bold text-white">{item.title}</div>
                    <div className="text-[10px] text-slate-400">{item.sub}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">100% Local Perimeter Guarantee</div>
                    <div className="text-xs text-slate-400">Zero packets sent to public LLMs, OpenAI, or third-party servers.</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-4 py-2 rounded-xl text-xs font-mono font-bold">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Everything Stays Inside Your LAN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: WHERE CLOUD AI ISN'T ENOUGH */}
        <section id="comparison" className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider">
                Strategic Choice
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Where Cloud AI Isn't Enough
              </h2>
              <p className="text-base text-slate-600">
                Certain organizations have contractual, regulatory, or IP requirements that make private deployment essential.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Cloud AI Box */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                    <ServerOff className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Organizations Using Cloud AI</h3>
                    <p className="text-xs text-slate-500">Standard public collaboration</p>
                  </div>
                </div>
                <ul className="space-y-3 text-xs text-slate-600">
                  {[
                    "Marketing agencies & public relations firms",
                    "Small businesses with low regulatory burden",
                    "Public webinars & community forums",
                    "General internal brainstorming sessions",
                    "Open cross-company collaboration",
                    "Non-sensitive operational meetings",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RoSense Box Choice */}
              <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-[#10B981] text-slate-950 flex items-center justify-center font-bold">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Organizations Needing RoSense Box ⭐</h3>
                    <p className="text-xs text-[#10B981]">High-value IP & Strict Compliance</p>
                  </div>
                </div>
                <ul className="space-y-3 text-xs text-slate-300">
                  {[
                    "Defense contractors & aerospace engineering",
                    "Pharmaceutical R&D & clinical review boards",
                    "Healthcare providers & medical boards",
                    "Government departments & public sector agencies",
                    "Financial institutions & risk committees",
                    "Semiconductor design & IP firms",
                    "Legal firms handling privileged litigation strategy",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 & 8: ENTERPRISE DEPLOYMENT TIERS & TURNKEY COMMERCIALS */}
        <section id="specs" className="py-24 bg-slate-900 text-white border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider">
                Solution Sizing & Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Enterprise Deployment Tiers & Turnkey Solutions
              </h2>
              <p className="text-base text-slate-300">
                RoSense Box configurations are sized based on your expected meeting volume, concurrent users, AI workloads, and retention requirements.
              </p>
            </div>

            {/* Sizing Tier Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="inline-block px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase bg-slate-800 text-slate-300">
                  Department Pilot
                </div>
                <h3 className="text-xl font-bold text-white">RoSense Box – Standard</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Suitable for SMBs, single departments, and pilot evaluations with moderate meeting volume.
                </p>
                <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>Single department audio intake</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>Standard retention storage</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-[#10B981] shadow-xl relative space-y-4">
                <div className="absolute -top-3 right-4 bg-[#10B981] text-slate-950 font-bold text-[9px] uppercase font-mono px-2.5 py-0.5 rounded-full">
                  Most Popular
                </div>
                <div className="inline-block px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase bg-[#10B981]/20 text-[#10B981]">
                  Business Unit
                </div>
                <h3 className="text-xl font-bold text-white">RoSense Box – Professional</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Suitable for mid-sized enterprises across multiple departments with higher meeting concurrency.
                </p>
                <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>Multi-department workflow engine</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>Enhanced local vector search & RAG</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="inline-block px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase bg-slate-800 text-slate-300">
                  Enterprise-Wide
                </div>
                <h3 className="text-xl font-bold text-white">RoSense Box – Enterprise</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Suitable for large organizations requiring high concurrency, multi-site air-gapped clusters, and high-volume workloads.
                </p>
                <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>High-concurrency cluster support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>Custom retention & multi-node backup</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Turnkey Solution Package & Commercial Disclaimer */}
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <PackageCheck className="w-7 h-7 text-[#10B981]" />
                    <h3 className="text-xl font-bold text-white">What Each Solution Package Includes</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-300">
                    {[
                      "RoSense Enterprise Platform License",
                      "Physical Enterprise AI Appliance",
                      "100% On-Premise Air-Gapped Deployment",
                      "Turnkey Installation & Domain Setup (`rosense.local`)",
                      "Knowledge Base Migration & Team Training",
                      "12 Months Security Support & Software Updates",
                      "Role-Based Access (RBAC) & SAML SSO",
                      "Automated 3-2-1 Local Data Backups",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-slate-900 p-2.5 rounded-xl border border-slate-800/80">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 leading-relaxed flex items-start gap-3 mt-4">
                  <Info className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-200">Hardware Sizing & Evolution Disclaimer:</span>
                    {" "}RoSense Box configurations are sized based on your expected meeting volume, concurrent users, AI workloads, and retention requirements. RoSense continuously evaluates advancements in AI infrastructure to incorporate optimal enterprise-grade compute components while maintaining or improving all committed platform capabilities.
                  </div>
                </div>
              </div>

              {/* Turnkey Commercial Card */}
              <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-950 border border-[#10B981]/40 shadow-2xl flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-8 h-8 text-[#10B981]" />
                    <div>
                      <h3 className="text-xl font-bold text-white">Turnkey Solution Sizing</h3>
                      <p className="text-xs text-slate-400">One-Time Capex + AMC Model</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex justify-between items-baseline border-b border-slate-800 pb-4">
                      <span className="text-sm font-bold text-slate-300">Standard Tier Capex:</span>
                      <span className="text-3xl font-extrabold text-[#10B981]">₹2,50,000</span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-slate-800 pb-4">
                      <span className="text-xs text-slate-400">Annual Maintenance Contract (AMC):</span>
                      <span className="text-lg font-bold text-white">₹50,000 / yr</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 pt-2 leading-relaxed">
                    * Final hardware configuration and pricing are finalized during the solution sizing exercise based on customer concurrency and data requirements.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/company/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-sm px-6 py-4 rounded-xl shadow-lg transition-all"
                  >
                    <span>Request Solution Sizing & Quotation</span>
                    <ArrowRight className="w-4 h-4" />
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

function LandmarkIcon(props: any) {
  return <Building2 {...props} />;
}

function BookOpenIcon(props: any) {
  return <FileText {...props} />;
}
