import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import PricingDrivers from "@/components/PricingDrivers";
import PricingHardwareSpotlight from "@/components/PricingHardwareSpotlight";
import PricingIncluded from "@/components/PricingIncluded";
import PricingMatrix from "@/components/PricingMatrix";
import PricingTrust from "@/components/PricingTrust";
import PricingROICalculator from "@/components/PricingROICalculator";
import PricingSecurityCallout from "@/components/PricingSecurityCallout";
import PricingFAQ from "@/components/PricingFAQ";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Server, Cpu, Cloud, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Enterprise AI Pricing & Deployment Options — RoSense AI",
  description:
    "Transparent enterprise AI pricing tailored to your infrastructure, security requirements, models, and data sovereignty. Explore Private Box, Enterprise On-Prem, and Cloud options.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-[#10B981] selection:text-white">
      <Navbar />

      <main className="pt-24">
        {/* Section 1: Hero Section */}
        <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
          {/* Ambient Glow Effects */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#10B981]/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Hero Text */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Transparent Enterprise Architecture</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Enterprise AI, Priced for <span className="text-gradient-emerald">Real Business</span>
                </h1>

                <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Pricing that scales with your organization—not with hidden surprises. Every deployment is tailored to your infrastructure, security, AI models, and business requirements.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/company/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold px-7 py-4 rounded-xl transition-all shadow-lg hover:shadow-emerald-900/30 text-sm"
                  >
                    <span>Get Custom Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/company/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-7 py-4 rounded-xl transition-all text-sm"
                  >
                    <span>Book Live Demo</span>
                  </Link>
                </div>

                <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>Zero Token Metering</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>Air-Gapped Sovereignty</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>Turnkey Hardware</span>
                  </div>
                </div>
              </div>

              {/* Right Hero Visual: Interconnected Deployment Diagram */}
              <div className="lg:col-span-5">
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 shadow-2xl relative">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 pb-3 border-b border-slate-700/80 flex items-center justify-between">
                    <span>Deployment Versatility</span>
                    <span className="text-[#10B981] font-bold text-[11px] bg-[#10B981]/10 px-2.5 py-0.5 rounded-full border border-[#10B981]/30">
                      Deploy Anywhere
                    </span>
                  </div>

                  <div className="space-y-3">
                    {/* Node 1: Private Box */}
                    <div className="bg-slate-900/90 border border-emerald-500/40 rounded-xl p-4 flex items-center justify-between shadow-md">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 text-[#10B981] flex items-center justify-center border border-[#10B981]/40">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">RoSense Private Box</div>
                          <div className="text-slate-400 text-xs">Turnkey Air-Gapped Appliance</div>
                        </div>
                      </div>
                      <span className="text-[#10B981] text-xs font-bold font-mono">2-5 DAYS</span>
                    </div>

                    {/* Connecting glowing line */}
                    <div className="flex justify-center my-0.5">
                      <div className="w-0.5 h-3 bg-gradient-to-b from-[#10B981] to-slate-700" />
                    </div>

                    {/* Node 2: Enterprise Data Center */}
                    <div className="bg-slate-900/90 border border-slate-700 rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center border border-blue-500/30">
                          <Server className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">Enterprise Data Center</div>
                          <div className="text-slate-400 text-xs">Your Existing GPU Cluster</div>
                        </div>
                      </div>
                      <span className="text-slate-300 text-xs font-bold font-mono">1-3 WEEKS</span>
                    </div>

                    {/* Connecting glowing line */}
                    <div className="flex justify-center my-0.5">
                      <div className="w-0.5 h-3 bg-gradient-to-b from-slate-700 to-purple-500" />
                    </div>

                    {/* Node 3: Managed Cloud */}
                    <div className="bg-slate-900/90 border border-slate-700 rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center border border-purple-500/30">
                          <Cloud className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">Managed Cloud</div>
                          <div className="text-slate-400 text-xs">Fastest Evaluation Route</div>
                        </div>
                      </div>
                      <span className="text-purple-400 text-xs font-bold font-mono">24-48 HRS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Three Pricing Models */}
        <Pricing />

        {/* Section 3: What Influences Pricing (6 Driver Cards) */}
        <PricingDrivers />

        {/* Section 4: Hardware Appliance Product Showcase */}
        <PricingHardwareSpotlight />

        {/* Section 5: Every Deployment Includes (Grouped 3 Pillars) */}
        <PricingIncluded />

        {/* Section 6: Compare Deployment Options Matrix */}
        <PricingMatrix />

        {/* Section 7: NEW Section — Why Enterprises Choose RoSense (Trust Building) */}
        <PricingTrust />

        {/* Section 8: Interactive ROI & Productivity Calculator */}
        <PricingROICalculator />

        {/* Section 9: Solution-Oriented Security Assessment Callout */}
        <PricingSecurityCallout />

        {/* Section 10: Enterprise FAQ Accordion (9 Q&As) */}
        <PricingFAQ />

        {/* Section 11: Redesigned Final Enterprise CTA Banner */}
        <section className="py-24 bg-slate-950 text-white border-t border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950" />
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center mx-auto border border-[#10B981]/30 shadow-lg">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to Build Your Organization&apos;s AI Memory?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Deploy RoSense securely in your infrastructure and transform every meeting into searchable organizational knowledge.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/company/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-emerald-900/30 text-sm"
              >
                <span>Get Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/company/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-8 py-4 rounded-xl transition-all text-sm"
              >
                <span>Schedule Demo</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
