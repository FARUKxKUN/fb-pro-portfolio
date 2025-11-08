import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import heroPhoto from "@/assets/hero-photo-fixed.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] animate-gradient" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold backdrop-blur-sm">
                AI Automation Expert
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                Farouk Battikh
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Building intelligent workflows through{" "}
              <span className="text-primary font-semibold">n8n automation</span>,{" "}
              <span className="text-secondary font-semibold">AI integration</span>, and seamless system orchestration.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--glow-primary)] hover:shadow-[0_0_60px_hsl(195_100%_50%_/_0.4)] transition-all duration-300"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 backdrop-blur-sm transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/faruk-battikh-sec/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/10 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.upwork.com/freelancers/farukauto" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/10 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
              </a>
              <a 
                href="mailto:battikhfaroukwork@gmail.com" 
                className="p-3 rounded-full bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/10 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-in-up delay-200">
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 mix-blend-overlay" />
              <img 
                src={heroPhoto} 
                alt="Farouk Battikh - AI Automation Expert"
                className="w-full h-auto object-cover object-[60%_center]"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-md border border-border rounded-2xl p-6 shadow-xl">
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">Job Success</div>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">100%</div>
                  <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
