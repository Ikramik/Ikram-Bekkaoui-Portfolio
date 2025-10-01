import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDecoration from "@/assets/hero-decoration.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-accent opacity-30 animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Floating Decoration */}
      <img
        src={heroDecoration}
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 max-w-lg opacity-20 floating-animation"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              Computer Science Engineering Student
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-primary text-gradient animate-pulse-glow">
            Ikram Bekkaoui
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 font-semibold">
            Aspiring Software Engineer & Innovator
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building solutions that connect technology, creativity, and real-world impact.
            Passionate about AI, embedded systems, and creating meaningful innovations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="gradient-primary shadow-glow"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>

           {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/Ikramik"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-card flex items-center justify-center hover:shadow-glow hover:scale-110 hover:bg-primary/10 transition-smooth group"
            >
              <Github className="w-5 h-5 group-hover:text-primary transition-smooth" />
            </a>
            <a
              href="https://linkedin.com/in/ikram-bekkaoui"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-card flex items-center justify-center hover:shadow-glow hover:scale-110 hover:bg-primary/10 transition-smooth group"
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary transition-smooth" />
            </a>
            <a
              href="mailto:ikrambekkaoui9@gmail.com"
              className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-card flex items-center justify-center hover:shadow-glow hover:scale-110 hover:bg-primary/10 transition-smooth group"
            >
              <Mail className="w-5 h-5 group-hover:text-primary transition-smooth" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
