
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" style={{ fontFamily: 'Segoe UI, system-ui, sans-serif' }}>
      <Header />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
