import { Code, Layout, Smartphone, Zap, Server, Settings } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Front-end Development',
    description: 'Building modern, performant web applications using latest technologies and best practices.',
  },
  {
    icon: Layout,
    title: 'React Development',
    description: 'Creating reusable, scalable React components with clean architecture and state management.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Crafting beautiful interfaces that work seamlessly across all devices and screen sizes.',
  },
  {
    icon: Zap,
    title: 'API Integration',
    description: 'Connecting front-end applications with back-end services and third-party APIs.',
  },
  {
    icon: Settings,
    title: 'Website Optimization',
    description: 'Improving website performance, loading speed, and overall user experience.',
  },
  {
    icon: Server,
    title: 'Basic Back-end',
    description: 'Node.js server setup, RESTful API development, and database integration.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-title">My Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            What I <span className="text-gradient">Offer</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card p-8 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
