import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import ConversationSection from "@/components/ConversationSection";
import PhoneCallSection from "@/components/PhoneCallSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PhoneCallSection />
      <StorySection />
      <ProcessSection />
      <ResultsSection />
      <ConversationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
