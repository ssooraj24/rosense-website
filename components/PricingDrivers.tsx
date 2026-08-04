"use client";

import { Cpu, Users, Server, Network, Database, ShieldCheck, Sparkles } from "lucide-react";

export default function PricingDrivers() {
  const drivers = [
    {
      icon: Cpu,
      title: "AI Model Architecture",
      subtitle: "Tailored model selection",
      description: "From lightweight on-premise models to high-parameter LLMs and fine-tuned domain-specific intelligence.",
      tags: ["Local Models", "Enterprise LLMs", "Domain Tuning"],
    },
    {
      icon: Users,
      title: "Organization & Users",
      subtitle: "Scaled access controls",
      description: "Priced around total employee seats, concurrent meeting processing capacity, and department segregation.",
      tags: ["Seat Tiers", "Concurrent Streams", "Role-Based Access"],
    },
    {
      icon: Server,
      title: "Infrastructure Topology",
      subtitle: "Flexible hosting choices",
      description: "Deploy on dedicated RoSense hardware, integrate with your existing GPU servers, or run in secure cloud environments.",
      tags: ["Private Box", "On-Prem GPUs", "Hybrid Cloud"],
    },
    {
      icon: Network,
      title: "Enterprise Integrations",
      subtitle: "Seamless ecosystem hooks",
      description: "Native connectors for enterprise communication platforms, CRMs, ERPs, knowledge vaults, and custom webhooks.",
      tags: ["Microsoft 365", "Google Workspace", "Custom REST APIs"],
    },
    {
      icon: Database,
      title: "Storage & Knowledge Volume",
      subtitle: "Custom data retention",
      description: "Configured based on total meeting archive hours, vector index sizing, and compliant data retention windows.",
      tags: ["Meeting Vault", "Vector Indexing", "Retention Policies"],
    },
    {
      icon: ShieldCheck,
      title: "Support & SLA Tiers",
      subtitle: "Dedicated operational care",
      description: "Choose from standard business-hour guidance to 24/7 SLA response, custom onboarding, and dedicated AI engineering.",
      tags: ["24/7 SLA", "Dedicated Support", "On-Site Training"],
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Deployment Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Every Organization is <span className="text-gradient-emerald">Different</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Instead of charging per query or per token, RoSense is transparently priced based on your infrastructure and security requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drivers.map((driver, idx) => {
            const Icon = driver.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#10B981] flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{driver.title}</h3>
                  <p className="text-xs font-semibold text-[#059669] mb-3">{driver.subtitle}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {driver.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {driver.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 bg-white rounded-2xl border border-emerald-200/80 p-6 shadow-sm text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#10B981]/15 text-[#059669] flex items-center justify-center shrink-0 font-bold text-lg">
            ✓
          </div>
          <p className="text-slate-800 text-sm font-semibold">
            No hidden usage fees. No token-based billing surprises. Pay only for what your organization deploys.
          </p>
        </div>
      </div>
    </section>
  );
}
