import PersonaSolutionLayout from "@/components/PersonaSolutionLayout";
import { Wrench, Briefcase, FileText, TrendingUp, Clock } from "lucide-react";

export const metadata = {
  title: "Consulting & Advisory Solution — RoSense AI",
  description:
    "Deliver 10x value on client engagements, synthesize billable discovery calls into executive reports, and reuse practice knowledge with RoSense AI.",
};

export default function ConsultingPage() {
  return (
    <PersonaSolutionLayout
      badge="Consulting & Advisory"
      roleTitle="Partners & Advisory Practice Leads"
      heroHeadline="Deliver 10x Value on Client Engagements & Advisory"
      heroSubheadline="Consulting firms bill for expertise, but associates spend hundreds of non-billable hours manually transcribing client discovery calls and writing synthesis reports. RoSense AI synthesizes multi-hour stakeholder interviews into executive client deliverables."
      heroIcon={Wrench}
      painPointsTitle="The Profit Margin Friction in Professional Services"
      painPointsSubtitle="Advisory partners lose billable margins when senior consultants perform manual meeting synthesis."
      painPoints={[
        {
          title: "Non-Billable Synthesis Hours",
          description: "Consultants spend 15+ hours per client engagement turning discovery interviews into summary decks.",
          icon: Clock,
        },
        {
          title: "Lost Client Context",
          description: "Subtle nuances expressed by client stakeholders during discovery calls are missed in handwritten notes.",
          icon: Briefcase,
        },
        {
          title: "Slow Deliverable Turnaround",
          description: "Clients wait weeks for initial discovery synthesis reports, slowing project momentum.",
          icon: FileText,
        },
        {
          title: "Un-reused Practice Knowledge",
          description: "Key frameworks developed for one client engagement are forgotten instead of being packaged across the practice.",
          icon: TrendingUp,
        },
      ]}
      workflowSteps={[
        { step: "1", title: "Discovery Intake", description: "Record client stakeholder interviews, discovery workshops, and steering syncs." },
        { step: "2", title: "Theme Extraction", description: "Extract client pain points, organizational bottlenecks, and system requirements." },
        { step: "3", title: "Deliverable Synthesis", description: "Generate structured executive briefing decks and findings summaries." },
        { step: "4", title: "Client Proof Links", description: "Attach 1-click decrypted audio clip proof for every key finding." },
        { step: "5", title: "Practice Knowledge RAG", description: "Build a firm-wide searchable repository of practice methodologies and findings." },
      ]}
      capturedItemsTitle="What RoSense Extracts for Consulting Firms"
      capturedItems={[
        { title: "Client Stakeholder Quotes", detail: "Verbatim quotes illustrating organizational pain points for final reports." },
        { title: "Business Requirements", detail: "Explicit functional and technical requirements specified by client leads." },
        { title: "Organizational Bottlenecks", detail: "Workflow constraints and cross-team friction points." },
        { title: "Project Scope Boundaries", detail: "Agreed-upon deliverable scope and explicit out-of-scope items." },
        { title: "Executive Decision Drivers", detail: "The strategic priorities guiding client leadership." },
        { title: "Change Management Risks", detail: "Internal cultural or operational risks identified during interviews." },
        { title: "1-Click Audio Proof", detail: "Direct audio links backing up consulting recommendations." },
        { title: "Firm Knowledge Repository", detail: "Anonymized practice insights ready for cross-client reuse." },
      ]}
      outcomesTitle="Measurable Margin Impact for Consulting Practices"
      outcomes={[
        { metric: "10x", label: "Faster Discovery Synthesis", description: "Synthesize hundreds of hours of raw client audio into client-ready briefs in minutes." },
        { metric: "+35%", label: "Higher Engagement Margin", description: "Reduce non-billable associate synthesis hours and increase project profitability." },
        { metric: "100%", label: "Verifiable Findings Proof", description: "Back up every consulting recommendation with 1-click authentic audio proof." },
      ]}
      integrations={["Microsoft PowerPoint", "Google Slides", "Notion", "Slack", "Microsoft Teams", "HubSpot", "Box"]}
      faqs={[
        {
          question: "Can consulting firms use RoSense for NDA-restricted client projects?",
          answer: "Yes. RoSense Box deploys air-gapped on-premise, guaranteeing client data never leaves the firm's private network.",
        },
        {
          question: "Can RoSense export directly into client presentation slide formats?",
          answer: "Yes. RoSense exports structured Markdown, JSON, and pre-formatted executive briefs suitable for slide creation.",
        },
        {
          question: "Does RoSense support anonymizing client data for practice knowledge reuse?",
          answer: "Yes. Consultants can toggle PII masking to store anonymized industry insights for practice-wide research.",
        },
      ]}
      ctaHeadline="Scale Your Advisory Practice Profitability"
      ctaSubheadline="Book a demo to see how RoSense AI accelerates client discovery synthesis and engagement margins."
    />
  );
}
