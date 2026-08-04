"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      {/* Final Conversion Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 border border-slate-800 p-8 sm:p-12 text-center relative overflow-hidden emerald-glow-sm">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Stop Losing Decisions. <br />
              <span className="text-gradient-emerald">Start Building Organizational Intelligence.</span>
            </h2>
            <p className="text-slate-300 text-base">
              Book a live demo to see how RoSense AI turns your long business conversations into structured, actionable enterprise memory.
            </p>
            <div className="pt-2">
              <Link
                href="/company/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#10B981] hover:bg-[#059669] text-slate-950 text-base font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all"
                id="footer-final-cta"
              >
                <span>Book Your Private Demo Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main 5-Column Enterprise Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Product */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Product</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/platform" className="hover:text-[#10B981] transition-colors">Platform Overview</Link></li>
              <li><Link href="/platform/appliance" className="text-[#10B981] font-semibold hover:underline flex items-center gap-1"><Lock className="w-3 h-3" /> RoSense Box (On-Prem)</Link></li>
              <li><Link href="/pricing" className="hover:text-[#10B981] transition-colors">Cloud Sandbox</Link></li>
              <li><Link href="/pricing" className="hover:text-[#10B981] transition-colors">Pricing & AMC</Link></li>
              <li><Link href="/platform/integrations" className="hover:text-[#10B981] transition-colors">APIs & Webhooks 🚀</Link></li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/solutions/workshops" className="hover:text-[#10B981] transition-colors font-semibold text-slate-200">Strategy Workshops ⭐</Link></li>
              <li><Link href="/solutions/board-meetings" className="hover:text-[#10B981] transition-colors">Board & Executive Meetings</Link></li>
              <li><Link href="/solutions/compliance" className="hover:text-[#10B981] transition-colors">Legal & Compliance Audit</Link></li>
              <li><Link href="/solutions" className="hover:text-[#10B981] transition-colors">Enterprise & Government</Link></li>
              <li><Link href="/solutions" className="hover:text-[#10B981] transition-colors">All Use Cases</Link></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/company/trust" className="hover:text-[#10B981] transition-colors">Documentation</Link></li>
              <li><Link href="/company/trust" className="hover:text-[#10B981] transition-colors">Buyer's Guide</Link></li>
              <li><Link href="/platform/appliance" className="hover:text-[#10B981] transition-colors">Deployment Specs</Link></li>
              <li><Link href="/company/trust" className="hover:text-[#10B981] transition-colors">Security Whitepaper</Link></li>
              <li><Link href="/company/contact" className="hover:text-[#10B981] transition-colors">Release Notes</Link></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/company/about" className="hover:text-[#10B981] transition-colors">About Us</Link></li>
              <li><Link href="/company/contact" className="hover:text-[#10B981] transition-colors">Contact Sales</Link></li>
              <li><Link href="/company/contact" className="hover:text-[#10B981] transition-colors">Partners Program</Link></li>
              <li><Link href="/company/contact" className="hover:text-[#10B981] transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Col 5: Dedicated Trust Column */}
          <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <h3 className="text-xs font-bold text-[#10B981] uppercase tracking-wider flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Trust Center ⭐
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/company/trust" className="hover:text-[#10B981] transition-colors font-medium">Security Vault Architecture</Link></li>
              <li><Link href="/company/trust" className="hover:text-[#10B981] transition-colors">DPDP & GDPR Compliance</Link></li>
              <li><Link href="/company/trust" className="hover:text-[#10B981] transition-colors">1-Sec Crypto-Shred Spec</Link></li>
              <li><Link href="/company/trust" className="hover:text-[#10B981] transition-colors">Data Processing Agreement</Link></li>
              <li><Link href="/company/trust" className="hover:text-[#10B981] transition-colors">Zero Model Training Pledge</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-auto flex items-center">
              <Image
                src="/logo-R.png"
                alt="RoSense AI Logo"
                width={140}
                height={35}
                className="h-8 w-auto object-contain"
              />
            </div>
            <span>© {new Date().getFullYear()} RoSense AI. All rights reserved. Prepared for Nisol & Enterprise Clients.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/company/trust" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/company/trust" className="hover:text-slate-300">Terms of Service</Link>
            <Link href="/company/trust" className="hover:text-slate-300">Security Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
