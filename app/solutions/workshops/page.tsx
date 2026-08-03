import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Briefcase, CheckCircle2, ArrowRight, Clock, Users, FileCheck } from "lucide-react";

export const metadata = {
  title: "Strategy Workshops & Offsites Solution — RoSense AI",
  description:
    "Transform 12–18+ hour multi-day strategy offsites and workshops into structured executive briefings, clear commitments, and decision matrices.",
};

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-[#10B981] selection:text-white">
      <Navbar />

      <main className="pt-24">
        {/* Solution Hero */}
        <section className="bg-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Enterprise Solution ⭐ (Nisol Preferred)</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Transform 18-Hour Strategy Offsites into{" "}
                <span className="text-gradient-emerald">Immediate Execution.</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed font-normal">
                Multi-day strategy retreats generate hundreds of verbal commitments that get buried in endless recordings. RoSense AI turns workshop audio into an executive decision matrix with clear owners and deadlines.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/company/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-all"
                >
                  <span>Schedule Workshop Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Workshop Pain vs RoSense Solution */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Why Multi-Day Workshops Need RoSense AI
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                Traditional note-taking fails when processing 12–18+ hours of continuous human dialogue.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#10B981] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Zero Lost Detail</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mamba-3 SSM long-context architecture ensures that ideas spoken on Day 1 Hour 2 are never forgotten during Day 3 extraction.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#10B981] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Speaker Accountability</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pyannote 3.1 diarization distinguishes between facilitators, executives, and clients—assigning explicit commitment ownership.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#10B981] flex items-center justify-center">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">1-Click Audio Proof</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every item in the executive summary features a 1-click link playing the 20-second decrypted RAM audio clip where the decision was spoken.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
