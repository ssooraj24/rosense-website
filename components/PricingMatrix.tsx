"use client";

import { Sparkles, Cpu, Cloud, Server, ShieldCheck, Check, X } from "lucide-react";

export default function PricingMatrix() {
  const rows = [
    {
      feature: "Monthly Processing Quota",
      sandbox: "5 Meetings / mo",
      business: "100 Meetings / mo",
      privateBox: "Unlimited Hours",
      enterprise: "Unlimited Hours",
      highlight: false,
    },
    {
      feature: "User Seats Included",
      sandbox: "1 Seat",
      business: "Unlimited Seats",
      privateBox: "Unlimited Seats",
      enterprise: "Unlimited Seats",
      highlight: false,
    },
    {
      feature: "AI Ingestion Engine",
      sandbox: "Shared Cloud AI",
      business: "Priority Cloud AI",
      privateBox: "Local Offline AI",
      enterprise: "Custom Fine-Tuned AI",
      highlight: true,
    },
    {
      feature: "Data Ownership & Residency",
      sandbox: "Encrypted Cloud",
      business: "Encrypted Cloud",
      privateBox: "100% On-Prem (`rosense.local`)",
      enterprise: "100% On-Premise LAN",
      highlight: true,
    },
    {
      feature: "Air-Gapped Security Isolation",
      sandbox: "No",
      business: "No",
      privateBox: "Yes (100% Offline)",
      enterprise: "Yes (Air-Gapped Cluster)",
      highlight: true,
    },
    {
      feature: "Instant Crypto-Shredding",
      sandbox: "No",
      business: "No",
      privateBox: "Yes (1s Key Vault)",
      enterprise: "Yes (Custom Key Vault)",
      highlight: true,
    },
    {
      feature: "Hardware Included",
      sandbox: "No",
      business: "No",
      privateBox: "Yes (Turnkey ITX Hardware)",
      enterprise: "Uses Existing GPUs",
      highlight: false,
    },
    {
      feature: "Enterprise Integrations & APIs",
      sandbox: "No",
      business: "Basic REST API",
      privateBox: "Full Native Connectors",
      enterprise: "Custom SSO & APIs",
      highlight: false,
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clear Upgrade Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Feature & Capability <span className="text-gradient-emerald">Comparison</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Detailed breakdown showing why enterprise teams upgrade from cloud evaluation to turnkey Private Box appliances.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead className="bg-slate-900 text-white font-mono text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5 font-sans font-bold text-sm text-white">Capabilities</th>
                  <th className="p-4 sm:p-5 text-center text-slate-400 font-sans text-xs">Sandbox</th>
                  <th className="p-4 sm:p-5 text-center text-slate-300 font-sans text-xs">Business Cloud</th>
                  <th className="p-4 sm:p-5 text-center text-[#10B981] font-sans font-bold text-sm bg-slate-950 border-x border-[#10B981]/40">
                    <div className="flex items-center justify-center gap-1.5">
                      <Cpu className="w-4 h-4 text-[#10B981]" />
                      <span>Private Box ⭐</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 text-center text-slate-200 font-sans text-xs">Enterprise On-Prem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm font-medium">
                {rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      row.highlight ? "bg-emerald-50/40 hover:bg-emerald-50/70" : idx % 2 === 0 ? "bg-slate-50/50" : "bg-white"
                    }`}
                  >
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-center text-slate-500">{row.sandbox}</td>
                    <td className="p-4 sm:p-5 text-center text-slate-700 font-semibold">{row.business}</td>
                    <td className="p-4 sm:p-5 text-center font-bold text-[#059669] bg-emerald-50/60 border-x border-emerald-200/80">
                      <span className="inline-block bg-[#10B981] text-slate-950 px-3 py-1 rounded-full text-xs font-black shadow-sm">
                        {row.privateBox}
                      </span>
                    </td>
                    <td className="p-4 sm:p-5 text-center text-slate-800 font-semibold">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
