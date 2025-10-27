import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const handleDownloadCV = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // You'll need to add your CV to the public folder
    link.download = 'Interior_Designer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Interior Design Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight">
            Crafting Spaces,<br />
            <span className="text-primary">Creating Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Interior designer specializing in transforming spaces into elegant, functional environments that reflect your unique vision and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
