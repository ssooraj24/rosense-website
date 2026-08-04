import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  ShieldCheck,
  Zap,
  HelpCircle,
  LucideIcon,
  ChevronRight,
  Sparkles,
  Database,
  Search,
  FileText,
  Clock,
  Layers,
  Cpu,
} from "lucide-react";

export interface PersonaSolutionProps {
  badge: string;
  roleTitle: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroIcon: LucideIcon;
  painPointsTitle: string;
  painPointsSubtitle: string;
  painPoints: Array<{
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
  workflowSteps: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  capturedItemsTitle: string;
  capturedItems: Array<{
    title: string;
    detail: string;
  }>;
  outcomesTitle: string;
  outcomes: Array<{
    metric: string;
    label: string;
    description: string;
  }>;
  integrations: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  ctaHeadline: string;
  ctaSubheadline: string;
}

export default function PersonaSolutionLayout(props: PersonaSolutionProps) {
  const RoleIcon = props.heroIcon;

  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-[#10B981] selection:text-white">
      <Navbar />

      <main className="pt-24">
        {/* 1. Hero Section */}
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-mono">
                <RoleIcon className="w-3.5 h-3.5" />
                <span>{props.badge} — RoSense Solution</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
                {props.heroHeadline}
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
                {props.heroSubheadline}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/company/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/20 text-sm"
                >
                  <span>Book Demo for {props.roleTitle}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-7 py-3.5 rounded-xl border border-slate-700 transition-all text-sm"
                >
                  <span>See How RoSense Helps</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Business Challenges / Problem Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                The {props.roleTitle} Bottleneck
              </span>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                {props.painPointsTitle}
              </h2>
              <p className="text-slate-600 text-base">{props.painPointsSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {props.painPoints.map((pain, pIdx) => {
                const PainIcon = pain.icon;
                return (
                  <div key={pIdx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-slate-300 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                      <PainIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{pain.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{pain.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. How RoSense Helps (Step-by-Step Workflow Pipeline) */}
        <section id="how-it-works" className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] px-3 py-1 rounded-full text-xs font-mono font-bold">
                <Zap className="w-3.5 h-3.5" />
                <span>End-to-End Persona Pipeline</span>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                How RoSense Helps {props.roleTitle} Excel
              </h2>
              <p className="text-slate-400 text-sm">
                From raw multi-party discussions to automated execution and long-term organizational memory.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {props.workflowSteps.map((ws, wIdx) => (
                <div key={wIdx} className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/80 space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold bg-[#10B981]/20 text-[#10B981] px-2 py-0.5 rounded">
                      Step {ws.step}
                    </span>
                    {wIdx < props.workflowSteps.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-slate-500 hidden md:block" />
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white">{ws.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{ws.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. What RoSense Captures & Understands */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                {props.capturedItemsTitle}
              </h2>
              <p className="text-slate-600 text-sm">
                RoSense doesn't just record audio—it extracts structured domain intelligence tailored to {props.roleTitle}.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {props.capturedItems.map((item, cIdx) => (
                <div key={cIdx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Business Outcomes & Measurable KPIs */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                {props.outcomesTitle}
              </h2>
              <p className="text-slate-600 text-sm">
                Measurable performance gains delivered for {props.roleTitle} teams.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {props.outcomes.map((outcome, oIdx) => (
                <div key={oIdx} className="p-8 rounded-3xl bg-slate-900 text-white space-y-3 border border-slate-800 shadow-lg">
                  <div className="text-4xl font-extrabold text-gradient-emerald font-mono">
                    {outcome.metric}
                  </div>
                  <h3 className="text-lg font-bold text-white">{outcome.label}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Integrations & Workflow Automation */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h3 className="text-xl font-bold text-slate-900">
              Integrates Seamlessly into {props.roleTitle} Toolchains
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {props.integrations.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold text-slate-800 shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Enterprise Air-Gapped Security & RoSense Box */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-[#10B981]/20 text-[#10B981] px-3 py-1 rounded-full text-xs font-mono font-bold">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Enterprise Security Guarantee</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Zero Network Leakage for Sensitive {props.roleTitle} Conversations
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Deploy RoSense on-premise using RoSense Box hardware. Complete DPDP compliance, encrypted RAM execution, and 100% air-gapped data sovereign protection.
                </p>
              </div>

              <div className="flex gap-4 shrink-0">
                <Link
                  href="/platform/appliance"
                  className="bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold px-6 py-3 rounded-xl text-xs"
                >
                  Appliance Specs
                </Link>
                <Link
                  href="/company/trust"
                  className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-xl text-xs border border-slate-600"
                >
                  Trust Center
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Role FAQs */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold text-slate-900">
                Frequently Asked Questions for {props.roleTitle}
              </h2>
            </div>

            <div className="space-y-6">
              {props.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Role Conversion CTA */}
        <section className="py-20 bg-slate-900 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <h2 className="text-3xl font-bold text-white">{props.ctaHeadline}</h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {props.ctaSubheadline}
            </p>
            <div className="pt-2">
              <Link
                href="/company/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-base"
              >
                <span>Book Demo for {props.roleTitle}</span>
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
