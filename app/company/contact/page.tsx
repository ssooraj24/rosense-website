"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, CheckCircle2, ShieldCheck, Cpu, Building2, Lock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    deploymentType: "private_appliance",
    meetingHours: "50-200",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-[#10B981] selection:text-white">
      <Navbar />

      <main className="pt-24 pb-20">
        <section className="bg-slate-900 text-white py-16 text-center">
          <div className="max-w-3xl mx-auto px-4 space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Schedule Your <span className="text-gradient-emerald">Private Demo</span>
            </h1>
            <p className="text-slate-300 text-base">
              Speak directly with our enterprise AI engineers to evaluate cloud SaaS or on-premise Private Appliance deployment.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Form Container */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#10B981] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Demo Request Submitted!</h2>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <span className="font-semibold">{formData.fullName}</span>. Our security and enterprise team will reach out to <span className="font-semibold">{formData.workEmail}</span> within 4 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Request Demo / Contact Sales
                  </h2>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]"
                      id="contact-name-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="rahul@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]"
                      id="contact-email-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Nisol Labs"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]"
                      id="contact-company-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Preferred Deployment Mode
                    </label>
                    <select
                      value={formData.deploymentType}
                      onChange={(e) => setFormData({ ...formData, deploymentType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]"
                      id="contact-deployment-select"
                    >
                      <option value="private_appliance">
                        RoSense Box (Turnkey Air-Gapped Appliance)
                      </option>
                      <option value="cloud_saas">Cloud SaaS (Encrypted Vault)</option>
                      <option value="hybrid">Hybrid Cloud & Appliance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Message / Custom Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your strategy workshops, security audit requirements, or team size..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]"
                      id="contact-message-input"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#10B981] hover:bg-[#059669] text-white font-bold text-base rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
                    id="contact-submit-btn"
                  >
                    <span>Submit Demo Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Trust Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-[#10B981] font-mono text-xs font-bold">
                  <Lock className="w-4 h-4" />
                  <span>Enterprise Security Assurance</span>
                </div>
                <h3 className="text-xl font-bold text-white">Direct Access to Engineers</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Early enterprise clients (like Nisol) receive direct access to our security architects, priority feature input, and dedicated on-premise hardware deployment support.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-400 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                    <span>Signed NDAs & BAAs available prior to demo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#10B981]" />
                    <span>On-Premise Box hardware evaluation units ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
