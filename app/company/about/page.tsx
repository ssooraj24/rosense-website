import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Brain,
  ShieldCheck,
  Lock,
  Target,
  Sparkles,
  ArrowRight,
  Database,
  Cpu,
  Eye,
  Workflow,
  CheckCircle2,
  Users,
  Compass,
  Building2,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "About Us — Mission & Vision | RoSense",
  description:
    "Learn about RoSense AI's mission to transform unstructured enterprise dialogue into permanent, structured organizational memory with uncompromising data sovereignty.",
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Lock,
      title: "Data Sovereignty by Design",
      desc: "Privacy is not an afterthought or marketing disclaimer—it is an air-gapped physical reality. Through RoSense Box and dedicated vaults, your intellectual property never leaves your custody.",
    },
    {
      icon: Target,
      title: "Actionable Precision, Not Walls of Text",
      desc: "Traditional tools generate passive transcripts that nobody reads. RoSense extracts explicit commitments, owner accountability, risk flags, and board-ready executive briefs.",
    },
    {
      icon: Database,
      title: "Living Organizational Memory",
      desc: "Institutional knowledge should compound over time. Our semantic vector memory indexes multi-year discussions, enabling sub-second natural language retrieval across past decisions.",
    },
    {
      icon: Cpu,
      title: "Edge & Air-Gapped Intelligence",
      desc: "We bring high-performance local AI models directly to your premises. Zero cloud dependency, zero external API exposure, and mathematical crypto-shredding on command.",
    },
  ];

  const values = [
    {
      badge: "Principle 01",
      title: "Zero Model Training Pledge",
      description:
        "Your audio recordings, transcripts, summaries, and proprietary discussions are never used to train, tune, or evaluate public AI models.",
    },
    {
      badge: "Principle 02",
      title: "Cognitive Completion",
      description:
        "We solve cognitive overload by transforming noisy, multi-hour workshop recordings into clear, structured, and auditable business intelligence.",
    },
    {
      badge: "Principle 03",
      title: "Enterprise Governance First",
      description:
        "Engineered from ground up for DPDP, GDPR, and enterprise audit readiness with cryptographic tenant isolation and granular role-based access.",
    },
    {
      badge: "Principle 04",
      title: "Engineering Transparency",
      description:
        "No black-box hallucinations. Every generated decision and action point links back to exact audio timestamps and speaker-verified dialogue segments.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-[#10B981] selection:text-white">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-28 text-center relative overflow-hidden border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Company & Vision</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Turning raw dialogue into{" "}
              <span className="text-gradient-emerald">enterprise memory.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
              We bridge unfiltered human conversation with deliberate, actionable strategy—giving enterprises permanent institutional intelligence with mathematically guaranteed privacy.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-all shadow-md text-sm"
                id="about-contact-btn"
              >
                <span>Schedule a Private Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/company/trust"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-7 py-3.5 rounded-xl transition-all text-sm"
                id="about-trust-btn"
              >
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>Explore Trust Center</span>
              </Link>
            </div>
          </div>
        </section>

        {/* The Core Story & Brand Genesis ("Ro" + "Sense") */}
        <section className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
              <p className="text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider">
                The Philosophy
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Why We Built RoSense
              </h2>
              <p className="text-slate-600 text-base">
                From cognitive overload to cognitive clarity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-mono font-bold text-lg">
                    Ro
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    The &quot;Ro&quot; State: Resonance &amp; Flow
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Represents continuous rhythm, unfiltered dialogue, and the high-volume velocity of human interaction. In multi-day workshops, board meetings, and strategy offsites, critical breakthroughs happen in fluid conversation—often buried across 12 to 18 hours of unstructured audio.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-500 font-mono">
                  Input: Unfiltered Spoken Dialogue
                </div>
              </div>

              <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 shadow-lg flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#10B981]/20 text-[#10B981] flex items-center justify-center font-mono font-bold text-lg">
                    Sense
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    The &quot;Sense&quot; State: Logic &amp; Action
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Represents precision, structure, and practical wisdom. RoSense distills raw flow into structured action: verified decisions, accountable task owners, risk heatmaps, and executive briefs. AI is demoted to serve as a tireless cognitive assistant that makes sense of complexity.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-800 mt-6 text-xs text-[#10B981] font-mono relative z-10">
                  Output: Verified Organizational Truth
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5" />
                  <span>Our Guiding Purpose</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Solving the Enterprise Knowledge Paradox
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Every week, organizations invest millions into high-level strategy workshops, executive roundtables, and technical architecture debriefs. Yet, studies show that over 80% of nuanced insights and operational commitments are lost within 48 hours.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Traditional cloud AI solutions require sending confidential strategic discussions to third-party public cloud APIs—an unacceptable security trade-off for regulated industries and sensitive intellectual property.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">
                    &quot;RoSense was created so leaders never have to choose between losing institutional memory and compromising corporate data sovereignty.&quot;
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-slate-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    To capture, structure, and preserve critical institutional knowledge from every strategic conversation—empowering modern enterprises with actionable decisions, accountable follow-through, and effortless recall.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-slate-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#10B981] flex items-center justify-center">
                      <Eye className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A world where organizational intelligence compounds perpetually: where no strategic debate is forgotten, commitments are automatically honored, and enterprise data remains entirely under sovereign customer control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Foundational Pillars */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <p className="text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider">
                Engineering Tenets
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Our Core Pillars
              </h2>
              <p className="text-slate-600 text-base">
                How we architect software and hardware for mission-critical enterprise environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <p className="text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider">
                Uncompromising Values
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Our Commitments to Enterprise Clients
              </h2>
              <p className="text-slate-600 text-base">
                Built to satisfy enterprise CISOs, legal counsels, and transformation executives.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3"
                >
                  <span className="text-[11px] font-mono font-bold text-[#10B981] uppercase px-2.5 py-1 bg-emerald-50 rounded-full border border-[#10B981]/20">
                    {v.badge}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 pt-1">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="py-20 bg-slate-950 text-white border-t border-slate-800 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#10B981]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-3xl mx-auto px-4 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1 rounded-full text-xs font-mono font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Ready for Sovereign Intelligence?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              See how RoSense can preserve your organization&apos;s memory.
            </h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto">
              Schedule a consultation with our systems engineers to test air-gapped on-premise appliances or private VPC deployment.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-sm"
                id="about-cta-contact"
              >
                <span>Request a Private Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/rosense-box"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 font-semibold px-8 py-4 rounded-xl transition-all text-sm"
                id="about-cta-box"
              >
                <Cpu className="w-4 h-4 text-[#10B981]" />
                <span>Explore RoSense Box</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
