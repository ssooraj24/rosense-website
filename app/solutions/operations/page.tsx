import PersonaSolutionLayout from "@/components/PersonaSolutionLayout";
import { BarChart3, Workflow, AlertCircle, FileCheck, Users } from "lucide-react";

export const metadata = {
  title: "Operations Leaders Solution — RoSense AI",
  description:
    "Eliminate operational friction, extract SOPs automatically, and ensure seamless cross-department task accountability with RoSense AI.",
};

export default function OperationsPage() {
  return (
    <PersonaSolutionLayout
      badge="Operations Leaders"
      roleTitle="Operations Leaders"
      heroHeadline="Eliminate Operational Friction Across Department Silos"
      heroSubheadline="Operational bottlenecks happen when process decisions stay verbal. RoSense AI automatically extracts Standard Operating Procedures (SOPs), cross-department handoffs, and operational risk flags from daily meetings."
      heroIcon={BarChart3}
      painPointsTitle="The Daily Challenges of Enterprise Operations"
      painPointsSubtitle="Operations directors spend hours tracking down missing status updates and resolving cross-team misalignment."
      painPoints={[
        {
          title: "Undocumented SOPs",
          description: "Process changes agreed upon in ops sync meetings are rarely documented into official SOP manuals.",
          icon: Workflow,
        },
        {
          title: "Handoff Gaps",
          description: "Deliverables passed between sales, fulfillment, and customer ops get dropped due to missing context.",
          icon: Users,
        },
        {
          title: "Unidentified Bottlenecks",
          description: "Operational delays build up unnoticed until project deadlines are already breached.",
          icon: AlertCircle,
        },
        {
          title: "Manual Status Reporting",
          description: "Ops teams waste hours collecting weekly progress updates from department leads.",
          icon: FileCheck,
        },
      ]}
      workflowSteps={[
        { step: "1", title: "Meeting Intake", description: "Capture daily operational syncs, reviews, and cross-team meetings." },
        { step: "2", title: "Process Extraction", description: "Identify workflow updates, operational rules, and owner assignments." },
        { step: "3", title: "Auto-SOP Generation", description: "Generate structured Standard Operating Procedure documentation." },
        { step: "4", title: "System Automation", description: "Trigger automated webhooks and task assignments across ops tools." },
        { step: "5", title: "Ops Knowledge RAG", description: "Search historical operational decisions and process changes instantly." },
      ]}
      capturedItemsTitle="What RoSense Extracts for Operations"
      capturedItems={[
        { title: "Standard Operating Procedures", detail: "Step-by-step process guidelines spoken during operational syncs." },
        { title: "Task Assignments", detail: "Specific action items assigned to operational team members." },
        { title: "Process Bottlenecks", detail: "Explicit mention of resource constraints, delays, or system bugs." },
        { title: "Cross-Team Handoffs", detail: "SLA agreements between operations, logistics, and customer teams." },
        { title: "Operational Metrics", detail: "Target KPIs, output quotas, and error rate benchmarks discussed." },
        { title: "Vendor Agreements", detail: "Operational commitments made with external service providers." },
        { title: "Escalation Triggers", detail: "Conditions under which operational issues must be escalated." },
        { title: "Audit Verification Clips", detail: "1-click decrypted audio proof for operational compliance." },
      ]}
      outcomesTitle="Measurable Gains for Operations Directors"
      outcomes={[
        { metric: "40%", label: "Less Admin Overhead", description: "Eliminate manual meeting note taking and status report gathering." },
        { metric: "100%", label: "SOP Documentation Rate", description: "Automatically capture and publish every process modification." },
        { metric: "2x", label: "Faster Handoff Speed", description: "Streamline cross-department deliverables with complete audio context." },
      ]}
      integrations={["Slack", "Zapier", "Jira", "ServiceNow", "ClickUp", "Microsoft Teams", "Notion"]}
      faqs={[
        {
          question: "How does RoSense generate Standard Operating Procedures?",
          answer: "RoSense analyzes operational meeting audio, extracts step-by-step instructions, and formats them into structured SOP templates.",
        },
        {
          question: "Can RoSense integrate with custom enterprise ERP or ops tools?",
          answer: "Yes. RoSense provides REST APIs and webhook integrations for custom enterprise operational platforms.",
        },
        {
          question: "Does RoSense help monitor cross-department SLAs?",
          answer: "Yes. RoSense tracks commitments made between departments and alerts ops leads when deliverables are at risk.",
        },
      ]}
      ctaHeadline="Streamline Enterprise Operations Today"
      ctaSubheadline="Book a demo to see how RoSense AI turns daily operational syncs into automated SOPs and task execution."
    />
  );
}
