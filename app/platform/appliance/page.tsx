import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Server,
  Shield,
  Cpu,
  Lock,
  HardDrive,
  Zap,
  CheckCircle2,
  ArrowRight,
  Database,
  RefreshCw,
  Award,
} from "lucide-react";

export const metadata = {
  title: "RoSense Box — Turnkey Air-Gapped Private Appliance",
  description:
    "100% On-Premise Enterprise Audio Intelligence Appliance. Process multi-hour strategy audio offline on your office LAN with zero cloud data leakage.",
};

export default function AppliancePage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-[#10B981] selection:text-white">
      <Navbar />

      <main className="pt-28">
        {/* ACT I: White Narrative & Hardware Philosophy */}
        <section className="bg-white py-24 relative overflow-hidden border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5" />
                <span>Dedicated Enterprise Hardware</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                Your company&apos;s memory. <br />
                <span className="text-gradient-emerald">In a box.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
                A physical, air-gapped server pre-configured with local intelligence models. Process multi-hour strategy workshops and board meetings inside your server room—with zero cloud dependency.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/company/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base px-8 py-4 rounded-xl shadow-lg transition-all"
                  id="appliance-hero-contact-btn"
                >
                  <span>Request appliance quote</span>
                  <ArrowRight className="w-5 h-5 text-[#10B981]" />
                </Link>
                <Link
                  href="/company/trust"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-semibold text-base px-7 py-4 rounded-xl border border-slate-200 transition-all"
                >
                  <Shield className="w-4 h-4 text-[#10B981]" />
                  <span>View security spec</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Hardware Specs Breakdown */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Pre-Loaded Hardware & Architecture
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                Engineered for multi-speaker separation, instant semantic search, and zero-shot decision extraction locally on dedicated hardware.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Cpu className="w-8 h-8 text-[#10B981] mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-1">AMD Ryzen 9 Processor</h3>
                <p className="text-xs text-slate-600">High-throughput multi-core processing for parallel audio decoding and semantic indexing.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Zap className="w-8 h-8 text-[#10B981] mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-1">Dedicated Neural GPU</h3>
                <p className="text-xs text-slate-600">Hardware-accelerated CUDA pipeline for multi-speaker diarization and instant query reasoning.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Database className="w-8 h-8 text-[#10B981] mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-1">100% Offline Intelligence</h3>
                <p className="text-xs text-slate-600">Pre-downloaded acoustic and language models requiring no external API calls or internet connection.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <RefreshCw className="w-8 h-8 text-[#10B981] mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-1">3-2-1 Local Backups</h3>
                <p className="text-xs text-slate-600">Internal fast storage, local network backup, and an encrypted offline archive.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ACT II: Deep Dark Commercials & Demonstration */}
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#10B981]/10 rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
            <Award className="w-12 h-12 text-[#10B981] mx-auto" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Enterprise Turnkey Commercials</h2>
            <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 text-left space-y-4 max-w-2xl mx-auto shadow-2xl">
              <div className="flex justify-between items-baseline border-b border-slate-800 pb-4">
                <span className="text-lg font-bold text-white">One-Time Capex Hardware:</span>
                <span className="text-3xl font-bold text-[#10B981]">₹2,50,000</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-slate-800 pb-4">
                <span className="text-slate-300 text-sm">Annual Maintenance Contract (AMC):</span>
                <span className="text-xl font-bold text-white">₹50,000 / yr</span>
              </div>
              <div className="space-y-2 text-xs text-slate-400 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Includes hardware installation, local domain setup (`rosense.local`), and model pre-loading.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Unlimited hours and user seats on your local network.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Dedicated security engineer support and yearly hardware warranty replacement.</span>
                </div>
              </div>
              <div className="pt-4 text-center">
                <Link
                  href="/company/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-colors"
                >
                  <span>Schedule Private Box on-premise demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
