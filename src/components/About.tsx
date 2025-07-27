import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, MapPin, GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  const highlights = [
    "AI/ML Enthusiast with hands-on project experience",
    "Proficient in Python, C++, Java, and modern frameworks",
    "Experience with TensorFlow, PyTorch, and OpenCV",
    "Strong foundation in Computer Vision and NLP",
    "Completed virtual internship with Google AI-ML",
    "Active contributor to innovative tech projects"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about leveraging artificial intelligence to solve real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Personal info cards */}
          <div className="space-y-6 animate-fade-in">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Personal Info</h3>
                    <p className="text-muted-foreground">Get to know me better</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Tekkali, Srikakulam, Andhra Pradesh</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span>B.Tech in CSE (AI & ML)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Expected Graduation: 2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-primary transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Description */}
          <div className="animate-slide-in-right">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm <strong className="text-foreground">Namana Venkata Sai Prabhash</strong>, a dedicated Computer Science student 
                  specializing in Artificial Intelligence and Machine Learning at Aditya Institute of Technology and Management.
                </p>
              </div>

              <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My passion lies in developing intelligent systems that can make a meaningful impact. Through my academic 
                  journey and hands-on projects, I've gained expertise in machine learning algorithms, computer vision, 
                  natural language processing, and software development.
                </p>
              </div>

              <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I've worked on innovative projects like developing a crook detection system using advanced surveillance 
                  techniques and creating human tracking systems using WiFi signals. These experiences have strengthened 
                  my problem-solving abilities and technical skills.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">What drives me:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Innovation
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Problem Solving
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Continuous Learning
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Technology Impact
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;