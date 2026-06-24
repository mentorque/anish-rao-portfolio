import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    { title: "Power BI Data Analyst Associate", issuer: "Microsoft", year: "Certified", icon: <Award className="w-8 h-8" />, gradient: "from-blue-500 to-cyan-500" },
    { title: "Business Analyst Professional", issuer: "IBM (Coursera)", year: "Certified", icon: <Award className="w-8 h-8" />, gradient: "from-green-500 to-emerald-500" },
    { title: "Data Analytics Professional", issuer: "Google (Coursera)", year: "Certified", icon: <Award className="w-8 h-8" />, gradient: "from-purple-500 to-pink-500" },
    { title: "Advanced Tableau", issuer: "Udemy", year: "Certified", icon: <Award className="w-8 h-8" />, gradient: "from-orange-500 to-red-500" },
    { title: "Statistics for Data Science & Business Analytics", issuer: "Udemy", year: "Certified", icon: <Award className="w-8 h-8" />, gradient: "from-amber-500 to-yellow-500" },
    { title: "Python Certification", issuer: "NPTEL", year: "Certified", icon: <Award className="w-8 h-8" />, gradient: "from-indigo-500 to-violet-500" },
    { title: "Forward Leadership & Problem Solving", issuer: "McKinsey", year: "Certified", icon: <Award className="w-8 h-8" />, gradient: "from-rose-500 to-orange-500" },
  ];

  return (
    <section id="certifications" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications across business analysis, data analytics, and BI tooling.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>{cert.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">{cert.issuer}</Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="w-3 h-3" />{cert.year}</div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors">{cert.title}</h3>
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

export default Certifications;
