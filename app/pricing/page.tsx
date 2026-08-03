import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Link from "next/link";
import { Check, X, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Pricing & Plans — RoSense AI Enterprise",
  description:
    "Transparent pricing tiers from free cloud sandbox evaluation to turnkey air-gapped hardware appliances. Choose the plan built for your scale.",
};

export default function PricingPage() {
  const matrix = [
    {
      feature: "Monthly Processing Quota",
      sandbox: "5 Hours (300 mins)",
      business: "200 Hours (12,000 mins)",
      appliance: "Unlimited Hours",
    },
    {
      feature: "User Seats",
      sandbox: "1 Seat",
      business: "Unlimited Seats",
      appliance: "Unlimited Seats",
    },
    {
      feature: "Speech-to-Text & Diarization",
      sandbox: "WhisperX Cloud",
      business: "WhisperX Cloud + Priority",
      appliance: "Local WhisperX (4GB CUDA)",
    },
    {
      feature: "Decision & Risk Extraction",
      sandbox: "Basic Summary",
      business: "Full Mamba-3 SSM",
      appliance: "Local Mamba-3 SSM (5.8GB)",
    },
    {
      feature: "1-Click Audio Jump Proof",
      sandbox: "No",
      business: "Yes (20s RAM Clip)",
      appliance: "Yes (RAM-Only Decrypt)",
    },
    {
      feature: "Deployment Sovereignty",
      sandbox: "Encrypted Cloud",
      business: "Encrypted Cloud + API",
      appliance: "100% On-Premise (rosense.local)",
    },
    {
      feature: "Data Residency & Security",
      sandbox: "AES-256 Vault",
      business: "AES-256 Vault + Audit Logs",
      appliance: "Air-Gapped LAN + 1s Crypto-Shred",
    },
    {
      feature: "Backup Topology",
      sandbox: "Cloud Backup",
      business: "Cloud Backup",
      appliance: "3-2-1 (SATA, NAS, USB)",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-[#10B981] selection:text-white">
      <Navbar />

      <main className="pt-24">
        {/* Pricing Header */}
        <section className="bg-slate-900 text-white py-16 text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparent Pricing Architecture</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Choose the Plan Built for <span className="text-gradient-emerald">Your Enterprise</span>
            </h1>
            <p className="text-slate-300 text-base max-w-2xl mx-auto">
              From free cloud exploration to turnkey on-premise hardware appliances with 100% data sovereignty.
            </p>
          </div>
        </section>

        {/* Pricing Cards Component */}
        <Pricing />

        {/* Full Feature Comparison Matrix */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Full Plan Feature Comparison
              </h2>
              <p className="mt-2 text-slate-600 text-sm">
                Detailed breakdown of technical capabilities across Cloud Sandbox, Business, and Private Appliance.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white font-mono text-xs uppercase tracking-wider">
                    <tr>
                      <th className="p-4 sm:p-5">Feature</th>
                      <th className="p-4 sm:p-5 text-slate-300">Cloud Sandbox</th>
                      <th className="p-4 sm:p-5 text-slate-300">Business Tier</th>
                      <th className="p-4 sm:p-5 text-[#10B981]">Private Appliance Box ⭐</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-medium">
                    {matrix.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50/50" : "bg-white"}>
                        <td className="p-4 sm:p-5 font-bold text-slate-900">{row.feature}</td>
                        <td className="p-4 sm:p-5 text-slate-600">{row.sandbox}</td>
                        <td className="p-4 sm:p-5 text-slate-800 font-semibold">{row.business}</td>
                        <td className="p-4 sm:p-5 text-[#059669] font-bold">{row.appliance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Security Pre-Audit Assessment Callout */}
        <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <ShieldCheck className="w-12 h-12 text-[#10B981] mx-auto" />
            <h2 className="text-3xl font-bold text-white">Need a Pre-Audit Security Assessment?</h2>
            <p className="text-slate-300 text-base max-w-2xl mx-auto">
              Our security engineers provide pre-audit gap analysis, DPDP compliance reviews, and custom NDA/BAA execution for enterprise buyers.
            </p>
            <div className="pt-2">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-colors"
              >
                <span>Book Security Audit Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
