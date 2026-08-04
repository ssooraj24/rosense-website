import PersonaSolutionLayout from "@/components/PersonaSolutionLayout";
import { Headphones, Server, ShieldCheck, AlertCircle, RefreshCw } from "lucide-react";

export const metadata = {
  title: "IT & Support Solution — RoSense AI",
  description:
    "Automate knowledge base creation, incident post-mortems, and IT support debrief documentation with RoSense AI.",
};

export default function ITSupportPage() {
  return (
    <PersonaSolutionLayout
      badge="IT & Support"
      roleTitle="IT Directors & Service Desk Managers"
      heroHeadline="Automate Knowledge Base Creation & Incident Debriefs"
      heroSubheadline="IT incident post-mortems and service desk troubleshooting steps are lost in Slack threads and call recordings. RoSense AI automatically turns incident debriefs and support calls into structured Knowledge Base (KB) articles and RCA reports."
      heroIcon={Headphones}
      painPointsTitle="The Frustration of IT Support Operations"
      painPointsSubtitle="Service desk teams repeat troubleshooting steps because solution documentation falls behind."
      painPoints={[
        {
          title: "Outdated KB Articles",
          description: "Support engineers don't have time to write formatted knowledge base articles after resolving tickets.",
          icon: RefreshCw,
        },
        {
          title: "Lost Post-Mortem Insights",
          description: "Root Cause Analysis (RCA) findings discussed in emergency war room calls are rarely documented.",
          icon: AlertCircle,
        },
        {
          title: "High MTTR (Mean Time to Resolve)",
          description: "Technicians spend excessive time diagnosing recurring infrastructure issues.",
          icon: Server,
        },
        {
          title: "Siloed Service Desk Knowledge",
          description: "Troubleshooting steps known by senior engineers remain unshared with Tier 1 support staff.",
          icon: ShieldCheck,
        },
      ]}
      workflowSteps={[
        { step: "1", title: "Incident Intake", description: "Record war room debriefs, troubleshooting calls, and vendor support syncs." },
        { step: "2", title: "RCA Extraction", description: "Extract root cause analysis, affected systems, and resolution steps." },
        { step: "3", title: "Auto-KB Generation", description: "Format structured Knowledge Base articles with step-by-step resolution guides." },
        { step: "4", title: "ITSM Tool Sync", description: "Push KB articles and incident logs directly to ServiceNow or Zendesk." },
        { step: "5", title: "Support RAG Search", description: "Enable Tier 1 agents to query historical incident solutions in sub-seconds." },
      ]}
      capturedItemsTitle="What RoSense Extracts for IT & Support Teams"
      capturedItems={[
        { title: "Root Cause Analysis (RCA)", detail: "Definitive statement of what caused system outages or infrastructure bugs." },
        { title: "Step-by-Step Resolutions", detail: "Sequential troubleshooting instructions spoken by lead engineers." },
        { title: "Affected Systems & Scope", detail: "List of impacted servers, microservices, or enterprise applications." },
        { title: "Preventative Action Items", detail: "Long-term fix commitments to prevent incident recurrence." },
        { title: "Vendor Escalation Notes", detail: "Verbal commitments made by third-party hardware/software vendors." },
        { title: "Configuration Changes", detail: "System settings altered during emergency resolution calls." },
        { title: "1-Click Audio Proof", detail: "Direct decrypted audio playback verifying technician steps." },
        { title: "Service Desk KB Drafts", detail: "Pre-formatted articles ready for instant publishing." },
      ]}
      outcomesTitle="Measurable Gains for IT Operations"
      outcomes={[
        { metric: "-45%", label: "Reduction in MTTR", description: "Resolve incidents faster by providing agents instant access to past RCA solutions." },
        { metric: "100%", label: "Post-Mortem Coverage", description: "Ensure every major incident has an automated, published RCA report." },
        { metric: "5x", label: "Faster KB Creation", description: "Generate structured support articles directly from technician debrief audio." },
      ]}
      integrations={["ServiceNow", "Zendesk", "Jira Service Management", "PagerDuty", "Slack", "Microsoft Teams", "Confluence"]}
      faqs={[
        {
          question: "How does RoSense format Knowledge Base articles from war room audio?",
          answer: "RoSense extracts the problem statement, symptoms, root cause, and resolution steps, formatting them into standard ITSM KB templates.",
        },
        {
          question: "Can Tier 1 support agents query RoSense while on live calls?",
          answer: "Yes. Agents can type natural language queries like 'How did we fix the OOM error on Server 4?' and get instant answers.",
        },
        {
          question: "Does RoSense support air-gapped IT infrastructure environments?",
          answer: "Yes. RoSense Box runs on-premise inside your isolated network to keep infrastructure data private.",
        },
      ]}
      ctaHeadline="Upgrade Your IT Support & Incident Management Velocity"
      ctaSubheadline="Book a demo to see how RoSense AI turns incident debrief calls into automated KB documentation."
    />
  );
}
