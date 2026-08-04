import PersonaSolutionLayout from "@/components/PersonaSolutionLayout";
import { TrendingUp, Target, DollarSign, RefreshCw, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Sales Teams Solution — RoSense AI",
  description:
    "Never lose another customer commitment. Capture sales call objections, pricing talk, decision makers, and update Salesforce/HubSpot automatically.",
};

export default function SalesPage() {
  return (
    <PersonaSolutionLayout
      badge="Sales Teams"
      roleTitle="Sales Leaders & Account Executives"
      heroHeadline="Never Lose Another Customer Commitment"
      heroSubheadline="Sales reps forget critical call details, customer objections disappear, and CRM data hygiene falls behind. RoSense AI captures every sales call, extracts commitments, buying signals, and pricing feedback, and updates your CRM automatically."
      heroIcon={TrendingUp}
      painPointsTitle="The Daily Sales Execution Friction"
      painPointsSubtitle="VPs of Sales lose revenue visibility because CRM entries are incomplete and follow-ups fall through the cracks."
      painPoints={[
        {
          title: "Incomplete CRM Records",
          description: "Reps dislike entering detailed CRM notes, leaving managers blind to actual deal progress.",
          icon: RefreshCw,
        },
        {
          title: "Lost Customer Objections",
          description: "Crucial client concerns raised on calls fail to be logged or passed to product teams.",
          icon: MessageSquare,
        },
        {
          title: "Forgotten Follow-ups",
          description: "Verbal promises made during demo calls are forgotten, delaying deal closing cycles.",
          icon: Target,
        },
        {
          title: "Slow Rep Onboarding",
          description: "New account executives take months to learn how top performers handle pricing and competitor objections.",
          icon: DollarSign,
        },
      ]}
      workflowSteps={[
        { step: "1", title: "Call Intake", description: "Seamlessly intake Zoom, Teams, or phone sales call audio." },
        { step: "2", title: "Deal Intelligence", description: "Extract buying signals, competitor mentions, pricing talk, and objections." },
        { step: "3", title: "Auto CRM Update", description: "Sync structured notes, next steps, and deal stage directly to Salesforce or HubSpot." },
        { step: "4", title: "Follow-up Generation", description: "Auto-generate draft recap emails with 1-click audio proof links for prospect verification." },
        { step: "5", title: "Coaching & Memory", description: "Search past calls across reps for coaching benchmarks and deal history." },
      ]}
      capturedItemsTitle="What RoSense Extracts for Sales Teams"
      capturedItems={[
        { title: "Customer Objections", detail: "Exact buyer hesitations regarding pricing, features, or deployment terms." },
        { title: "Pricing Discussions", detail: "Budget boundaries and discount expectations stated by prospects." },
        { title: "Competitor Mentions", detail: "Specific competitor names, features, and comparison quotes." },
        { title: "Decision Makers", detail: "Identification of economic buyers, technical evaluators, and champions." },
        { title: "Buying Signals", detail: "Positive indicators suggesting deal urgency or timeline acceleration." },
        { title: "Action Item Commitments", detail: "Promised follow-up materials, custom proposals, or technical POC dates." },
        { title: "Renewal & Upsell Risks", detail: "Flags indicating account risk or expansion opportunities." },
        { title: "1-Click Audio Proof Clips", detail: "20-second audio links verifying prospect statements." },
      ]}
      outcomesTitle="Measurable Revenue Impact for Sales Teams"
      outcomes={[
        { metric: "+28%", label: "Higher Win Rates", description: "Close more deals with automated commitment tracking and objection handling." },
        { metric: "99%", label: "CRM Hygiene Accuracy", description: "Eliminate manual CRM entry while ensuring 100% updated deal records." },
        { metric: "50%", label: "Faster Rep Onboarding", description: "Onboard new AEs faster by mining winning call libraries." },
      ]}
      integrations={["Salesforce", "HubSpot", "Microsoft Dynamics", "Zoom", "Microsoft Teams", "Slack", "Outreach"]}
      faqs={[
        {
          question: "How does RoSense update our CRM automatically?",
          answer: "RoSense connects via bi-directional API to Salesforce or HubSpot, writing deal notes, next steps, and buyer personas directly into contact and deal records.",
        },
        {
          question: "Can sales managers filter calls by specific competitor mentions or pricing objections?",
          answer: "Yes. Managers can search organizational memory across all sales reps for keywords like 'pricing objection' or specific competitor names.",
        },
        {
          question: "Does RoSense work with on-premise sales call recording setups?",
          answer: "Yes. RoSense Box deploys on-premise to process internal sales recordings with 100% data sovereignty.",
        },
      ]}
      ctaHeadline="Supercharge Your Sales Team's Revenue Execution"
      ctaSubheadline="Schedule a live demo to see how RoSense AI turns sales call conversations into closed deals."
    />
  );
}
