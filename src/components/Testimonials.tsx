import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonialYoutubeShorts from "@/assets/testimonial-youtube-shorts-review.png";

const Testimonials = () => {
  const testimonials = [
    {
      image: testimonial1,
      project: "N8N Automation: Customer Management System",
      rating: 5.0,
      date: "Nov 1, 2025 - Nov 1, 2025",
      feedback: "Automation worked perfectly and Communication was smooth, i recommend",
      price: "$60.00",
      type: "Fixed price",
    },
    {
      image: testimonial2,
      project: "Bilingual Sales Chat Assistant (French and English) for Language Learning Platform",
      rating: 5.0,
      date: "Jun 12, 2025 - Jul 9, 2025",
      feedback: "Faruk did a great job and I enjoyed working with him. If you are really looking for a good freelancer on upwork you should definitely consider him.",
      price: "$297.33",
      rate: "$8.00 /hr",
      hours: "37 hours",
    },
    {
      image: testimonialYoutubeShorts,
      project: "YouTube Shorts Automation - n8n",
      rating: 5.0,
      date: "Nov 9, 2025 - Nov 9, 2025",
      feedback: "It was great working with Farouk. He is patient, reliable, and delivers exactly what's expected. Highly recommended!",
      price: "$120.00",
      type: "Fixed price",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden animate-fade-in" id="testimonials">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Real feedback from satisfied clients on Upwork
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up group hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="mb-3 sm:mb-4">
                  <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-primary/20 mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">
                    {testimonial.project}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <span className="font-bold text-sm sm:text-base">{testimonial.rating}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">| {testimonial.date}</span>
                  </div>
                </div>

                <blockquote className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed italic">
                  "{testimonial.feedback}"
                </blockquote>

                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground pt-3 sm:pt-4 border-t border-border">
                  <span className="font-semibold text-foreground">{testimonial.price}</span>
                  {testimonial.rate && (
                    <>
                      <span>{testimonial.rate}</span>
                      <span>{testimonial.hours}</span>
                    </>
                  )}
                  {testimonial.type && <span>{testimonial.type}</span>}
                </div>

                {/* Original Screenshot - Hidden but available */}
                <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.project} review`}
                    className="w-full rounded-lg border border-border/50"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Star className="h-5 w-5 fill-secondary text-secondary" />
            <span className="text-lg font-semibold">
              100% Job Success Rate on Upwork
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
