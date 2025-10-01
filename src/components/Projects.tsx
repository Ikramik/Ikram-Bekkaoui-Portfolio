import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import projectTaske from "@/assets/project-taske.jpg";
import projectEyec from "@/assets/project-eyec.jpg";
import projectHit from "@/assets/project-hit.jpg";
import projectSensors from "@/assets/project-sensors.jpg";

const Projects = () => {
  const projects = [
    {
      title: "TaskE - AI Task Manager",
      description: "Intelligent task management application powered by AI for smart scheduling, priority suggestions, and productivity insights.",
      image: projectTaske,
      tags: ["React Native", "AI/ML", "Firebase", "TypeScript"],
      featured: true,
    },
    {
      title: "EyeC - Color Detector App",
      description: "Mobile application that uses camera and computer vision to detect and identify colors in real-time, perfect for designers and accessibility.",
      image: projectEyec,
      tags: ["React Native", "Computer Vision", "OpenCV", "Mobile"],
      github: "https://github.com/Ikramik/color-detector-app/releases/tag/v2.0",
      featured: true,
    },
    {
      title: "HIT - Healthcare Innovation for IVF",
      description: "🏆 1st Place Winner at EIT Health I-Day Debrecen 2024. Healthcare technology solution for improving IVF treatment monitoring and patient care.",
      image: projectHit,
      tags: ["Healthcare Tech", "IoT", "Data Analytics", "React"],
      award: "1st Place - EIT Health I-Day 2024",
      featured: true,
    },
    {
      title: "Smart Home Sensor System",
      description: "IoT-based smart home system with multiple sensors for temperature, motion, and environmental monitoring with real-time data visualization.",
      image: projectSensors,
      tags: ["IoT", "Arduino", "C++", "Embedded Systems"],
      github: "https://github.com/Ikramik/Smart-sensor-project",
      featured: false,
    },
    {
      title: "Light Sensor Meme App",
      description: "Fun mobile application that detects ambient light levels and generates contextually appropriate memes based on lighting conditions.",
      tags: ["React Native", "Mobile", "Arduino", "Fun Project"],
      github: "https://github.com/Ikramik/light-sensor/releases/tag/v1.0",
      featured: false,
    },
    {
      title: "Rock-Paper-Scissors Game",
      description: "Interactive web-based game with smooth animations, score tracking, and responsive design.",
      tags: ["JavaScript", "HTML", "CSS", "Web"],
      github: "https://github.com/ikrambekkaoui/rock-paper-scissors",
      live: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-lg text-muted-foreground">
              Innovative solutions and creative experiments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`tech-card group ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                } animate-fade-in-up cursor-pointer`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {project.image && (
                  <div className="relative overflow-hidden rounded-xl mb-4 shadow-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                    <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-smooth" />
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">{project.title}</h3>
                
                {project.award && (
                  <div className="mb-3">
                    <Badge className="gradient-primary">🏆 {project.award}</Badge>
                  </div>
                )}

                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {(project.github || project.live) && (
                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button size="sm" className="gradient-primary" asChild>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
