import { Trophy, Star, Award, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: "1st Place - EIT Health I-Day Debrecen",
      year: "2024",
      description: "Won first place for the HIT (Healthcare Innovation for IVF) project, demonstrating excellence in healthcare technology innovation.",
      type: "Competition",
    },
    {
      icon: Star,
      title: "Stipendium Hungaricum Scholar",
      year: "2022 - 2026",
      description: "Recipient of prestigious scholarship for international students, covering full tuition and living expenses.",
      type: "Scholarship",
    },
    {
      icon: Award,
      title: "Craft Conference Participant",
      year: "2025",
      description: "Selected to attend Craft Conference, one of Europe's premier software engineering conferences.",
      type: "Event",
    },
  ];

  const certifications = [
    "AWS Academy Cloud Foundations",
    "AWS Academy Machine Learning",
    "Cisco CCNA",
    "Cisco Cybersecurity",
    "freeCodeCamp JavaScript",
    "Forage Software Engineering",
  ];

  return (
    <section id="awards" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-lg text-muted-foreground">
              Achievements and milestones along my journey
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {awards.map((award, index) => (
              <div
                key={index}
                className="tech-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <award.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold">{award.title}</h3>
                      <Badge className="gradient-secondary">{award.year}</Badge>
                    </div>
                    <Badge variant="outline" className="mb-3">
                      {award.type}
                    </Badge>
                    <p className="text-muted-foreground">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="tech-card animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-7 h-7 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">Professional Certifications</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-muted/50 rounded-lg p-3 hover:bg-muted transition-smooth"
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
    </section>
  );
};

export default Awards;
