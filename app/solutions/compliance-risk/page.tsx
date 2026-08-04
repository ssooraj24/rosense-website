import PersonaSolutionLayout from "@/components/PersonaSolutionLayout";
import { Landmark, ShieldCheck, Lock, FileText, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Compliance & Risk Solution — RoSense AI",
  description:
    "Ensure DPDP compliance, zero-leakage air-gapped transcript vaulting, and automated regulatory risk detection for Legal and Compliance officers.",
};

export default function ComplianceRiskPage() {
  return (
    <PersonaSolutionLayout
      badge="Compliance & Risk"
      roleTitle="Compliance & Risk Officers"
      heroHeadline="Continuous Governance & Zero-Leakage Audit Readiness"
      heroSubheadline="Unrecorded verbal commitments and unverified meeting minutes create massive regulatory exposure. RoSense AI provides 100% air-gapped transcript vaulting, DPDP audit trails, and automated compliance risk detection."
      heroIcon={Landmark}
      painPointsTitle="Regulatory Vulnerabilities in Corporate Governance"
      painPointsSubtitle="Chief Risk Officers and Legal Counsel face growing compliance challenges with unmonitored meeting dialogue."
      painPoints={[
        {
          title: "Regulatory Exposure",
          description: "Verbal commitments regarding data handling or financial terms lack verifiable audit logs.",
          icon: AlertTriangle,
        },
        {
          title: "Cloud Data Leakage",
          description: "Third-party cloud transcription tools risk exposing sensitive IP or PII across external servers.",
          icon: Lock,
        },
        {
          title: "DPDP & Privacy Non-Compliance",
          description: "Failure to log data processing consent and retention schedules violates DPDP and SOC2 standards.",
          icon: ShieldCheck,
        },
        {
          title: "Laborious Audit Preparation",
          description: "Auditors require months to inspect compliance evidence trapped in unindexed audio files.",
          icon: FileText,
        },
      ]}
      workflowSteps={[
        { step: "1", title: "Air-Gapped Ingestion", description: "Audio is captured directly on RoSense Box hardware without cloud leakage." },
        { step: "2", title: "Encrypted RAM Processing", description: "Audio is decrypted, analyzed, and wiped from RAM immediately after extraction." },
        { step: "3", title: "Compliance Tagging", description: "Identify regulatory statements, consent acknowledgments, and risk flags." },
        { step: "4", title: "Crypto-Shredded Storage", description: "Sensitive raw audio is cryptographically shredded according to policy." },
        { step: "5", title: "Audit Log Export", description: "Generate immutable compliance audit trails and DPDP verification reports." },
      ]}
      capturedItemsTitle="What RoSense Captures for Compliance & Risk"
      capturedItems={[
        { title: "Regulatory Risk Statements", detail: "Automated identification of potential compliance or legal risk mentions." },
        { title: "Verbal Consent Logs", detail: "Time-stamped proof of explicit consent during client or employee calls." },
        { title: "DPDP Compliance Audit", detail: "Complete record of data handling discussions and retention agreements." },
        { title: "Contractual Obligations", detail: "Verification of verbal promises made during vendor or partner negotiations." },
        { title: "Security Disclosures", detail: "Logging of security incident debriefs and vulnerability discussions." },
        { title: "Role-Based Access Logs", detail: "Cryptographic verification of who accessed specific transcript records." },
        { title: "Crypto-Shredding Certificates", detail: "Verified logs confirming raw audio deletion according to retention schedules." },
        { title: "Immutable Audit Trails", detail: "Tamper-evident logs ready for external compliance auditors." },
      ]}
      outcomesTitle="Measurable Risk Reduction for Compliance Leaders"
      outcomes={[
        { metric: "0", label: "Cloud Network Leakage", description: "100% on-premise air-gapped hardware deployment with zero external network connectivity." },
        { metric: "100%", label: "DPDP & SOC2 Compliance", description: "Full alignment with data protection acts and enterprise governance benchmarks." },
        { metric: "1-Click", label: "Audit Verification", description: "Instantly retrieve decrypted audio clips verifying compliance commitments." },
      ]}
      integrations={["RoSense Box Appliance", "SIEM Tools", "Splunk", "Azure Sentinel", "ServiceNow Compliance", "Active Directory / SSO"]}
      faqs={[
        {
          question: "How does RoSense ensure data privacy under the DPDP Act?",
          answer: "RoSense runs entirely within your perimeter via RoSense Box hardware. No audio or transcript data ever leaves your private network.",
        },
        {
          question: "What is crypto-shredding in RoSense AI?",
          answer: "Crypto-shredding destroys the encryption keys holding raw audio once structured extraction completes, rendering raw files permanently unrecoverable.",
        },
        {
          question: "Can compliance teams restrict access to sensitive boardroom transcripts?",
          answer: "Yes. Fine-grained Role-Based Access Control (RBAC) ensures only authorized legal and compliance personnel view restricted files.",
        },
      ]}
      ctaHeadline="Secure Your Corporate Governance & Audit Readiness"
      ctaSubheadline="Schedule a technical briefing on RoSense Box air-gapped compliance architecture with our security engineers."
    />
  );
}
