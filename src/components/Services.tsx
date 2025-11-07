import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Workflow Automation",
      price: "Custom",
      features: [
        "n8n workflow design & implementation",
        "Process optimization & automation",
        "Integration with existing systems",
        "Ongoing support & maintenance",
        "Performance monitoring & analytics"
      ],
      highlighted: false
    },
    {
      title: "AI Integration",
      price: "Custom",
      features: [
        "ChatGPT & LLM integration",
        "Custom AI model deployment",
        "Intelligent data processing",
        "Automated decision-making systems",
        "AI-powered chatbots & assistants"
      ],
      highlighted: true
    },
    {
      title: "Consulting & Training",
      price: "Hourly",
      features: [
        "Automation strategy consultation",
        "Team training & workshops",
        "Architecture design & review",
        "Best practices implementation",
        "Technical documentation"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Services & Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive automation services tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group relative backdrop-blur-sm transition-all duration-300 animate-fade-in-up ${
                service.highlighted 
                  ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/50 shadow-[0_0_40px_hsl(195_100%_50%_/_0.2)] scale-105' 
                  : 'bg-card/50 border-border hover:border-primary/30 hover:shadow-[0_0_30px_hsl(195_100%_50%_/_0.1)]'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">{service.price}</span>
                  {service.price !== "Custom" && <span className="text-muted-foreground"> /hr</span>}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    service.highlighted 
                      ? 'bg-primary hover:bg-primary/90 shadow-[var(--glow-primary)]' 
                      : 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30'
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
