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
          SEOHO
        </h1>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 text-left animate-fade-in order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl text-foreground font-medium mb-4 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                你好👋，<br />
                我是三秋十季
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4 opacity-60 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                A BRAVE CLIMBER IN THE WORLD OF PRODUCT DESIGN
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
                —个在产品设计届务力攀登的新生
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed animate-fade-in mt-2" style={{ animationDelay: '0.8s' }}>
                拥有一颗童无边界的好奇心和一般心无旁骛的探索力
              </p>
              <p className="text-xs text-muted-foreground opacity-60 mt-4 animate-fade-in" style={{ animationDelay: '1s' }}>
                这句话来自草帽Smao
              </p>
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

          {/* Right side - Additional content or controls */}
          <div className="flex-1 flex flex-col items-start space-y-4 order-3 lg:order-3">
            <div className="text-xs text-muted-foreground animate-fade-in" style={{ animationDelay: '1.2s' }}>
              注：
            </div>
            <button className="px-4 py-2 bg-navy-accent text-navy-dark rounded text-sm font-medium animate-fade-in" style={{ animationDelay: '1.4s' }}>
              分享原因
            </button>
            <div className="text-xs text-muted-foreground space-y-2 animate-fade-in" style={{ animationDelay: '1.6s' }}>
              <p>如果画面有遮挡</p>
              <p>请按下「F键」全屏获得最佳感受</p>
              <p>按「Z键」调整适合的视图大小</p>
              <br />
              <p>所有需跳转外链的地址都需要再次点击跳</p>
              <p>转页中间的链接，这是Figma原型的不可避的</p>
              <p>问题。</p>
              <br />
              <p>beta演示版，不代表最终效果。</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center text-muted-foreground hover:text-navy-accent transition-colors duration-300"
          >
            <span className="text-sm mb-2">101%</span>
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;