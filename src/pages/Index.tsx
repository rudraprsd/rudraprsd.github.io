import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-3 leading-tight">
              Rudra Prasad{" "}
              <span className="text-accent">Sahu</span>
            </h1>
            <p className="text-sm font-medium tracking-widest uppercase mb-6" style={{ color: 'hsl(24, 60%, 55%)' }}>
              AI Engineer&nbsp;&nbsp;•&nbsp;&nbsp;Computer Vision&nbsp;&nbsp;•&nbsp;&nbsp;Entrepreneur
            </p>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              I build AI systems that solve real problems.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/projects">
                <Button size="lg" className="gap-2">
                  View Projects <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/blog">
                  <Button size="lg" variant="outline">
                    Read Blog
                  </Button>
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/rudraprsd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/rudra-prasad-sahu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:rudraprasad01@outlook.com"
                className="p-3 rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="bg-secondary/50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Deep Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building and optimizing neural networks for real-world applications.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Computer Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Developing vision systems for detection, recognition, and security.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">NLP</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Working with language models to build intelligent interfaces and tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Game of Thrones Quote Section */}
        <section className="py-20 overflow-hidden" style={{ background: 'hsl(20, 15%, 10%)' }}>
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
            {/* Direwolf-inspired sigil ornament */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 max-w-24" style={{ background: 'linear-gradient(to right, transparent, hsl(24, 75%, 45%))' }} />
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M18 3L21.5 13H32L23.5 19L27 29L18 23L9 29L12.5 19L4 13H14.5L18 3Z" fill="hsl(24, 75%, 45%)" opacity="0.9"/>
              </svg>
              <div className="h-px flex-1 max-w-24" style={{ background: 'linear-gradient(to left, transparent, hsl(24, 75%, 45%))' }} />
            </div>

            {/* Source attribution */}
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'hsl(24, 40%, 50%)' }}>
              Game of Thrones &mdash; Syrio Forel, Water Dancer of Braavos
            </p>

            {/* The Quote */}
            <blockquote className="max-w-2xl">
              <p
                className="text-3xl md:text-4xl font-bold leading-snug mb-4"
                style={{
                  color: 'hsl(35, 20%, 92%)',
                  fontFamily: '"Georgia", serif',
                  textShadow: '0 0 40px hsl(24 75% 45% / 0.25)',
                }}
              >
                &ldquo;What do we say to the God of Death?&rdquo;
              </p>
              <p
                className="text-4xl md:text-5xl font-extrabold"
                style={{
                  color: 'hsl(24, 75%, 55%)',
                  fontFamily: '"Georgia", serif',
                  letterSpacing: '0.04em',
                  textShadow: '0 0 60px hsl(24 75% 50% / 0.4)',
                }}
              >
                Not Today.
              </p>
            </blockquote>

            {/* Bottom ornament */}
            <div className="flex items-center gap-4 mt-8">
              <div className="h-px flex-1 max-w-24" style={{ background: 'linear-gradient(to right, transparent, hsl(24, 75%, 45%))' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: 'hsl(24, 75%, 45%)' }} />
              <div className="h-px flex-1 max-w-24" style={{ background: 'linear-gradient(to left, transparent, hsl(24, 75%, 45%))' }} />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>&#169; 2026 Rudra Prasad Sahu. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
