"use client";

import { ShieldCheck } from "lucide-react";

export default function TrustBar() {
  return (
    <section
      id="trust-bar"
      className="py-12 bg-slate-50 border-y border-slate-200/80"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <ShieldCheck className="w-5 h-5 text-[#10B981]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#10B981]">
            Privacy & Security
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
          What you say stays yours. Always.
        </h3>
        <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
          Your data never leaves your infrastructure. Never trains a model. Never touches a public cloud.
        </p>
      </div>
    </section>
  );
}
