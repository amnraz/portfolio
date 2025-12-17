import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Pig Game",
    category: "JavaScript Game",
    description:
      "A dice-based score game built using HTML, CSS, and JavaScript. Features turn-based logic, score tracking, and interactive UI with responsive layout.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Health Tracking App",
    category: "Web Application",
    description:
      "A small health-tracking web app where users can input and track basic health entries. Built UI styling, React components, and user interaction functionality.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-title">My Projects</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Recent <span className="text-gradient">Work</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-2xl overflow-hidden card-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image Placeholder */}
              <div
                className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-display font-bold text-foreground/20">
                    {project.title}
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {/* <button className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-foreground hover:scale-110 transition-transform">
                    <Github size={20} />
                  </button> */}
                  <a
                    href={"https://github.com/amnraz/portfolio"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-foreground hover:scale-110 transition-transform"
                  >
                    <Github size={20} />
                  </a>

                  {/* <button className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-foreground hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </button> */}
                  <a
                    // href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-foreground hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <p className="text-primary text-sm font-medium mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Coming */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            More projects coming soon...
          </p>
          <a href="#contact" className="btn-outline">
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
