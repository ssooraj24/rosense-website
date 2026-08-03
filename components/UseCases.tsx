"use client";

import { Building2, Briefcase, Landmark, Users, CheckCircle2 } from "lucide-react";

export default function UseCases() {
  const categories = [
    {
      icon: Users,
      title: "Executive Leadership",
      description: "Turn 18-hour board meetings, strategy offsites, and quarterly reviews into 5-minute executive summaries.",
      useCases: [
        "Board of Directors Meetings",
        "Annual Strategy Offsites",
        "Executive Committee Reviews",
        "M&A Evaluation Discussions",
      ],
      badge: "C-Suite & Boardroom",
    },
    {
      icon: Briefcase,
      title: "Consulting & Agencies",
      description: "Capture every client workshop and discovery session without missing key requirements or deliverables.",
      useCases: [
        "Multi-Day Client Workshops",
        "Strategy & Architecture Discovery",
        "Digital Transformation Programs",
        "Stakeholder Interview Series",
      ],
      badge: "Consulting & Services",
    },
    {
      icon: Landmark,
      title: "Government & Public Sector",
      description: "Ensure complete compliance, data sovereignty, and auditability for policy committees and public reviews.",
      useCases: [
        "Policy & Governance Committees",
        "Air-Gapped Confidential Reviews",
        "Regulatory Compliance Audits",
        "Public Hearing Records",
      ],
      badge: "100% On-Premise",
    },
    {
      icon: Building2,
      title: "Large Enterprises",
      description: "Align cross-functional Product, Engineering, Finance, and Legal teams across enterprise silos.",
      useCases: [
        "Product Roadmap Planning",
        "Engineering Architecture Reviews",
        "Quarterly Financial Reviews",
        "Cross-Department Alignment",
      ],
      badge: "Cross-Functional",
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Built for Every <span className="text-gradient-emerald">Strategic Conversation</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            RoSense AI is designed for organizations that demand total data privacy, long-context accuracy, and immediate decision execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#10B981]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#10B981] flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Primary Use Cases:
                    </p>
                    {item.useCases.map((useCase, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
