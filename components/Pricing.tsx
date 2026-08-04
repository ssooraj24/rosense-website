"use client";

import Link from "next/link";
import { Check, Cpu, Server, Cloud, Sparkles, ArrowRight, Clock, Info } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Private Box",
      badge: "Flagship Appliance — Most Popular ⭐",
      summary: "Perfect for organizations wanting complete AI ownership without building complex infrastructure.",
      deploymentTime: "2–5 Business Days",
      icon: Cpu,
      price: "Starting from ₹2,50,000",
      period: "One-Time Capex + ₹50,000/yr AMC",
      highlight: true,
      features: [
        "Turnkey ITX Hardware Appliance (Pre-configured)",
        "Local AI Speech & Decision Extraction Engines",
        "100% Air-Gapped Data Sovereignty (`rosense.local`)",
        "1-Second Crypto-Shredding Emergency Vault",
        "Automated 3-2-1 Multi-Layer Backup Topology",
        "Includes On-Site Installation & Training Support",
      ],
      ctaText: "Request Private Box Quote",
      ctaLink: "/company/contact",
    },
    {
      name: "Enterprise Deployment",
      badge: "Existing Infrastructure",
      summary: "Deploy directly into your organization's existing data center and GPU environment.",
      deploymentTime: "1–3 Weeks",
      icon: Server,
      price: "Custom Enterprise Quote",
      period: "Tailored to GPU cluster scale",
      highlight: false,
      features: [
        "Deploys on Your Existing GPU & Server Clusters",
        "Unlimited User Seats & Meeting Processing Capacity",
        "Advanced Enterprise SSO & Active Directory Integration",
        "Custom REST APIs, Webhooks & ERP/CRM Hooks",
        "Dedicated Security Team & SLA Response",
        "Proprietary Model Fine-Tuning Support",
      ],
      ctaText: "Talk to Sales",
      ctaLink: "/company/contact",
    },
    {
      name: "Cloud Deployment",
      badge: "Available on Request",
      summary: "Fastest way to start evaluating RoSense in a managed environment.",
      deploymentTime: "24–48 Hours",
      icon: Cloud,
      price: "Custom Managed SaaS",
      period: "Flexible consumption plan",
      highlight: false,
      features: [
        "Fully Managed Cloud Infrastructure & Uptime",
        "Hosted AI Services with Automatic Updates",
        "Scalable Cloud Storage & Meeting Archives",
        "AES-256 Encrypted Storage Vault",
        "Standard REST APIs & Webhooks Access",
        "24/7 Cloud System Uptime Monitoring",
      ],
      ctaText: "Contact Sales",
      ctaLink: "/company/contact",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Deployment Options</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Choose Your <span className="text-gradient-emerald">Deployment Approach</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Every deployment is tailored to your infrastructure, security requirements, AI models, and organizational scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-14">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.highlight
                    ? "bg-slate-900 text-white border-2 border-[#10B981] shadow-2xl emerald-glow scale-[1.04] z-10 relative"
                    : "bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1"
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap ${
                      plan.highlight
                        ? "bg-[#10B981] text-slate-950"
                        : "bg-slate-800 text-white border border-slate-700"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  <div className="mb-6 pt-3">
                    <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-4 border border-[#10B981]/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className={`text-2xl font-bold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                      {plan.name}
                    </h3>
                    
                    {/* Best-Fit Quick Summary Quote */}
                    <div className={`mt-2 text-xs italic leading-relaxed p-3 rounded-lg ${
                      plan.highlight ? "bg-slate-800/80 text-emerald-300 border border-slate-700/80" : "bg-slate-50 text-slate-600 border border-slate-200/60"
                    }`}>
                      &ldquo;{plan.summary}&rdquo;
                    </div>

                    {/* Deployment Time Pill */}
                    <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold">
                      <Clock className="w-3.5 h-3.5 text-[#10B981]" />
                      <span className={plan.highlight ? "text-slate-300" : "text-slate-600"}>
                        Deployment: <strong className={plan.highlight ? "text-white" : "text-slate-900"}>{plan.deploymentTime}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="mb-6 pb-6 border-b border-slate-200/20">
                    <div className="flex items-baseline gap-1">
                      <span className={`tracking-tight ${
                        plan.highlight ? "text-3xl sm:text-4xl font-black text-white" : "text-2xl sm:text-3xl font-extrabold text-slate-900"
                      }`}>
                        {plan.price}
                      </span>
                    </div>
                    <div className={`text-xs mt-1.5 font-medium ${plan.highlight ? "text-emerald-400 font-semibold" : "text-slate-500"}`}>
                      {plan.period}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs">
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#10B981]" />
                        <span className={plan.highlight ? "text-slate-200 font-medium" : "text-slate-700 font-medium"}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href={plan.ctaLink}
                    className={`w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-4 rounded-xl transition-all ${
                      plan.highlight
                        ? "bg-[#10B981] hover:bg-[#059669] text-slate-950 shadow-lg hover:shadow-emerald-900/30"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                    id={`pricing-cta-${idx}`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Hardware Sizing Callout Note */}
        <div className="max-w-4xl mx-auto bg-slate-900 text-slate-300 border border-slate-800 rounded-xl p-5 shadow-sm flex items-start gap-3.5 text-xs sm:text-sm">
          <Info className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-white">Hardware is sized to your workload.</span> The configuration and pricing of the RoSense Private Box may vary depending on AI model size, meeting volume, storage requirements, and future scalability. Components such as GPU, RAM, and storage can be modularly upgraded as your organization grows.
          </div>
        </div>
      </div>
    </section>
  );
}
