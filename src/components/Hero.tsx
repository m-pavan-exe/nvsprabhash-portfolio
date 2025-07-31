import { Button } from '@/components/ui/button';
import { ArrowDown, ChevronDown } from 'lucide-react';
import ProfileImage from './ProfileImage';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Large outline text background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[15vw] lg:text-[12vw] font-black opacity-5 leading-none tracking-wider text-foreground/10"
            style={{ 
              WebkitTextStroke: '1px hsl(var(--foreground) / 0.1)',
              color: 'transparent'
            }}>
          PRABHASH
        </h1>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left space-y-6 animate-fade-in lg:pl-16">
              {/* Greeting */}
              <p className="text-lg md:text-xl text-primary font-mono">
                Hello there, I'm
              </p>
              
              {/* Name */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
                Prabhash.
              </h1>
              
              {/* Tagline */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                I build things for the web.
              </h2>
              
              {/* Bio */}
              <p className="text-lg text-secondary max-w-2xl leading-relaxed mt-8">
                I'm a passionate full-stack developer specializing in building exceptional digital experiences. 
                Currently focused on creating innovative web applications with modern technologies and clean, 
                user-centered design.
              </p>
              
              {/* CTA Button */}
              <div className="mt-12">
                <Button 
                  onClick={() => scrollToSection('#projects')}
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 px-8 py-6 text-lg font-mono"
                >
                  View My Work
                </Button>
              </div>
            </div>
            
            {/* Profile Image - Center Right */}
            <div className="flex justify-center lg:justify-end">
              <ProfileImage />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center text-secondary hover:text-primary transition-colors duration-300"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;