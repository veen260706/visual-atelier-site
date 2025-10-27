import { Lightbulb, Layers, Box } from "lucide-react";

const skills = [
  {
    name: "AutoCAD",
    icon: Layers,
    description: "Precision drafting and technical drawings"
  },
  {
    name: "Blender",
    icon: Box,
    description: "3D modeling and visualization"
  },
  {
    name: "SketchUp",
    icon: Lightbulb,
    description: "Conceptual design and space planning"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Design Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leveraging industry-leading software to bring creative visions to life with precision and artistry
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 inline-block p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <skill.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {skill.name}
              </h3>
              <p className="text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
