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
  modalDescription?: string;
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
      title: "NYC Taxi Operations Analytics",
      description: "Analysed 2.8M+ NYC taxi trips to guide driver deployment and revenue planning across 266 zones, turning raw trip data into 9 dashboards and reports for executive, operational and strategic stakeholders.",
      modalDescription: "Analysed 2.8M+ New York taxi trips to answer a core operations question: where should drivers be, and when? Built 9 dashboards and reports for executive, operational and strategic stakeholders, surfacing demand, trip-length and payment patterns across 266 zones.",
      icon: <BarChart3 className="w-8 h-8" />,
      technologies: ["Tableau", "SQL Server", "SSRS", "SSIS", "ETL", "Data Warehousing", "Star Schema", "Neo4j"],
      category: "Business Intelligence",
      gradient: "from-amber-500 to-yellow-500",
      linkUrl: "https://www.linkedin.com/in/anishrao86",
      hideExternalButton: true,
      overview: "A business intelligence build for NYC taxi operations: one reporting layer serving three stakeholder groups, from fleet managers to executives, on top of a data warehouse and automated data loading.",
      problem: "2.8M+ monthly trips produce raw data nobody can act on directly. Fleet managers needed to know when and where demand concentrates, technology managers needed evidence for payment investment, and executives needed daily KPIs, all from the same source data.",
      role: "Defined the KPI and reporting requirements for each stakeholder group, built the 9 Tableau dashboards and parameterised SSRS reports against them, and designed the SQL Server warehouse and automated SSIS pipeline underneath. Benchmarked Neo4j against SQL Server across seven query types and wrote the technology-selection recommendation.",
      solution: "An automated pipeline loading 2.8M+ records with validation and null handling (95% first-pass success), feeding interactive, cross-filtered dashboards covering trip volume patterns, trip-duration bands, payment preferences and tipping by district.",
      impact: [
        "Demand concentrates on weekday evenings with a distinct weekend pattern, feeding driver scheduling recommendations",
        "66% of trips run under 15 minutes, shaping fleet-productivity and service-level planning",
        "District-level differences in tipping and cash-vs-card use guided driver deployment and payment-investment recommendations",
        "Neo4j vs SQL Server benchmark produced an evidence-based platform recommendation",
      ],
      media: { images: [], videos: [] },
    },
    {
      title: "Cross-Industry Churn Prediction with Explainable AI",
      subtitle: "B2B Telecom & B2C Insurance",
      description: "Built and compared six machine-learning models to flag customers likely to leave telecom and insurance providers, using explainable AI to show stakeholders why each customer was flagged, and testing whether churn insights transfer between industries.",
      icon: <Brain className="w-8 h-8" />,
      technologies: ["Explainable AI (SHAP)", "Python", "Machine Learning", "Streamlit", "GitHub Copilot", "Claude", "Cursor"],
      category: "M.Sc. Dissertation",
      gradient: "from-emerald-500 to-teal-500",
      linkUrl: "https://www.linkedin.com/in/anishrao86",
      hideExternalButton: true,
      overview: "Dissertation research with a practical brief: make churn prediction something a retention team can act on, in two industries with very different customers, B2B telecom and B2C insurance.",
      problem: "Churn models are usually judged on accuracy, but a prediction nobody can explain doesn't change a retention decision. Stakeholders need to know why a customer is at risk, not just that they are. And because most models are built for a single sector, it's rarely clear whether the drivers found in one industry hold in another.",
      role: "Designed and ran the full comparison: six algorithms trained on both industries, thresholds tuned for each, explainability applied so every flagged customer came with its reasons. Built a web app on top so users could score single customers or whole files without touching code, and used AI tooling (GitHub Copilot, Claude) for debugging, test-case generation and documentation through the build.",
      solution: "Interpretable models with SHAP-based explanations, turned into retention recommendations per industry and a working prediction tool rather than a report that ends at accuracy numbers.",
      impact: [
        "Correctly identified 64% of insurance customers who went on to leave",
        "Found vehicle age predicted cancellations better than claims history, pointing retention at asset-based segmentation rather than claims behaviour",
        "Showed churn drivers differ by business model: subscription activity and revenue in B2B telecom, customer and asset characteristics in B2C insurance",
        "Turned the models into a live web app for single and batch predictions with confidence scores",
      ],
      learnings: [
        "Explainability matters as much as accuracy when model output has to become a business action",
        "Model performance depended more on data characteristics, sample size and class balance, than on algorithm choice",
        "AI-assisted tooling speeds iteration without replacing structured analytical rigour",
      ],
      media: { images: [], videos: [] },
    },
    {
      title: "FIFA Player Recruitment Dashboards",
      subtitle: "Tableau vs Power BI",
      description: "Built identical player-recruitment dashboards in Tableau and Power BI to test both platforms on the same scouting brief, ending in an evidence-based recommendation on which tool fits which job.",
      modalDescription: "Built identical five-visualisation recruitment dashboards in Tableau and Power BI, with cross-visual filtering and dynamic parameter controls, to answer a question organisations rarely test properly: which BI tool actually fits the brief?",
      icon: <Target className="w-8 h-8" />,
      technologies: ["Tableau", "Power BI", "Data Modelling", "Dashboard Design", "Comparative Analysis", "UX Evaluation"],
      category: "BI Comparative Study",
      gradient: "from-purple-500 to-pink-500",
      linkUrl: "https://www.linkedin.com/in/anishrao86",
      hideExternalButton: true,
      overview: "A comparative BI study, the same data, the same dashboard, built twice, ending in an evidence-based tooling recommendation.",
      problem: "Organisations choosing a BI platform rarely have like-for-like evidence. Customisation, data modelling, interactivity and UX need evaluating on equal footing before committing to licences and training, not after.",
      role: "Built both dashboards in full, scatter plots, treemaps, donut charts, radar charts and bar charts, with cross-visual filtering and parameter-driven player comparison, then wrote the structured evaluation comparing the two builds.",
      solution: "Side-by-side dashboards supporting scouting and contract decisions, paired with a written evaluation across customisation depth, data modelling, interactivity and UX.",
      impact: [
        "Recommended Tableau for this brief on customisation depth, tooltip control and dashboard assembly, while crediting Power BI's stronger native visuals and Power Query data modelling for standard reporting",
        "Showed advanced interactivity replicated in both platforms: cross-filtering, dynamic titles, parameter-driven comparisons",
      ],
      learnings: [
        "Neither tool wins outright; the right choice depends on the requirements in front of you",
        "Building the same thing twice exposes platform limits faster than any feature checklist",
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
                  <a href="mailto:rao.anish.ie@gmail.com">Get In Touch</a>
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

              <p className="text-sm md:text-base text-muted-foreground">{activeProject.modalDescription || activeProject.description}</p>
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
