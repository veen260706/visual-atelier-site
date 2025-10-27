const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With a passion for creating harmonious and functional spaces, I bring creativity and precision to every project. My approach combines aesthetic sensibility with practical design solutions, ensuring each space tells its own unique story.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From concept to completion, I work closely with clients to understand their vision and transform it into reality, creating interiors that inspire and endure.
            </p>
          </div>

          <div className="animate-fade-up animation-delay-200">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Design Philosophy
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I believe great design is about finding the perfect balance between form and function. Every space should be beautiful, but it must also work seamlessly for those who inhabit it.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Timeless Elegance:</strong> Creating designs that stand the test of time
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Sustainable Choices:</strong> Incorporating eco-friendly materials and practices
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Personalized Approach:</strong> Tailoring every design to reflect your unique style
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
