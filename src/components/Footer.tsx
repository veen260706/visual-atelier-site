const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container px-6 md:px-12 lg:px-20 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Portfolio</h3>
            <p className="text-muted-foreground">
              Creating beautiful, functional spaces that inspire and endure.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@designer.com" className="text-muted-foreground hover:text-primary transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  Phone
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Interior Design Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
