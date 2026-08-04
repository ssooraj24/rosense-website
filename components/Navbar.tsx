"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  Lock,
  Cpu,
  Sparkles,
  FileCode2,
  Share2,
  Users,
  Briefcase,
  Landmark,
  Building2,
  FileText,
  HelpCircle,
  BookOpen,
  ArrowUpRight,
  Compass,
  Mic,
  Brain,
  Search,
  Database,
  Zap,
  Play,
  Target,
  Server,
  ShieldAlert,
  CheckSquare,
  Layers,
  TrendingUp,
  UserCheck,
  BarChart3,
  DollarSign,
  Megaphone,
  UserPlus,
  Wrench,
  Headphones,
  LayoutGrid,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100"
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Corner Logo Lockup */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none py-1"
            id="nav-logo"
          >
            <div className="relative h-11 sm:h-12 w-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo-R.png"
                alt="RoSense AI Logo"
                width={200}
                height={50}
                className="h-11 sm:h-12 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Center Desktop Navigation with Mega Dropdowns */}
          <nav className="hidden lg:flex items-center gap-1" id="nav-links">
            {/* 1. Platform Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("platform")}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeDropdown === "platform" || pathname.startsWith("/platform")
                    ? "text-[#10B981] bg-slate-50 font-semibold"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>Platform</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "platform" ? "rotate-180 text-[#10B981]" : ""}`} />
              </button>

              {/* Platform Mega Menu Panel */}
              {activeDropdown === "platform" && (
                <div className="absolute top-full left-0 w-[900px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 mt-1 grid grid-cols-12 gap-6 animate-in fade-in duration-150">
                  {/* Column 1: Discover */}
                  <div className="col-span-4 space-y-2 border-r border-slate-100 pr-5">
                    <p className="text-[11px] font-bold text-[#10B981] uppercase tracking-wider mb-2 font-mono flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5" /> Discover
                    </p>

                    <Link
                      href="/platform"
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-slate-900 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#10B981] transition-colors">
                          Platform Overview
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          What is RoSense? End-to-end tour.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/platform#how-it-works"
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981] transition-colors">
                          How It Works
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Conversation → Knowledge → Action.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/platform#product-tour"
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Play className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981] transition-colors">
                          Product Tour
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          See platform in live action.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/platform#intelligence"
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Brain className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981] transition-colors">
                          Enterprise Intelligence
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Turn discussions into business data.
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Column 2: Business Value */}
                  <div className="col-span-4 space-y-2 border-r border-slate-100 pr-5">
                    <p className="text-[11px] font-bold text-[#10B981] uppercase tracking-wider mb-2 font-mono flex items-center gap-1">
                      <Target className="w-3.5 h-3.5" /> Business Value
                    </p>

                    <Link
                      href="/platform#audio-intelligence"
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <Mic className="w-4 h-4 text-slate-600 group-hover:text-[#10B981] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981]">
                          Capture Every Conversation
                        </div>
                        <div className="text-[10px] text-slate-500">Audio intelligence & intake</div>
                      </div>
                    </Link>

                    <Link
                      href="/platform#decision-intelligence"
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <CheckSquare className="w-4 h-4 text-slate-600 group-hover:text-[#10B981] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981]">
                          Extract Decisions & Actions
                        </div>
                        <div className="text-[10px] text-slate-500">Owners, risks & commitments</div>
                      </div>
                    </Link>

                    <Link
                      href="/platform#organizational-memory"
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <Database className="w-4 h-4 text-slate-600 group-hover:text-[#10B981] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981]">
                          Build Organizational Memory
                        </div>
                        <div className="text-[10px] text-slate-500">Never lose knowledge again</div>
                      </div>
                    </Link>

                    <Link
                      href="/platform#enterprise-search"
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <Search className="w-4 h-4 text-slate-600 group-hover:text-[#10B981] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981]">
                          Search Enterprise Knowledge
                        </div>
                        <div className="text-[10px] text-slate-500">Sub-second natural language RAG</div>
                      </div>
                    </Link>

                    <Link
                      href="/platform#executive-summaries"
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <FileText className="w-4 h-4 text-slate-600 group-hover:text-[#10B981] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981]">
                          Executive Summaries
                        </div>
                        <div className="text-[10px] text-slate-500">Board-ready executive briefs</div>
                      </div>
                    </Link>

                    <Link
                      href="/platform#workflow-automation"
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <Zap className="w-4 h-4 text-slate-600 group-hover:text-[#10B981] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981]">
                          Workflow Automation
                        </div>
                        <div className="text-[10px] text-slate-500">Turn insights into actions</div>
                      </div>
                    </Link>
                  </div>

                  {/* Column 3: Enterprise */}
                  <div className="col-span-4 space-y-2">
                    <p className="text-[11px] font-bold text-[#10B981] uppercase tracking-wider mb-2 font-mono flex items-center gap-1">
                      <Server className="w-3.5 h-3.5" /> Enterprise
                    </p>

                    <Link
                      href="/platform#private-deployment"
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <Server className="w-4 h-4 text-slate-600 group-hover:text-[#10B981] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981]">
                          Private Deployment
                        </div>
                        <div className="text-[10px] text-slate-500">Cloud, Hybrid & On-Premise</div>
                      </div>
                    </Link>

                    <Link
                      href="/platform/appliance"
                      className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors group border border-slate-800"
                    >
                      <Lock className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#10B981] flex items-center gap-1">
                          <span>RoSense Box</span>
                          <span className="text-[9px] bg-[#10B981]/20 text-[#10B981] px-1.5 py-0.2 rounded font-mono font-normal">
                            Flagship
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-300 leading-tight">
                          100% Air-gapped private hardware
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/platform#air-gapped"
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <ShieldAlert className="w-4 h-4 text-slate-600 group-hover:text-[#10B981] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981]">
                          Air-Gapped Deployment
                        </div>
                        <div className="text-[10px] text-slate-500">Zero cloud network leakage</div>
                      </div>
                    </Link>

                    <Link
                      href="/company/trust"
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <ShieldCheck className="w-4 h-4 text-slate-600 group-hover:text-[#10B981] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981]">
                          Security & Governance
                        </div>
                        <div className="text-[10px] text-slate-500">DPDP compliance & encryption</div>
                      </div>
                    </Link>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 mt-2">
                      <div className="flex items-center gap-2">
                        <Share2 className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-xs font-semibold text-slate-700">APIs & Integrations</span>
                      </div>
                      <span className="text-[9px] font-bold text-[#10B981] bg-[#10B981]/10 px-1.5 py-0.5 rounded font-mono">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. RoSense Box ⭐ Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("rosense-box")}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeDropdown === "rosense-box" || pathname.startsWith("/rosense-box")
                    ? "text-[#10B981] bg-slate-50 font-semibold"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span className="flex items-center gap-1">
                  RoSense Box
                  <span className="text-amber-500 text-xs">⭐</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "rosense-box" ? "rotate-180 text-[#10B981]" : ""}`} />
              </button>

              {activeDropdown === "rosense-box" && (
                <div className="absolute top-full left-[-100px] w-[800px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 mt-1 grid grid-cols-12 gap-6 animate-in fade-in duration-150">
                  {/* Column 1: Featured Banner */}
                  <div className="col-span-5 bg-slate-950 text-white rounded-xl p-5 border border-slate-800 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#10B981]/20 rounded-full blur-2xl pointer-events-none" />
                    <div>
                      <div className="inline-flex items-center gap-1.5 bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider mb-3">
                        <Lock className="w-3 h-3" />
                        <span>100% Air-Gapped Appliance</span>
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 leading-snug">
                        Private AI for Enterprise
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        Turnkey physical server pre-loaded with offline AI models. Process strategy meetings on your office LAN with zero cloud data leakage.
                      </p>
                    </div>
                    <Link
                      href="/rosense-box"
                      className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-xs px-4 py-2.5 rounded-lg transition-colors w-full text-center"
                    >
                      <span>Explore RoSense Box Page</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Column 2: Key Capabilities & Architecture */}
                  <div className="col-span-7 space-y-3">
                    <p className="text-[11px] font-bold text-[#10B981] uppercase tracking-wider font-mono flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Enterprise On-Premise Capabilities
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href="/rosense-box#industries"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                          <Building2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#10B981] transition-colors">
                            Regulated Sectors
                          </div>
                          <div className="text-[10px] text-slate-500 leading-tight">
                            Pharma, Defense, Banking, Legal & R&D.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/rosense-box#data-flow"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                          <Database className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#10B981] transition-colors">
                            Zero Leakage Flow
                          </div>
                          <div className="text-[10px] text-slate-500 leading-tight">
                            Audio ➔ Transcript ➔ Local AI Search.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/rosense-box#comparison"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                          <Layers className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#10B981] transition-colors">
                            Cloud vs. Air-Gapped
                          </div>
                          <div className="text-[10px] text-slate-500 leading-tight">
                            Why cloud AI isn't enough for IP.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/rosense-box#specs"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                          <Cpu className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#10B981] transition-colors">
                            Specs & Capex Pricing
                          </div>
                          <div className="text-[10px] text-slate-500 leading-tight">
                            Sized for your enterprise workload.
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>Air-gapped deployment with zero cloud dependency.</span>
                      </div>
                      <Link
                        href="/rosense-box"
                        className="text-[11px] font-bold text-[#10B981] hover:underline flex items-center gap-0.5"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeDropdown === "solutions" || pathname.startsWith("/solutions")
                    ? "text-[#10B981] bg-slate-50 font-semibold"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180 text-[#10B981]" : ""}`} />
              </button>

              {activeDropdown === "solutions" && (
                <div className="absolute top-full left-[-160px] w-[940px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 mt-1 animate-in fade-in duration-150">
                  <div className="grid grid-cols-3 gap-6 pb-4 border-b border-slate-100">
                    {/* Column 1: Leadership */}
                    <div className="space-y-2 border-r border-slate-100 pr-4">
                      <p className="text-[11px] font-bold text-[#10B981] uppercase tracking-wider mb-2 font-mono flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> Leadership & Strategy
                      </p>

                      <Link
                        href="/solutions/executive-leadership"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-900 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                          <Users className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#10B981] transition-colors">
                            Executive Leadership
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            Strategic decision tracking & board briefs.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/solutions/strategy-pmo"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Briefcase className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981] transition-colors">
                            Strategy & PMO
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            Offsite synthesis & milestone execution.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/solutions/operations"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                          <BarChart3 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981] transition-colors">
                            Operations Leaders
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            SOP extraction & cross-team execution.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/solutions/compliance-risk"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Landmark className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981] transition-colors">
                            Compliance & Risk
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            DPDP compliance & air-gapped logs.
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Column 2: Business Teams */}
                    <div className="space-y-2 border-r border-slate-100 pr-4">
                      <p className="text-[11px] font-bold text-[#10B981] uppercase tracking-wider mb-2 font-mono flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" /> Business & Revenue
                      </p>

                      <Link
                        href="/solutions/sales"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-900 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                          <TrendingUp className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#10B981] transition-colors">
                            Sales Teams
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            Never lose a deal commitment or objection.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/solutions/customer-success"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                          <UserCheck className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981] transition-colors">
                            Customer Success
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            Renewal risk tracking & client handoff.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/solutions/marketing"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Megaphone className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981] transition-colors">
                            Marketing
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            Voice-of-Customer pain points & quotes.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/solutions/finance"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                          <DollarSign className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981] transition-colors">
                            Finance
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            Budget discussion logs & contract audit.
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Column 3: Operations & Tech */}
                    <div className="space-y-2">
                      <p className="text-[11px] font-bold text-[#10B981] uppercase tracking-wider mb-2 font-mono flex items-center gap-1">
                        <Cpu className="w-3.5 h-3.5" /> Operations & Tech
                      </p>

                      <Link
                        href="/solutions/engineering"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-900 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                          <FileCode2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#10B981] transition-colors">
                            Engineering
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            Architecture decisions & tech debt memory.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/solutions/it-support"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Headphones className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981] transition-colors">
                            IT & Support
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            Incident debriefs & KB auto-documentation.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/solutions/hr-talent"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                          <UserPlus className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981] transition-colors">
                            HR & Talent
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            Unbiased interview notes & talent briefs.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/solutions/consulting"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Wrench className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#10B981] transition-colors">
                            Consulting & Advisory
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            Billable discovery synthesis & client reports.
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Mega Menu Footer Banner */}
                  <div className="pt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <LayoutGrid className="w-4 h-4 text-[#10B981]" />
                      <span className="font-medium text-slate-700">Looking for custom role configurations or all solutions?</span>
                    </div>
                    <Link
                      href="/solutions"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#10B981] hover:text-[#059669] hover:underline"
                    >
                      <span>Explore All Solutions Hub</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Pricing Page Link */}
            <Link
              href="/pricing"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/pricing"
                  ? "text-[#10B981] bg-slate-50 font-semibold"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Pricing
            </Link>

            {/* 4. Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("resources")}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeDropdown === "resources"
                    ? "text-[#10B981] bg-slate-50 font-semibold"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "resources" ? "rotate-180 text-[#10B981]" : ""}`} />
              </button>

              {activeDropdown === "resources" && (
                <div className="absolute top-full left-0 w-[420px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 mt-1 grid grid-cols-2 gap-4 animate-in fade-in duration-150">
                  <div className="space-y-2">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Learn & Guides
                    </p>
                    <Link href="/company/trust" className="block text-xs font-semibold text-slate-800 hover:text-[#10B981] p-1.5 rounded hover:bg-slate-50">
                      Buyer's Guide
                    </Link>
                    <Link href="/platform/appliance" className="block text-xs font-semibold text-slate-800 hover:text-[#10B981] p-1.5 rounded hover:bg-slate-50">
                      Deployment Specs
                    </Link>
                    <Link href="/company/trust" className="block text-xs font-semibold text-slate-800 hover:text-[#10B981] p-1.5 rounded hover:bg-slate-50">
                      Security Whitepaper
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Support & Center
                    </p>
                    <Link href="/company/contact" className="block text-xs font-semibold text-slate-800 hover:text-[#10B981] p-1.5 rounded hover:bg-slate-50">
                      Help & FAQs
                    </Link>
                    <Link href="/company/contact" className="block text-xs font-semibold text-slate-800 hover:text-[#10B981] p-1.5 rounded hover:bg-slate-50">
                      Contact Support
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Company & Trust Center Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("company")}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeDropdown === "company" || pathname.startsWith("/company")
                    ? "text-[#10B981] bg-slate-50 font-semibold"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "company" ? "rotate-180 text-[#10B981]" : ""}`} />
              </button>

              {activeDropdown === "company" && (
                <div className="absolute top-full right-0 w-[420px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 mt-1 grid grid-cols-2 gap-4 animate-in fade-in duration-150">
                  <div className="space-y-2">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      About RoSense
                    </p>
                    <Link href="/company/about" className="block text-xs font-semibold text-slate-800 hover:text-[#10B981] p-1.5 rounded hover:bg-slate-50">
                      Mission & Vision
                    </Link>
                    <Link href="/company/contact" className="block text-xs font-semibold text-slate-800 hover:text-[#10B981] p-1.5 rounded hover:bg-slate-50">
                      Contact Sales
                    </Link>
                  </div>

                  <div className="space-y-2 bg-slate-900 text-white p-3 rounded-xl border border-slate-800">
                    <p className="text-[10px] font-mono text-[#10B981] uppercase font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Trust Center ⭐
                    </p>
                    <div className="text-xs text-slate-300">
                      View full 8-layer vault security, DPDP compliance & crypto-shredding.
                    </div>
                    <Link
                      href="/company/trust"
                      className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#10B981] hover:underline"
                    >
                      <span>Open Trust Center</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3" id="nav-actions">
            <Link
              href="/login"
              className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 transition-colors"
              id="nav-login-btn"
            >
              Log In
            </Link>
            <Link
              href="/company/contact"
              className="inline-flex items-center justify-center gap-1.5 bg-[#10B981] hover:bg-[#059669] text-white text-sm font-semibold px-4.5 py-2 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              id="nav-book-demo-btn"
            >
              <span>Book a Demo</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
            id="nav-mobile-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3">
            <div className="font-bold text-xs text-[#10B981] uppercase tracking-wider pt-2 font-mono flex items-center gap-1">
              <Compass className="w-3.5 h-3.5" /> Platform — Discover
            </div>
            <Link
              href="/platform"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Platform Overview
            </Link>
            <Link
              href="/platform#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              How It Works
            </Link>
            <Link
              href="/platform#product-tour"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Product Tour
            </Link>
            <Link
              href="/platform#intelligence"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Enterprise Conversation Intelligence
            </Link>

            <div className="font-bold text-xs text-[#10B981] uppercase tracking-wider pt-2 font-mono flex items-center gap-1">
              <Target className="w-3.5 h-3.5" /> Platform — Business Value
            </div>
            <Link
              href="/platform#audio-intelligence"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Capture Every Conversation
            </Link>
            <Link
              href="/platform#decision-intelligence"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Extract Decisions & Actions
            </Link>
            <Link
              href="/platform#organizational-memory"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Build Organizational Memory
            </Link>
            <Link
              href="/platform#enterprise-search"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Search Enterprise Knowledge
            </Link>
            <Link
              href="/platform#workflow-automation"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Workflow Automation
            </Link>

            <div className="font-bold text-xs text-[#10B981] uppercase tracking-wider pt-2 font-mono flex items-center gap-1">
              <Server className="w-3.5 h-3.5" /> Platform — Enterprise
            </div>
            <Link
              href="/platform#private-deployment"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Private Deployment
            </Link>

            {/* RoSense Box ⭐ Mobile Dedicated Section */}
            <div className="bg-slate-900 text-white p-3.5 rounded-xl border border-slate-800 my-2 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>RoSense Box</span>
                  <span className="text-amber-400 text-xs">⭐</span>
                </span>
                <span className="text-[9px] bg-[#10B981]/20 text-[#10B981] px-2 py-0.5 rounded font-mono font-bold">
                  100% Air-Gapped
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                Turnkey private AI appliance for enterprise data sovereignty.
              </p>
              <Link
                href="/rosense-box"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-between w-full bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-xs px-3 py-2 rounded-lg transition-colors"
              >
                <span>Open RoSense Box Page</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="font-bold text-xs text-[#10B981] uppercase tracking-wider pt-2 font-mono flex items-center gap-1">
              <Users className="w-3.5 h-3.5" /> Solutions — Leadership
            </div>
            <Link
              href="/solutions/executive-leadership"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Executive Leadership
            </Link>
            <Link
              href="/solutions/strategy-pmo"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Strategy & PMO
            </Link>
            <Link
              href="/solutions/operations"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Operations Leaders
            </Link>
            <Link
              href="/solutions/compliance-risk"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Compliance & Risk
            </Link>

            <div className="font-bold text-xs text-[#10B981] uppercase tracking-wider pt-2 font-mono flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> Solutions — Business Teams
            </div>
            <Link
              href="/solutions/sales"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Sales Teams
            </Link>
            <Link
              href="/solutions/customer-success"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Customer Success
            </Link>
            <Link
              href="/solutions/marketing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Marketing
            </Link>
            <Link
              href="/solutions/finance"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Finance
            </Link>

            <div className="font-bold text-xs text-[#10B981] uppercase tracking-wider pt-2 font-mono flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5" /> Solutions — Operations & Tech
            </div>
            <Link
              href="/solutions/engineering"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Engineering
            </Link>
            <Link
              href="/solutions/it-support"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              IT & Support
            </Link>
            <Link
              href="/solutions/hr-talent"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              HR & Talent
            </Link>
            <Link
              href="/solutions/consulting"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Consulting & Advisory
            </Link>
            <Link
              href="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-[#10B981] hover:underline pl-2 flex items-center gap-1"
            >
              <span>Explore All Solutions Hub</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <div className="font-bold text-xs text-slate-400 uppercase tracking-wider pt-2">
              Company & Security
            </div>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Pricing & Appliance Tiers
            </Link>
            <Link
              href="/company/trust"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#10B981] flex items-center gap-1.5 pl-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Security & Trust Center ⭐</span>
            </Link>
            <Link
              href="/company/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Contact Sales
            </Link>
          </nav>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 font-semibold text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              Log In
            </Link>
            <Link
              href="/company/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 font-semibold text-white bg-[#10B981] hover:bg-[#059669] rounded-lg shadow"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
