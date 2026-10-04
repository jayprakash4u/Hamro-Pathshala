import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { SecondSection } from "@/components/second-section";
import { ChatbotWidget } from "@/components/chatbot-widget";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5FBF7] text-slate-900 selection:bg-[#159447] selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <SecondSection />
      </main>
      <ChatbotWidget />
    </div>
  );
}
