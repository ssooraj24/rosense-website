import PersonaSolutionLayout from "@/components/PersonaSolutionLayout";
import { FileCode2, Cpu, Database, Wrench, Terminal } from "lucide-react";

export const metadata = {
  title: "Engineering Solution — RoSense AI",
  description:
    "Preserve technical knowledge beyond every sprint. Auto-generate Architecture Decision Records (ADRs), tech debt logs, and retro action items with RoSense AI.",
};

export default function EngineeringPage() {
  return (
    <PersonaSolutionLayout
      badge="Engineering"
      roleTitle="CTOs, VPs of Eng & Tech Leads"
      heroHeadline="Preserve Technical Knowledge Beyond Every Sprint"
      heroSubheadline="Architecture decisions disappear, context is lost when senior developers leave, and repeated technical discussions waste valuable sprint time. RoSense AI captures engineering syncs to generate Architecture Decision Records (ADRs), tech debt tracking, and retro action items."
      heroIcon={FileCode2}
      painPointsTitle="The Cost of Technical Knowledge Loss"
      painPointsSubtitle="Engineering orgs lose velocity when technical rationale for codebase decisions isn't captured."
      painPoints={[
        {
          title: "Lost Architecture Decisions",
          description: "Technical trade-offs agreed upon in architecture reviews are forgotten 6 months later.",
          icon: Cpu,
        },
        {
          title: "Tribal Knowledge Bottleneck",
          description: "Crucial system context resides in senior developers' heads rather than accessible documentation.",
          icon: Database,
        },
        {
          title: "Repeated Debates",
          description: "Engineering teams re-discuss solved architectural decisions because prior rationale wasn't logged.",
          icon: Terminal,
        },
        {
          title: "Slow Developer Onboarding",
          description: "New software engineers take months to understand legacy codebase design choices.",
          icon: Wrench,
        },
      ]}
      workflowSteps={[
        { step: "1", title: "Tech Meeting Intake", description: "Record architecture reviews, sprint retros, and design syncs." },
        { step: "2", title: "ADR Extraction", description: "Isolate architectural options evaluated, selected approaches, and trade-offs." },
        { step: "3", title: "Auto-Docs Generation", description: "Format structured Markdown Architecture Decision Records (ADRs)." },
        { step: "4", title: "Developer Tool Sync", description: "Commit ADRs directly to GitHub repositories or Confluence spaces." },
        { step: "5", title: "Codebase RAG Search", description: "Developers query technical design rationale via sub-second natural language RAG." },
      ]}
      capturedItemsTitle="What RoSense Captures for Engineering Teams"
      capturedItems={[
        { title: "Architecture Decision Records", detail: "Formal ADRs detailing context, decision status, and consequences." },
        { title: "Technical Debt Discussions", detail: "Logged tech debt compromises and planned refactoring tasks." },
        { title: "Sprint Retro Action Items", detail: "Explicit process improvements assigned during retrospective calls." },
        { title: "API Schema Specifications", detail: "Verbal data structures and endpoint specifications agreed upon." },
        { title: "Security & Risk Trade-offs", detail: "Recorded evaluation of security implications and library choices." },
        { title: "Incident Root Causes", detail: "Post-mortem takeaways and bug resolution discussions." },
        { title: "Dependency Constraints", detail: "Third-party library limitations and upgrade considerations." },
        { title: "1-Click Audio Proof", detail: "Direct audio clip links verifying developer rationale." },
      ]}
      outcomesTitle="Measurable Velocity Gains for Engineering Teams"
      outcomes={[
        { metric: "50%", label: "Faster Developer Onboarding", description: "New engineers get up to speed quickly by querying historical ADR rationale." },
        { metric: "100%", label: "Preserved ADR Documentation", description: "Never lose the 'why' behind critical software architecture decisions." },
        { metric: "0", label: "Repeated Design Debates", description: "Eliminate re-hashing previously decided engineering trade-offs." },
      ]}
      integrations={["GitHub", "GitLab", "Confluence", "Jira", "Slack", "VS Code Extension", "Notion"]}
      faqs={[
        {
          question: "Can RoSense auto-commit ADR Markdown files directly into our Git repo?",
          answer: "Yes. RoSense formats extracted decisions into standard Markdown ADR templates and pushes PRs directly to GitHub or GitLab.",
        },
        {
          question: "How does RoSense process complex technical jargon and code syntax?",
          answer: "RoSense custom acoustic and vocabulary models are trained on software engineering terminology, frameworks, and syntax.",
        },
        {
          question: "Is engineering speech data protected from cloud training?",
          answer: "Yes. RoSense Box provides 100% on-premise execution with zero external data sharing.",
        },
      ]}
      ctaHeadline="Build a Permanent Engineering Knowledge Base Today"
      ctaSubheadline="Book a demo to see how RoSense AI turns technical syncs into automated ADRs and codebase documentation."
    />
  );
}
