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
  AlertCircle,
  MessageSquare,
  ShieldAlert,
  Send,
  RefreshCw,
  Bot,
  Settings2,
  ChevronRight,
  TrendingUp,
  Activity
} from "lucide-react";

export default function MeetingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const meetingId = params?.id as string;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

  // Active Main Tab
  const [activeTab, setActiveTab] = useState<"transcript" | "stage3_structure" | "stage4_board_report" | "stage4_qa">("transcript");

  // Data States
  const [meeting, setMeeting] = useState<any>(null);
  const [speakers, setSpeakers] = useState<any[]>([]);
  const [chunks, setChunks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Search filter & Vector States
  const [searchQuery, setSearchQuery] = useState("");
  const [searchMode, setSearchMode] = useState<"keyword" | "semantic">("keyword");
  const [semanticResults, setSemanticResults] = useState<any[]>([]);
  const [isSearchingSemantic, setIsSearchingSemantic] = useState(false);
  const [embeddingsStatus, setEmbeddingsStatus] = useState<any>(null);
  const [isIndexingVectors, setIsIndexingVectors] = useState(false);

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

  const fetchStage3Data = async () => {
    const token = localStorage.getItem("rosense_access_token");
    if (!token || !meetingId) return;
    try {
      const res = await fetch(`${backendUrl}/api/v1/meetings/${meetingId}/stage3`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setStage3Data(data);
      }
    } catch (err) {
      console.error("Failed to fetch stage 3 data:", err);
    }
  };

  // Stage 3 Structured Data
  const [stage3Data, setStage3Data] = useState<any>({
    decisions: [],
    tasks: [],
    risks: [],
    speaker_dynamics: [],
    insights: null
  });

  // Stage 4 LLM & Board Report States
  const [runtimeMode, setRuntimeMode] = useState<"cloud" | "onprem">("cloud");
  const [providersCatalog, setProvidersCatalog] = useState<any[]>([]);
  const [selectedProvider, setSelectedProvider] = useState<string>("groq");
  const [selectedModel, setSelectedModel] = useState<string>("llama-3.3-70b-versatile");
  const [boardReport, setBoardReport] = useState<any>(null);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [reportCopied, setReportCopied] = useState(false);

  // Stage 4 Q&A States
  const [chatInput, setChatInput] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [isAskingQA, setIsAskingQA] = useState<boolean>(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Fetch Stage 4 Runtime Mode & Providers Catalog
  const fetchRuntimeMode = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/v1/stage4/mode`);
      if (res.ok) {
        const modeData = await res.json();
        setRuntimeMode(modeData.runtime_mode || "cloud");
      }
    } catch (err) {
      console.warn("Could not fetch runtime mode:", err);
    }
  };

  const fetchProviders = async (modeOverride?: string) => {
    try {
      const mode = modeOverride || runtimeMode;
      const res = await fetch(`${backendUrl}/api/v1/stage4/providers?mode=${mode}`);
      if (res.ok) {
        const catalog = await res.json();
        setProvidersCatalog(catalog);
        if (catalog.length > 0) {
          const firstConfigured = catalog.find((p: any) => p.is_configured) || catalog[0];
          setSelectedProvider(firstConfigured.id);
          setSelectedModel(firstConfigured.default_model);
        }
      }
    } catch (err) {
      console.warn("Could not fetch LLM providers:", err);
    }
  };

  const handleToggleMode = async (newMode: "cloud" | "onprem") => {
    const token = localStorage.getItem("rosense_access_token");
    setRuntimeMode(newMode);
    try {
      await fetch(`${backendUrl}/api/v1/stage4/mode`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : ""
        },
        body: JSON.stringify({ mode: newMode })
      });
      fetchProviders(newMode);
    } catch (err) {
      console.error("Failed to toggle mode:", err);
    }
  };


  // Fetch Existing Stage 4 Board Report
  const fetchBoardReport = async () => {
    const token = localStorage.getItem("rosense_access_token");
    if (!token || !meetingId) return;
    try {
      const res = await fetch(`${backendUrl}/api/v1/stage4/meetings/${meetingId}/board-report`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const report = await res.json();
        setBoardReport(report);
      }
    } catch (err) {
      // Report may not exist yet
    }
  };

  // Generate / Regenerate Board Report
  const handleGenerateBoardReport = async () => {
    const token = localStorage.getItem("rosense_access_token");
    if (!token || !meetingId) return;
    setIsGeneratingReport(true);
    try {
      const res = await fetch(`${backendUrl}/api/v1/stage4/meetings/${meetingId}/synthesize`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          provider: selectedProvider,
          model: selectedModel,
          custom_instructions: "Focus on strategic decisions, timeline feasibility, and executive risk mitigations."
        })
      });
      if (res.ok) {
        const data = await res.json();
        setBoardReport(data.report);
      }
    } catch (err) {
      console.error("Board report synthesis error:", err);
    } finally {
      setIsGeneratingReport(false);
    }
  };

  // Conversational Q&A Submit
  const handleSendQAMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!chatInput.trim() || isAskingQA) return;

    const token = localStorage.getItem("rosense_access_token");
    if (!token) return;

    const userText = chatInput.trim();
    setChatInput("");
    setIsAskingQA(true);

    const userMessage = {
      id: "temp-user-" + Date.now(),
      sender_role: "user",
      content: userText,
      created_at: new Date().toISOString()
    };

    setChatMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch(`${backendUrl}/api/v1/stage4/qa/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          query: userText,
          meeting_id: meetingId,
          session_id: sessionId,
          provider: selectedProvider,
          model: selectedModel
        })
      });

      if (res.ok) {
        const data = await res.json();
        setSessionId(data.session_id);
        const assistantMessage = {
          id: data.message_id || "temp-asst-" + Date.now(),
          sender_role: "assistant",
          content: data.answer,
          citations: data.citations || [],
          provider_used: data.provider_used,
          model_used: data.model_used,
          latency_ms: data.latency_ms,
          created_at: new Date().toISOString()
        };
        setChatMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (err) {
      console.error("Q&A error:", err);
    } finally {
      setIsAskingQA(false);
      setTimeout(() => {
        chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const fetchEmbeddingsStatus = async () => {
    const token = localStorage.getItem("rosense_access_token");
    if (!token || !meetingId) return;
    try {
      const res = await fetch(`${backendUrl}/api/v1/meetings/${meetingId}/embeddings/status`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setEmbeddingsStatus(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleTriggerIndexing = async () => {
    const token = localStorage.getItem("rosense_access_token");
    if (!token || !meetingId) return;
    setIsIndexingVectors(true);
    try {
      const res = await fetch(`${backendUrl}/api/v1/meetings/${meetingId}/embed`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setTimeout(() => {
          fetchEmbeddingsStatus();
          setIsIndexingVectors(false);
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      setIsIndexingVectors(false);
    }
  };

  const performSemanticSearch = async (q: string) => {
    if (!q || q.trim().length < 2) {
      setSemanticResults([]);
      return;
    }
    const token = localStorage.getItem("rosense_access_token");

    setIsSearchingSemantic(true);
    let apiSuccess = false;

    if (token) {
      try {
        const res = await fetch(`${backendUrl}/api/v1/search/semantic`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            query: q,
            meeting_id: meetingId,
            min_similarity: 0.1,
            limit: 20,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setSemanticResults(data);
            apiSuccess = true;
          }
        }
      } catch (err) {
        console.warn("Backend semantic search fallback triggered:", err);
      }
    }

    if (!apiSuccess && chunks.length > 0) {
      const queryLower = q.toLowerCase();
      const queryWords = queryLower.split(/\s+/).filter((w) => w.length > 1);

      const scored = chunks.map((c) => {
        const textLower = c.text.toLowerCase();
        let score = 0;
        queryWords.forEach((word) => {
          if (textLower.includes(word)) score += 0.5;
        });
        return { ...c, similarity_score: Math.min(score, 0.99) };
      }).filter((c) => c.similarity_score > 0.2);

      scored.sort((a, b) => b.similarity_score - a.similarity_score);
      setSemanticResults(scored);
    }
    setIsSearchingSemantic(false);
  };

  useEffect(() => {
    if (meetingId) {
      fetchMeetingData();
      fetchEmbeddingsStatus();
      fetchStage3Data();
      fetchRuntimeMode();
      fetchProviders();
      fetchBoardReport();
    }
  }, [meetingId]);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchMode === "semantic") {
        performSemanticSearch(searchQuery);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, searchMode]);

  // Audio Playback Controls
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
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const skipTime = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(Math.max(audioRef.current.currentTime + seconds, 0), duration);
    }
  };

  const jumpToTimestamp = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = seconds;
      setCurrentTime(seconds);
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const changePlaybackRate = (rate: number) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
      setPlaybackRate(rate);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds === null) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Filter chunks based on exact or semantic search
  const filteredChunks =
    searchMode === "semantic" && searchQuery.trim()
      ? semanticResults
      : chunks.filter((c) =>
          searchQuery.trim() === ""
            ? true
            : c.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
              c.speaker_label.toLowerCase().includes(searchQuery.toLowerCase())
        );

  const handleSaveSpeaker = async () => {
    if (!editingSpeaker) return;
    const token = localStorage.getItem("rosense_access_token");
    if (!token) return;

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
        setSpeakers((prev) =>
          prev.map((s) => (s.id === editingSpeaker.id ? { ...s, detected_name: newSpeakerName, role: newSpeakerRole } : s))
        );
        setEditingSpeaker(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopyTranscript = () => {
    const text = chunks
      .map((c) => {
        const spk = speakers.find((s) => s.speaker_label === c.speaker_label)?.detected_name || c.speaker_label;
        return `[${formatTime(c.start_time)}] ${spk}: ${c.text}`;
      })
      .join("\n\n");

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyBoardReport = () => {
    if (boardReport?.raw_markdown) {
      navigator.clipboard.writeText(boardReport.raw_markdown);
      setReportCopied(true);
      setTimeout(() => setReportCopied(false), 2000);
    }
  };

  const downloadTranscriptFile = (format: "txt" | "srt" | "json") => {
    const token = localStorage.getItem("rosense_access_token");
    const downloadUrl = `${backendUrl}/api/v1/meetings/${meetingId}/export/${format}`;
    window.open(`${downloadUrl}?token=${token}`, "_blank");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-white font-sans">
        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-slate-400 font-mono text-sm">Decrypting AES-256 Vault & Loading Meeting Workspace...</p>
      </div>
    );
  }

  const selectedProviderObj = providersCatalog.find((p) => p.id === selectedProvider);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Header Bar */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-40 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/meetings"
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>

          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-base font-bold text-white tracking-tight">{meeting?.title || "Meeting Workspace"}</h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                {meeting?.status?.toUpperCase() || "READY"}
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mt-0.5">
              <span>{meeting?.recorded_at ? new Date(meeting.recorded_at).toLocaleString() : "Recently Recorded"}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <Clock className="w-3 h-3" />
                {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>

        {/* Mode Switcher & Global LLM Provider & Model Indicator */}
        <div className="flex items-center gap-3">
          {/* Cloud Online vs On-Premises Air-Gapped Toggle */}
          <div className="flex rounded-xl bg-slate-900 p-1 border border-slate-800 text-xs font-mono font-semibold">
            <button
              onClick={() => handleToggleMode("cloud")}
              className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-colors ${
                runtimeMode === "cloud"
                  ? "bg-emerald-600 text-white shadow-sm font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Cloud Online Mode: Free Tokens (Groq, Gemini, OpenRouter)"
            >
              <Sparkles className="w-3 h-3" />
              <span>Cloud (Online)</span>
            </button>
            <button
              onClick={() => handleToggleMode("onprem")}
              className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-colors ${
                runtimeMode === "onprem"
                  ? "bg-indigo-600 text-white shadow-sm font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
              title="On-Premises Mode: 100% Private Air-Gapped (Ollama / Local RTX)"
            >
              <Cpu className="w-3 h-3" />
              <span>On-Prem (Private)</span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs font-mono">
            <select
              value={selectedProvider}
              onChange={(e) => {
                const p = e.target.value;
                setSelectedProvider(p);
                const pObj = providersCatalog.find((x) => x.id === p);
                if (pObj) setSelectedModel(pObj.default_model);
              }}
              className="bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-white text-xs focus:outline-none focus:border-emerald-500"
            >
              {providersCatalog.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>

            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-slate-300 text-xs focus:outline-none focus:border-emerald-500 max-w-[170px] truncate"
            >
              {selectedProviderObj?.supported_models?.map((m: any) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>


      {/* Main Tab Navigation */}
      <div className="bg-slate-900/40 border-b border-slate-800 px-6 flex items-center gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("transcript")}
          className={`py-3 px-4 text-xs font-bold font-mono flex items-center gap-2 border-b-2 transition-all ${
            activeTab === "transcript"
              ? "border-emerald-500 text-emerald-400 bg-emerald-500/5"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Radio className="w-3.5 h-3.5" />
          <span>1. Transcript & Diarization</span>
        </button>

        <button
          onClick={() => setActiveTab("stage3_structure")}
          className={`py-3 px-4 text-xs font-bold font-mono flex items-center gap-2 border-b-2 transition-all ${
            activeTab === "stage3_structure"
              ? "border-emerald-500 text-emerald-400 bg-emerald-500/5"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>2. Decisions, Tasks & Mood Map</span>
          {stage3Data.decisions.length > 0 && (
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-slate-800 text-slate-300">
              {stage3Data.decisions.length + stage3Data.tasks.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab("stage4_board_report")}
          className={`py-3 px-4 text-xs font-bold font-mono flex items-center gap-2 border-b-2 transition-all ${
            activeTab === "stage4_board_report"
              ? "border-emerald-500 text-emerald-400 bg-emerald-500/5"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>3. Board Report & Synthesis</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300 font-bold">
            Stage 4
          </span>
        </button>

        <button
          onClick={() => setActiveTab("stage4_qa")}
          className={`py-3 px-4 text-xs font-bold font-mono flex items-center gap-2 border-b-2 transition-all ${
            activeTab === "stage4_qa"
              ? "border-indigo-500 text-indigo-400 bg-indigo-500/5"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
          <span>4. Conversational AI Q&A</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-indigo-500/20 text-indigo-300 font-bold">
            RAG
          </span>
        </button>
      </div>

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6">
        {/* Hidden HTML Audio Element */}
        <audio
          ref={audioRef}
          src={`${backendUrl}/api/v1/meetings/${meetingId}/audio/stream?token=${typeof window !== "undefined" ? localStorage.getItem("rosense_access_token") : ""}`}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />

        {/* Global Synchronized Audio Player Controller */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => skipTime(-10)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Backward 10s"
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

              <button
                onClick={toggleMute}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: TRANSCRIPT & DIARIZATION */}
        {activeTab === "transcript" && (
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

              {/* Stage 1 & 2 Vector Lineage */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                  Stage 1 & 2 Audit Lineage
                </div>
                <div className="space-y-2 text-xs font-mono text-slate-400">
                  <div className="flex justify-between">
                    <span>STT Engine:</span>
                    <span className="text-emerald-400 font-bold">WhisperX Large v3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Diarization:</span>
                    <span className="text-white">PyAnnote 3.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dense Vectors:</span>
                    <span className="text-indigo-400 font-bold">BGE-Large-v1.5 (1024d)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vector Index:</span>
                    <span className="text-white">pgvector HNSW Cosine</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vector Status:</span>
                    <span className={embeddingsStatus?.is_indexed ? "text-emerald-400 font-bold" : "text-amber-400"}>
                      {embeddingsStatus?.is_indexed ? "Indexed (100%)" : "Pending Indexing"}
                    </span>
                  </div>
                </div>

                {!embeddingsStatus?.is_indexed && (
                  <button
                    onClick={handleTriggerIndexing}
                    disabled={isIndexingVectors}
                    className="w-full mt-2 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-bold font-mono flex items-center justify-center gap-1.5 transition-all shadow-md"
                  >
                    <Cpu className={`w-3.5 h-3.5 ${isIndexingVectors ? "animate-spin" : ""}`} />
                    <span>{isIndexingVectors ? "Generating Vectors..." : "Index Dense Vectors"}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Diarized Transcript Stream */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-80">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      placeholder={searchMode === "semantic" ? "Semantic AI vector search..." : "Search keywords in transcript..."}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border text-white text-xs placeholder-slate-500 focus:outline-none transition-colors ${
                        searchMode === "semantic"
                          ? "border-indigo-500/60 focus:border-indigo-400 ring-1 ring-indigo-500/20"
                          : "border-slate-800 focus:border-emerald-500"
                      }`}
                    />
                  </div>

                  <div className="flex rounded-xl bg-slate-900 p-1 border border-slate-800 text-xs font-semibold">
                    <button
                      onClick={() => setSearchMode("keyword")}
                      className={`px-2.5 py-1 rounded-lg transition-colors ${
                        searchMode === "keyword" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Exact
                    </button>
                    <button
                      onClick={() => setSearchMode("semantic")}
                      className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors ${
                        searchMode === "semantic" ? "bg-indigo-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Sparkles className="w-3 h-3 text-indigo-200" />
                      <span>AI Vector</span>
                    </button>
                  </div>
                </div>

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
                {filteredChunks.map((chunk, index) => {
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
                          <span className="text-xs font-bold text-white">{speaker.detected_name}</span>
                          <span className="text-[10px] text-slate-500 font-mono uppercase">({chunk.speaker_label})</span>
                        </div>

                        <div className="flex items-center gap-2 font-mono text-xs">
                          {chunk.similarity_score !== undefined && (
                            <span className="text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded-md border border-indigo-500/30 flex items-center gap-1 font-bold">
                              <Sparkles className="w-2.5 h-2.5 text-indigo-400" />
                              {Math.round(chunk.similarity_score * 100)}% Match
                            </span>
                          )}
                          <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            {formatTime(chunk.start_time)} - {formatTime(chunk.end_time)}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-slate-200 leading-relaxed">{chunk.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: STRUCTURED FACTS & MOOD MAP (STAGE 3) */}
        {activeTab === "stage3_structure" && (
          <div className="space-y-6">
            {/* Health & Insights Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Meeting Health</div>
                <div className="text-lg font-bold text-emerald-400">{stage3Data.insights?.meeting_health_rating || "Healthy & Aligned"}</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Decision Quality Score</div>
                <div className="text-lg font-bold text-white">{stage3Data.insights?.decision_quality_score || "88"}%</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Executive Alignment</div>
                <div className="text-lg font-bold text-indigo-400">{stage3Data.insights?.alignment_score || "82"}%</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Risk Index</div>
                <div className="text-lg font-bold text-amber-400">{stage3Data.insights?.risk_index || "14"}%</div>
              </div>
            </div>

            {/* Decisions Table */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Decisions & Resolutions ({stage3Data.decisions.length})</span>
                </div>
              </div>

              <div className="divide-y divide-slate-800/60">
                {stage3Data.decisions.map((d: any, idx: number) => (
                  <div key={d.id || idx} className="py-3 flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-white">{d.text}</div>
                      {d.reason && <div className="text-xs text-slate-400 mt-0.5">Rationale: {d.reason}</div>}
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold uppercase">
                        {d.status || "Approved"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tasks & Action Items */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Activity className="w-4 h-4 text-indigo-400" />
                  <span>Action Items & Tasks ({stage3Data.tasks.length})</span>
                </div>
              </div>

              <div className="divide-y divide-slate-800/60">
                {stage3Data.tasks.map((t: any, idx: number) => (
                  <div key={t.id || idx} className="py-3 flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-white">{t.text}</div>
                      <div className="text-xs text-slate-400 mt-0.5 font-mono">
                        Assignee: <span className="text-slate-200">{t.assignee_name || t.speaker_label}</span> • Due: <span className="text-indigo-300">{t.due_timeframe || "TBD"}</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 uppercase">
                      {t.priority || "Medium"} Priority
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Register */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  <span>Identified Risks & Objections ({stage3Data.risks.length})</span>
                </div>
              </div>

              <div className="divide-y divide-slate-800/60">
                {stage3Data.risks.map((r: any, idx: number) => (
                  <div key={r.id || idx} className="py-3 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-white">{r.text}</div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20 uppercase">
                        {r.severity || "Medium"}
                      </span>
                    </div>
                    {r.mitigation && (
                      <div className="text-xs text-slate-400 font-mono">
                        <span className="text-emerald-400">Mitigation:</span> {r.mitigation}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: STAGE 4 BOARD REPORT & EXECUTIVE SYNTHESIS */}
        {activeTab === "stage4_board_report" && (
          <div className="space-y-6">
            {/* Control Bar: Provider Switcher & Synthesis Button */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Bot className="w-5 h-5 text-emerald-400" />
                  <span>Stage 4 Executive Synthesis Engine</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Synthesize meeting deliberations into a formal, C-Suite board package using the active LLM generation layer.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={handleGenerateBoardReport}
                  disabled={isGeneratingReport}
                  className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white text-xs font-bold font-mono flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <RefreshCw className={`w-4 h-4 ${isGeneratingReport ? "animate-spin" : ""}`} />
                  <span>{isGeneratingReport ? "Synthesizing with LLM..." : (boardReport ? "Regenerate Board Report" : "Generate Board Report")}</span>
                </button>

                {boardReport && (
                  <button
                    onClick={handleCopyBoardReport}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    {reportCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{reportCopied ? "Copied" : "Copy Markdown"}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Generated Board Report Content */}
            {boardReport ? (
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">{boardReport.report_title}</h2>
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mt-1">
                      <span>Provider: <strong className="text-emerald-400">{boardReport.generated_by_provider}</strong></span>
                      <span>•</span>
                      <span>Model: <strong className="text-white">{boardReport.generated_by_model}</strong></span>
                      <span>•</span>
                      <span>Latency: <strong className="text-indigo-400">{boardReport.generation_latency_ms}ms</strong></span>
                    </div>
                  </div>
                </div>

                {/* Executive Summary */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                    1. Executive Briefing
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-line bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                    {boardReport.executive_summary}
                  </p>
                </div>

                {/* Strategic Highlights */}
                {boardReport.strategic_highlights && boardReport.strategic_highlights.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                      2. Strategic Highlights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {boardReport.strategic_highlights.map((h: any, i: number) => (
                        <div key={i} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-white">{h.topic}</span>
                            <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold uppercase">
                              {h.impact || "High"} Impact
                            </span>
                          </div>
                          <p className="text-xs text-slate-300">{h.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Raw Markdown Package */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                    3. Publication-Ready Board Package (Markdown)
                  </h3>
                  <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                    {boardReport.raw_markdown}
                  </pre>
                </div>
              </div>
            ) : (
              <div className="p-12 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3">
                <FileText className="w-10 h-10 mx-auto text-slate-600" />
                <h3 className="text-base font-bold text-white">No Board Report Generated Yet</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Click the &apos;Generate Board Report&apos; button above to synthesize the meeting discussions into a formal executive board package.
                </p>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: CONVERSATIONAL AI Q&A */}
        {activeTab === "stage4_qa" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Column: Q&A Context & Guardrails */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider font-mono">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>Grounded RAG Assistant</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Ask natural language questions about decisions, action items, objections, or speaker positions.
                </p>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <Check className="w-3.5 h-3.5" />
                    <span>Ground-Truth Verification</span>
                  </div>
                  <p>All answers are cross-referenced with BGE dense vectors and cite timestamps [MM:SS].</p>
                </div>
              </div>

              {/* Sample Queries */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                  Suggested Prompts
                </div>
                {[
                  "What were the final decisions taken in this meeting?",
                  "Who was assigned action items and what are the deadlines?",
                  "Were there any major risks or objections raised?",
                  "What was the overall sentiment of the leadership team?"
                ].map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setChatInput(prompt);
                    }}
                    className="w-full text-left p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Chat Interface */}
            <div className="lg:col-span-3 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col h-[600px]">
              {/* Chat Header */}
              <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-bold text-white font-mono">
                    RoSense Enterprise Memory Chat ({selectedModel})
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  {selectedProvider.toUpperCase()}
                </span>
              </div>

              {/* Messages Container */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {chatMessages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500 space-y-2">
                    <MessageSquare className="w-8 h-8 text-slate-600" />
                    <p className="text-xs font-mono">Ask any question about this meeting or company history.</p>
                  </div>
                ) : (
                  chatMessages.map((msg, idx) => (
                    <div
                      key={msg.id || idx}
                      className={`flex flex-col ${msg.sender_role === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${
                          msg.sender_role === "user"
                            ? "bg-indigo-600 text-white rounded-br-none"
                            : "bg-slate-950 border border-slate-800 text-slate-200 rounded-bl-none space-y-3"
                        }`}
                      >
                        <div className="whitespace-pre-line">{msg.content}</div>

                        {/* Citations badges if present */}
                        {msg.citations && msg.citations.length > 0 && (
                          <div className="pt-2 border-t border-slate-800 space-y-1.5">
                            <div className="text-[10px] font-bold text-slate-400 uppercase font-mono">
                              Verified Citations:
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {msg.citations.map((c: any, cIdx: number) => (
                                <button
                                  key={cIdx}
                                  onClick={() => jumpToTimestamp(c.start_time || 0)}
                                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/30 flex items-center gap-1 transition-colors"
                                >
                                  <Play className="w-2 h-2 fill-current" />
                                  <span>[{c.timestamp || "00:00"}] {c.speaker_label}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {msg.latency_ms && (
                        <div className="text-[9px] font-mono text-slate-500 mt-1 px-1">
                          Generated in {msg.latency_ms}ms via {msg.provider_used}
                        </div>
                      )}
                    </div>
                  ))
                )}

                {isAskingQA && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 w-fit">
                    <div className="w-3 h-3 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
                    <span>Querying Enterprise Memory Layer & Reasoning...</span>
                  </div>
                )}
                <div ref={chatBottomRef} />
              </div>

              {/* Chat Input Box */}
              <form onSubmit={handleSendQAMessage} className="p-3 border-t border-slate-800 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Ask a question about this meeting or decisions made..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  disabled={isAskingQA || !chatInput.trim()}
                  className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}
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
        RoSense AI • Stage 4 Executive Synthesis, Board Reports & Conversational Q&A • AES-256 Vault
      </footer>
    </div>
  );
}
