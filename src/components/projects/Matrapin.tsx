import { Github, BookOpen, Brain, Database, LineChart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Matrapin() {
  return (
    <div className="space-y-8">
      {/* Hero Section with Links */}
      <div className="flex flex-wrap gap-3">
        {/* <Button asChild variant="default" className="gap-2">
          <a href="https://github.com/rudraprsd/bookmark-classifier" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </Button> */}
        <Button asChild variant="outline" className="gap-2">
          <a href="https://matrapin.netlify.app/" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </Button>
      </div>

      <div className="space-y-6 text-muted-foreground">
        <p className="text-lg leading-relaxed text-foreground">
            We don't remember your passwords. We just don't let you forget them. MatraPIN offers secure, memorable PINs in Odia, Telugu, Tamil, and Malayalam - with zero data storage.
        </p>


      </div>
    </div>
  );
}
