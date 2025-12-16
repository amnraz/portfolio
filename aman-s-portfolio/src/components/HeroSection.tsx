import { ArrowDown } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4 animate-fade-up opacity-0 stagger-1">
              Hello, I'm
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-up opacity-0 stagger-2">
              <span className="text-foreground">Aman</span>
              <br />
              <span className="text-gradient">Kumar</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-up opacity-0 stagger-3">
              Full Stack Developer  
            </p>
            <p className="text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 animate-fade-up opacity-0 stagger-4">
              Highly motivated professional with a strong work ethic, adaptability, and exceptional interpersonal skills. Dedicated to delivering high-quality results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up opacity-0 stagger-5">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative animate-fade-up opacity-0 stagger-4 hidden lg:block">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative ring */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-glow" />
              {/* Profile photo */}
              <div className="aspect-square rounded-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Aman Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              {/* <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 animate-float">
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="text-2xl font-bold text-primary">1+ Year</p>
              </div>
              <div className="absolute -top-4 -left-4 bg-card border border-border rounded-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <p className="text-sm text-muted-foreground">Projects</p>
                <p className="text-2xl font-bold text-primary">5+</p>
              </div> */
              }
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
