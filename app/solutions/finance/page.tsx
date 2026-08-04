import PersonaSolutionLayout from "@/components/PersonaSolutionLayout";
import { DollarSign, ShieldCheck, FileSpreadsheet, CheckSquare, AlertOctagon } from "lucide-react";

export const metadata = {
  title: "Finance Solution — RoSense AI",
  description:
    "Audit-ready financial commitments, budget governance, and vendor contract obligation tracking with RoSense AI.",
};

export default function FinancePage() {
  return (
    <PersonaSolutionLayout
      badge="Finance & Control"
      roleTitle="CFOs, Controllers & Procurement"
      heroHeadline="Audit-Ready Financial Commitments & Budget Governance"
      heroSubheadline="Verbal budget promises and unwritten vendor agreements lead to fiscal leakage and audit friction. RoSense AI logs every financial commitment, pricing term, and vendor obligation into an audit-ready fiscal repository."
      heroIcon={DollarSign}
      painPointsTitle="The Risk of Untracked Financial Dialogue"
      painPointsSubtitle="Finance leaders face budget surprises when verbal commitments made in executive or vendor meetings go unrecorded."
      painPoints={[
        {
          title: "Budget Leakage",
          description: "Department heads make unrecorded spending commitments during project kickoff meetings.",
          icon: AlertOctagon,
        },
        {
          title: "Vendor Term Variance",
          description: "Pricing discounts and payment terms promised by vendors on negotiation calls differ from final contracts.",
          icon: FileSpreadsheet,
        },
        {
          title: "Audit Paperwork Friction",
          description: "Financial auditors require proof of approval authorization for capital expenditure decisions.",
          icon: ShieldCheck,
        },
        {
          title: "Unverified Contract Promises",
          description: "Software license expansion promises lack written documentation, creating billing disputes.",
          icon: CheckSquare,
        },
      ]}
      workflowSteps={[
        { step: "1", title: "Meeting Intake", description: "Record vendor negotiations, budget reviews, and finance committee calls." },
        { step: "2", title: "Fiscal Term Extraction", description: "Isolate dollar figures, payment schedules, discount terms, and cap commitments." },
        { step: "3", title: "Verification Logging", description: "Log approvals against organizational spending limits and authority matrices." },
        { step: "4", title: "ERP & Procurement Sync", description: "Export structured financial logs to SAP, NetSuite, or QuickBooks." },
        { step: "5", title: "Audit Log Retrieval", description: "Search financial commitment history with 1-click audio verification proof." },
      ]}
      capturedItemsTitle="What RoSense Extracts for Finance Teams"
      capturedItems={[
        { title: "Verbal Budget Approvals", detail: "Explicit approval statements made by CFOs or budget owners." },
        { title: "Vendor Pricing Terms", detail: "Discounts, rebate terms, and unit pricing promised during sales negotiations." },
        { title: "CapEx & OpEx Allocations", detail: "Capital expenditure vs operating expense classification discussions." },
        { title: "Payment Milestones", detail: "Agreed-upon payment dates and deliverable acceptance criteria." },
        { title: "Contract Penalty Clauses", detail: "Discussion of SLA penalty terms and refund conditions." },
        { title: "Fiscal Year Commitments", detail: "Multi-year contract commitments and escalation caps." },
        { title: "1-Click Audio Proof", detail: "Direct 20-second decrypted audio clips verifying financial statements." },
        { title: "Audit Verification Trail", detail: "Immutable time-stamped log ready for external financial auditors." },
      ]}
      outcomesTitle="Measurable Fiscal Control for Finance Leaders"
      outcomes={[
        { metric: "100%", label: "Verifiable Budget Promises", description: "Ensure every spending commitment has verified audio authorization." },
        { metric: "0", label: "Contract Leakage", description: "Eliminate discrepancies between vendor verbal promises and final invoices." },
        { metric: "80%", label: "Faster Audit Verification", description: "Provide external financial auditors with instant verifiable compliance records." },
      ]}
      integrations={["NetSuite", "SAP", "QuickBooks", "Workday", "Coupa", "Excel / CSV", "Slack"]}
      faqs={[
        {
          question: "Can RoSense flag spending approvals that exceed a manager's authorization limit?",
          answer: "Yes. RoSense evaluates extracted dollar figures against your corporate approval matrix and alerts procurement.",
        },
        {
          question: "How does RoSense assist during annual financial audits?",
          answer: "RoSense provides auditors with time-stamped, searchable records linking financial commitments directly to decrypted audio proof.",
        },
        {
          question: "Is financial data processed securely on-premise?",
          answer: "Yes. RoSense Box deploys air-gapped on your private network so financial discussions never touch cloud servers.",
        },
      ]}
      ctaHeadline="Enforce Strict Fiscal Governance & Budget Control"
      ctaSubheadline="Book a demo to see how RoSense AI turns financial negotiations into audit-ready commitment records."
    />
  );
}
