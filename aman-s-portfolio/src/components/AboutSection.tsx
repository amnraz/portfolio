import { useState } from 'react';
import { GraduationCap, Briefcase, User } from 'lucide-react';

const tabs = [
  { id: 'about', label: 'About', icon: User },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: Briefcase },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-muted aspect-[4/5]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-6xl font-display font-bold text-gradient">AK</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-xl">
              <p className="text-4xl font-bold text-primary mb-1">BCA</p>
              <p className="text-sm text-muted-foreground">Currently Pursuing</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="section-title">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Why hire me for your{' '}
              <span className="text-gradient">next project?</span>
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              {activeTab === 'about' && (
                <div className="animate-fade-up">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm a highly motivated professional with a strong work ethic, adaptability, and exceptional interpersonal skills. Skilled at taking on new challenges, learning quickly, and working effectively both independently and in team environments.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dedicated to delivering high-quality results with strong time-management and multitasking abilities. I specialize in front-end development, React components, responsive UI design, and API integration.
                  </p>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-4 animate-fade-up">
                  <div className="bg-secondary/50 rounded-xl p-4">
                    <p className="text-primary font-medium">Bachelor of Computer Applications (BCA)</p>
                    <p className="text-foreground">FS University, Shikohabad, UP, India</p>
                    <p className="text-sm text-muted-foreground">Currently Pursuing</p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-4">
                    <p className="text-primary font-medium">Intermediate (Commerce)</p>
                    <p className="text-foreground">Sr. LS International Public School</p>
                    <p className="text-sm text-muted-foreground">Kannauj, UP, India</p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-4">
                    <p className="text-primary font-medium">High School Diploma</p>
                    <p className="text-foreground">Sr. LS International Public School</p>
                    <p className="text-sm text-muted-foreground">Kannauj, UP, India</p>
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-4 animate-fade-up">
                  <div className="bg-secondary/50 rounded-xl p-4">
                    <p className="text-primary font-medium">Front-End Developer</p>
                    <p className="text-foreground">Freelance Projects</p>
                    <p className="text-sm text-muted-foreground">Building responsive web applications with React</p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-4">
                    <p className="text-primary font-medium">Personal Projects</p>
                    <p className="text-foreground">Self-Learning & Development</p>
                    <p className="text-sm text-muted-foreground">Continuously improving skills through hands-on projects</p>
                  </div>
                </div>
              )}
            </div>

            <a href="#contact" className="btn-primary inline-block mt-6">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
