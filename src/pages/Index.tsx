import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ProcessSection from "@/components/ProcessSection";
import PhoneCallSection from "@/components/PhoneCallSection";
import ContactSection from "@/components/ContactSection";
import PhilosophySection from "@/components/PhilosophySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PhoneCallSection />
      <StorySection />
      <ProcessSection />
      <PhilosophySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
