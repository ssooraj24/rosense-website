"use client";

import { useState } from "react";
import { Calculator, Clock, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PricingROICalculator() {
  const [employees, setEmployees] = useState<number>(50);
  const [meetingsPerDay, setMeetingsPerDay] = useState<number>(3);
  const [meetingDuration, setMeetingDuration] = useState<number>(45);
  const [hourlySalary, setHourlySalary] = useState<number>(1000); // ₹ per hour

  // ROI Calculations
  const timeSavedPerMeetingHrs = (meetingDuration * 0.3) / 60;
  const dailyHoursSavedPerEmployee = meetingsPerDay * timeSavedPerMeetingHrs;
  const annualWorkDays = 240;

  const totalAnnualHoursSaved = Math.round(employees * dailyHoursSavedPerEmployee * annualWorkDays);
  const totalAnnualSavingsINR = Math.round(totalAnnualHoursSaved * hourlySalary);
  
  const estimatedCostINR = 250000; // Reference appliance cost
  const roiMultiple = (totalAnnualSavingsINR / estimatedCostINR).toFixed(1);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-24 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Enterprise Productivity Savings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Estimate Your <span className="text-gradient-emerald">Productivity Savings</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            See how much time and operational budget your organization reclaims by deploying automated meeting intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-10 shadow-2xl">
          {/* Sliders Input Column */}
          <div className="lg:col-span-7 space-y-7">
            {/* Input 1: Employees */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-200">Number of Team Members / Employees</label>
                <span className="text-sm font-bold text-[#10B981] bg-[#10B981]/10 px-3 py-0.5 rounded-full border border-[#10B981]/30">
                  {employees} Employees
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="500"
                step="5"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
              />
            </div>

            {/* Input 2: Daily Meetings */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-200">Average Meetings per Day per User</label>
                <span className="text-sm font-bold text-[#10B981] bg-[#10B981]/10 px-3 py-0.5 rounded-full border border-[#10B981]/30">
                  {meetingsPerDay} Meetings / day
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={meetingsPerDay}
                onChange={(e) => setMeetingsPerDay(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
              />
            </div>

            {/* Input 3: Meeting Duration */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-200">Average Meeting Duration</label>
                <span className="text-sm font-bold text-[#10B981] bg-[#10B981]/10 px-3 py-0.5 rounded-full border border-[#10B981]/30">
                  {meetingDuration} Minutes
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="120"
                step="15"
                value={meetingDuration}
                onChange={(e) => setMeetingDuration(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
              />
            </div>

            {/* Input 4: Hourly Salary */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-200">Average Hourly Employee Cost</label>
                <span className="text-sm font-bold text-[#10B981] bg-[#10B981]/10 px-3 py-0.5 rounded-full border border-[#10B981]/30">
                  ₹{hourlySalary} / hr
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="3000"
                step="100"
                value={hourlySalary}
                onChange={(e) => setHourlySalary(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
              />
            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-5 bg-slate-900 border-2 border-[#10B981]/40 rounded-2xl p-8 flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden">
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Estimated Annual Savings
                </div>
                {/* Large Prominent Highlight Number */}
                <div className="text-4xl sm:text-5xl font-black text-[#10B981] tracking-tight">
                  {formatINR(totalAnnualSavingsINR)}
                </div>
                <div className="text-xs text-emerald-400 font-semibold mt-2 flex items-center gap-1">
                  <span>✓</span> Reclaimed organizational bandwidth & productivity value
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Hours Saved</span>
                  </div>
                  <div className="text-xl font-extrabold text-white">
                    {totalAnnualHoursSaved.toLocaleString()} hrs/yr
                  </div>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Estimated ROI</span>
                  </div>
                  <div className="text-xl font-extrabold text-[#10B981]">
                    {roiMultiple}x Payback
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="/company/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold px-6 py-4 rounded-xl transition-all shadow-lg text-sm"
              >
                <span>Get Detailed ROI Report</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-[11px] text-slate-400 mt-2">
                Includes custom hardware deployment recommendations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
