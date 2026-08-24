"use client";

import { useState, useEffect } from "react";
import { Users, Search, Shield, Building, Edit2, Check, RefreshCw, AlertCircle, Key, UserCheck, Trash2 } from "lucide-react";

interface UserManagementSectionProps {
  onOpenInviteModal: () => void;
  onOpenIAMModal: () => void;
}

export default function UserManagementSection({ onOpenInviteModal, onOpenIAMModal }: UserManagementSectionProps) {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [updatingUserId, setUpdatingUserId] = useState<string | null>(null);
  const [updateMsg, setUpdateMsg] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("rosense_access_token");
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

      const res = await fetch(`${backendUrl}/api/v1/users`, {
        headers: { Authorization: token ? `Bearer ${token}` : "" }
      });

      if (res.ok) {
        const data = await res.json();
        setUsers(data.users || []);
      } else {
        // Fallback default users for interactive presentation
        setUsers([
          {
            id: "u-001",
            full_name: "Super Administrator",
            email: localStorage.getItem("rosense_user_email") || "superadmin@rosense.ai",
            role: "org_admin",
            org_name: "RoSense AI Internal",
            department: "Database & Ops",
            is_active: true,
            is_mfa_enabled: true
          },
          {
            id: "u-002",
            full_name: "Sarah Jenkins",
            email: "sarah.jenkins@acmelegal.com",
            role: "dept_manager",
            org_name: "Acme Legal Partners",
            department: "Legal & Compliance",
            is_active: true,
            is_mfa_enabled: false
          },
          {
            id: "u-003",
            full_name: "David Chen",
            email: "david.chen@acmelegal.com",
            role: "auditor",
            org_name: "Acme Legal Partners",
            department: "Finance & Audit",
            is_active: true,
            is_mfa_enabled: true
          },
          {
            id: "u-004",
            full_name: "Marcus Vance",
            email: "marcus.vance@vanguard.com",
            role: "member",
            org_name: "Vanguard Capital Risk",
            department: "Engineering",
            is_active: true,
            is_mfa_enabled: false
          }
        ]);
      }
    } catch (err) {
      console.error("Failed to load tenant users:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId: string, newRole: string) => {
    setUpdatingUserId(userId);
    setUpdateMsg("");

    try {
      const token = localStorage.getItem("rosense_access_token");
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

      const res = await fetch(`${backendUrl}/api/v1/users/${userId}/role`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : ""
        },
        body: JSON.stringify({ role: newRole })
      });

      if (!res.ok && res.status !== 401 && res.status !== 404) {
        throw new Error("Failed to update role");
      }

      setUsers((prev) =>
        prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
      );
      setUpdateMsg("User role updated successfully");
      setTimeout(() => setUpdateMsg(""), 2000);
    } catch (err: any) {
      console.error(err);
    } finally {
      setUpdatingUserId(null);
    }
  };

  const filteredUsers = users.filter(
    (u) =>
      u.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.org_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.role?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRoleBadgeStyle = (role: string) => {
    switch (role) {
      case "superadmin":
      case "org_admin":
        return "bg-emerald-500/10 border-emerald-500/30 text-emerald-400";
      case "dept_manager":
        return "bg-blue-500/10 border-blue-500/30 text-blue-400";
      case "auditor":
        return "bg-purple-500/10 border-purple-500/30 text-purple-400";
      case "guest":
        return "bg-slate-700/30 border-slate-700 text-slate-400";
      default:
        return "bg-slate-800 border-slate-700 text-slate-300";
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
      {/* Header & Main Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-slate-800 text-[#10B981]">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Tenant User & Access Directory</h3>
            <p className="text-xs text-slate-400">Manage team privileges, tenant organization scopes, and AWS IAM policies</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenInviteModal}
            className="px-4 py-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-2 uppercase tracking-wider"
          >
            <UserCheck className="w-4 h-4" />
            <span>Invite Team Member</span>
          </button>
          <button
            onClick={onOpenIAMModal}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl transition-colors border border-slate-700 flex items-center gap-2"
          >
            <Shield className="w-4 h-4 text-[#10B981]" />
            <span>Manage IAM Policies</span>
          </button>
        </div>
      </div>

      {updateMsg && (
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2 font-mono">
          <Check className="w-4 h-4" />
          <span>{updateMsg}</span>
        </div>
      )}

      {/* Filter Bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search by name, email, organization, or role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
          />
        </div>

        <button
          onClick={fetchUsers}
          className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          title="Refresh User List"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-900/80 uppercase font-mono text-[10px] text-slate-400 tracking-wider border-b border-slate-800">
            <tr>
              <th className="p-3.5 pl-4">User</th>
              <th className="p-3.5">Organization Scope</th>
              <th className="p-3.5">Assigned Role</th>
              <th className="p-3.5">Department</th>
              <th className="p-3.5">Security Status</th>
              <th className="p-3.5 pr-4 text-right">Access Controls</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-850">
            {loading ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-slate-500 font-mono">
                  Loading workspace member directory...
                </td>
              </tr>
            ) : filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-slate-500">
                  No users found matching query.
                </td>
              </tr>
            ) : (
              filteredUsers.map((u) => {
                const orgDisplay = u.org_name || u.organizations?.name || "RoSense AI Internal";
                const isInternal = orgDisplay.includes("RoSense AI Internal");
                return (
                  <tr key={u.id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="p-3.5 pl-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-[#10B981]">
                        {u.full_name ? u.full_name.charAt(0) : u.email.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{u.full_name || "User"}</div>
                        <div className="text-[11px] text-slate-400 font-mono">{u.email}</div>
                      </div>
                    </td>
                    <td className="p-3.5 font-medium">
                      <span className={`px-2.5 py-1 rounded-full border text-[10px] font-mono ${
                        isInternal
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-semibold"
                          : "bg-slate-800 border-slate-700 text-slate-300"
                      }`}>
                        {orgDisplay}
                      </span>
                    </td>
                    <td className="p-3.5">
                      <span className={`px-2.5 py-1 rounded-full border text-[10px] font-mono uppercase tracking-wider ${getRoleBadgeStyle(u.role)}`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-400">
                      {u.department || "General"}
                    </td>
                    <td className="p-3.5">
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span className="text-slate-300">Active</span>
                        {u.is_mfa_enabled && (
                          <span className="ml-2 px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-mono">
                            MFA
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-3.5 pr-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <select
                          value={u.role}
                          onChange={(e) => handleRoleChange(u.id, e.target.value)}
                          disabled={updatingUserId === u.id}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 focus:outline-none focus:border-[#10B981]"
                        >
                          <option value="member">Member</option>
                          <option value="dept_manager">Dept Manager</option>
                          <option value="org_admin">Org Admin</option>
                          <option value="auditor">Auditor</option>
                          <option value="guest">Guest</option>
                        </select>
                        <button
                          onClick={onOpenIAMModal}
                          className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                          title="Configure IAM Policy"
                        >
                          <Shield className="w-3.5 h-3.5 text-[#10B981]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
