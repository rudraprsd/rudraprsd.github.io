import Navigation from "@/components/Navigation";
import Magnet from "@/components/Magnet";
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Rudra Prasad{" "}
              <span className="text-accent">Sahu</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              I create intelligent, practical solutions with machine learning and AI — tackling problems of any size with creativity and precision.
              Based at <span className="text-accent">127.0.0.1</span>
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Magnet padding={50} disabled={false} magnetStrength={4}>
                <Link to="/projects">
                  <Button size="lg" className="gap-2">
                    View Projects <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </Magnet>
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
                  Neural networks, transformers, CNNs, and RNNs. Experience with PyTorch, TensorFlow, and JAX.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Computer Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Object detection, image segmentation, and visual recognition systems using state-of-the-art architectures.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">NLP</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Large language models, sentiment analysis, and text generation with transformers and BERT.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>&#169; 2025 Rudra Prasad Sahu. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
