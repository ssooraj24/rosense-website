"use client";

import Link from "next/link";
import { Check, Cpu, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Cloud Sandbox",
      subtitle: "For early testing & individual evaluators",
      price: "₹0",
      period: "Free Forever",
      quota: "5 Hours (300 mins) / month",
      users: "1 User seat",
      features: [
        "Standard Speech-to-Text Transcription",
        "Basic Speaker Identification",
        "1-Month Search History",
        "Cloud Storage (Encrypted)",
      ],
      ctaText: "Start Free Sandbox",
      ctaLink: "#sandbox",
      highlight: false,
    },
    {
      name: "Business Tier",
      subtitle: "For growing teams & agencies",
      price: "₹4,999",
      period: "per month",
      quota: "200 Hours (12,000 mins) / month",
      users: "Unlimited User seats",
      features: [
        "Full Decision & Risk Extraction",
        "REST API & Webhooks Access",
        "Audio Jump Search (20s RAM Clips)",
        "Priority GPU Worker Queue",
        "Exportable PDF Executive Briefings",
      ],
      ctaText: "Choose Business Plan",
      ctaLink: "#sandbox",
      highlight: false,
    },
    {
      name: "Private Appliance Box",
      subtitle: "Flagship Turnkey Hardware for Enterprise",
      price: "₹2,50,000",
      period: "One-Time Capex + ₹50,000/yr AMC",
      quota: "Unlimited Hours & Recordings",
      users: "Unlimited Enterprise Users",
      features: [
        "Pre-configured ITX Appliance (Ryzen 9 + RTX 5060)",
        "14.3GB Offline Local Models (rosense.local)",
        "100% Air-Gapped / Zero Data Leaves LAN",
        "Automated 3-2-1 Backup Topology (L1/L2/L3)",
        "Instant 1-Second Crypto-Shredding Key Vault",
        "Dedicated Security Team Support & Hardware Warranty",
      ],
      ctaText: "Request Appliance Demo",
      ctaLink: "#sandbox",
      highlight: true,
      badge: "Flagship On-Prem",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Outcome Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Clear Plans Built for <span className="text-gradient-emerald">Every Scale</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            From free cloud evaluation to turnkey on-premise hardware appliances.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.highlight
                  ? "bg-slate-900 text-white border-2 border-[#10B981] shadow-2xl emerald-glow scale-[1.03] relative"
                  : "bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#10B981] text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Cpu className="w-3 h-3" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mt-1 ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                    {plan.subtitle}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-slate-200/20">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                    <span className={`text-xs ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <div className="mt-3 space-y-1 text-xs font-medium">
                    <div className={plan.highlight ? "text-emerald-400 font-bold" : "text-[#10B981] font-bold"}>
                      Quota: {plan.quota}
                    </div>
                    <div className={plan.highlight ? "text-slate-300" : "text-slate-600"}>
                      Users: {plan.users}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? "text-[#10B981]" : "text-[#10B981]"}`} />
                      <span className={plan.highlight ? "text-slate-200" : "text-slate-700"}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href={plan.ctaLink}
                  className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-xl transition-all ${
                    plan.highlight
                      ? "bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold shadow-lg"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                  id={`pricing-cta-${idx}`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
