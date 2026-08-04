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

            {/* 2. Solutions Dropdown */}
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
                <div className="absolute top-full left-0 w-[580px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 mt-1 grid grid-cols-2 gap-6 animate-in fade-in duration-150">
                  <div className="space-y-3 border-r border-slate-100 pr-4">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      By Use Case
                    </p>
                    <Link
                      href="/solutions/workshops"
                      className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <Briefcase className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#10B981]">
                          Strategy Workshops & Offsites ⭐
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Process 18+ hour offsite audio into executive summaries.
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/solutions/board-meetings"
                      className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <Users className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#10B981]">
                          Board & Executive Meetings
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Confidential boardroom decision tracking.
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="space-y-3">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      By Sector & Governance
                    </p>
                    <Link
                      href="/solutions/compliance"
                      className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <Landmark className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#10B981]">
                          Legal & Compliance Audit Prep
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Air-gapped records & DPDP audit trails.
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/solutions"
                      className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <Building2 className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#10B981]">
                          All Enterprise Solutions
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Consulting, Government, Banking & Tech.
                        </div>
                      </div>
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
            <Link
              href="/platform/appliance"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#10B981] flex items-center justify-between pl-2"
            >
              <span>RoSense Box (Private Appliance)</span>
              <span className="text-[10px] bg-[#10B981]/10 text-[#10B981] px-2 py-0.5 rounded font-mono">
                On-Prem
              </span>
            </Link>

            <div className="font-bold text-xs text-slate-400 uppercase tracking-wider pt-2">
              Solutions & Use Cases
            </div>
            <Link
              href="/solutions/workshops"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Strategy Workshops & Offsites ⭐
            </Link>
            <Link
              href="/solutions/board-meetings"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Board & Executive Meetings
            </Link>
            <Link
              href="/solutions/compliance"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Legal & Compliance Audit Prep
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
