"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function PricingFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can we start small and scale later?",
      a: "Yes. RoSense deployments are completely modular. Organizations can begin with a single department or Private Box appliance and expand to enterprise-wide deployment as usage grows.",
    },
    {
      q: "Do you charge per AI query or transcript?",
      a: "No. RoSense is priced based on your deployment architecture and server capacity, rather than charging you per query or per minute of audio processed.",
    },
    {
      q: "Are there token costs or API metered surprises?",
      a: "No hidden token billing or unexpected per-token meters. Once deployed, your team processes meeting intelligence without per-token charges.",
    },
    {
      q: "Can we deploy RoSense on our own existing enterprise servers?",
      a: "Yes. In addition to our turnkey Private Box hardware, RoSense can be deployed directly onto your organization's existing GPU servers or private cloud infrastructure.",
    },
    {
      q: "Can we use our own domain-specific AI models?",
      a: "Yes. RoSense supports integrating custom fine-tuned models, open-source architectures, or enterprise commercial models depending on your compliance requirements.",
    },
    {
      q: "Is there an annual license option available?",
      a: "Yes. Flexible enterprise licensing options and annual maintenance contracts (AMC) are available to match your procurement cycle.",
    },
    {
      q: "Can the hardware appliance be upgraded as our workload grows?",
      a: "Yes. The RoSense Private Box is designed so GPU acceleration, RAM, and storage capacity can be modularly expanded as your meeting processing volume scales.",
    },
    {
      q: "Do you provide installation and setup assistance?",
      a: "Yes. Turnkey installation, network switch integration, local domain configuration (`rosense.local`), and verification are included with every deployment.",
    },
    {
      q: "Is user training and onboarding included?",
      a: "Yes. Complete administrator guides, user training sessions, and dedicated engineering onboarding support are included in all deployment tiers.",
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-gradient-emerald">Questions</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Everything you need to know about enterprise licensing, infrastructure, and deployment architecture.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-[#059669] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#10B981]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
