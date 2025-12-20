import { Github, BookOpen, Brain, Database, LineChart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AwesomeBZ() {
  return (
    <div className="space-y-8">
      {/* Hero Section with Links */}
      <div className="flex flex-wrap gap-3">
        <Button asChild variant="default" className="gap-2">
          <a href="https://github.com/rudraprsd/awesome-bz" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </Button>
        <Button asChild variant="outline" className="gap-2">
          <a href="https://awesomebz.netlify.app/" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </Button>
      </div>

      <div className="space-y-6 text-muted-foreground">
        <p className="text-lg leading-relaxed text-foreground">
         A modern, interactive tool for visualizing First Brillouin Zones and K-paths in reciprocal space. Built for researchers and students in condensed matter physics.

        </p>

        <p className="text-lg leading-relaxed text-foreground">
        Made by <a href="https://rudraprsd.github.io/" target="_blank" rel="noopener noreferrer">me </a>

        </p>

      </div>
    </div>
  );
}
