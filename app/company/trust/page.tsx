import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SecurityVault from "@/components/SecurityVault";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Trust & Security — RoSense",
  description:
    "Explore the 8-Layer Vault Security Architecture, DPDP compliance, zero model training guarantee, and instant crypto-shredding data sovereignty specifications.",
};

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-[#10B981] selection:text-white">
      <Navbar />

      <main className="pt-24">
        {/* ACT I: Pure White Narrative & Governance Commitments */}
        <section className="bg-white py-20 lg:py-28 text-center relative overflow-hidden border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Trust & Governance</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              What you say stays yours. <br />
              <span className="text-gradient-emerald">Always.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
              At RoSense, data sovereignty is not an afterthought—it is the foundational architecture of everything we build.
            </p>
          </div>
        </section>

        {/* Data Protection Policy & Roadmap */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Data Protection Commitments
              </h2>
              <p className="text-slate-600 text-base">
                Engineered to meet stringent regulatory frameworks including the Digital Personal Data Protection (DPDP) Act and GDPR.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="text-xs font-mono font-bold text-[#10B981] uppercase">
                  Zero Model Training Guarantee
                </div>
                <h3 className="text-xl font-bold text-slate-900">Your Data Belongs to You</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We explicitly pledge that your audio files, transcripts, vector embeddings, and executive summaries are never retained for public model training or fine-tuning.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="text-xs font-mono font-bold text-[#10B981] uppercase">
                  1-Second Crypto-Shredding
                </div>
                <h3 className="text-xl font-bold text-slate-900">Instant Right to Erasure</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Deleting a company workspace immediately destroys its Master Key in the hardware vault, rendering all stored AES-256 data unrecoverable random noise in under 1 second.
                </p>
              </div>
            </div>

            {/* Compliance Roadmap Table */}
            <div className="rounded-2xl border border-slate-200 p-8 bg-slate-50 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Regulatory Compliance Roadmap</h3>
              <div className="grid sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <div className="font-bold text-slate-900 text-sm">DPDP Act (India)</div>
                  <div className="text-emerald-700 font-semibold mt-1">✓ Fully Compliant</div>
                  <div className="text-slate-500 text-xs mt-1">Consent logs & local data residency ready.</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <div className="font-bold text-slate-900 text-sm">GDPR Guidelines</div>
                  <div className="text-emerald-700 font-semibold mt-1">✓ Fully Compliant</div>
                  <div className="text-slate-500 text-xs mt-1">Right to erasure via instant crypto-shred.</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <div className="font-bold text-slate-900 text-sm">SOC2 Type II Audit</div>
                  <div className="text-slate-700 font-semibold mt-1">Scheduled — Q4 2026</div>
                  <div className="text-slate-500 text-xs mt-1">Immutable audit logs pre-configured.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACT II: Deep Dark Security Vault & Enterprise Advisory */}
        
        {/* 8-Layer Security Vault Component */}
        <SecurityVault />

        {/* Contact Security Team Callout */}
        <section className="py-24 bg-slate-950 text-white border-t border-slate-800 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#10B981]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-3xl mx-auto px-4 space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Need an Enterprise BAA or NDA?</h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto">
              Our security team is ready to execute standard Non-Disclosure Agreements (NDAs) and custom Data Processing Agreements (DPAs) for your organization.
            </p>
            <div className="pt-2">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-sm"
              >
                <span>Contact security team</span>
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
