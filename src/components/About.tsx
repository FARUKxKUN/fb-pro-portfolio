import { Card, CardContent } from "@/components/ui/card";
import { Code2, Workflow, Zap, Database } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Workflow,
      title: "n8n Automation",
      description: "Expert in creating complex automation workflows that save time and increase efficiency."
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Seamlessly integrate cutting-edge AI models into your business processes."
    },
    {
      icon: Code2,
      title: "System Orchestration",
      description: "Connect disparate systems and create unified, intelligent workflows."
    },
    {
      icon: Database,
      title: "Data Processing",
      description: "Automated data pipelines that transform raw data into actionable insights."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden animate-fade-in">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Expertise & Capabilities
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Specialized in transforming business processes through intelligent automation. 
            With deep expertise in n8n and AI technologies, I help organizations achieve 
            operational excellence through seamless workflow integration.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(195_100%_50%_/_0.2)] animate-fade-in-up hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-5 sm:p-6 md:p-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-300">
                    <skill.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
