import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Brain, Target, X, BarChart3 } from "lucide-react";
import { useState } from "react";

type Project = {
  title: string;
  subtitle?: string;
  period?: string;
  description: string;
  icon: JSX.Element;
  technologies: string[];
  category: string;
  gradient: string;
  linkUrl: string;
  hideExternalButton?: boolean;
  imageUrl?: string;
  actionLabel?: string;
  overview?: string;
  problem?: string;
  role?: string;
  solution?: string;
  impact?: string[];
  learnings?: string[];
  media: { images: string[]; videos: string[] };
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Business Intelligence & ETL Solution for NYC Taxi Operations",
      description: "Built a Star Schema data warehouse and automated SSIS ETL pipeline processing 2.8M+ trip records with data validation, null handling, and batch processing, achieving a 95% successful load rate.",
      icon: <BarChart3 className="w-8 h-8" />,
      technologies: ["SSIS", "Tableau", "SSRS", "Neo4j", "SQL Server", "Star Schema", "ETL", "Data Warehousing"],
      category: "Data Engineering",
      gradient: "from-amber-500 to-yellow-500",
      linkUrl: "https://www.linkedin.com/in/anishrao86",
      hideExternalButton: true,
      overview: "End-to-end BI and ETL solution for NYC taxi operations, combining data warehousing, automated pipelines, and executive reporting.",
      problem: "Large-scale taxi trip data required structured warehousing, reliable ETL processing, and executive-ready insights across operational and strategic stakeholders.",
      role: "Designed the Star Schema data warehouse, built the SSIS ETL pipeline with validation and batch processing, developed nine Tableau dashboards and SSRS reports, and benchmarked Neo4j against SQL Server across seven query types.",
      solution: "Automated SSIS ETL pipeline processing 2.8M+ trip records with validation and null handling, paired with Tableau dashboards and SSRS reports aligned to KPI requirements for C-suite and operational teams.",
      impact: [
        "Achieved 95% successful load rate across 2.8M+ trip records",
        "Developed nine executive-level Tableau dashboards and parameterised SSRS reports",
        "Produced a Neo4j vs SQL Server benchmark informing data platform decisions",
      ],
      media: { images: [], videos: [] },
    },
    {
      title: "Cross-Industry Churn Prediction & Explainable AI",
      subtitle: "M.Sc. Dissertation",
      description: "Built end-to-end machine learning pipelines in Python to identify at-risk customers in B2B Telecom and B2C Insurance sectors, applying SHAP values to reveal churn drivers and translate outputs into ROI-focused recommendations.",
      icon: <Brain className="w-8 h-8" />,
      technologies: ["Python", "SHAP", "Machine Learning", "GitHub Copilot", "Claude", "Cursor", "Explainable AI"],
      category: "M.Sc. Dissertation",
      gradient: "from-emerald-500 to-teal-500",
      linkUrl: "https://www.linkedin.com/in/anishrao86",
      hideExternalButton: true,
      overview: "Dissertation project building interpretable churn prediction models with explainable AI, enabling non-technical stakeholders to understand drivers and support business decisions.",
      problem: "High-accuracy churn models often lack interpretability — stakeholders need to understand why customers leave, not just that they will.",
      role: "Built end-to-end ML pipelines in Python for B2B Telecom and B2C Insurance, prioritised explainability using SHAP values, and developed AI-assisted debugging and documentation tools using GitHub Copilot, Claude, and Cursor.",
      solution: "Interpretable models with SHAP-based explanations translating churn predictions into ROI-focused recommendations for business stakeholders.",
      impact: [
        "Identified at-risk customers across B2B Telecom and B2C Insurance sectors",
        "Applied SHAP values to reveal churn drivers for non-technical stakeholders",
        "Demonstrated practical AI integration for debugging, test-case generation, and documentation",
      ],
      learnings: [
        "Explainability is as critical as accuracy when translating ML outputs into business action.",
        "AI-assisted tooling accelerates iteration without replacing structured analytical rigour.",
      ],
      media: { images: [], videos: [] },
    },
    {
      title: "FIFA Player Recruitment Dashboard",
      subtitle: "Tableau vs Power BI Comparative Study",
      description: "Built identical five-visualisation recruitment dashboards in Tableau and Power BI, including scatter plots, treemaps, donut charts, radar charts, and bar charts, with cross-visual filtering and dynamic parameter controls.",
      icon: <Target className="w-8 h-8" />,
      technologies: ["Tableau", "Power BI", "Data Modelling", "Dashboard Design", "Comparative Analysis", "UX Evaluation"],
      category: "BI Comparative Study",
      gradient: "from-purple-500 to-pink-500",
      linkUrl: "https://www.linkedin.com/in/anishrao86",
      hideExternalButton: true,
      overview: "Comparative BI study building identical recruitment dashboards in Tableau and Power BI to deliver an evidence-based tooling recommendation.",
      problem: "Organisations need objective criteria to select BI platforms — customisation, data modelling, interactivity, and UX must be evaluated on equal footing.",
      role: "Built identical five-visualisation dashboards in both Tableau and Power BI with cross-visual filtering and dynamic parameters, then authored a structured evaluation report comparing both tools.",
      solution: "Side-by-side dashboards with scatter plots, treemaps, donut charts, radar charts, and bar charts, paired with a structured evaluation on customisation, data modelling, interactivity, and UX.",
      impact: [
        "Delivered evidence-based BI tooling recommendation across Tableau and Power BI",
        "Demonstrated advanced visualisation and interactivity capabilities in both platforms",
      ],
      media: { images: [], videos: [] },
    },
  ];

  const getGradientClasses = (gradient: string) => `bg-gradient-to-br ${gradient}`;

  return (
    <section id="projects" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Selected academic and professional projects demonstrating data engineering, explainable AI, and BI expertise.
          </p>
        </div>

        <div className="relative">
          <Carousel opts={{ align: "start", loop: false, startIndex: 0 }} className="w-full md:px-12">
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => {
                const hasCaseStudy = Boolean(
                  project.overview || project.imageUrl ||
                  project.media.images.length > 0 || project.media.videos.length > 0
                );
                return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/2">
                  <div className="h-full min-h-[600px]">
                    <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${getGradientClasses(project.gradient)} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                            {project.period && <span className="text-xs text-muted-foreground">{project.period}</span>}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient transition-colors">{project.title}</h3>
                          {project.subtitle && <p className="text-xs md:text-sm text-muted-foreground mt-1">{project.subtitle}</p>}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 md:space-y-6 flex-grow flex flex-col px-4 md:px-6">
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{project.description}</p>
                      <div className="flex-grow">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Skills Used</h4>
                        <div className="flex flex-wrap gap-2 min-h-[60px]">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3 pt-4 mt-auto">
                        {hasCaseStudy && (
                          <Button variant="secondary" size="sm" className="w-full" onClick={() => setActiveProject(project)}>
                            View Full Case Study
                          </Button>
                        )}
                        {!project.hideExternalButton && (
                          <Button variant="outline" size="sm" className="w-full" type="button" onClick={(e) => e.preventDefault()}>
                            <ExternalLink className="w-4 h-4" />
                            {project.actionLabel || "View Project"}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )})}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-2 lg:-left-4 top-1/2 -translate-y-1/2 h-12 w-12 [&_svg]:h-8 [&_svg]:w-8" />
            <CarouselNext className="hidden md:flex -right-2 lg:-right-4 top-1/2 -translate-y-1/2 h-12 w-12 [&_svg]:h-8 [&_svg]:w-8" />
          </Carousel>
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {projects.map((_, index) => <div key={index} className="w-2 h-2 rounded-full bg-muted-foreground/30" />)}
          </div>
        </div>

        <div className="text-center mt-16">
          <Card className="card-gradient border-primary/20 shadow-elevated max-w-2xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
                Interested in <span className="text-gradient">Collaboration?</span>
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                Dublin-based and immediately available for business analysis, data analytics, and cross-functional delivery roles.
              </p>
              <div className="flex justify-center">
                <Button variant="gradient" size="lg" asChild>
                  <a href="mailto:anish.rao888@gmail.com">Get In Touch</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActiveProject(null)}>
          <div className="relative w-full max-w-4xl rounded-xl border border-primary/20 bg-background p-4 md:p-6 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="absolute right-2 top-2 md:right-3 md:top-3 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setActiveProject(null)} aria-label="Close">
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-5">
              <div className="pr-10">
                <Badge variant="secondary" className="mb-2 text-xs">{activeProject.category}</Badge>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{activeProject.title}</h3>
                {activeProject.subtitle && <p className="text-sm text-muted-foreground mt-1">{activeProject.subtitle}</p>}
                {activeProject.period && <p className="text-sm text-muted-foreground mt-1">{activeProject.period}</p>}
              </div>

              <p className="text-sm md:text-base text-muted-foreground">{activeProject.description}</p>
              {activeProject.overview && (
                <div className="space-y-3 rounded-lg border border-primary/20 bg-background/60 p-4">
                  {[
                    ["Overview", activeProject.overview],
                    ["The Problem", activeProject.problem],
                    ["My Role", activeProject.role],
                    ["The Solution", activeProject.solution],
                  ].map(([label, text]) => text ? (
                    <div key={label as string}>
                      <h4 className="text-sm font-semibold text-foreground mb-1">{label}</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{text}</p>
                    </div>
                  ) : null)}
                  {activeProject.impact?.length ? (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Impact</h4>
                      <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                        {activeProject.impact.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  ) : null}
                  {activeProject.learnings?.length ? (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Key Learnings</h4>
                      <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                        {activeProject.learnings.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
