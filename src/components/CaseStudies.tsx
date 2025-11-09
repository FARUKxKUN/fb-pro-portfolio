import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";
import workflowYoutubeShorts from "@/assets/workflow-youtube-shorts.png";
import workflowInstagramDm from "@/assets/workflow-instagram-dm.png";
import workflowCrm from "@/assets/workflow-crm.png";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "YouTube Shorts Automation",
      client: "Content Creator Agency",
      challenge: "Manual video processing and uploading consumed 15+ hours weekly, limiting content output and growth potential.",
      solution: "Built end-to-end n8n automation pipeline that processes video files, generates thumbnails, adds captions, and auto-publishes to YouTube on schedule.",
      results: [
        { metric: "95%", label: "Time Saved", icon: Clock },
        { metric: "300%", label: "Content Output Increase", icon: TrendingUp },
        { metric: "$2,400", label: "Monthly Labor Cost Saved", icon: DollarSign },
      ],
      technologies: ["n8n", "YouTube API", "OpenAI", "Cloud Storage"],
      image: workflowYoutubeShorts,
      timeline: "5 days",
      price: "$120",
    },
    {
      title: "Bilingual AI Sales Assistant",
      client: "Language Learning Platform",
      challenge: "Customer inquiries in French and English required 24/7 support coverage, but budget constraints limited hiring.",
      solution: "Developed intelligent chatbot with GPT-4 integration, supporting bilingual conversations, lead qualification, and seamless handoff to human agents for complex queries.",
      results: [
        { metric: "80%", label: "Response Time Reduction", icon: Clock },
        { metric: "65%", label: "Queries Resolved Automatically", icon: TrendingUp },
        { metric: "$3,500", label: "Monthly Support Cost Saved", icon: DollarSign },
      ],
      technologies: ["n8n", "OpenAI GPT-4", "Webhook APIs", "CRM Integration"],
      image: workflowInstagramDm,
      timeline: "10 days",
      price: "$297",
    },
    {
      title: "Customer Management System Automation",
      client: "B2B Service Provider",
      challenge: "Manual data entry across multiple platforms led to errors, delayed follow-ups, and missed opportunities.",
      solution: "Created unified automation connecting CRM, email, and project management tools with smart data syncing and automated workflows.",
      results: [
        { metric: "90%", label: "Data Entry Eliminated", icon: Clock },
        { metric: "100%", label: "Data Accuracy Improvement", icon: TrendingUp },
        { metric: "50%", label: "Faster Customer Onboarding", icon: ArrowRight },
      ],
      technologies: ["n8n", "Google Sheets", "Airtable", "Email Integration"],
      image: workflowCrm,
      timeline: "3 days",
      price: "$60",
    },
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden" id="case-studies">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-world automation solutions delivering measurable results
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {study.title}
                      </CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">{study.client}</p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>

                    {/* Results Metrics */}
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Results</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {study.results.map((result, idx) => {
                          const Icon = result.icon;
                          return (
                            <div key={idx} className="text-center">
                              <Icon className="h-5 w-5 text-secondary mx-auto mb-2" />
                              <div className="text-2xl font-bold text-foreground">{result.metric}</div>
                              <div className="text-xs text-muted-foreground">{result.label}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Footer Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-border text-sm">
                      <div className="flex gap-4">
                        <span className="text-muted-foreground">Timeline: <span className="text-foreground font-semibold">{study.timeline}</span></span>
                        <span className="text-muted-foreground">Investment: <span className="text-foreground font-semibold">{study.price}</span></span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-105"
          >
            Start Your Automation Journey
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
