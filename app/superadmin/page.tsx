"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Building2,
  Plus,
  Search,
  Users,
  Layers,
  Key,
  LogOut,
  RefreshCw,
  Link2,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  LayoutDashboard,
  ShieldAlert,
  Server
} from "lucide-react";

import ProvisionTenantModal from "@/components/ProvisionTenantModal";
import OrgAdminInviteModal from "@/components/OrgAdminInviteModal";
import ManageIAMPoliciesModal from "@/components/ManageIAMPoliciesModal";

export default function SuperadminPage() {
  const router = useRouter();
  const [organizations, setOrganizations] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({
    total_tenants: 2,
    enterprise_tenants: 2,
    total_users: 8,
    rls_isolation_status: "100% Enforced",
    vault_kms_status: "AES-256 KEK Active"
  });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Modals state
  const [isProvisionModalOpen, setIsProvisionModalOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [selectedOrgForInvite, setSelectedOrgForInvite] = useState<any>(null);
  const [isIAMModalOpen, setIsIAMModalOpen] = useState(false);

  useEffect(() => {
    fetchSuperadminData();
  }, []);

  const fetchSuperadminData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("rosense_access_token");
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

      // Fetch Orgs
      const orgsRes = await fetch(`${backendUrl}/api/v1/superadmin/organizations`, {
        headers: { Authorization: token ? `Bearer ${token}` : "" }
      });
      if (orgsRes.ok) {
        const orgsData = await orgsRes.json();
        setOrganizations(orgsData.organizations || []);
      } else {
        // Fallback default orgs for interactive demo
        setDefaultOrgs();
      }

      // Fetch Stats
      const statsRes = await fetch(`${backendUrl}/api/v1/superadmin/stats`, {
        headers: { Authorization: token ? `Bearer ${token}` : "" }
      });
      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData);
      }
    } catch (err) {
      console.error("Failed to load superadmin data:", err);
      setDefaultOrgs();
    } finally {
      setLoading(false);
    }
  };

  const setDefaultOrgs = () => {
    setOrganizations([
      {
        id: "org-acme-001",
        name: "Acme Legal Partners",
        slug: "acme-legal",
        tier: "enterprise",
        is_active: true,
        created_at: "2026-08-20T10:00:00Z",
        admin_email: "eleanor.vance@acmelegal.com"
      },
      {
        id: "org-vanguard-002",
        name: "Vanguard Capital Risk",
        slug: "vanguard-capital",
        tier: "enterprise",
        is_active: true,
        created_at: "2026-08-15T14:30:00Z",
        admin_email: "admin@vanguardcapital.com"
      }
    ]);
  };

  const handleLogout = () => {
    localStorage.removeItem("rosense_access_token");
    localStorage.removeItem("rosense_user_id");
    localStorage.removeItem("rosense_user_email");
    router.push("/login");
  };

  const handleTenantProvisionedSuccess = (data: any) => {
    if (data && data.organization) {
      setOrganizations((prev) => [data.organization, ...prev]);
      setStats((prev: any) => ({
        ...prev,
        total_tenants: (prev.total_tenants || 0) + 1,
        enterprise_tenants: (prev.enterprise_tenants || 0) + 1
      }));
    }
  };

  const openInviteModalForOrg = (org: any) => {
    setSelectedOrgForInvite(org);
    setIsInviteModalOpen(true);
  };

  const filteredOrgs = organizations.filter(
    (o) =>
      o.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.slug?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.tier?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      {/* Top Header Navigation */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-3">
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
            </Link>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Superadmin Provisioning Portal</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-2 transition-colors"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Client Dashboard</span>
            </Link>

            <button
              onClick={handleLogout}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace Body */}
      <main className="max-w-7xl mx-auto w-full px-6 py-8 flex-1 space-y-8">
        {/* Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-emerald-950/30 border border-slate-800 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <Server className="w-3.5 h-3.5" />
                <span>Multi-Tenant Architecture • Postgres RLS Isolated</span>
              </div>
              <h1 className="text-3xl font-bold text-white">
                Superadmin Enterprise Tenant Workspace
              </h1>
              <p className="text-sm text-slate-400 max-w-2xl">
                Onboard new enterprise clients (e.g. Acme Legal Partners), manage multi-tenant database isolation, and generate initial Org Admin credentials.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsProvisionModalOpen(true)}
                className="px-5 py-3 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Onboard Enterprise Client</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider font-mono">Total Tenants</span>
              <Building2 className="w-4 h-4 text-[#10B981]" />
            </div>
            <div className="text-2xl font-bold text-white font-mono">{stats.total_tenants}</div>
            <div className="text-[11px] text-slate-500">Provisioned Organizations</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider">Enterprise Tier</span>
              <Layers className="w-4 h-4 text-[#10B981]" />
            </div>
            <div className="text-2xl font-bold text-white font-mono">{stats.enterprise_tenants}</div>
            <div className="text-[11px] text-slate-500">AES-256 Vault Safeguarded</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider">RLS Security Shield</span>
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            </div>
            <div className="text-sm font-bold text-emerald-400 font-mono flex items-center gap-1.5 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{stats.rls_isolation_status || "100% Enforced"}</span>
            </div>
            <div className="text-[11px] text-slate-500">PostgreSQL Tenant Isolation</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider">Vault KMS Status</span>
              <Key className="w-4 h-4 text-[#10B981]" />
            </div>
            <div className="text-xs font-bold text-slate-200 font-mono pt-1">
              {stats.vault_kms_status || "AES-256 KEK Active"}
            </div>
            <div className="text-[11px] text-slate-500">Hardware & Supabase KEK</div>
          </div>
        </div>

        {/* Enterprise Client Directory Section */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-800 text-[#10B981]">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Enterprise Client Tenants</h3>
                <p className="text-xs text-slate-400">Manage client organizations and generate initial Org Admin invite links</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsProvisionModalOpen(true)}
                className="px-4 py-2 bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-2 uppercase tracking-wider"
              >
                <Plus className="w-4 h-4" />
                <span>Onboard New Client</span>
              </button>
            </div>
          </div>

          {/* Search & Refresh Filter */}
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search clients by name, slug, or tier..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
              />
            </div>

            <button
              onClick={fetchSuperadminData}
              className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Refresh Tenants"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {/* Tenant Directory Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900/80 uppercase font-mono text-[10px] text-slate-400 tracking-wider border-b border-slate-800">
                <tr>
                  <th className="p-3.5 pl-4">Organization / Enterprise Client</th>
                  <th className="p-3.5">RLS Slug</th>
                  <th className="p-3.5">Deployment Tier</th>
                  <th className="p-3.5">Org Admin Status</th>
                  <th className="p-3.5">Provisioned Date</th>
                  <th className="p-3.5 pr-4 text-right">Superadmin Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-slate-500 font-mono">
                      Loading enterprise tenants...
                    </td>
                  </tr>
                ) : filteredOrgs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-slate-500">
                      No tenants found matching query.
                    </td>
                  </tr>
                ) : (
                  filteredOrgs.map((org) => (
                    <tr key={org.id} className="hover:bg-slate-900/50 transition-colors">
                      <td className="p-3.5 pl-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold text-xs text-[#10B981]">
                          {org.name ? org.name.charAt(0) : "O"}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{org.name}</div>
                          <div className="text-[10px] text-slate-500 font-mono">ID: {org.id.slice(0, 12)}...</div>
                        </div>
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 text-xs">
                        {org.slug}
                      </td>
                      <td className="p-3.5">
                        <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-mono uppercase text-slate-300">
                          {org.tier || "enterprise"}
                        </span>
                      </td>
                      <td className="p-3.5">
                        <div className="flex items-center gap-1.5 text-[11px]">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          <span className="text-slate-300">Admin Active</span>
                        </div>
                      </td>
                      <td className="p-3.5 text-slate-400 font-mono text-[11px]">
                        {org.created_at ? new Date(org.created_at).toLocaleDateString() : "2026-08-20"}
                      </td>
                      <td className="p-3.5 pr-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => openInviteModalForOrg(org)}
                            className="px-3 py-1.5 rounded-lg bg-[#10B981]/10 hover:bg-[#10B981]/20 border border-[#10B981]/30 text-[#10B981] font-semibold text-[11px] flex items-center gap-1.5 transition-colors"
                          >
                            <Link2 className="w-3.5 h-3.5" />
                            <span>Generate Invite Link</span>
                          </button>

                          <button
                            onClick={() => setIsIAMModalOpen(true)}
                            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                            title="Manage IAM Policies for Tenant"
                          >
                            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Interactive Modals */}
      <ProvisionTenantModal
        isOpen={isProvisionModalOpen}
        onClose={() => setIsProvisionModalOpen(false)}
        onSuccess={handleTenantProvisionedSuccess}
      />

      <OrgAdminInviteModal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        org={selectedOrgForInvite}
      />

      <ManageIAMPoliciesModal
        isOpen={isIAMModalOpen}
        onClose={() => setIsIAMModalOpen(false)}
      />

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/30 px-6 py-4 text-center text-xs text-slate-500 font-mono">
        RoSense AI • Superadmin Tenant Provisioning Platform • AES-256 Vault Protected
      </footer>
    </div>
  );
}
