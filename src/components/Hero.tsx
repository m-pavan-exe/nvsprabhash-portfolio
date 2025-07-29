import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Eye } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Minimal Professional Background Animation with Pink Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient orbs with pink accents */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full animate-subtle-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-pink/6 to-transparent rounded-full animate-subtle-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-radial from-pink-light/8 to-transparent rounded-full animate-subtle-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Minimal line elements with pink accents */}
        <div className="absolute top-20 left-20 w-px h-32 bg-gradient-to-b from-primary/20 to-transparent animate-fade-in" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-20 w-24 h-px bg-gradient-to-r from-pink/20 to-transparent animate-fade-in" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-12 w-px h-24 bg-gradient-to-b from-pink-light/20 to-transparent animate-fade-in" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <h2 className="text-lg md:text-xl text-primary font-medium mb-2 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-pink-light to-accent bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-move animate-scale-in" style={{ animationDelay: '0.4s' }}>
                NVS Prabhash
              </h1>
              <h3 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                AI/ML Engineer & Software Developer
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in" style={{ animationDelay: '0.8s' }}>
              B.Tech in Computer Science with specialization in AI & Machine Learning. 
              Passionate about building intelligent systems and innovative solutions 
              using cutting-edge technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '1s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-accent hover:shadow-pink transition-all duration-300 transform hover:scale-105 text-white"
                onClick={() => scrollToSection('#projects')}
              >
                <Eye className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Profile photo */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-glow border-4 border-primary/20 animate-glow">
                <img 
                  src={profilePhoto} 
                  alt="NVS Prabhash - Profile Photo" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements around photo with pink accents */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink rounded-full animate-float shadow-pink" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-pink-light rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-light/70 rounded-sm animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;