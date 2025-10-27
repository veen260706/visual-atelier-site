import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Residence",
    category: "Residential",
    image: project1,
    shortDescription: "A contemporary living space featuring clean lines, natural materials, and sophisticated neutral palette with sage green accents.",
    fullDescription: "This residential project showcases a modern approach to comfortable living. The design emphasizes open spaces, natural light, and a harmonious blend of textures and colors. Each element was carefully selected to create a cohesive and inviting atmosphere."
  },
  {
    id: 2,
    title: "Executive Office",
    category: "Commercial",
    image: project2,
    shortDescription: "A professional workspace designed to inspire productivity while maintaining an elegant and welcoming atmosphere.",
    fullDescription: "This commercial office space combines functionality with aesthetic appeal. The design incorporates ergonomic furniture, efficient space planning, and warm materials to create an environment that enhances both productivity and employee wellbeing."
  },
  {
    id: 3,
    title: "Luxury Bedroom Suite",
    category: "Residential",
    image: project3,
    shortDescription: "An elegant bedroom retreat featuring luxurious materials, soft textures, and a sophisticated color scheme.",
    fullDescription: "This luxury bedroom design prioritizes comfort and tranquility. The space features carefully curated furnishings, layered lighting, and premium materials that create a serene sanctuary for rest and relaxation."
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const navigate = useNavigate();

  const handleViewDetails = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work showcasing diverse design solutions across residential and commercial spaces
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium mb-1">{project.category}</p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-sm text-primary font-medium">{project.category}</span>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {project.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold">{selectedProject?.title}</DialogTitle>
              <DialogDescription className="text-base pt-2">
                {selectedProject?.category}
              </DialogDescription>
            </DialogHeader>
            {selectedProject && (
              <div className="space-y-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
                <Button
                  onClick={() => handleViewDetails(selectedProject.id)}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  View Full Project Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
