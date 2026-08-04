import PersonaSolutionLayout from "@/components/PersonaSolutionLayout";
import { UserPlus, UserCheck, ShieldCheck, FileText, Scale } from "lucide-react";

export const metadata = {
  title: "HR & Talent Solution — RoSense AI",
  description:
    "Unbiased candidate feedback, standardized talent reviews, and confidential HR interview note extraction with RoSense AI.",
};

export default function HRTalentPage() {
  return (
    <PersonaSolutionLayout
      badge="HR & Talent"
      roleTitle="CHROs & Talent Acquisition Leads"
      heroHeadline="Unbiased Candidate Feedback & Standardized Talent Reviews"
      heroSubheadline="Candidate interview feedback is often vague, subjective, or submitted late, creating hiring bias and compliance risk. RoSense AI extracts structured candidate evaluations, skill competencies, and standardized performance review briefs."
      heroIcon={UserPlus}
      painPointsTitle="The Challenges of Modern Talent Management"
      painPointsSubtitle="HR leaders face hiring delays and evaluation inconsistency when interviewer feedback is unstandardized."
      painPoints={[
        {
          title: "Vague Interview Feedback",
          description: "Interviewers submit 'gut feeling' notes rather than objective skill assessments.",
          icon: Scale,
        },
        {
          title: "Delayed Debrief Submissions",
          description: "Hiring managers delay candidate scorecards, slowing down offer extension speed.",
          icon: UserCheck,
        },
        {
          title: "Unconscious Bias Risk",
          description: "Unstructured interview debriefs introduce evaluation bias and legal risk.",
          icon: ShieldCheck,
        },
        {
          title: "Inconsistent Talent Reviews",
          description: "Annual performance review calibration meetings lack documented objective rationale.",
          icon: FileText,
        },
      ]}
      workflowSteps={[
        { step: "1", title: "Interview Intake", description: "Capture candidate interviews and internal talent debrief calls." },
        { step: "2", title: "Competency Extraction", description: "Isolate technical skills, leadership competencies, and salary expectations." },
        { step: "3", title: "Scorecard Formatting", description: "Generate structured, objective candidate evaluation scorecards." },
        { step: "4", title: "ATS System Sync", description: "Push structured feedback directly to Greenhouse, Lever, or Workday." },
        { step: "5", title: "Confidential Archive", description: "Store talent briefs in an encrypted, RBAC-restricted private repository." },
      ]}
      capturedItemsTitle="What RoSense Extracts for HR & Talent Teams"
      capturedItems={[
        { title: "Technical Competencies", detail: "Verified candidate responses regarding technical skills and domain experience." },
        { title: "Behavioral Ratings", detail: "Structured evaluation of leadership, collaboration, and problem-solving." },
        { title: "Compensation Expectations", detail: "Stated salary targets, notice periods, and work arrangements." },
        { title: "Interviewer Consensus", detail: "Points of agreement and reservations expressed during hiring debriefs." },
        { title: "Performance Review Notes", detail: "Calibrated feedback from quarterly employee reviews." },
        { title: "Promotion Rationale", detail: "Documented justification for internal talent advancement." },
        { title: "1-Click Audio Verification", detail: "Direct audio clips validating candidate statements." },
        { title: "Compliance-Safe Records", detail: "PII-masked audit logs for equal opportunity compliance." },
      ]}
      outcomesTitle="Measurable Talent Acquisition Impact"
      outcomes={[
        { metric: "100%", label: "Standardized Scorecards", description: "Ensure every candidate interview yields objective, competency-mapped feedback." },
        { metric: "3x", label: "Faster Offer Speed", description: "Eliminate hiring delays caused by missing interviewer feedback." },
        { metric: "0", label: "Evaluation Bias", description: "Base hiring decisions strictly on verified skill evidence." },
      ]}
      integrations={["Greenhouse", "Lever", "Workday", "BambooHR", "Slack", "Microsoft Teams", "Zoom"]}
      faqs={[
        {
          question: "How does RoSense maintain candidate data privacy during interviews?",
          answer: "RoSense masks candidate PII and deploys on-premise via RoSense Box so sensitive candidate audio remains fully confidential.",
        },
        {
          question: "Can hiring managers customize the skill rubrics extracted by RoSense?",
          answer: "Yes. Talent teams can define custom rubric templates for engineering, sales, or executive roles.",
        },
        {
          question: "How does RoSense help with performance calibration meetings?",
          answer: "RoSense summarizes multi-manager calibration calls into objective, documented promotion and compensation briefs.",
        },
      ]}
      ctaHeadline="Build an Objective, Fast Talent Acquisition Machine"
      ctaSubheadline="Book a demo to see how RoSense AI turns interview calls into standardized, unbiased scorecards."
    />
  );
}
