import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Eye } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-navy-dark">
      {/* Large outline text background like "SEOHO" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[20vw] font-black text-outline-text opacity-10 leading-none tracking-wider"
            style={{ 
              WebkitTextStroke: '2px hsl(var(--outline-stroke))',
              color: 'transparent'
            }}>
          PRABHASH
        </h1>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 text-left animate-fade-in order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl text-foreground font-medium mb-4 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                Hello 👋,<br />
                I'm Prabhash
              </h2>
            </div>
          </div>

          {/* Center - Profile photo with circular sky background */}
          <div className="flex justify-center animate-scale-in order-1 lg:order-2" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Sky background circle */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-sky relative overflow-hidden shadow-glow">
                {/* Cloud elements */}
                <div className="absolute top-1/4 left-1/4 w-20 h-12 bg-white rounded-full opacity-80"></div>
                <div className="absolute top-1/4 left-1/3 w-16 h-10 bg-white rounded-full opacity-60"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-14 bg-white rounded-full opacity-70"></div>
                <div className="absolute bottom-1/4 right-1/3 w-18 h-12 bg-white rounded-full opacity-50"></div>
                
                {/* User's profile image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/57ea3601-e768-4c5f-a872-a04b0581b8ad.png" 
                    alt="Profile Photo" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Empty for clean layout */}
          <div className="flex-1 order-3 lg:order-3">
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center text-muted-foreground hover:text-navy-accent transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;