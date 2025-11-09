import { Card, CardContent } from "@/components/ui/card";
import { Code2, Workflow, Brain, Database, MessageSquare, Cloud, Zap, Sheet } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Workflow,
      name: "n8n",
      description: "Workflow Automation",
      color: "text-[#EA4B71]"
    },
    {
      icon: Brain,
      name: "OpenAI",
      description: "AI Integration",
      color: "text-[#10A37F]"
    },
    {
      icon: Zap,
      name: "Make",
      description: "Automation Platform",
      color: "text-[#6B46FF]"
    },
    {
      icon: Zap,
      name: "Zapier",
      description: "Integration Tool",
      color: "text-[#FF4A00]"
    },
    {
      icon: Sheet,
      name: "Google Sheets",
      description: "Data Management",
      color: "text-[#34A853]"
    },
    {
      icon: Database,
      name: "Notion",
      description: "Workspace Integration",
      color: "text-foreground"
    },
    {
      icon: MessageSquare,
      name: "Telegram",
      description: "Bot Development",
      color: "text-[#0088CC]"
    },
    {
      icon: MessageSquare,
      name: "Instagram",
      description: "DM Automation",
      color: "text-[#E4405F]"
    },
    {
      icon: Cloud,
      name: "Airtable",
      description: "Database Solutions",
      color: "text-[#FCB400]"
    },
    {
      icon: Code2,
      name: "Custom APIs",
      description: "Integration Development",
      color: "text-primary"
    },
    {
      icon: Brain,
      name: "ChatGPT",
      description: "Conversational AI",
      color: "text-[#10A37F]"
    },
    {
      icon: Workflow,
      name: "Webhooks",
      description: "Real-time Integration",
      color: "text-secondary"
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden animate-fade-in">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technologies & Tools
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Expert in modern automation platforms and integration technologies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up group hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className={`h-8 w-8 ${skill.color}`} />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in connecting and automating workflows across platforms, creating seamless integrations that save time and boost productivity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
