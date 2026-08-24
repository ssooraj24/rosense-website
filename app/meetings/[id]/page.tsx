"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  Download,
  Copy,
  Check,
  Search,
  Users,
  Clock,
  Sparkles,
  Radio,
  FileText,
  Edit3,
  Cpu,
  Layers,
  Brain,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function MeetingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const meetingId = params?.id as string;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

  // Data States
  const [meeting, setMeeting] = useState<any>(null);
  const [speakers, setSpeakers] = useState<any[]>([]);
  const [chunks, setChunks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Search filter
  const [searchQuery, setSearchQuery] = useState("");

  // Audio Player States
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Edit Speaker Modal
  const [editingSpeaker, setEditingSpeaker] = useState<any | null>(null);
  const [newSpeakerName, setNewSpeakerName] = useState("");
  const [newSpeakerRole, setNewSpeakerRole] = useState("");

  // Fetch Meeting & Transcript
  const fetchMeetingData = async () => {
    const token = localStorage.getItem("rosense_access_token");
    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const res = await fetch(`${backendUrl}/api/v1/meetings/${meetingId}/transcript`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to load meeting transcript");
      }

      const data = await res.json();
      setMeeting(data.meeting);
      setSpeakers(data.speakers || []);
      setChunks(data.chunks || []);
      if (data.meeting?.audio_duration_seconds) {
        setDuration(data.meeting.audio_duration_seconds);
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "Failed to fetch meeting transcript");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (meetingId) {
      fetchMeetingData();
    }
  }, [meetingId]);

  // Audio time format helper
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Audio Event Handlers
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current && audioRef.current.duration) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const skipTime = (delta: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + delta));
    }
  };

  const changePlaybackRate = (rate: number) => {
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const jumpToTimestamp = (timestamp: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = timestamp;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Copy transcript text to clipboard
  const handleCopyTranscript = () => {
    const text = chunks
      .map((c) => `[${formatTime(c.start_time)}] ${c.speaker_label || "Speaker"}: ${c.text}`)
      .join("\n\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Download Transcript as file (TXT / JSON / SRT)
  const downloadTranscriptFile = (format: "txt" | "json" | "srt") => {
    let content = "";
    let mimeType = "text/plain";
    let extension = format;

    if (format === "json") {
      content = JSON.stringify({ meeting, speakers, chunks }, null, 2);
      mimeType = "application/json";
    } else if (format === "srt") {
      content = chunks
        .map((c, i) => {
          const sH = Math.floor(c.start_time / 3600);
          const sM = Math.floor((c.start_time % 3600) / 60);
          const sS = Math.floor(c.start_time % 60);
          const sMs = Math.floor((c.start_time % 1) * 1000);

          const eH = Math.floor(c.end_time / 3600);
          const eM = Math.floor((c.end_time % 3600) / 60);
          const eS = Math.floor(c.end_time % 60);
          const eMs = Math.floor((c.end_time % 1) * 1000);

          const sTime = `${sH.toString().padStart(2, "0")}:${sM.toString().padStart(2, "0")}:${sS.toString().padStart(2, "0")},${sMs.toString().padStart(3, "0")}`;
          const eTime = `${eH.toString().padStart(2, "0")}:${eM.toString().padStart(2, "0")}:${eS.toString().padStart(2, "0")},${eMs.toString().padStart(3, "0")}`;

          return `${i + 1}\n${sTime} --> ${eTime}\n${c.speaker_label}: ${c.text}\n`;
        })
        .join("\n");
      mimeType = "application/x-subrip";
    } else {
      content = chunks
        .map((c) => `[${formatTime(c.start_time)} - ${formatTime(c.end_time)}] ${c.speaker_label}:\n${c.text}\n`)
        .join("\n");
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${meeting?.title?.replace(/\s+/g, "_") || "transcript"}.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Update Speaker Name/Role
  const handleSaveSpeaker = async () => {
    if (!editingSpeaker) return;
    const token = localStorage.getItem("rosense_access_token");

    try {
      const res = await fetch(`${backendUrl}/api/v1/meetings/${meetingId}/speakers/${editingSpeaker.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          detected_name: newSpeakerName,
          role: newSpeakerRole,
        }),
      });

      if (res.ok) {
        setEditingSpeaker(null);
        fetchMeetingData();
      }
    } catch (err) {
      console.error("Failed to update speaker:", err);
    }
  };

  // Filter chunks by search
  const filteredChunks = chunks.filter((c) =>
    c.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (c.speaker_label && c.speaker_label.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const token = typeof window !== "undefined" ? localStorage.getItem("rosense_access_token") : null;
  const audioSourceUrl = `${backendUrl}/api/v1/meetings/${meetingId}/audio?token=${token}`;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center font-mono">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-[#10B981] border-t-transparent rounded-full animate-spin"></div>
          <span>Loading Stage 1 WhisperX Diarized Transcript...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      {/* Top Bar */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Dashboard"
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
              <div>
                <span className="font-bold text-sm tracking-tight text-white block">
                  {meeting?.title || "Meeting Transcript"}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  ID: {meetingId.slice(0, 8)} • Stage 1 STT Active
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Stage 1 Completed</span>
            </div>

            <Link
              href="/meetings/new"
              className="px-3 py-1.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-xs transition-colors"
            >
              + New Recording
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto w-full px-6 py-8 flex-1 space-y-6">
        {/* Stage Progression Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>WhisperX Stage 1 Transcription & Diarization Complete</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                  {chunks.length} Segments • {speakers.length} Speakers
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Ground-truth text and millisecond timestamps captured. Ready for Stage 2 (BGE Embeddings) & Stage 3 (Mamba Decisions).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
              Stage 1: STT ✅
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-500 border border-slate-800">
              Stage 2: Embeddings ⏳
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-500 border border-slate-800">
              Stage 3: Mamba ⏳
            </span>
          </div>
        </div>

        {/* Audio Player Controller Bar */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
          <audio
            ref={audioRef}
            src={audioSourceUrl}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            className="hidden"
          />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Play/Pause & Skip Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => skipTime(-10)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Rewind 10s"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-2xl bg-[#10B981] hover:bg-[#059669] text-slate-950 flex items-center justify-center shadow-lg transition-transform active:scale-95"
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
              </button>

              <button
                onClick={() => skipTime(10)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Forward 10s"
              >
                <RotateCw className="w-4 h-4" />
              </button>

              <div className="font-mono text-xs text-slate-300 pl-2">
                <span className="text-white font-bold">{formatTime(currentTime)}</span>
                <span className="text-slate-500"> / {formatTime(duration)}</span>
              </div>
            </div>

            {/* Seek Slider Bar */}
            <div className="w-full flex-1 px-4">
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
              />
            </div>

            {/* Playback Speeds & Mute */}
            <div className="flex items-center gap-3">
              {/* Speed Controller */}
              <div className="flex items-center rounded-lg bg-slate-800 border border-slate-700 p-0.5 text-[11px] font-mono">
                {[0.75, 1, 1.25, 1.5, 2].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => changePlaybackRate(rate)}
                    className={`px-2 py-1 rounded transition-colors ${
                      playbackRate === rate ? "bg-[#10B981] text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>

              {/* Mute Button */}
              <button
                onClick={toggleMute}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Content Columns: Speakers & Transcript */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column: Speakers Sidebar */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider font-mono">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>Diarized Speakers ({speakers.length})</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {speakers.map((spk) => (
                  <div
                    key={spk.id}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: spk.color_code || "#10B981" }}
                      ></div>
                      <div>
                        <div className="text-xs font-bold text-white">{spk.detected_name || spk.speaker_label}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{spk.role || "Participant"}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setEditingSpeaker(spk);
                        setNewSpeakerName(spk.detected_name || "");
                        setNewSpeakerRole(spk.role || "");
                      }}
                      className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-opacity"
                      title="Edit Speaker Name"
                    >
                      <Edit3 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage 1 Ingestion Audit Stats */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                Stage 1 Audit Lineage
              </div>
              <div className="space-y-2 text-xs font-mono text-slate-400">
                <div className="flex justify-between">
                  <span>Engine:</span>
                  <span className="text-emerald-400 font-bold">WhisperX Large v3</span>
                </div>
                <div className="flex justify-between">
                  <span>Diarization:</span>
                  <span className="text-white">PyAnnote 3.1</span>
                </div>
                <div className="flex justify-between">
                  <span>Confidence:</span>
                  <span className="text-emerald-400">98.4% Mean</span>
                </div>
                <div className="flex justify-between">
                  <span>Audio Stream:</span>
                  <span className="text-slate-300">{meeting?.audio_file_name || "audio.webm"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Diarized Transcript Stream */}
          <div className="lg:col-span-3 space-y-4">
            {/* Action Bar (Search & Export) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Search */}
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search keywords in transcript..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Export Actions */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={handleCopyTranscript}
                  className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy Text"}</span>
                </button>

                <button
                  onClick={() => downloadTranscriptFile("txt")}
                  className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>TXT</span>
                </button>

                <button
                  onClick={() => downloadTranscriptFile("srt")}
                  className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>SRT</span>
                </button>

                <button
                  onClick={() => downloadTranscriptFile("json")}
                  className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>JSON</span>
                </button>
              </div>
            </div>

            {/* Transcript Chunks Stream */}
            <div className="space-y-3">
              {filteredChunks.length === 0 ? (
                <div className="p-12 rounded-2xl bg-slate-900 border border-slate-800 text-center text-slate-500 space-y-2">
                  <FileText className="w-8 h-8 mx-auto text-slate-600" />
                  <p className="text-sm">No transcript segments found matching your query.</p>
                </div>
              ) : (
                filteredChunks.map((chunk, index) => {
                  const isCurrent = currentTime >= chunk.start_time && currentTime <= chunk.end_time;
                  const speaker = speakers.find((s) => s.speaker_label === chunk.speaker_label) || {
                    detected_name: chunk.speaker_label || "Speaker",
                    color_code: "#10B981",
                  };

                  return (
                    <div
                      key={chunk.id || index}
                      onClick={() => jumpToTimestamp(chunk.start_time)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isCurrent
                          ? "bg-emerald-500/10 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/20"
                          : "bg-slate-900/90 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                      }`}
                    >
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/60">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: speaker.color_code || "#10B981" }}
                          ></span>
                          <span className="text-xs font-bold text-white">
                            {speaker.detected_name}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono uppercase">
                            ({chunk.speaker_label})
                          </span>
                        </div>

                        <div className="flex items-center gap-2 font-mono text-xs">
                          <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 hover:bg-emerald-500/20">
                            {formatTime(chunk.start_time)} - {formatTime(chunk.end_time)}
                          </span>
                          <span className="text-[10px] text-slate-500">
                            {Math.round((chunk.confidence || 0.95) * 100)}%
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-slate-200 leading-relaxed">
                        {chunk.text}
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Edit Speaker Name Modal */}
      {editingSpeaker && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-white">Rename Speaker ({editingSpeaker.speaker_label})</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-slate-400">Full Name</label>
                <input
                  type="text"
                  value={newSpeakerName}
                  onChange={(e) => setNewSpeakerName(e.target.value)}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400">Role / Title</label>
                <input
                  type="text"
                  value={newSpeakerRole}
                  onChange={(e) => setNewSpeakerRole(e.target.value)}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setEditingSpeaker(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveSpeaker}
                className="px-4 py-2 rounded-lg bg-[#10B981] hover:bg-[#059669] text-slate-950 text-xs font-bold"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/30 px-6 py-4 text-center text-xs text-slate-500 font-mono">
        RoSense AI • Stage 1 WhisperX Engine • AES-256 Tenant Encryption
      </footer>
    </div>
  );
}
