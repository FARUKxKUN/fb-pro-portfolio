import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Skills />
      <CaseStudies />
      <Testimonials />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Farouk Battikh. All rights reserved.</p>
            <p className="mt-2">Built with passion for automation excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
