"use client";

import { Sparkles, Cpu, Cloud, Server } from "lucide-react";

export default function PricingMatrix() {
  const rows = [
    {
      feature: "AI Processing Engine",
      privateBox: "Local / Offline",
      enterprise: "Local GPU Cluster",
      cloud: "Managed Cloud",
      highlight: true,
    },
    {
      feature: "Data Ownership & Residency",
      privateBox: "100% Full Sovereignty",
      enterprise: "100% Full Sovereignty",
      cloud: "Managed Cloud Vault",
      highlight: true,
    },
    {
      feature: "Internet Connection Required",
      privateBox: "Optional (Air-Gapped LAN)",
      enterprise: "Optional (Air-Gapped LAN)",
      cloud: "Yes (Internet Required)",
      highlight: false,
    },
    {
      feature: "Hardware Appliance Included",
      privateBox: "Yes (Turnkey ITX Hardware)",
      enterprise: "No (Uses Existing Infrastructure)",
      cloud: "No (Cloud Hosted)",
      highlight: false,
    },
    {
      feature: "GPU & Compute Scaling",
      privateBox: "Modular Expansion Ready",
      enterprise: "Uses Existing Cluster",
      cloud: "Automated Cloud Scaling",
      highlight: false,
    },
    {
      feature: "Custom AI Model Integration",
      privateBox: "Yes (Local Fine-Tuned Models)",
      enterprise: "Yes (Full Enterprise Customization)",
      cloud: "Supported on Request",
      highlight: false,
    },
    {
      feature: "Enterprise Integrations & APIs",
      privateBox: "Included Native Connectors",
      enterprise: "Advanced API & Custom SSO",
      cloud: "Standard REST APIs",
      highlight: false,
    },
    {
      feature: "Security Perimeter",
      privateBox: "High (Physical LAN Isolation)",
      enterprise: "Highest (Air-Gapped + Custom Policy)",
      cloud: "Enterprise Encrypted Cloud",
      highlight: true,
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architecture Breakdown</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Compare Deployment <span className="text-gradient-emerald">Options</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Choose the deployment architecture that matches your organizational compliance and infrastructure goals.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead className="bg-slate-900 text-white font-mono text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-5 font-sans font-bold text-sm text-white">Deployment Criteria</th>
                  <th className="p-5 text-center text-[#10B981] font-sans font-bold text-sm bg-slate-950/80 border-x border-[#10B981]/40">
                    <div className="flex items-center justify-center gap-1.5">
                      <Cpu className="w-4 h-4 text-[#10B981]" />
                      <span>Private Box ⭐</span>
                    </div>
                  </th>
                  <th className="p-5 text-center text-slate-200 font-sans font-bold text-sm">
                    <div className="flex items-center justify-center gap-1.5">
                      <Server className="w-4 h-4 text-emerald-400" />
                      <span>Enterprise On-Prem</span>
                    </div>
                  </th>
                  <th className="p-5 text-center text-slate-400 font-sans font-bold text-sm">
                    <div className="flex items-center justify-center gap-1.5">
                      <Cloud className="w-4 h-4" />
                      <span>Cloud Deployment</span>
                    </div>
                  </th>
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
                    <td className="p-4 sm:p-5 text-center font-semibold text-[#059669] bg-emerald-50/60 border-x border-emerald-200/80">
                      <span className="inline-block bg-[#10B981] text-slate-950 px-3.5 py-1 rounded-full text-xs font-bold shadow-sm">
                        {row.privateBox}
                      </span>
                    </td>
                    <td className="p-4 sm:p-5 text-center font-semibold text-slate-800">
                      <span className="inline-block bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {row.enterprise}
                      </span>
                    </td>
                    <td className="p-4 sm:p-5 text-center font-medium text-slate-600">
                      <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs">
                        {row.cloud}
                      </span>
                    </td>
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
