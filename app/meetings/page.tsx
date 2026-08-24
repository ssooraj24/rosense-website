"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Plus,
  Search,
  FileAudio,
  Clock,
  Users,
  Building2,
  Calendar,
  Sparkles,
  Trash2,
  CheckCircle2,
  Cpu,
  Radio,
  FileText
} from "lucide-react";

export default function MeetingsListPage() {
  const router = useRouter();
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

  const [meetings, setMeetings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchMeetings = async () => {
    const token = localStorage.getItem("rosense_access_token");
    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const res = await fetch(`${backendUrl}/api/v1/meetings`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setMeetings(data);
      }
    } catch (err) {
      console.error("Failed to load meetings:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMeetings();
  }, []);

  const handleDeleteMeeting = async (meetingId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!confirm("Are you sure you want to delete this meeting and all its transcript data?")) {
      return;
    }

    const token = localStorage.getItem("rosense_access_token");
    try {
      const res = await fetch(`${backendUrl}/api/v1/meetings/${meetingId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        setMeetings((prev) => prev.filter((m) => m.id !== meetingId));
      }
    } catch (err) {
      console.error("Failed to delete meeting:", err);
    }
  };

  const formatDuration = (secs: number) => {
    if (!secs) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}m ${s.toString().padStart(2, "0")}s`;
  };

  const filteredMeetings = meetings.filter((m) => {
    const matchesSearch =
      (m.title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (m.description || "").toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "completed" && (m.status === "stage1_completed" || m.status === "ready")) ||
      (statusFilter === "processing" && (m.status === "transcribing" || m.status === "queued"));

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Back to Dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 overflow-hidden">
                <Image
                  src="/logo-R.png"
                  alt="RoSense AI Logo"
                  width={32}
                  height={32}
                  className="object-contain p-1"
                />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                Ro<span className="text-slate-400 font-medium">Sense</span>
                <span className="text-xs font-bold text-[#10B981] ml-1">AI</span>
              </span>
            </div>
            <span className="text-slate-700">|</span>
            <span className="text-xs font-mono text-slate-300">Meetings & STT Transcripts Hub</span>
          </div>

          <Link
            href="/meetings/new"
            className="px-4 py-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Record / Upload Meeting</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto w-full px-6 py-8 flex-1 space-y-6">
        {/* Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/30 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WhisperX Ground-Truth Speech Lineage</span>
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Enterprise Meeting Recordings
            </h1>
            <p className="text-sm text-slate-400 max-w-xl">
              All uploaded audio files, live recordings, and Stage 1 diarized transcript sequences across your organization.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center min-w-[120px]">
              <div className="text-2xl font-bold font-mono text-white">{meetings.length}</div>
              <div className="text-[11px] text-slate-400">Total Ingested</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center min-w-[120px]">
              <div className="text-2xl font-bold font-mono text-emerald-400">
                {meetings.filter((m) => m.status === "stage1_completed" || m.status === "ready").length}
              </div>
              <div className="text-[11px] text-slate-400">Stage 1 Diarized</div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search meetings by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-500 font-mono"
            >
              <option value="all">All Statuses</option>
              <option value="completed">Stage 1 Completed</option>
              <option value="processing">In-Progress</option>
            </select>
          </div>
        </div>

        {/* Meetings Grid */}
        {isLoading ? (
          <div className="p-16 text-center text-slate-400 font-mono flex items-center justify-center gap-3">
            <div className="w-5 h-5 border-2 border-[#10B981] border-t-transparent rounded-full animate-spin"></div>
            <span>Fetching meeting transcripts...</span>
          </div>
        ) : filteredMeetings.length === 0 ? (
          <div className="p-16 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-4">
            <FileAudio className="w-12 h-12 text-slate-600 mx-auto" />
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">No Meetings Found</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                {searchQuery ? "No recordings match your search query." : "You haven't uploaded or recorded any meetings yet."}
              </p>
            </div>
            <Link
              href="/meetings/new"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Record First Meeting</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMeetings.map((m) => {
              const isReady = m.status === "stage1_completed" || m.status === "ready";

              return (
                <Link
                  key={m.id}
                  href={`/meetings/${m.id}`}
                  className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4 group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                        <FileAudio className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-full border flex items-center gap-1 ${
                          isReady
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                            : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                        }`}
                      >
                        {isReady ? <CheckCircle2 className="w-3 h-3" /> : <Cpu className="w-3 h-3 animate-spin" />}
                        <span>{isReady ? "Stage 1 STT Done" : "Transcribing..."}</span>
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                        {m.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                        {m.description || "Diarized audio session recorded and encrypted."}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        <span>{formatDuration(m.audio_duration_seconds)}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{new Date(m.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] text-emerald-400 font-semibold group-hover:underline">
                        Open Transcript &rarr;
                      </span>

                      <button
                        onClick={(e) => handleDeleteMeeting(m.id, e)}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-800 transition-colors"
                        title="Delete Meeting"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/30 px-6 py-4 text-center text-xs text-slate-500 font-mono">
        RoSense AI • Stage 1 WhisperX Speech Ingestion • Enterprise AES-256 Scope
      </footer>
    </div>
  );
}
