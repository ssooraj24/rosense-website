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
                <div className="absolute top-full left-0 w-[720px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 mt-1 grid grid-cols-12 gap-6 animate-in fade-in duration-150">
                  {/* Col 1: Capabilities */}
                  <div className="col-span-7 space-y-3 border-r border-slate-100 pr-6">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Core Platform Capabilities
                    </p>
                    <Link
                      href="/platform"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-900 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-[#10B981] transition-colors">
                          Platform Overview
                        </div>
                        <div className="text-xs text-slate-500">
                          Complete end-to-end conversation intelligence tour.
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/platform#capabilities"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                        <FileCode2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-[#10B981] transition-colors">
                          Mamba-3 Decision Extraction
                        </div>
                        <div className="text-xs text-slate-500">
                          Extract decisions, commitments, owners & risks.
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/platform#rag"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-[#10B981] transition-colors">
                          pgvector Enterprise RAG Search
                        </div>
                        <div className="text-xs text-slate-500">
                          Sub-second semantic memory search with audio jump.
                        </div>
                      </div>
                    </Link>
                    <div className="flex items-center justify-between pt-2 text-xs text-slate-400 font-mono">
                      <span>APIs & Webhooks</span>
                      <span className="text-[10px] font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">
                        🚀 Coming Soon
                      </span>
                    </div>
                  </div>

                  {/* Col 2: Flagship Appliance Spotlight Card */}
                  <div className="col-span-5 bg-slate-900 text-white rounded-xl p-4 flex flex-col justify-between border border-slate-800">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 px-2.5 py-0.5 rounded-full border border-[#10B981]/30">
                        <Lock className="w-3 h-3" /> Flagship Hardware
                      </div>
                      <h4 className="text-base font-bold text-white">
                        RoSense Box (Private Appliance)
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        ITX Ryzen 9 + RTX 5060 hardware box running 100% air-gapped on your office LAN (`rosense.local`).
                      </p>
                    </div>
                    <Link
                      href="/platform/appliance"
                      className="mt-4 inline-flex items-center justify-center gap-1.5 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-xs px-4 py-2 rounded-lg transition-colors"
                    >
                      <span>Explore Appliance Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
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
            <div className="font-bold text-xs text-slate-400 uppercase tracking-wider pt-2">
              Platform & Product
            </div>
            <Link
              href="/platform"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-[#10B981] pl-2"
            >
              Platform Overview
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
