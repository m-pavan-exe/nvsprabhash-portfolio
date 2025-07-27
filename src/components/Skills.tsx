import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 },
        { name: "JavaScript", level: 70 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 85 },
        { name: "OpenCV", level: 80 },
        { name: "Keras", level: 85 }
      ]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: [
        { name: "MySQL", level: 75 },
        { name: "Git", level: 85 },
        { name: "Power BI", level: 70 },
        { name: "Excel", level: 80 },
        { name: "MATLAB", level: 75 }
      ]
    },
    {
      title: "Operating Systems",
      icon: Wrench,
      skills: [
        { name: "Windows", level: 90 },
        { name: "Linux", level: 75 },
        { name: "Android Development", level: 65 }
      ]
    }
  ];

  const certifications = [
    "Java Full Stack Development - Wipro",
    "ML Foundations - AWS Academy",
    "Google AI-ML Virtual Internship - AICTE",
    "Prompt Engineering - DeepLearning.AI",
    "LLMs and Automation Tools"
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return "bg-primary";
    if (level >= 75) return "bg-primary-glow";
    return "bg-primary/70";
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical skills and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-white/10 backdrop-blur-md border-primary/20 hover:shadow-primary transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="bg-primary/10 rounded-lg p-3 text-center border border-primary/20 backdrop-blur-sm">
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="animate-fade-in">
          <Card className="bg-white/10 backdrop-blur-md border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Certifications & Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-primary/10 backdrop-blur-sm text-primary border-primary/20 px-4 py-2 text-sm hover:bg-primary/20 transition-colors duration-200"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technology Stack */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Python", "TensorFlow", "PyTorch", "OpenCV", "React", "Node.js",
              "MySQL", "Git", "Docker", "AWS", "MATLAB", "Scikit-learn"
            ].map((tech, index) => (
              <div 
                key={tech}
                className="bg-white/10 backdrop-blur-sm border border-primary/20 rounded-lg p-4 text-center hover:bg-primary/10 hover:shadow-glow transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="font-medium text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;