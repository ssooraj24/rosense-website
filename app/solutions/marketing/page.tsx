import PersonaSolutionLayout from "@/components/PersonaSolutionLayout";
import { Megaphone, MessageSquareQuote, Target, BarChart2, Sparkles } from "lucide-react";

export const metadata = {
  title: "Marketing Solution — RoSense AI",
  description:
    "Turn Voice-of-Customer audio into high-converting copy, customer pain point clusters, and competitor insights with RoSense AI.",
};

export default function MarketingPage() {
  return (
    <PersonaSolutionLayout
      badge="Marketing"
      roleTitle="CMOs & Product Marketers"
      heroHeadline="Turn Voice-of-Customer Audio into High-Converting Messaging"
      heroSubheadline="The best marketing copy comes directly from customer mouths, but buyer vocabulary stays trapped in sales and customer success recordings. RoSense AI mines Voice-of-Customer audio to extract real pain points, quotes, and competitor insights."
      heroIcon={Megaphone}
      painPointsTitle="The Barrier to Real Customer-Centric Messaging"
      painPointsSubtitle="Product marketing teams struggle to create resonant messaging when disconnected from real buyer conversations."
      painPoints={[
        {
          title: "Disconnected Copywriting",
          description: "Marketers rely on internal assumptions rather than exact phrasing used by paying customers.",
          icon: MessageSquareQuote,
        },
        {
          title: "Blind Competitor Intel",
          description: "Field feedback regarding competitor positioning takes months to reach product marketing.",
          icon: Target,
        },
        {
          title: "Manual Call Mining",
          description: "PMMs don't have time to manually listen to 50+ sales recordings each week.",
          icon: BarChart2,
        },
        {
          title: "Unvalidated Persona Assumptions",
          description: "Buyer persona profiles become outdated as market conditions and customer priorities shift.",
          icon: Sparkles,
        },
      ]}
      workflowSteps={[
        { step: "1", title: "Conversation Intake", description: "Aggregate sales calls, customer interviews, and user feedback audio." },
        { step: "2", title: "Phrase Clustering", description: "Mamba-3 SSM clusters recurring customer pain points and vocabulary." },
        { step: "3", title: "Quote Extraction", description: "Isolate verbatim buyer quotes describing business problems and desired outcomes." },
        { step: "4", title: "Competitor Matrix", description: "Map buyer mentions of competitors, pricing perception, and feature gaps." },
        { step: "5", title: "Messaging Repository", description: "Provide PMMs with a searchable Voice-of-Customer intelligence database." },
      ]}
      capturedItemsTitle="What RoSense Extracts for Marketing Teams"
      capturedItems={[
        { title: "Verbatim Customer Quotes", detail: "Exact buyer phrases describing core business pain points." },
        { title: "Competitor Mentions", detail: "Frequency and sentiment surrounding competitor product mentions." },
        { title: "Feature Value Drivers", detail: "Which capabilities customers cite as primary buying triggers." },
        { title: "Objection Trends", detail: "Top friction points blocking prospect conversion." },
        { title: "Persona Pain Clusters", detail: "Grouped problems specific to role titles (e.g. CTO vs CFO)." },
        { title: "Case Study Candidates", detail: "Identification of highly enthusiastic customer accounts for case studies." },
        { title: "Pricing Perception", detail: "How buyers evaluate product tiering and roi justification." },
        { title: "1-Click Audio Proof", detail: "Direct audio playback verifying authentic customer statements." },
      ]}
      outcomesTitle="Measurable ROI for Product Marketers"
      outcomes={[
        { metric: "3x", label: "Higher Copy Conversion", description: "Use authentic customer vocabulary to craft messaging that resonates immediately." },
        { metric: "100%", label: "Real-Time Competitor Intel", description: "Instantly track shifts in competitor pitch strategies across market calls." },
        { metric: "10x", label: "Faster PMM Research", description: "Eliminate manual call listening with AI-clustered Voice-of-Customer data." },
      ]}
      integrations={["HubSpot", "Salesforce", "Notion", "Slack", "Gong", "Chili Piper", "Google Docs"]}
      faqs={[
        {
          question: "How does RoSense group Voice-of-Customer pain points?",
          answer: "RoSense uses natural language clustering to group similar customer statements across hundreds of calls into themes.",
        },
        {
          question: "Can product marketers filter quotes by buyer persona?",
          answer: "Yes. PMMs can filter quotes by persona (e.g. 'Show me what VPs of Engineering say about security').",
        },
        {
          question: "Are customer names anonymized for marketing copy research?",
          answer: "Yes. PMMs can toggle PII masking to view verbatim quotes while protecting confidential client identity.",
        },
      ]}
      ctaHeadline="Transform Your Product Messaging with Authentic Customer Voice"
      ctaSubheadline="Book a demo to see how RoSense AI turns buyer call recordings into high-converting marketing campaigns."
    />
  );
}
