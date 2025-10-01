import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground">
              Professional journey and achievements
            </p>
          </div>

          <div className="tech-card animate-fade-in-up group">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 transition-smooth">
                <Briefcase className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Software Engineering Intern</h3>
                    <p className="text-lg text-muted-foreground mb-2">LineOfCode</p>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Remote
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        March 2025 - June 2025
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Responsibilities & Achievements:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Developed an <span className="font-semibold text-foreground">automated parking system</span> with integrated computer vision for vehicle detection and license plate recognition</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Optimized <span className="font-semibold text-foreground">computer vision algorithms</span> to improve accuracy and processing speed by 30%</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Implemented <span className="font-semibold text-foreground">database integration</span> for real-time parking data management and analytics</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Collaborated with cross-functional teams using Agile methodologies</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Contributed to code reviews and documentation improvements</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "OpenCV", "TensorFlow", "SQL", "Git", "Docker", "REST APIs"].map(
                        (tech, index) => (
                          <Badge key={index} variant="outline">
                            {tech}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
