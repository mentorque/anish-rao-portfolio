import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, ClipboardList, ShieldCheck, Wrench } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Business Analysis",
      skills: ["Agile/Scrum", "Requirements Gathering (BRD/FRD)", "Process Mapping", "User Stories & Acceptance Criteria", "Gap & Root Cause Analysis", "UAT", "Stakeholder Management", "Backlog Prioritization"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data & BI",
      skills: ["Advanced SQL", "Power BI (DAX, Power Query)", "Tableau", "SSRS/SSIS", "ETL Architecture", "Data Warehousing", "Predictive Analytics", "ML Pipelines", "Explainable AI (SHAP)"]
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Programming & Cloud",
      skills: ["Python", "C#", ".NET", "R", "Django", "AWS S3", "Docker", "Git (Advanced)", "CI/CD Pipelines"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Languages",
      skills: ["JIRA", "Azure DevOps", "Confluence", "DataDog", "Figma", "Advanced Excel", "Cursor", "Claude", "English", "Hindi", "Punjabi", "Kannada", "Spanish (Basic)"]
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
            Business Analyst with 3 years bridging technical delivery and stakeholder requirements in the tech
            and gaming sectors — expert in SQL, Power BI, Python, process mapping, and backlog management.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Proven track record at DraftKings, where I scaled integration throughput from 150 to over 500 per sprint
                  and managed 20+ vendor relationships across 7 jurisdictions with zero escalations. Experienced in
                  capturing business and technical requirements, mapping As-Is/To-Be processes, and leading UAT cycles
                  to ensure financial data accuracy before each release.
                </p>
                <p>
                  Dublin-based and immediately available — combining hands-on technical delivery with structured
                  stakeholder management across regulated, high-volume environments.
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
            {["Requirements Engineering", "Vendor Management", "Data Validation", "Process Automation", "Explainable AI", "Cross-functional Delivery"].map((concept, index) => (
              <Badge key={index} variant="outline" className="text-sm px-4 py-2">{concept}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
