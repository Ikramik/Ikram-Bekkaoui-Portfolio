import { Cpu, Brain, Smartphone, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Software Development",
      description: "Full-stack development with modern frameworks and best practices for web and mobile applications.",
    },
    {
      icon: Brain,
      title: "AI & Computer Vision",
      description: "Machine learning solutions, computer vision applications, and intelligent automation systems.",
    },
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "IoT solutions, microcontroller programming, and hardware-software integration projects.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications with React Native and modern mobile development practices.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
            <p className="text-lg text-muted-foreground">
              Open to opportunities in these areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="tech-card animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-smooth shadow-glow">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in">
            <p className="text-lg text-muted-foreground mb-4">
              Interested in collaborating or discussing opportunities?
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block px-8 py-3 gradient-primary rounded-lg font-semibold hover:shadow-glow transition-smooth text-primary-foreground"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
