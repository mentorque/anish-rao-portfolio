import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, MapPin, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "TestingXperts (Client: DraftKings)",
      position: "Business & Systems Analyst",
      location: "Remote / India",
      duration: "Oct 2021 – Jul 2024",
      logo: "DK",
      achievements: [
        { impact: "Scaled ODR Integrations 3x", description: "Solely managed the Casino ODR integration pipeline, scaling throughput from 150 to over 500 game integrations per sprint." },
        { impact: "20+ Vendors, Zero Escalations", description: "Served as the main liaison for 20+ third-party vendors across Casino Ops, CasinoHub, and DraftKings operations with minimal client-side escalation; received written commendation for ownership and professionalism." },
        { impact: "Golden Nugget Launch Support", description: "Designed an iOS asset caching solution to locally store the top 10 most-played game assets with dynamic storage checks, reducing download errors and supporting the live launch of Golden Nugget Online Gaming in two US states." },
        { impact: "Automated ODR ETL with Python", description: "Automated the ODR data-ingestion process with Python ETL scripts, eliminating a manual handoff step and reducing preprocessing time while deploying assets to AWS S3 via Bamboo CI/CD pipelines." },
        { impact: "UAT & SQL Data Validation", description: "Developed complex SQL queries across 100+ tables for data validation, debugging, and reporting on payments, transactions, and gameplay; led UAT cycles to ensure financial data accuracy before each release." },
        { impact: ".NET Backend Across 7 Jurisdictions", description: "Contributed to the Core backend team, maintaining and extending .NET/C# services for payments, bonuses, offers, and compliance across 7 regulated jurisdictions, with on-call rotation every fourth sprint." },
      ],
      technologies: ["SQL", "Python", "JIRA", "Confluence", ".NET/C#", "Azure Pipelines", "AWS S3", "UAT", "CI/CD", "Vendor Management"]
    },
    {
      company: "B&Q",
      position: "Customer Advisor (Part-Time)",
      location: "Dublin, Ireland",
      duration: "May 2025 – Present",
      logo: "B&Q",
      achievements: [
        { impact: "Balanced M.Sc. & Work", description: "Balanced part-time customer-facing duties with a full-time M.Sc., demonstrating reliability and effective time management under sustained pressure." },
        { impact: "Rapid Department Adaptation", description: "Adapted rapidly across multiple specialist departments, acquiring technical product knowledge and becoming a dependable point of contact within days of each transition." },
        { impact: "Informal Supervisory Role", description: "Frequently assumed informal supervisory responsibilities, supporting colleagues and serving as a go-to resource for complex or escalated queries across departments." },
        { impact: "Multilingual Customer Support", description: "Communicated across multiple languages to assist non-English-speaking customers, ensuring accurate advice and clear communication in diverse environments." },
      ],
      technologies: ["Customer Service", "Stakeholder Communication", "Time Management", "Multilingual Support", "Team Collaboration"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bridging technical delivery and stakeholder requirements across gaming, analytics, and customer-facing roles.
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-lg font-bold text-background shadow-lg overflow-hidden">
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-primary font-semibold text-lg"><Building2 className="w-4 h-4" />{exp.company}</div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{exp.duration}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{exp.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative">
                  <div className="hidden md:block space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                        <div className="flex-shrink-0 mt-1"><div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center"><TrendingUp className="w-4 h-4 text-primary" /></div></div>
                        <div className="space-y-2">
                          <div className="text-primary font-semibold text-lg">{achievement.impact}</div>
                          <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="md:hidden">
                    <Carousel opts={{ align: "start", loop: true }} className="w-full">
                      <CarouselContent className="-ml-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <CarouselItem key={achIndex} className="pl-2 basis-full">
                            <div className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                              <div className="flex-shrink-0 mt-1"><div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center"><TrendingUp className="w-4 h-4 text-primary" /></div></div>
                              <div className="space-y-2">
                                <div className="text-primary font-semibold text-lg">{achievement.impact}</div>
                                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Skills Used</h4>
                  <div className="flex flex-wrap gap-2">{exp.technologies.map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="text-xs">{tech}</Badge>)}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
