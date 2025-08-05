import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import aiLogo from '@/assets/ai-ml-logo.png';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile && isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, isMenuOpen]);

  const navItems = [
    { label: '01. About', href: '#about' },
    { label: '02. Experience', href: '#experience' },
    { label: '03. Work', href: '#projects' },
    { label: '04. Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-card' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Avatar className="h-10 w-10">
            <AvatarImage src={aiLogo} alt="AI/ML Logo" />
            <AvatarFallback className="text-primary font-mono font-bold">AI</AvatarFallback>
          </Avatar>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-secondary hover:text-primary transition-colors duration-200 relative group font-mono text-sm"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Resume Button */}
          <div className="hidden md:flex items-center">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 font-mono"
              asChild
            >
              <a href="https://github.com/m-pavan-exe/nvsprabhash-portfolio/blob/main/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden touch-none select-none min-h-[44px] min-w-[44px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-border animate-fade-in z-40 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-6 py-4 text-secondary hover:text-primary hover:bg-muted transition-all duration-200 font-mono min-h-[44px] active:bg-muted/80"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Resume button for mobile */}
              <div className="px-6 py-4">
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 font-mono min-h-[44px]"
                  asChild
                >
                  <a href="https://github.com/m-pavan-exe/nvsprabhash-portfolio/blob/main/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-border">
                <Button variant="ghost" size="icon" className="min-h-[44px] min-w-[44px]" asChild>
                  <a href="https://github.com/NVS-PRABHASH" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="min-h-[44px] min-w-[44px]" asChild>
                  <a href="https://www.linkedin.com/in/nvs-prabhash" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="min-h-[44px] min-w-[44px]" asChild>
                  <a href="mailto:prabhasnvs@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
