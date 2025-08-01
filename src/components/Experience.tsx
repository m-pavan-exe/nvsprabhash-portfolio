import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Qualivon Technologies",
      period: "May 2024",
      type: "Internship",
      description: "Advanced Human Tracking System Through Walls Utilizing the Power of Wi-Fi. Focused on using Wi-Fi and State Information (CSI) and ML Toolbox in MATLAB to detect and track human presence through walls.",
      skills: ["MATLAB", "Machine Learning", "Wi-Fi Analysis", "Signal Processing"]
    },
    {
      title: "Google AI-ML Virtual Internship",
      company: "AICTE, EduSkills supported by Google for Developers",
      period: "Apr - Jun 2024",
      type: "Virtual Internship",
      description: "Gained hands-on experience developing machine learning models using Scikit-Learn framework. Focused on practical applications of AI and ML technologies.",
      skills: ["Machine Learning", "Scikit-Learn", "Python", "AI Development"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Internships and practical experience in AI/ML development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-primary transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Building className="h-4 w-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20 w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-surface-variant text-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
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
