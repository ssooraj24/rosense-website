import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pipeline from "@/components/Pipeline";
import UseCases from "@/components/UseCases";
import OutcomeCards from "@/components/OutcomeCards";
import ApplianceSpotlight from "@/components/ApplianceSpotlight";
import SecurityVault from "@/components/SecurityVault";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-[#10B981] selection:text-white">
      {/* 01. Sticky Glass Navigation */}
      <Navbar />

      {/* Main Page Content Container */}
      <main id="main-content">
        {/* 02. Act 1: The Statement — "Your company remembers everything. Privately." */}
        <Hero />

        {/* 03. Act 2: The Story & Transformation — "Listen ➔ Structure ➔ Deliver" */}
        <Pipeline />

        {/* 04. Act 3: Who Uses RoSense — Use Cases & Outcomes */}
        <UseCases />
        <OutcomeCards />

        {/* 05. Act 4: The Hardware — "The RoSense Box" */}
        <ApplianceSpotlight />

        {/* 06. Act 5: The Fortress — "What you say stays yours. Always." */}
        <SecurityVault />
      </main>

      {/* Act 6: The Invitation Banner & Footer */}
      <Footer />
    </div>
  );
}
