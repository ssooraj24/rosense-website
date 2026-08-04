"use client";

import { ShieldCheck, Lock, FileCheck, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function PricingSecurityCallout() {
  return (
    <section className="py-20 bg-slate-900 text-white border-t border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#10B981] font-semibold text-xs uppercase tracking-wider bg-[#10B981]/10 px-3.5 py-1.5 rounded-full border border-[#10B981]/30">
              <HelpCircle className="w-4 h-4" />
              <span>Tailored Architecture Advisory</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Not Sure Which Deployment Fits Your Organization?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Let&apos;s design the right AI infrastructure together. Our solutions engineering team provides architecture advisory, pre-audit gap analysis, DPDP compliance reviews, and custom NDA/BAA execution.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#10B981]" />
                <span>Custom NDA / BAA</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#10B981]" />
                <span>DPDP Data Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>Air-Gap Verification</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/company/contact"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-sm whitespace-nowrap"
            >
              <span>Design Infrastructure Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
