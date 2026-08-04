import PersonaSolutionLayout from "@/components/PersonaSolutionLayout";
import { UserCheck, HeartHandshake, AlertCircle, RefreshCcw, Smile } from "lucide-react";

export const metadata = {
  title: "Customer Success Solution — RoSense AI",
  description:
    "Prevent churn, capture client feature requests, and automate Sales-to-CS handoffs with RoSense AI.",
};

export default function CustomerSuccessPage() {
  return (
    <PersonaSolutionLayout
      badge="Customer Success"
      roleTitle="Customer Success Leaders"
      heroHeadline="Prevent Churn & Capture Every Client Commitment"
      heroSubheadline="Customer churn happens when client promises made during sales onboarding are forgotten. RoSense AI monitors account health calls, flags renewal risks, extracts feature requests, and ensures flawless handoffs."
      heroIcon={UserCheck}
      painPointsTitle="Why Enterprise Account Retention Fails"
      painPointsSubtitle="CS Directors struggle when account history is fragmented across sales handoff calls and unindexed QBRs."
      painPoints={[
        {
          title: "Sales-to-CS Handoff Loss",
          description: "Promises made by sales reps during contract signing fail to reach assigned CSMs.",
          icon: HeartHandshake,
        },
        {
          title: "Hidden Churn Signals",
          description: "Subtle customer frustration voiced in quarterly reviews goes unflagged until renewal time.",
          icon: AlertCircle,
        },
        {
          title: "Untracked Feature Requests",
          description: "Client feedback and feature requests discussed in syncs are lost before reaching product teams.",
          icon: RefreshCcw,
        },
        {
          title: "QBR Prep Burden",
          description: "CSMs spend days reviewing 6 months of client meeting history to assemble executive QBR decks.",
          icon: Smile,
        },
      ]}
      workflowSteps={[
        { step: "1", title: "Client Call Intake", description: "Record onboarding calls, QBRs, and weekly customer syncs." },
        { step: "2", title: "Sentiment & Risk Analysis", description: "Detect customer dissatisfaction, renewal risks, and health indicators." },
        { step: "3", title: "Feature Extraction", description: "Extract client feature requests and sync directly to Product management tools." },
        { step: "4", title: "CSM Task Automation", description: "Generate follow-up action items in Gainsight, Zendesk, or HubSpot." },
        { step: "5", title: "Account History RAG", description: "Instantly search complete account conversation history across years." },
      ]}
      capturedItemsTitle="What RoSense Captures for Customer Success"
      capturedItems={[
        { title: "Renewal Risk Flags", detail: "Automated alert when a customer expresses budget or platform dissatisfaction." },
        { title: "Feature Requests", detail: "Structured client feature promises and product improvement feedback." },
        { title: "Onboarding Milestones", detail: "Implementation commitments and target go-live dates." },
        { title: "Account Sentiment Trends", detail: "Longitudinal tracking of buyer satisfaction across meetings." },
        { title: "Stakeholder Changes", detail: "Logging when key executive champions or project leads change." },
        { title: "Expansion Signals", detail: "Customer inquiries regarding additional seats, modules, or services." },
        { title: "1-Click Audio Proof", detail: "Direct audio clip links validating customer comments." },
        { title: "CSM Follow-up Tasks", detail: "Automated action item lists ready for customer recap emails." },
      ]}
      outcomesTitle="Measurable Results for Customer Success Teams"
      outcomes={[
        { metric: "-35%", label: "Reduction in Account Churn", description: "Detect and resolve customer churn risks months before contract renewal." },
        { metric: "100%", label: "Handoff Accuracy", description: "Ensure CSMs have 100% context from pre-sale conversations." },
        { metric: "3x", label: "Faster QBR Prep", description: "Generate comprehensive quarterly business review summaries in minutes." },
      ]}
      integrations={["Gainsight", "Salesforce", "Zendesk", "HubSpot", "Jira", "Slack", "Zoom"]}
      faqs={[
        {
          question: "How does RoSense help with Sales-to-CS handoffs?",
          answer: "RoSense extracts all promises, timelines, and technical requirements from pre-sales demo calls and generates a structured onboarding brief for the CSM.",
        },
        {
          question: "Can RoSense push customer feature requests to Product teams?",
          answer: "Yes. RoSense can automatically push structured feature requests to Jira or Productboard tagged with client name and ARR value.",
        },
        {
          question: "How does sentiment detection work for customer calls?",
          answer: "RoSense analyzes dialogue tone, key phrases, and concern indicators to score account risk accurately.",
        },
      ]}
      ctaHeadline="Protect & Grow Enterprise Account Retention"
      ctaSubheadline="Book a demo to see how RoSense AI turns client calls into proactive churn prevention and account growth."
    />
  );
}
