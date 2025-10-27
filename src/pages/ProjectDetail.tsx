import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projectsData = [
  {
    id: 1,
    title: "Modern Residence",
    category: "Residential",
    image: project1,
    description: "This residential project showcases a modern approach to comfortable living. The design emphasizes open spaces, natural light, and a harmonious blend of textures and colors.",
    details: [
      "Open-concept living area with seamless indoor-outdoor flow",
      "Custom-designed furniture pieces complementing the space",
      "Carefully curated material palette featuring natural wood and stone",
      "Energy-efficient lighting design with layered illumination",
      "Sustainable materials throughout the project"
    ],
    challenge: "The challenge was to create a warm, inviting space that felt modern yet timeless, while maximizing natural light and maintaining privacy.",
    solution: "We implemented strategic window placements, used neutral tones with pops of color, and incorporated natural materials to achieve the perfect balance.",
    timeline: "6 months",
    location: "Los Angeles, CA"
  },
  {
    id: 2,
    title: "Executive Office",
    category: "Commercial",
    image: project2,
    description: "A professional workspace designed to inspire productivity while maintaining an elegant and welcoming atmosphere.",
    details: [
      "Ergonomic workspace design for maximum comfort",
      "Acoustic solutions for noise reduction",
      "Collaborative areas alongside private workspaces",
      "Biophilic design elements to enhance wellbeing",
      "Smart storage solutions maintaining clean aesthetics"
    ],
    challenge: "Creating a professional environment that encourages collaboration while providing spaces for focused individual work.",
    solution: "We designed flexible zones that can adapt to different work modes, with thoughtful material choices that reduce noise and enhance comfort.",
    timeline: "4 months",
    location: "New York, NY"
  },
  {
    id: 3,
    title: "Luxury Bedroom Suite",
    category: "Residential",
    image: project3,
    description: "An elegant bedroom retreat featuring luxurious materials, soft textures, and a sophisticated color scheme.",
    details: [
      "Custom upholstered headboard and window treatments",
      "Layered lighting scheme for different moods",
      "Premium natural fiber textiles and materials",
      "Integrated storage solutions maintaining clean lines",
      "Carefully selected art and accessories"
    ],
    challenge: "Designing a serene sanctuary that balances luxury with comfort and functionality.",
    solution: "We created a cohesive design using soft textures, muted colors, and premium materials, ensuring every element contributed to a sense of tranquility.",
    timeline: "3 months",
    location: "Miami, FL"
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-md">
        <div className="container px-6 md:px-12 lg:px-20 py-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="pt-24 pb-12">
        <div className="container px-6 md:px-12 lg:px-20">
          <div className="mb-8 animate-fade-up">
            <span className="text-primary font-medium">{project.category}</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-4 text-foreground">
              {project.title}
            </h1>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-2xl mb-12 animate-fade-up">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-up">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Timeline</h3>
              <p className="text-muted-foreground">{project.timeline}</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">{project.location}</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Category</h3>
              <p className="text-muted-foreground">{project.category}</p>
            </div>
          </div>

          {/* Project Details */}
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="animate-fade-up">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="animate-fade-up">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Key Features</h2>
              <ul className="space-y-4">
                {project.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8 animate-fade-up">
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4 text-foreground">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4 text-foreground">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="text-center pt-8 animate-fade-up">
              <Button 
                size="lg"
                onClick={() => navigate("/")}
                className="bg-primary hover:bg-primary/90"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
