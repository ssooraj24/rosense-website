import PersonaSolutionLayout from "@/components/PersonaSolutionLayout";
import { Briefcase, Clock, Calendar, CheckSquare, Layers } from "lucide-react";

export const metadata = {
  title: "Strategy & PMO Solution — RoSense AI",
  description:
    "Transform 18+ hour strategic offsites, workshops, and program steering committees into structured milestone matrices and decision ownership.",
};

export default function StrategyPMOPage() {
  return (
    <PersonaSolutionLayout
      badge="Strategy & PMO"
      roleTitle="Strategy & PMO Leaders"
      heroHeadline="Turn Multi-Day Strategic Retreats into Flawless Execution"
      heroSubheadline="Multi-day strategy offsites generate hundreds of verbal commitments that get buried in endless recordings. RoSense AI turns workshop audio into an executive decision matrix with clear owners, timelines, and action items."
      heroIcon={Briefcase}
      painPointsTitle="The High Cost of Unstructured Strategy Workshops"
      painPointsSubtitle="Program management offices waste hundreds of hours manually reviewing offsite recordings and whiteboard photos."
      painPoints={[
        {
          title: "18+ Hour Audio Backlog",
          description: "Multi-day strategy offsites produce massive audio files that no program manager has time to manually summarize.",
          icon: Clock,
        },
        {
          title: "Vague Deliverable Owners",
          description: "Ideas spoken during brainstorming sessions lack explicit ownership and clear completion deadlines.",
          icon: Calendar,
        },
        {
          title: "Milestone Slippage",
          description: "Without automated tracking, key strategic initiatives slip past target milestone target dates.",
          icon: CheckSquare,
        },
        {
          title: "Cross-Project Friction",
          description: "Inter-project dependencies discussed in breakout sessions fail to be communicated across PMO teams.",
          icon: Layers,
        },
      ]}
      workflowSteps={[
        { step: "1", title: "Offsite Capture", description: "Record full multi-day workshop audio sessions via room mic or stream." },
        { step: "2", title: "Long-Context Processing", description: "Mamba-3 SSM processes 18+ continuous hours without memory degradation." },
        { step: "3", title: "Milestone Extraction", description: "Automatically identify strategic goals, owners, risks, and deadlines." },
        { step: "4", title: "PM Tool Sync", description: "Push deliverables into Asana, Jira, Monday.com, or Microsoft Project." },
        { step: "5", title: "Executive Dashboard", description: "Provide leadership with an interactive offsite synthesis brief." },
      ]}
      capturedItemsTitle="What RoSense Captures for Strategy & PMO"
      capturedItems={[
        { title: "Strategic Priorities", detail: "Core strategic pillars agreed upon during workshop retreats." },
        { title: "Project Milestones", detail: "Target dates and delivery phases for major corporate initiatives." },
        { title: "Resource Allocations", detail: "Headcount and budget allocations discussed during sessions." },
        { title: "Risk & Blockers", detail: "Dependencies and potential obstacles highlighted by team leads." },
        { title: "Breakout Outcomes", detail: "Key conclusions from multi-room parallel brainstorming sessions." },
        { title: "OKRs & Target Metrics", detail: "Measurable key results assigned to department leaders." },
        { title: "Verbal Commitments", detail: "Specific quotes verifying who agreed to deliver which item." },
        { title: "PM Tool Payload", detail: "Structured JSON payload ready for direct PMO software intake." },
      ]}
      outcomesTitle="Measurable Results for Strategy & PMO Teams"
      outcomes={[
        { metric: "100%", label: "Zero Lost Commitments", description: "Every commitment made during strategy retreats is recorded and tracked." },
        { metric: "90%", label: "Faster Workshop Synthesis", description: "Reduce post-offsite report generation time from weeks to minutes." },
        { metric: "0", label: "Missed Dependencies", description: "Cross-functional project dependencies are automatically mapped." },
      ]}
      integrations={["Jira", "Asana", "Monday.com", "MS Project", "Confluence", "Notion", "Slack"]}
      faqs={[
        {
          question: "Can RoSense process multi-day offsite audio recorded across multiple room microphones?",
          answer: "Yes. RoSense handles long-duration audio files up to 24+ continuous hours and merges multi-microphone streams.",
        },
        {
          question: "How are tasks pushed into our PMO management software?",
          answer: "RoSense generates structured task payloads with titles, assignees, due dates, and links directly into Jira, Asana, or Monday.",
        },
        {
          question: "Can facilitators use RoSense during live offsite sessions?",
          answer: "Yes. Facilitators receive real-time interim topic summaries at the end of each session module.",
        },
      ]}
      ctaHeadline="Accelerate Your Strategy Execution Today"
      ctaSubheadline="Book a demo to see how RoSense AI synthesizes multi-day offsites into actionable project plans."
    />
  );
}
