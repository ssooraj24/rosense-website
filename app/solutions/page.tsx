import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Users,
  Briefcase,
  BarChart3,
  Landmark,
  TrendingUp,
  UserCheck,
  Megaphone,
  DollarSign,
  FileCode2,
  Headphones,
  UserPlus,
  Wrench,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Target,
  Brain,
  Lock,
  Compass,
} from "lucide-react";

export const metadata = {
  title: "Enterprise Solutions by Buyer Persona — RoSense AI",
  description:
    "Discover how RoSense AI empowers Executive Leadership, Sales, Engineering, HR, Finance, PMO, and Compliance teams to excel through role-tailored intelligence.",
};

const personaCategories = [
  {
    category: "Leadership & Strategy",
    icon: Users,
    personas: [
      {
        slug: "executive-leadership",
        title: "Executive Leadership",
        subtitle: "CEOs, COOs & Board Directors",
        problem: "Executives lose strategic context across fragmented meetings and undocumented decisions.",
        solution: "Automated executive summaries, cross-department decision dashboards, and organization-wide memory.",
        kpis: ["3.5x Faster Decision Velocity", "100% Execution Visibility", "Zero Context Loss"],
        icon: Users,
        badge: "C-Suite",
      },
      {
        slug: "strategy-pmo",
        title: "Strategy & PMO",
        subtitle: "VPs of Strategy & Project Directors",
        problem: "18+ hour offsite retreats and strategic workshops produce verbal commitments that vanish.",
        solution: "Multi-day workshop synthesis into structured milestone matrices with explicit owners.",
        kpis: ["Zero Lost Commitments", "1-Click Audio Proof", "90% Faster Retro Synthesis"],
        icon: Briefcase,
        badge: "Strategic Execution",
      },
      {
        slug: "operations",
        title: "Operations Leaders",
        subtitle: "VPs of Ops & Chief of Staff",
        problem: "Cross-functional handoffs suffer from missing SOPs and unassigned action items.",
        solution: "Automatic extraction of operational procedures, risk flags, and cross-team dependencies.",
        kpis: ["40% Less Admin Overhead", "Seamless Cross-Team Hand-off", "Real-Time Bottleneck Alerts"],
        icon: BarChart3,
        badge: "Operational Excellence",
      },
      {
        slug: "compliance-risk",
        title: "Compliance & Risk",
        subtitle: "General Counsel & CISOs",
        problem: "Verbal commitments create compliance risk without verifiable audit trails.",
        solution: "100% air-gapped transcript vaulting, DPDP compliance audit trails, and crypto-shredding.",
        kpis: ["Zero Cloud Leakage", "DPDP & SOC2 Compliant", "Instant Audit Verification"],
        icon: Landmark,
        badge: "Governance & Security",
      },
    ],
  },
  {
    category: "Business & Revenue",
    icon: TrendingUp,
    personas: [
      {
        slug: "sales",
        title: "Sales Teams",
        subtitle: "VPs of Sales, Account Executives & CROs",
        problem: "Reps forget customer objections and commitments; CRM data hygiene falls behind.",
        solution: "Auto-extract customer buying signals, objections, pricing talk, and update CRM instantly.",
        kpis: ["+28% Win Rates", "99% CRM Data Hygiene", "Faster Rep Onboarding"],
        icon: TrendingUp,
        badge: "Revenue Growth",
      },
      {
        slug: "customer-success",
        title: "Customer Success",
        subtitle: "VPs of CS & Account Managers",
        problem: "Churn risks and feature requests discussed in client calls get lost in notes.",
        solution: "Detect client renewal sentiment, feature promises, and automate Sales-to-CS handoffs.",
        kpis: ["-35% Churn Risk", "Flawless Sales-to-CS Handoff", "Proactive Account Renewal"],
        icon: UserCheck,
        badge: "Retention & Expansion",
      },
      {
        slug: "marketing",
        title: "Marketing",
        subtitle: "CMOs & Product Marketers",
        problem: "Voice-of-Customer pain points are trapped in sales calls instead of shaping messaging.",
        solution: "Aggregate customer language, buyer quotes, and competitive mentions into campaign insights.",
        kpis: ["High-Converting Messaging", "Real-Time Competitor Insights", "Data-Backed Positioning"],
        icon: Megaphone,
        badge: "Customer Intelligence",
      },
      {
        slug: "finance",
        title: "Finance",
        subtitle: "CFOs, Controllers & Procurement",
        problem: "Unwritten budget promises and vendor price verbal agreements cause cost overruns.",
        solution: "Audit-ready financial commitment logging and contract obligation verification.",
        kpis: ["100% Verifiable Budget Promises", "Reduced Contract Leakage", "Audit-Ready Fiscal Records"],
        icon: DollarSign,
        badge: "Financial Control",
      },
    ],
  },
  {
    category: "Operations & Technology",
    icon: Zap,
    personas: [
      {
        slug: "engineering",
        title: "Engineering",
        subtitle: "CTOs, VPs of Eng & Tech Leads",
        problem: "Architecture decisions disappear when developers leave, causing repeated discussions.",
        solution: "Preserve Architecture Decision Records (ADRs), tech debt discussions, and retro actions.",
        kpis: ["Preserved ADR Knowledge", "50% Faster Developer Onboarding", "Reduced Tribal Knowledge"],
        icon: FileCode2,
        badge: "Tech Knowledge",
      },
      {
        slug: "it-support",
        title: "IT & Support",
        subtitle: "IT Directors & Service Desk Managers",
        problem: "Incident post-mortems and resolutions are scattered across Slack and call recordings.",
        solution: "Auto-generate incident post-mortems and turn technical debriefs into KB articles.",
        kpis: ["Instant Post-Mortem Briefs", "Auto-Updated Knowledge Base", "Lower MTTR"],
        icon: Headphones,
        badge: "Service Reliability",
      },
      {
        slug: "hr-talent",
        title: "HR & Talent",
        subtitle: "CHROs & Talent Acquisition Leads",
        problem: "Interview feedback is biased or vague; performance review decisions lack clear rationale.",
        solution: "Extract structured candidate evaluation criteria and standardized talent review briefs.",
        kpis: ["Unbiased Candidate Scoring", "Clear Talent Review Records", "Standardized Hiring"],
        icon: UserPlus,
        badge: "Talent Excellence",
      },
      {
        slug: "consulting",
        title: "Consulting & Advisory",
        subtitle: "Partners & Professional Services",
        problem: "Billable client discovery sessions produce hundreds of hours of raw audio needing manual synthesis.",
        solution: "Rapidly synthesize client discovery into executive deliverables with 1-click audio proof.",
        kpis: ["10x Synthesis Speed", "Higher Client Margin", "Reusable Practice Knowledge"],
        icon: Wrench,
        badge: "Billable Value",
      },
    ],
  },
];

