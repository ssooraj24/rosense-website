import PersonaSolutionLayout from "@/components/PersonaSolutionLayout";
import { Users, Target, ShieldAlert, Eye, Layers } from "lucide-react";

export const metadata = {
  title: "Executive Leadership Solution — RoSense AI",
  description:
    "Empower CEOs, COOs, and Board Directors to eliminate strategic context loss, track organizational decisions, and accelerate execution velocity.",
};

export default function ExecutiveLeadershipPage() {
  return (
    <PersonaSolutionLayout
      badge="C-Suite Leadership"
      roleTitle="Executive Leadership"
      heroHeadline="Every Strategic Decision. Never Forgotten."
      heroSubheadline="Executives lose strategic visibility when crucial decisions stay trapped in hours of meetings. RoSense AI transforms boardroom and leadership discussions into structured decision matrices, board briefs, and cross-team alignment."
      heroIcon={Users}
      painPointsTitle="Why Executive Meetings Lose Strategic Momentum"
      painPointsSubtitle="Traditional minutes fail when processing multi-hour strategic discussions across executive leadership."
      painPoints={[
        {
          title: "Executive Context Decay",
          description: "Strategic directives spoken in Q1 executive retreats vanish into unread meeting notes by Q3.",
          icon: Eye,
        },
        {
          title: "Scattered Decisions",
          description: "Action items are spread across Zoom calls, Slack threads, and unindexed slide decks.",
          icon: Layers,
        },
        {
          title: "Follow-up Disappearance",
          description: "Executive commitments lack automated tracking, causing strategic initiatives to stall.",
          icon: Target,
        },
        {
          title: "Board Brief Friction",
          description: "Preparing board briefings requires days of manual synthesis and cross-checking status with department heads.",
          icon: ShieldAlert,
        },
      ]}
      workflowSteps={[
        { step: "1", title: "Executive Intake", description: "Record executive committee & board meeting audio automatically." },
        { step: "2", title: "Decision Extraction", description: "Mamba-3 SSM isolates strategic decisions, risks, and commitment owners." },
        { step: "3", title: "Board Brief Generation", description: "Generate concise, board-ready executive summaries in seconds." },
        { step: "4", title: "Cross-Team Sync", description: "Automate task creation across Jira, Salesforce, and enterprise tools." },
        { step: "5", title: "Org Memory RAG", description: "Query past executive decisions via sub-second natural language search." },
      ]}
      capturedItemsTitle="What RoSense Extracts for Executive Leadership"
      capturedItems={[
        { title: "Strategic Directives", detail: "Formal commitments made by C-suite executives and board members." },
        { title: "Risk Assessments", detail: "Enterprise risks identified during strategic planning discussions." },
        { title: "Budget Approvals", detail: "Capital allocation and budget commitment agreements." },
        { title: "Cross-Dept Dependencies", detail: "Operational interdependencies between sales, product, and ops." },
        { title: "Executive Consensus", detail: "Points of agreement and unresolved agenda items." },
        { title: "KPIS & Targets", detail: "Quarterly and annual strategic benchmark commitments." },
        { title: "1-Click Audio Proof", detail: "Direct 20-second decrypted audio clips verifying key decisions." },
        { title: "Action Item Ownership", detail: "Explicit assignment of strategic deliverables to VP owners." },
      ]}
      outcomesTitle="Measurable Business Outcomes for Executive Leaders"
      outcomes={[
        { metric: "3.5x", label: "Faster Decision Velocity", description: "Accelerate cross-functional strategic decision execution across departments." },
        { metric: "100%", label: "Execution Visibility", description: "Real-time visibility into executive commitments and deliverable milestones." },
        { metric: "90%", label: "Less Board Prep Time", description: "Generate board-ready briefs and executive summaries automatically." },
      ]}
      integrations={["Board Portals", "Slack", "Microsoft Teams", "Jira", "Salesforce", "Notion", "Google Workspace"]}
      faqs={[
        {
          question: "Is boardroom audio kept strictly confidential?",
          answer: "Yes. RoSense Box allows 100% air-gapped on-premise execution with zero cloud transmission and encrypted RAM processing.",
        },
        {
          question: "Can executives search across multi-year board meeting history?",
          answer: "Yes. RoSense Organizational Memory uses RAG architecture to answer questions like 'What were our Q2 2024 expansion commitments?' instantly.",
        },
        {
          question: "How does RoSense differentiate speaker roles in executive meetings?",
          answer: "Pyannote 3.1 neural speaker diarization accurately distinguishes between CEO, CFO, Board Members, and guest presenters.",
        },
      ]}
      ctaHeadline="Transform Your Executive Decision Tracking Today"
      ctaSubheadline="Book a private demonstration of RoSense AI configured for C-suite executive leadership."
    />
  );
}
