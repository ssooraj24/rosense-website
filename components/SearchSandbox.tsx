"use client";

import { useState } from "react";
import { Search, Play, Sparkles, Filter, CheckCircle2, AlertTriangle, FileText, Share2 } from "lucide-react";

export default function SearchSandbox() {
  const samplePrompts = [
    { label: "What decisions were made?", query: "What decisions were made?" },
    { label: "What risks remain open?", query: "What risks remain open?" },
    { label: "Who owns ERP migration?", query: "Who owns ERP migration?" },
    { label: "CEO statements on expansion", query: "What did the CEO say about expansion?" },
  ];

  const [activeQuery, setActiveQuery] = useState(samplePrompts[0].query);
  const [playingAudioId, setPlayingAudioId] = useState<number | null>(null);

  const getResultsForQuery = (q: string) => {
    if (q.includes("risks")) {
      return [
        {
          id: 1,
          time: "03:14:20",
          speaker: "Anand (Risk Lead)",
          type: "Risk",
          score: "0.94",
          text: "Legacy API latency could delay third-party integration by 3 weeks if unaddressed.",
        },
        {
          id: 2,
          time: "04:02:10",
          speaker: "Meera (Legal Counsel)",
          type: "Risk",
          score: "0.89",
          text: "Cross-border data residency clauses require explicit BAA sign-off before Q4 launch.",
        },
      ];
    } else if (q.includes("ERP") || q.includes("migration")) {
      return [
        {
          id: 3,
          time: "01:45:12",
          speaker: "Siddharth (Engineering)",
          type: "Commitment",
          score: "0.96",
          text: "Decision: Siddharth owns ERP migration script rollout, scheduled for completion by Sept 1.",
        },
      ];
    } else if (q.includes("expansion") || q.includes("CEO")) {
      return [
        {
          id: 4,
          time: "00:22:15",
          speaker: "Rahul (CEO)",
          type: "Decision",
          score: "0.95",
          text: "Approved European enterprise expansion with initial Focus on DACH region in Q4.",
        },
      ];
    } else {
      return [
        {
          id: 5,
          time: "01:14:02",
          speaker: "Rahul (CEO)",
          type: "Decision",
          score: "0.92",
          text: "Approved Q4 product roadmap prioritizing RAG Search and Private Appliance release.",
        },
        {
          id: 6,
          time: "02:30:45",
          speaker: "Priya (VP Ops)",
          type: "Commitment",
          score: "0.88",
          text: "Commitment: Finalize SOC2 audit preparation by August 15.",
        },
      ];
    }
  };

  const currentResults = getResultsForQuery(activeQuery);

  return (
    <section id="sandbox" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience <span className="text-gradient-emerald">Instant Company Memory</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Test how RoSense AI searches months of conversations and extracts exact decisions with timestamp audio proof.
          </p>
        </div>

        {/* Sandbox Outer Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl emerald-glow-sm">
          {/* Simulated Search Input Bar */}
          <div className="relative flex items-center mb-4">
            <Search className="w-5 h-5 text-slate-400 absolute left-4" />
            <input
              type="text"
              value={activeQuery}
              onChange={(e) => setActiveQuery(e.target.value)}
              placeholder="Search meetings... e.g. 'pricing objections from Acme'"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-12 pr-28 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] font-medium"
              id="sandbox-search-input"
            />
            <button
              className="absolute right-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-xs px-4 py-2 rounded-lg transition-colors"
              id="sandbox-search-btn"
            >
              Search
            </button>
          </div>

          {/* Clickable Multi-Prompt Chips */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3" /> Quick Test Prompts:
            </span>
            {samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => setActiveQuery(prompt.query)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                  activeQuery === prompt.query
                    ? "bg-[#10B981] text-slate-950 font-semibold"
                    : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700"
                }`}
                id={`prompt-chip-${idx}`}
              >
                {prompt.label}
              </button>
            ))}
          </div>

          {/* Results List View */}
          <div className="space-y-3" id="sandbox-results-list">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono pb-2 border-b border-slate-800">
              <span>{currentResults.length} Semantic Match(es) Found (&lt; 200ms)</span>
              <span className="text-[#10B981]">Engine: bge-large + HNSW</span>
            </div>

            {currentResults.map((res) => (
              <div
                key={res.id}
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#10B981]/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      [{res.time}]
                    </span>
                    <span className="text-xs font-semibold text-white">{res.speaker}</span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                        res.type === "Decision"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : res.type === "Commitment"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-rose-500/20 text-rose-400"
                      }`}
                    >
                      {res.type}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      similarity {res.score}
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    "{res.text}"
                  </p>
                </div>

                {/* Actions: Audio Jump Play Button */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() =>
                      setPlayingAudioId(playingAudioId === res.id ? null : res.id)
                    }
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-lg transition-all ${
                      playingAudioId === res.id
                        ? "bg-rose-600 text-white animate-pulse"
                        : "bg-[#10B981] hover:bg-[#059669] text-slate-950"
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>
                      {playingAudioId === res.id ? "Playing 20s RAM Clip..." : "Play Audio Proof"}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sandbox Footer Disclaimer */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>GET /api/v1/jobs/id/audio?start=1394&duration=20</span>
            <span className="text-emerald-400">RAM-only decrypt • No plain file at rest</span>
          </div>
        </div>
      </div>
    </section>
  );
}
