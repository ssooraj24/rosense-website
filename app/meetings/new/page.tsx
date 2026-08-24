"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Mic,
  Square,
  Play,
  Pause,
  UploadCloud,
  FileAudio,
  CheckCircle2,
  AlertCircle,
  Clock,
  Users,
  Building2,
  ArrowLeft,
  Sparkles,
  Volume2,
  Radio,
  Cpu,
  RefreshCw
} from "lucide-react";

export default function NewMeetingPage() {
  const router = useRouter();
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

  // Tab State: 'upload' | 'record'
  const [activeTab, setActiveTab] = useState<"upload" | "record">("upload");

  // Form State
  const [title, setTitle] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("en");
  const [expectedSpeakers, setExpectedSpeakers] = useState("Rahul Sharma (Engineering Lead), Sarah Jenkins (Product Partner)");

  // Upload State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Recording State
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [previewPlaying, setPreviewPlaying] = useState(false);

  // Submission & Pipeline Tracking State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pipelineStep, setPipelineStep] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [createdMeetingId, setCreatedMeetingId] = useState<string | null>(null);

  // Refs for Recording
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const previewAudioRef = useRef<HTMLAudioElement | null>(null);

  // Check auth
  useEffect(() => {
    const token = localStorage.getItem("rosense_access_token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  // Clean up recording audio context and timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close();
      }
      if (recordedAudioUrl) {
        URL.revokeObjectURL(recordedAudioUrl);
      }
    };
  }, [recordedAudioUrl]);

  // Format timer
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Drag & drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      if (!title) {
        setTitle(file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "));
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      if (!title) {
        setTitle(file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "));
      }
    }
  };

  // Microphone Waveform Visualizer
  const startVisualizer = (stream: MediaStream) => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioContextRef.current = audioCtx;
      const analyser = audioCtx.createAnalyser();
      analyserRef.current = analyser;
      analyser.fftSize = 64;

      const source = audioCtx.createMediaStreamSource(stream);
      source.connect(analyser);

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const canvas = canvasRef.current;
      if (!canvas) return;
      const canvasCtx = canvas.getContext("2d");
      if (!canvasCtx) return;

      const draw = () => {
        animationFrameRef.current = requestAnimationFrame(draw);
        analyser.getByteFrequencyData(dataArray);

        canvasCtx.fillStyle = "rgb(15 23 42)"; // slate-900
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

        const barWidth = (canvas.width / bufferLength) * 2;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const barHeight = (dataArray[i] / 255) * (canvas.height * 0.8);
          // Emerald gradient
          canvasCtx.fillStyle = `rgb(16, 185, 129)`;
          canvasCtx.fillRect(x, canvas.height - barHeight, barWidth - 2, barHeight);
          x += barWidth;
        }
      };

      draw();
    } catch (err) {
      console.warn("Visualizer init error:", err);
    }
  };

  // Start Live Recording
  const startRecording = async () => {
    try {
      setErrorMessage(null);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        setRecordedBlob(audioBlob);
        const url = URL.createObjectURL(audioBlob);
        setRecordedAudioUrl(url);

        // Stop all audio tracks
        stream.getTracks().forEach((track) => track.stop());
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      };

      mediaRecorder.start(250); // Emit chunk every 250ms
      setIsRecording(true);
      setIsPaused(false);
      setRecordingSeconds(0);

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);

      // Start Canvas Visualizer
      startVisualizer(stream);
    } catch (err: any) {
      console.error("Failed to access microphone:", err);
      setErrorMessage("Microphone access was denied or not found. Please verify browser permissions.");
    }
  };

  // Pause / Resume Recording
  const togglePauseRecording = () => {
    if (!mediaRecorderRef.current) return;
    if (isPaused) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
      timerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  // Stop Recording
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
      if (timerRef.current) clearInterval(timerRef.current);
      if (!title) {
        setTitle(`Live Meeting Recording - ${new Date().toLocaleDateString()}`);
      }
    }
  };

  // Discard Recorded Audio
  const discardRecording = () => {
    if (recordedAudioUrl) {
      URL.revokeObjectURL(recordedAudioUrl);
    }
    setRecordedBlob(null);
    setRecordedAudioUrl(null);
    setRecordingSeconds(0);
    setPreviewPlaying(false);
  };

  // Toggle Preview Audio Playback
  const togglePreviewPlayback = () => {
    if (!previewAudioRef.current) return;
    if (previewPlaying) {
      previewAudioRef.current.pause();
      setPreviewPlaying(false);
    } else {
      previewAudioRef.current.play();
      setPreviewPlaying(true);
    }
  };

  // Submit Meeting & Trigger Stage 1 STT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const token = localStorage.getItem("rosense_access_token");
    if (!token) {
      router.push("/login");
      return;
    }

    let fileToUpload: File | Blob | null = null;
    let fileName = "recording.webm";

    if (activeTab === "upload") {
      if (!selectedFile) {
        setErrorMessage("Please select or drop an audio file.");
        return;
      }
      fileToUpload = selectedFile;
      fileName = selectedFile.name;
    } else {
      if (!recordedBlob) {
        setErrorMessage("Please record audio before submitting.");
        return;
      }
      fileToUpload = recordedBlob;
      fileName = `meeting_record_${Date.now()}.webm`;
    }

    if (!title.trim()) {
      setErrorMessage("Please provide a title for this meeting.");
      return;
    }

    setIsSubmitting(true);
    setPipelineStep(1); // Step 1: Uploading

    try {
      const formData = new FormData();
      formData.append("file", fileToUpload, fileName);
      formData.append("title", title.trim());
      formData.append("language", language);
      if (departmentId) formData.append("department_id", departmentId);
      if (description) formData.append("description", description);
      if (expectedSpeakers) formData.append("expected_speakers", expectedSpeakers);

      // Simulate step progress for user feedback
      setTimeout(() => setPipelineStep(2), 1200); // Step 2: Storage & Ingestion
      setTimeout(() => setPipelineStep(3), 2400); // Step 3: WhisperX STT & Diarization

      const res = await fetch(`${backendUrl}/api/v1/meetings/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.detail || "Failed to upload and start Stage 1 STT pipeline.");
      }

      const data = await res.json();
      setCreatedMeetingId(data.meeting_id);
      setPipelineStep(4); // Step 4: Completed

      // Redirect to Meeting details & live transcript page after brief delay
      setTimeout(() => {
        router.push(`/meetings/${data.meeting_id}`);
      }, 1500);

    } catch (err: any) {
      console.error("Upload error:", err);
      setErrorMessage(err.message || "An unexpected error occurred during audio processing.");
      setIsSubmitting(false);
      setPipelineStep(0);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
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
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>Pipeline Stage 1: STT & Diarization</span>
            </div>
          </div>

          <Link
            href="/meetings"
            className="text-xs text-slate-400 hover:text-white font-medium transition-colors"
          >
            All Meetings &rarr;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto w-full px-6 py-8 flex-1 space-y-8">
        {/* Title & Stage 1 Badge */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WhisperX High-Precision Audio Ingestion</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Ingest & Transcribe Meeting
          </h1>
          <p className="text-sm text-slate-400">
            Upload an audio recording or capture live speech directly in your browser. Stage 1 will perform word-level alignment and speaker diarization.
          </p>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-3">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Pipeline Progress Modal / Overlay */}
        {isSubmitting && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-emerald-500/30 shadow-2xl space-y-6 animate-in fade-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Cpu className="w-4 h-4 animate-spin" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Stage 1 STT Pipeline Executing</h3>
                  <p className="text-xs text-slate-400">Streaming audio into tenant cryptographic vault...</p>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400">
                {pipelineStep === 1 && "25% - Ingesting"}
                {pipelineStep === 2 && "50% - Isolated Storage"}
                {pipelineStep === 3 && "80% - WhisperX Transcribing"}
                {pipelineStep === 4 && "100% - Ready"}
              </span>
            </div>

            {/* Progress Bar Steps */}
            <div className="space-y-3">
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                  style={{ width: `${pipelineStep * 25}%` }}
                ></div>
              </div>

              <div className="grid grid-cols-4 text-[11px] font-mono text-slate-400 gap-2">
                <div className={`flex items-center gap-1 ${pipelineStep >= 1 ? "text-emerald-400 font-bold" : ""}`}>
                  <CheckCircle2 className="w-3 h-3" />
                  <span>1. Upload</span>
                </div>
                <div className={`flex items-center gap-1 ${pipelineStep >= 2 ? "text-emerald-400 font-bold" : ""}`}>
                  <CheckCircle2 className="w-3 h-3" />
                  <span>2. Ingestion</span>
                </div>
                <div className={`flex items-center gap-1 ${pipelineStep >= 3 ? "text-emerald-400 font-bold" : ""}`}>
                  <CheckCircle2 className="w-3 h-3" />
                  <span>3. WhisperX STT</span>
                </div>
                <div className={`flex items-center gap-1 ${pipelineStep >= 4 ? "text-emerald-400 font-bold" : ""}`}>
                  <CheckCircle2 className="w-3 h-3" />
                  <span>4. Diarized</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Interface Form */}
        {!isSubmitting && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Tab Selector */}
            <div className="flex rounded-xl bg-slate-900 border border-slate-800 p-1">
              <button
                type="button"
                onClick={() => setActiveTab("upload")}
                className={`flex-1 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  activeTab === "upload"
                    ? "bg-[#10B981] text-slate-950 shadow-md font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <UploadCloud className="w-4 h-4" />
                <span>Upload Audio File</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("record")}
                className={`flex-1 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  activeTab === "record"
                    ? "bg-[#10B981] text-slate-950 shadow-md font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Mic className="w-4 h-4" />
                <span>Live Browser Recording</span>
              </button>
            </div>

            {/* TAB 1: File Upload */}
            {activeTab === "upload" && (
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`p-8 rounded-2xl border-2 border-dashed transition-all text-center flex flex-col items-center justify-center gap-4 ${
                  isDragging
                    ? "border-emerald-400 bg-emerald-500/10"
                    : selectedFile
                    ? "border-emerald-500/50 bg-slate-900/80"
                    : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
                }`}
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 shadow-inner">
                  {selectedFile ? <FileAudio className="w-8 h-8" /> : <UploadCloud className="w-8 h-8" />}
                </div>

                {selectedFile ? (
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-white">{selectedFile.name}</div>
                    <div className="text-xs text-slate-400 font-mono">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • {selectedFile.type || "Audio File"}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedFile(null)}
                      className="text-xs text-red-400 hover:underline pt-2 inline-block"
                    >
                      Remove and choose another
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-white">
                      Drag and drop your meeting audio file here, or{" "}
                      <label className="text-emerald-400 hover:underline cursor-pointer">
                        browse files
                        <input
                          type="file"
                          accept="audio/*,video/webm,video/mp4"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                    <p className="text-xs text-slate-500 font-mono">
                      Supported formats: MP3, WAV, M4A, WEBM, FLAC, OGG, AAC (Max 500MB)
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: Live In-Browser Microphone Recording */}
            {activeTab === "record" && (
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center gap-6">
                {/* Waveform Canvas */}
                <div className="w-full h-24 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden relative flex items-center justify-center">
                  <canvas ref={canvasRef} width={600} height={96} className="w-full h-full" />
                  {!isRecording && !recordedBlob && (
                    <div className="absolute text-xs text-slate-500 font-mono flex items-center gap-2">
                      <Mic className="w-4 h-4 text-slate-600" />
                      <span>Ready to capture microphone stream</span>
                    </div>
                  )}
                </div>

                {/* Timer Display */}
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${isRecording ? (isPaused ? "bg-amber-400" : "bg-red-500 animate-ping") : "bg-slate-700"}`}></div>
                  <span className="font-mono text-3xl font-bold tracking-wider text-white">
                    {formatTime(recordingSeconds)}
                  </span>
                  {isRecording && (
                    <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">
                      {isPaused ? "Paused" : "Live Recording"}
                    </span>
                  )}
                </div>

                {/* Recording Controls */}
                <div className="flex items-center gap-4">
                  {!isRecording && !recordedBlob && (
                    <button
                      type="button"
                      onClick={startRecording}
                      className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-red-900/30"
                    >
                      <Mic className="w-4 h-4" />
                      <span>Start Recording</span>
                    </button>
                  )}

                  {isRecording && (
                    <>
                      <button
                        type="button"
                        onClick={togglePauseRecording}
                        className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs flex items-center gap-2 border border-slate-700 transition-all"
                      >
                        {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                        <span>{isPaused ? "Resume" : "Pause"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={stopRecording}
                        className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-white text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
                      >
                        <Square className="w-4 h-4" />
                        <span>Finish & Save Recording</span>
                      </button>
                    </>
                  )}

                  {recordedBlob && !isRecording && (
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={togglePreviewPlayback}
                        className="px-4 py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30 text-xs font-semibold flex items-center gap-2 transition-all"
                      >
                        {previewPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        <span>{previewPlaying ? "Pause Preview" : "Play Recorded Audio"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={discardRecording}
                        className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs font-semibold transition-all border border-slate-700"
                      >
                        Record Again
                      </button>

                      {recordedAudioUrl && (
                        <audio
                          ref={previewAudioRef}
                          src={recordedAudioUrl}
                          onEnded={() => setPreviewPlaying(false)}
                          className="hidden"
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Meeting Metadata Section */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-slate-400 font-mono">
                Meeting Metadata & Attendees
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Title */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-medium text-slate-300">
                    Meeting Title <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Q3 Architecture Review & Security Audit"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Expected Speakers */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                    <span>Expected Speakers / Attendees (Assists WhisperX Diarization)</span>
                    <span className="text-[11px] text-slate-500">Comma-separated</span>
                  </label>
                  <input
                    type="text"
                    value={expectedSpeakers}
                    onChange={(e) => setExpectedSpeakers(e.target.value)}
                    placeholder="Rahul Sharma (Engineering Lead), Sarah Jenkins (Product)"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Language */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Primary Audio Language
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
                  >
                    <option value="en">English (US / UK / Global)</option>
                    <option value="hi">Hindi / Hinglish</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="auto">Auto-Detect Language</option>
                  </select>
                </div>

                {/* Optional Description */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Meeting Context / Agenda (Optional)
                  </label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Context for executive memory graph"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-end gap-4 pt-4">
              <Link
                href="/dashboard"
                className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white text-xs font-semibold transition-all"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={activeTab === "upload" ? !selectedFile : !recordedBlob}
                className="px-6 py-3 rounded-xl bg-[#10B981] hover:bg-[#059669] disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-emerald-950/40 cursor-pointer"
              >
                <Cpu className="w-4 h-4" />
                <span>Execute Stage 1 STT Pipeline</span>
              </button>
            </div>
          </form>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/30 px-6 py-4 text-center text-xs text-slate-500 font-mono">
        RoSense AI • Stage 1 WhisperX Engine • AES-256 Tenant Encryption
      </footer>
    </div>
  );
}
