import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Briefcase, ArrowRight, Clock, Users, FileCheck, Shield, Lock } from "lucide-react";

export const metadata = {
  title: "Strategy Workshops & Offsites — RoSense",
  description:
    "Transform 12–18+ hour multi-day strategy offsites and workshops into structured executive briefings, clear commitments, and decision matrices.",
};

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-[#10B981] selection:text-white">
      <Navbar />

      <main className="pt-24">
        {/* ACT I: Pure White Narrative & Workshop Intelligence */}
        <section className="bg-white py-20 lg:py-28 relative overflow-hidden border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Strategic Offsites & Workshops</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                Transform 18-hour strategy offsites into{" "}
                <span className="text-gradient-emerald">immediate execution.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
                Multi-day strategy retreats generate hundreds of verbal commitments that get buried in endless recordings. RoSense turns workshop audio into an executive decision matrix with clear owners and deadlines.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/company/contact"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg text-sm"
                >
                  <span>Experience RoSense</span>
                  <ArrowRight className="w-4 h-4 text-[#10B981]" />
                </Link>
                <Link
                  href="/company/trust"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 transition-all text-sm"
                >
                  <Shield className="w-4 h-4 text-[#10B981]" />
                  <span>View security guarantee</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Workshop Pain vs RoSense Solution */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Why multi-day workshops need RoSense
              </h2>
              <p className="text-slate-600 text-base">
                Traditional note-taking fails when processing 12–18+ hours of continuous human dialogue.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-slate-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#10B981] flex items-center justify-center border border-slate-200">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Zero Lost Detail</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Long-context memory architecture ensures that ideas spoken on Day 1 Hour 2 are never forgotten during Day 3 synthesis.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-slate-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#10B981] flex items-center justify-center border border-slate-200">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Speaker Accountability</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Multi-speaker voice separation distinguishes between facilitators, executives, and department leads—assigning explicit commitment ownership.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-slate-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#10B981] flex items-center justify-center border border-slate-200">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">1-Click Audio Proof</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every extracted decision in the executive summary features a 1-click link playing the exact audio clip where the commitment was agreed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACT II: Deep Dark Security & Final Invitation */}
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#10B981]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#10B981]/15 text-[#10B981] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#10B981]/30">
              <Lock className="w-3.5 h-3.5" />
              <span>Air-Gapped Confidentiality</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Ready to capture your next strategic retreat?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              Schedule a personalized demonstration of RoSense configured for multi-day leadership workshops and offsites.
            </p>
            <div className="pt-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all"
              >
                <span>Experience RoSense for workshops</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
