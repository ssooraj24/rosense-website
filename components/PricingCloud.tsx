"use client";

import Link from "next/link";
import { Check, Cloud, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function PricingCloud() {
  const plans = [
    {
      name: "Cloud Sandbox",
      badge: "Product Evaluation",
      summary: "Perfect for testing RoSense capabilities with zero financial commitment.",
      price: "₹0",
      period: "Free Forever",
      highlight: false,
      features: [
        "Up to 5 Meetings / Month Ingestion Quota",
        "1 User Seat for Evaluators & Team Leads",
        "Standard Speech-to-Text & Transcription",
        "1-Month Search History & Memory Vault",
        "Encrypted Cloud Storage & Web Access",
      ],
      ctaText: "Start Free Sandbox",
      ctaLink: "/company/contact",
    },
    {
      name: "Business Cloud SaaS",
      badge: "Self-Service Teams",
      summary: "For growing teams and agencies seeking immediate cloud SaaS access.",
      price: "₹4,999",
      period: "per month / billed annually",
      highlight: true,
      features: [
        "Up to 100 Meetings / Month Ingestion Quota",
        "Unlimited User Seats & Team Workspaces",
        "Full Decision & Risk Extraction Engine",
        "6-Month Searchable Meeting History",
        "Standard REST API & Webhook Access",
        "Priority Processing & Support Queue",
      ],
      ctaText: "Start Business Cloud Trial",
      ctaLink: "/company/contact",
    },
  ];

  return (
    <section id="cloud-pricing" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            <span>Secondary Evaluation Path</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Try RoSense <span className="text-gradient-emerald">Before You Deploy</span>
          </h2>

          <p className="mt-3 text-slate-600 text-base">
            Prefer a low-friction self-service path? Experience RoSense meeting intelligence instantly on our managed cloud platform before upgrading to on-premise infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto mb-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.highlight
                  ? "bg-white border-2 border-[#10B981] shadow-xl relative scale-[1.02]"
                  : "bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              <div>
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#10B981] flex items-center justify-center mb-4">
                    <Cloud className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>

                  <p className="mt-2 text-xs italic text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                    &ldquo;{plan.summary}&rdquo;
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    <span className="text-xs text-slate-500 font-medium">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href={plan.ctaLink}
                  className={`w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-xl transition-all ${
                    plan.highlight
                      ? "bg-[#10B981] hover:bg-[#059669] text-slate-950 shadow-md"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Low-Friction Trust Signal */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-emerald-200 text-slate-800 px-5 py-2.5 rounded-full text-xs font-semibold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>No credit card required. Cancel anytime. Seamlessly upgrade to Private Box when ready.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
