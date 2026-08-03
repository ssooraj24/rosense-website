import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SecurityVault from "@/components/SecurityVault";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, CheckCircle2, ArrowRight, Download } from "lucide-react";

export const metadata = {
  title: "Security & Trust Center — RoSense AI",
  description:
    "Explore the 8-Layer Vault Security Architecture, DPDP compliance, zero model training guarantee, and instant crypto-shredding data sovereignty specifications.",
};

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-[#10B981] selection:text-white">
      <Navbar />

      <main className="pt-24">
        {/* Trust Center Hero */}
        <section className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Trust & Governance Repository</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Security & Data <span className="text-gradient-emerald">Sovereignty Center</span>
            </h1>

            <p className="text-slate-300 text-base max-w-2xl mx-auto">
              At RoSense AI, data privacy is not an afterthought—it is the foundational architecture of our platform.
            </p>
          </div>
        </section>

        {/* 8-Layer Security Vault Component */}
        <SecurityVault />

        {/* Data Protection Policy & Roadmap */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900">
                Data Protection Commitments
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Built to meet stringent regulatory frameworks including India DPDP and European GDPR.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-xs font-mono font-bold text-[#10B981] uppercase">
                  Zero Model Training Guarantee
                </div>
                <h3 className="text-xl font-bold text-slate-900">Your Data Belongs to You</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We explicitly pledge that your audio files, transcripts, vector embeddings, and executive summaries are never retained for public model training or fine-tuning.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-xs font-mono font-bold text-[#10B981] uppercase">
                  1-Second Crypto-Shredding
                </div>
                <h3 className="text-xl font-bold text-slate-900">Instant Right to Erasure</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deleting a company workspace immediately destroys its Master Key (KEK) in the Vault, rendering all stored AES-256 data unrecoverable random noise in under 1 second.
                </p>
              </div>
            </div>

            {/* Compliance Roadmap Table */}
            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Regulatory Compliance Roadmap</h3>
              <div className="grid sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900">DPDP Act (India)</div>
                  <div className="text-emerald-600 font-semibold mt-1">✓ Fully Compliant</div>
                  <div className="text-slate-500 text-[11px] mt-1">Consent logs & local data residency ready.</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900">GDPR Guidelines</div>
                  <div className="text-emerald-600 font-semibold mt-1">✓ Fully Compliant</div>
                  <div className="text-slate-500 text-[11px] mt-1">Right to erasure via instant crypto-shred.</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900">SOC2 Type II Audit</div>
                  <div className="text-amber-600 font-semibold mt-1">🚀 Q4 2026 Audit Roadmap</div>
                  <div className="text-slate-500 text-[11px] mt-1">Immutable audit logs pre-configured.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Security Team Callout */}
        <section className="py-16 bg-slate-900 text-white border-t border-slate-800 text-center">
          <div className="max-w-3xl mx-auto px-4 space-y-6">
            <h2 className="text-3xl font-bold text-white">Need an Enterprise BAA or NDA?</h2>
            <p className="text-slate-300 text-sm">
              Our security team is ready to execute standard Non-Disclosure Agreements (NDAs) and custom Data Processing Agreements (DPAs) for your organization.
            </p>
            <div className="pt-2">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-colors"
              >
                <span>Contact Security Team</span>
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