const capabilityStories = [
  {
    capability: "Decision Intelligence",
    sales: "Automatically capture customer commitments, budget agreements, and buying signals.",
    engineering: "Preserve architecture decisions, technical trade-offs, and retro commitments.",
    hr: "Extract objective interview feedback and structured hiring decisions.",
    executive: "Track strategic decisions across every department in an executive dashboard.",
  },
  {
    capability: "Organizational Memory",
    sales: "Search past calls for pricing discussions and competitor mentions across all accounts.",
    engineering: "Query tech debt rationale and historical incident root cause analysis in sub-seconds.",
    hr: "Access talent review history and organizational structure rationale instantly.",
    executive: "Instant board-ready briefings summarizing multi-quarter executive discussions.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-[#10B981] selection:text-white">
      <Navbar />

      <main className="pt-24">
        {/* Solutions Hero */}
        <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-mono">
                <Compass className="w-3.5 h-3.5" />
                <span>Buyer-Centric Intelligence Architecture</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
                Software Built Around <span className="text-gradient-emerald">Your Buyer Persona</span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed font-normal">
                Enterprise buyers don't buy software for raw features—they buy it to transform how their team executes. Explore how RoSense AI empowers each role to eliminate memory loss, accelerate decision velocity, and excel.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/company/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/20"
                >
                  <span>Book Role-Tailored Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#persona-matrix"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all border border-slate-700"
                >
                  <span>Explore 12 Persona Stories</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Persona Directory Matrix */}
        <section id="persona-matrix" className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                How RoSense Helps Your Team Excel
              </h2>
              <p className="text-slate-600 text-base">
                Select your business function to discover how RoSense AI turns dialogue into role-specific business outcomes.
              </p>
            </div>

            {personaCategories.map((cat, idx) => {
              const CategoryIcon = cat.icon;
              return (
                <div key={idx} className="space-y-8">
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#10B981] flex items-center justify-center shadow-sm">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{cat.category}</h3>
                      <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                        Tailored Solutions for {cat.category}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cat.personas.map((persona, pIdx) => {
                      const PersonaIcon = persona.icon;
                      return (
                        <Link
                          key={pIdx}
                          href={`/solutions/${persona.slug}`}
                          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#10B981]/50 transition-all group flex flex-col justify-between"
                        >
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 group-hover:bg-[#10B981]/10 group-hover:text-[#10B981] flex items-center justify-center transition-colors">
                                <PersonaIcon className="w-5 h-5" />
                              </div>
                              <span className="text-[10px] font-bold font-mono bg-slate-100 text-slate-600 group-hover:bg-[#10B981]/10 group-hover:text-[#10B981] px-2.5 py-1 rounded-full uppercase transition-colors">
                                {persona.badge}
                              </span>
                            </div>

                            <div>
                              <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#10B981] transition-colors">
                                {persona.title}
                              </h4>
                              <p className="text-xs text-slate-500 font-medium">{persona.subtitle}</p>
                            </div>

                            <div className="space-y-2 pt-2 border-t border-slate-100">
                              <p className="text-xs text-slate-600 leading-relaxed">
                                <strong className="text-slate-900">Problem:</strong> {persona.problem}
                              </p>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                <strong className="text-[#10B981]">RoSense Value:</strong> {persona.solution}
                              </p>
                            </div>

                            <div className="space-y-1.5 pt-2">
                              {persona.kpis.map((kpi, kIdx) => (
                                <div key={kIdx} className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                                  <span>{kpi}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#10B981] group-hover:translate-x-1 transition-transform">
                            <span>Read Persona Guide</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Capability Strategy Section: One Engine, 12 Stories */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-xs font-bold font-mono">
                <Brain className="w-3.5 h-3.5 text-[#10B981]" />
                <span>The Core Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                One Platform Engine. <span className="text-gradient-emerald">12 Tailored Outcomes.</span>
              </h2>
              <p className="text-slate-600 text-base">
                Rather than forcing every team to adapt to generic AI tools, RoSense AI applies its core intelligence engine to solve each persona's distinct daily operational bottleneck.
              </p>
            </div>

            <div className="space-y-12">
              {capabilityStories.map((story, sIdx) => (
                <div key={sIdx} className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white space-y-6 shadow-xl border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#10B981] text-slate-950 flex items-center justify-center font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{story.capability}</h3>
                      <p className="text-xs text-[#10B981] font-mono">Core RoSense Intelligence Capability</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-6 pt-4 border-t border-slate-800">
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                      <p className="text-xs font-bold text-[#10B981] uppercase tracking-wider font-mono">Sales View</p>
                      <p className="text-xs text-slate-300 leading-relaxed">{story.sales}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                      <p className="text-xs font-bold text-[#10B981] uppercase tracking-wider font-mono">Engineering View</p>
                      <p className="text-xs text-slate-300 leading-relaxed">{story.engineering}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                      <p className="text-xs font-bold text-[#10B981] uppercase tracking-wider font-mono">HR View</p>
                      <p className="text-xs text-slate-300 leading-relaxed">{story.hr}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                      <p className="text-xs font-bold text-[#10B981] uppercase tracking-wider font-mono">Executive View</p>
                      <p className="text-xs text-slate-300 leading-relaxed">{story.executive}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Private Appliance Banner */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-[#10B981]/20 text-[#10B981] px-3 py-1 rounded-full text-xs font-bold font-mono border border-[#10B981]/30">
                  <Lock className="w-3.5 h-3.5" />
                  <span>RoSense Box Flagship Hardware</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Built for Enterprise Personas with 100% Air-Gapped Privacy Requirements
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Whether you manage confidential executive board meetings, sensitive HR interviews, or high-stakes financial commitments, RoSense Box provides on-premise hardware execution with zero cloud network leakage.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/platform/appliance"
                  className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all text-sm"
                >
                  <span>Explore RoSense Box</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/company/trust"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-slate-700 text-sm"
                >
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>Trust & DPDP Center</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Global Persona Demo CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Ready to Accelerate Your Role's Execution Velocity?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Schedule a personalized 30-minute demonstration tailored specifically to your buyer persona and team workflows.
            </p>
            <div className="pt-2">
              <Link
                href="/company/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <span>Book Persona Demo Now</span>
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
