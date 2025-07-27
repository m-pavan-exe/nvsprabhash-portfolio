import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';
import crookDetectionImg from '@/assets/project-crook-detection.jpg';
import wifiTrackingImg from '@/assets/project-wifi-tracking.jpg';
import mlToolboxImg from '@/assets/project-ml-toolbox.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Crook Detection System",
      description: "This project features training a machine learning model using deep learning to continuously process feeds from a cash counter camera in real-time with computer vision techniques. The model was designed to detect suspicious activity in the area of a sensor behind the counter or making unauthorized entry that could indicate potential theft and generate alerts to administrators should this AI-driven surveillance system achieved an accuracy rate of 95 persons. To improve the system to identify between known customers, store employees or regular patrons and unknown individuals.",
      image: crookDetectionImg,
      technologies: ["Python", "Deep Learning", "Computer Vision", "Real-time Processing", "OpenCV"],
      period: "May 2023 - Jul 2023",
      highlights: [
        "95% accuracy in detecting suspicious activities",
        "Real-time processing of camera feeds",
        "AI-driven surveillance system",
        "Alert generation for administrators"
      ],
      githubUrl: "https://github.com/NVS-PRABHASH",
      liveUrl: "#"
    },
    {
      title: "Human Detection and Tracking Through Walls Using WiFi",
      description: "Designed and developed a non-intrusive system that detect and track human presence through walls using Wi-Fi Channel State Information (CSI). The project utilizes advanced machine learning, Using RCNN models for enhanced localization along with LSTM, and analyzes Wi-Fi signals to infer movement and estimates poses. The low-cost solution enhances security, surveillance, and emergency response applications by leveraging existing Wi-Fi infrastructure, in achieving reliable human tracking without line-of-sight. The system minimizes false positives through advanced signal processing, ensuring robust performance in diverse environments, reducing reliance on invasive monitoring systems.",
      image: wifiTrackingImg,
      technologies: ["Wi-Fi CSI", "RCNN", "LSTM", "Signal Processing", "Machine Learning"],
      period: "Dec 2022 - Jan 2025",
      highlights: [
        "Non-intrusive human detection through walls",
        "Uses existing Wi-Fi infrastructure",
        "Advanced signal processing techniques",
        "Robust performance in diverse environments"
      ],
      githubUrl: "https://github.com/NVS-PRABHASH",
      liveUrl: "#"
    },
    {
      title: "Machine Learning Toolbox - MATLAB",
      description: "Advanced Human Tracking System Through Walls Utilizing the Power of Wi-Fi. Focused on using Wi-Fi and State Information (CSI) and ML Toolbox in MATLAB to detect and track human presence through walls. The work included simulating RCNN models for human detection, presenting a low-cost, nonintrusive solution for security, surveillance, and emergency response scenarios. Additionally, it aimed technical experimentation, data analysis, and innovation to enhance the accuracy and reliability of indoor human tracking systems using Wi-Fi infrastructure.",
      image: mlToolboxImg,
      technologies: ["MATLAB", "Machine Learning", "Wi-Fi Analysis", "RCNN", "Data Analysis"],
      period: "May 2024",
      highlights: [
        "MATLAB-based ML implementation",
        "Wi-Fi signal analysis and processing",
        "RCNN model simulation",
        "Enhanced tracking accuracy"
      ],
      githubUrl: "https://github.com/NVS-PRABHASH",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions combining AI, machine learning, and cutting-edge technology
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-primary transition-all duration-500 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r"></div>
                </div>

                {/* Project Content */}
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {project.period}
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-3 text-primary">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-primary">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                      <Button 
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            asChild
          >
            <a href="https://github.com/NVS-PRABHASH" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Visit My GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;