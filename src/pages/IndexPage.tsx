import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ComponentsSection } from "@/components/ComponentsSection";
import { DemoSection } from "@/components/DemoSection";
import { SourceCodeSection } from "@/components/SourceCodeSection";
import { MemberSection } from "@/components/MemberSection";
import { Footer } from "@/components/Footer";

const IndexPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ComponentsSection />
        <DemoSection />
        <SourceCodeSection />
        <MemberSection />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
