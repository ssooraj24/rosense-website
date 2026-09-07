"use client";

import Link from "next/link";
import { Check, Cpu, Server, Cloud, ArrowRight, ShieldCheck, Clock, Info } from "lucide-react";

export default function PricingEnterprise() {
  const plans = [
    {
      name: "Private Box",
      badge: "Flagship Appliance — Most Popular",
      summary: "For organizations wanting complete intelligence ownership without building complex infrastructure.",
      deploymentTime: "2–5 Business Days",
      icon: Cpu,
      price: "Starting from ₹2,50,000",
      period: "One-Time Capex + ₹50,000/yr AMC",
      highlight: true,
      features: [
        "Turnkey ITX Hardware Appliance (Pre-configured)",
        "Offline Local Audio Intelligence & Decision Engines",
        "100% Air-Gapped Data Sovereignty (`rosense.local`)",
        "1-Second Crypto-Shredding Emergency Vault",
        "Automated 3-2-1 Multi-Layer Backup Architecture",
        "Includes On-Site Installation & Staff Training",
      ],
      ctaText: "Request appliance quote",
      ctaLink: "/company/contact",
    },
    {
      name: "Enterprise On-Prem",
      badge: "Existing Infrastructure",
      summary: "Deploy directly into your organization's existing data center and GPU environment.",
      deploymentTime: "1–3 Weeks",
      icon: Server,
      price: "Custom Enterprise Quote",
      period: "Tailored to GPU cluster scale",
      highlight: false,
      features: [
        "Deploys on Your Existing GPU & Server Clusters",
        "Unlimited User Seats & Processing Capacity",
        "Advanced Enterprise SSO & Active Directory Integration",
        "Custom REST APIs, Webhooks & ERP/CRM Connectors",
        "Dedicated Security Team & SLA Response",
        "Proprietary Model Fine-Tuning Support",
      ],
      ctaText: "Talk to our team",
      ctaLink: "/company/contact",
    },
    {
      name: "Private Cloud / VPC",
      badge: "Dedicated Isolated Cloud",
      summary: "Dedicated single-tenant deployment managed within your private cloud VPC.",
      deploymentTime: "3–5 Days",
      icon: Cloud,
      price: "Custom VPC Pricing",
      period: "Dedicated cloud instance",
      highlight: false,
      features: [
        "Single-Tenant Dedicated VPC Cloud Isolation",
        "Hosted Intelligence Services with Automated Security Patches",
        "Custom Data Retention & Encryption Key Control",
        "AES-256 Dedicated Encrypted Storage Vault",
        "Full Enterprise APIs & Custom Webhook Hooks",
        "24/7 Cloud System Uptime Monitoring & SLA",
      ],
      ctaText: "Request VPC spec",
      ctaLink: "/company/contact",
    },
  ];

  return (
    <section id="enterprise-pricing" className="py-24 bg-white text-slate-900 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Enterprise Infrastructure</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Deploy RoSense <span className="text-gradient-emerald">in your control.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Purpose-built for organizations requiring 100% data sovereignty, air-gapped security, and zero public cloud dependencies.
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
                    ? "bg-slate-950 text-white border-2 border-[#10B981] shadow-2xl emerald-glow scale-[1.03] z-10 relative"
                    : "bg-white text-slate-900 border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap ${
                      plan.highlight
                        ? "bg-[#10B981] text-slate-950"
                        : "bg-slate-100 text-slate-700 border border-slate-200"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  <div className="mb-6 pt-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      plan.highlight ? "bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30" : "bg-slate-100 text-slate-800 border border-slate-200"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className={`text-2xl font-bold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                      {plan.name}
                    </h3>
                    
                    <div className={`mt-2 text-xs italic leading-relaxed p-3 rounded-lg border ${
                      plan.highlight ? "bg-slate-900/90 text-slate-300 border-slate-800" : "bg-slate-50 text-slate-600 border-slate-100"
                    }`}>
                      &ldquo;{plan.summary}&rdquo;
                    </div>

                    <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold">
                      <Clock className="w-3.5 h-3.5 text-[#10B981]" />
                      <span className={plan.highlight ? "text-slate-300" : "text-slate-600"}>
                        Deployment: <strong className={plan.highlight ? "text-white" : "text-slate-900"}>{plan.deploymentTime}</strong>
                      </span>
                    </div>
                  </div>

                  <div className={`mb-6 pb-6 border-b ${plan.highlight ? "border-slate-800" : "border-slate-100"}`}>
                    <div className="flex items-baseline gap-1">
                      <span className={`tracking-tight ${
                        plan.highlight ? "text-3xl sm:text-4xl font-bold text-white" : "text-2xl sm:text-3xl font-bold text-slate-900"
                      }`}>
                        {plan.price}
                      </span>
                    </div>
                    <div className={`text-xs mt-1.5 font-semibold ${plan.highlight ? "text-emerald-400" : "text-emerald-600"}`}>
                      {plan.period}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs">
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#10B981]" />
                        <span className={`font-medium ${plan.highlight ? "text-slate-200" : "text-slate-600"}`}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href={plan.ctaLink}
                    className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-4 rounded-xl transition-all ${
                      plan.highlight
                        ? "bg-[#10B981] hover:bg-[#059669] text-slate-950 shadow-lg"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm flex items-start gap-3.5 text-xs sm:text-sm text-slate-700">
          <Info className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900 font-bold">100% Data Sovereignty Guarantee:</strong> All enterprise deployments keep your meeting audio, video, transcripts, and intelligence strictly inside your corporate network perimeter. No public cloud dependencies. No model training on your data.
          </div>
        </div>
      </div>
    </section>
  );
}
