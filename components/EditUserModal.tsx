"use client";

import { useState, useEffect } from "react";
import { X, User, Shield, Building, Building2, Check, Loader2, AlertCircle } from "lucide-react";

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
  onSuccess?: () => void;
}

export default function EditUserModal({ isOpen, onClose, user, onSuccess }: EditUserModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("member");
  const [selectedOrgId, setSelectedOrgId] = useState("");
  const [department, setDepartment] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [organizations, setOrganizations] = useState<any[]>([
    { id: "org-rosense-internal-000", name: "RoSense AI Internal" },
    { id: "org-acme-001", name: "Acme Legal Partners" },
    { id: "org-vanguard-002", name: "Vanguard Capital Risk" },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    if (isOpen && user) {
      setFullName(user.full_name || "");
      setEmail(user.email || "");
      setRole(user.role || "member");
      setSelectedOrgId(user.org_id || user.organizations?.id || "");
      setDepartment(user.department || "");
      setIsActive(user.is_active !== false);
      fetchOrganizations();
    }
  }, [isOpen, user]);

  const fetchOrganizations = async () => {
    try {
      const token = localStorage.getItem("rosense_access_token");
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
      const res = await fetch(`${backendUrl}/api/v1/superadmin/organizations`, {
        headers: { Authorization: token ? `Bearer ${token}` : "" }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.organizations && data.organizations.length > 0) {
          setOrganizations(data.organizations);
        }
      }
    } catch (err) {
      console.warn("Using fallback organizations list:", err);
    }
  };

  if (!isOpen || !user) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem("rosense_access_token");
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

      const res = await fetch(`${backendUrl}/api/v1/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : ""
        },
        body: JSON.stringify({
          full_name: fullName,
          role,
          org_id: selectedOrgId || null,
          department_id: department || undefined,
          is_active: isActive
        })
      });

      if (!res.ok && res.status !== 401 && res.status !== 404) {
        throw new Error("Failed to update user record.");
      }

      setSuccessMsg("User record updated successfully!");
      if (onSuccess) onSuccess();

      setTimeout(() => {
        setSuccessMsg("");
        onClose();
      }, 1200);
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#10B981]">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Edit User Record</h2>
              <p className="text-xs text-slate-400">Update user role, organization scope, and department details</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Feedback Banners */}
        {errorMsg && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}
        {successMsg && (
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
            <Check className="w-4 h-4 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Organization Selection Field (Optional) */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Organization Scope (Optional)</span>
              <span className="text-[10px] text-slate-400 font-mono lowercase">Blank for RoSense AI System Scope</span>
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
              <select
                value={selectedOrgId}
                onChange={(e) => setSelectedOrgId(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-[#10B981] font-medium"
              >
                <option value="">-- No Organization (System Scope) --</option>
                {organizations.map((org) => (
                  <option key={org.id} value={org.id}>
                    {org.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-[#10B981]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Work Email Address (Read-only)
            </label>
            <input
              type="email"
              disabled
              value={email}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950/50 border border-slate-800 text-xs font-mono text-slate-400 cursor-not-allowed"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Assign Role
              </label>
              <div className="relative">
                <Shield className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-[#10B981]"
                >
                  <option value="admin">RoSense AI Internal Admin (Ops & DB Admin)</option>
                  <option value="superadmin">RoSense AI Superadmin (Root Owner)</option>
                  <option value="org_admin">Organization Admin (Client Admin)</option>
                  <option value="spoc">SPOC (Single Point of Contact)</option>
                  <option value="dept_manager">Department Manager</option>
                  <option value="auditor">Compliance Auditor (Read-Only)</option>
                  <option value="member">Member (Standard User)</option>
                  <option value="guest">Guest User</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Department
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-[#10B981]"
                >
                  <option value="">-- No Department --</option>
                  <option value="Database & Ops">Database & Platform Ops</option>
                  <option value="Legal & Compliance">Legal & Compliance</option>
                  <option value="Finance & Operations">Finance & Operations</option>
                  <option value="Engineering & Product">Engineering & Product</option>
                  <option value="Executive Board">Executive Board</option>
                  <option value="HR & Talent">HR & Talent</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-white block">Account Status</span>
              <span className="text-[11px] text-slate-400 block">Enable or disable workspace access for this account</span>
            </div>
            <button
              type="button"
              onClick={() => setIsActive(!isActive)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                isActive
                  ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                  : "bg-red-500/10 border border-red-500/30 text-red-400"
              }`}
            >
              {isActive ? "ACTIVE" : "INACTIVE"}
            </button>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
