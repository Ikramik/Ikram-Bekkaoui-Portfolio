import { BookOpen, Code, Lightbulb, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Tech Enthusiast",
      description: "Passionate about software engineering, AI, and embedded systems",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Driven by innovation and creative solutions to real-world challenges",
    },
    {
      icon: Sparkles,
      title: "Creative Mind",
      description: "Love storytelling, design, and exploring new ideas",
    },
    {
      icon: BookOpen,
      title: "Lifelong Learner",
      description: "Always eager to learn and grow in technology and beyond",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground">
              Connecting technology, creativity, and real-world impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="animate-scale-in">
              <div className="relative inline-block group">
                <div className="absolute inset-0 gradient-primary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-smooth" />
                <div className="absolute inset-0 gradient-secondary rounded-3xl blur-3xl opacity-20 animate-pulse-glow" />
                <img
                  src={profileImage}
                  alt="Ikram Bekkaoui"
                  className="relative rounded-3xl shadow-glow w-full max-w-md mx-auto border-4 border-card/50 group-hover:scale-[1.02] transition-smooth"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <h3 className="text-2xl font-bold mb-4">Hi there! I'm Ikram 👋</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a <span className="text-primary font-semibold">Computer Science Engineering student</span> at the University of Debrecen, Hungary, graduating in January 2026. As a <span className="text-secondary font-semibold">Stipendium Hungaricum Scholar</span>, I've had the incredible opportunity to pursue my passion for technology in an international environment.
                  </p>
                  <p>
                    My journey in tech is driven by curiosity and a desire to create solutions that make a difference. From building AI-powered applications to working with embedded systems, I love exploring how technology can solve real-world problems.
                  </p>
                  <p>
                    Beyond coding, I'm a creative soul who loves storytelling—I'm currently writing a novel on Wattpad! I also enjoy volunteering, participating in hackathons, and running my own Redbubble store where I showcase my creative designs.
                  </p>
                </div>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="tech-card group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-smooth">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
