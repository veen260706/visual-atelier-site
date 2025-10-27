import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Interior Design Intern",
    company: "Design Studio A",
    period: "June 2023 - August 2023",
    description: "Assisted senior designers in residential projects, created detailed floor plans and 3D visualizations, participated in client meetings and material selection processes.",
    achievements: [
      "Contributed to 5+ residential design projects",
      "Developed proficiency in AutoCAD and SketchUp",
      "Collaborated with contractors and vendors"
    ]
  },
  {
    title: "Design Assistant Intern",
    company: "Architecture & Interiors Firm",
    period: "January 2023 - May 2023",
    description: "Supported design team in commercial and residential projects, prepared presentation materials, conducted research on materials and finishes.",
    achievements: [
      "Created compelling design presentations",
      "Managed project documentation and specifications",
      "Researched sustainable design solutions"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience in diverse design environments
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-primary/30 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background" />
              
              <div className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Key Achievements:</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
