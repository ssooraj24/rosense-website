import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Pipeline from "@/components/Pipeline";
import UseCases from "@/components/UseCases";
import OutcomeCards from "@/components/OutcomeCards";
import ApplianceSpotlight from "@/components/ApplianceSpotlight";
import SearchSandbox from "@/components/SearchSandbox";
import SecurityVault from "@/components/SecurityVault";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-[#10B981] selection:text-white">
      {/* 01. Sticky Glass Navigation */}
      <Navbar />

      {/* Main Page Content Container */}
      <main id="main-content">
        {/* 02. Hero Section — "Turn Every Business Conversation into Structured Action" */}
        <Hero />

        {/* 03. Trust & Compliance Bar — Zero Model Training First */}
        <TrustBar />

        {/* 04. Core Transformation Pipeline — "Listen ➔ Structure ➔ Deliver" */}
        <Pipeline />

        {/* 05. Who Uses RoSense AI — Use Cases by Industry & Role */}
        <UseCases />

        {/* 06. Why Enterprise Leaders Choose RoSense AI — 4 Outcome Cards vs Traditional Assistants */}
        <OutcomeCards />

        {/* 07. The Private Appliance Spotlight — "RoSense Box" Turnkey On-Prem Hardware */}
        <ApplianceSpotlight />

        {/* 08. Interactive RAG Search Sandbox — Multi-Prompt Clickable Demo */}
        <SearchSandbox />

        {/* 09. 8-Layer Vault Security & Data Safeguarding Shield */}
        <SecurityVault />

        {/* 10. Transparent Outcome Pricing Tiers — Cloud Sandbox, Business, Appliance */}
        <Pricing />
      </main>

      {/* 11. Final Conversion Banner & Footer */}
      <Footer />
    </div>
  );
}
