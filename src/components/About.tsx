import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, ClipboardList, ShieldCheck, Wrench } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Business Analysis",
      skills: ["Requirements Gathering (BRD/FRD)", "Stakeholder Management", "Process Mapping (As-Is/To-Be)", "User Stories & Acceptance Criteria", "UAT", "Gap & Root Cause Analysis", "Agile/Scrum", "Backlog Prioritisation"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data & BI",
      skills: ["Advanced SQL", "Power BI (DAX, Power Query)", "Tableau", "KPI Dashboards & Visual Reporting", "Advanced Excel", "Predictive Analytics", "Explainable AI (SHAP)", "ETL & Data Warehousing"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Languages",
      skills: ["JIRA", "Confluence", "Figma", "Lucidchart", "DataDog", "AI-assisted workflows (Copilot, Claude, Cursor)", "English", "Hindi", "Punjabi", "Kannada", "Spanish (Basic)"]
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Programming & Cloud",
      skills: ["Python", "R", "C#", ".NET", "Django", "Git", "CI/CD (Azure Pipelines)", "Docker", "AWS S3"]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I work where product, operations and engineering meet in the tech and gaming sectors, turning stakeholder needs into requirements, process maps, KPI dashboards and recommendations, using SQL, Power BI, Tableau and Python.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At DraftKings I was the main contact for 20+ game vendors across 7 regulated markets, scaling delivery from ~150 to 500+ game integrations per sprint with zero escalations. Day to day that meant gathering requirements (BRDs/FRDs), mapping As-Is/To-Be processes, and running UAT across Web, iOS and Android, using SQL to trace issues before go-live.
                </p>
                <p>
                  That work led to two promotions and, after the Golden Nugget Online Gaming launch, a written commendation from DraftKings engineering management. With a First Class Honours M.Sc. in Data Analytics; Dublin-based and available immediately.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            Areas of <span className="text-gradient">Expertise</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary group-hover:text-accent transition-colors">{category.icon}</div>
                    <h4 className="font-bold text-lg">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-4 text-muted-foreground">Core Concepts</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {["Stakeholder Communication", "Vendor Management", "Process Improvement", "Documentation & Knowledge Sharing", "Cross-Functional Delivery", "Translating Between Technical & Non-Technical Teams"].map((concept, index) => (
              <Badge key={index} variant="outline" className="text-sm px-4 py-2">{concept}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
