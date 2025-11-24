import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import workflowYoutube from "@/assets/workflow-youtube-shorts.png";
import workflowVideo from "@/assets/workflow-video.png";
import workflowCRM from "@/assets/workflow-crm.png";
import workflowInstagram from "@/assets/workflow-instagram-dm.png";

const Portfolio = () => {
  const projects = [
    {
      title: "YouTube Shorts Automation",
      description: "Automated content generation system that creates, schedules, and posts YouTube Shorts using AI. Integrates Google Gemini for idea generation, image creation, and automated scheduling with trigger-based execution.",
      image: workflowYoutube,
      tags: ["AI Integration", "Content Creation", "Scheduling", "Google Gemini"],
    },
    {
      title: "Instagram DM Auto Response",
      description: "Intelligent Instagram direct message automation system with AI-powered responses. Features automatic message handling, conversation memory, calendar integration for availability checking, and smart booking capabilities through Google Sheets.",
      image: workflowInstagram,
      tags: ["Instagram", "AI Agent", "Auto-Response", "Social Media"],
    },
    {
      title: "Advanced Video Processing Pipeline",
      description: "Sophisticated video automation workflow that generates videos, adds AI-powered audio narration, uploads to Google Drive, and shares via multiple channels. Uses Flash 2.0 for advanced media processing.",
      image: workflowVideo,
      tags: ["Video Processing", "AI Audio", "Cloud Storage", "Media Automation"],
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Automations
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Real-world n8n workflows I've built for clients, showcasing intelligent automation and seamless system integration.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up overflow-hidden group hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Want to see more? Let's discuss your automation needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
