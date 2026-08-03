"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock, ArrowRight, ShieldCheck, Server } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between p-4 sm:p-8">
      {/* Header Logo */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 overflow-hidden">
            <Image
              src="/logo-R.png"
              alt="RoSense AI Logo"
              width={36}
              height={36}
              className="object-contain p-1"
            />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Ro<span className="text-slate-400 font-medium">Sense</span>
            <span className="text-xs font-bold text-[#10B981] ml-1">AI</span>
          </span>
        </Link>
        <Link
          href="/"
          className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          ← Back to Homepage
        </Link>
      </div>

      {/* Main Login Card */}
      <div className="max-w-md mx-auto w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl emerald-glow-sm my-12">
        <div className="text-center space-y-2 mb-6">
          <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-[#10B981] flex items-center justify-center mx-auto">
            <Lock className="w-5 h-5" />
          </div>
          <h1 className="text-2xl font-bold text-white">Enterprise Log In</h1>
          <p className="text-xs text-slate-400">
            Access your encrypted conversation memory portal or local appliance.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
              Work Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@company.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#10B981]"
              id="login-email-input"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#10B981]"
              id="login-password-input"
            />
          </div>

          <button
            type="button"
            className="w-full py-3.5 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            id="login-submit-btn"
          >
            <span>Sign In to Workspace</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-800 text-center space-y-2">
          <Link
            href="/platform/appliance"
            className="text-xs text-slate-400 hover:text-[#10B981] flex items-center justify-center gap-1 font-mono"
          >
            <Server className="w-3.5 h-3.5" />
            <span>Connect to Private Appliance (`rosense.local`)</span>
          </Link>
        </div>
      </div>

      {/* Footer Safeguarding Notice */}
      <div className="text-center text-xs text-slate-500 flex items-center justify-center gap-2 font-mono">
        <ShieldCheck className="w-4 h-4 text-[#10B981]" />
        <span>AES-256 Encrypted Session • TLS 1.3 Strict</span>
      </div>
    </div>
  );
}
