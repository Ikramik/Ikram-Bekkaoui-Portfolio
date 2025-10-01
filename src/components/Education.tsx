import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const certifications = [
    "AWS Academy Cloud Foundations",
    "AWS Academy Machine Learning",
    "Cisco CCNA",
    "Cisco Cybersecurity",
    "freeCodeCamp JavaScript",
    "freeCodeCamp Responsive Web Design",
    "Forage Software Engineering",
  ];

  const coursework = [
    "Microcontrollers",
    "Programming in C/C++",
    "Programming in Java",
    "Embedded Systems",
    "Digital Design",
    "Computer Vision",
    "Database Systems",
    "Web Development",
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <p className="text-lg text-muted-foreground">
              Academic journey and continuous learning
            </p>
          </div>

          <div className="space-y-8">
            {/* Main Degree */}
            <div className="tech-card animate-fade-in-up group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 transition-smooth">
                  <GraduationCap className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-xl font-bold">BSc in Computer Science Engineering</h3>
                      <p className="text-muted-foreground">University of Debrecen, Hungary</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">Sept 2022 - Jan 2026</p>
                      <Badge className="gradient-secondary">
                        Stipendium Hungaricum Scholar
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <h4 className="font-semibold">Relevant Coursework:</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {coursework.map((course, index) => (
                        <Badge key={index} variant="outline">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="tech-card animate-fade-in-up group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl gradient-secondary flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 transition-smooth">
                  <Award className="w-7 h-7 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4">Certifications & Courses</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="bg-muted/50 rounded-lg p-3 hover:bg-primary/10 hover:border-primary/50 border border-transparent transition-smooth hover:scale-105 cursor-pointer"
                      >
                        <p className="text-sm font-medium">{cert}</p>
                      </div>
                    ))}
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

export default Education;
