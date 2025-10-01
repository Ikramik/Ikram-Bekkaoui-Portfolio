import { Heart, Palette, BookHeart, Users } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    {
      icon: BookHeart,
      title: "Creative Writing",
      description: "Currently writing a novel on Wattpad, exploring storytelling and character development.",
      link: "https://www.wattpad.com/user/ikrambekkaoui",
    },
    {
      icon: Palette,
      title: "Design & Art",
      description: "Running a Redbubble store featuring my creative designs and artistic expressions.",
      link: "https://www.redbubble.com/people/ikrambekkaoui",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Active volunteer in community events, hackathons, and tech conferences like Craft Conference 2025.",
    },
    {
      icon: Heart,
      title: "Tech Events",
      description: "Passionate about participating in innovation challenges and networking with fellow tech enthusiasts.",
    },
  ];

  return (
    <section id="hobbies" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Beyond Code</h2>
            <p className="text-lg text-muted-foreground">
              Creative pursuits and community involvement
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="tech-card text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl gradient-secondary mx-auto flex items-center justify-center mb-4">
                  <hobby.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{hobby.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{hobby.description}</p>
                {hobby.link && (
                  <a
                    href={hobby.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-secondary transition-smooth font-medium"
                  >
                    Visit →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
