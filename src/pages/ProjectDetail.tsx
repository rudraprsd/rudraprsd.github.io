import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/projects">
              <Button variant="outline">Back to Projects</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <article className="container mx-auto px-6 py-12 max-w-4xl">
          <Link to="/projects">
            <Button variant="ghost" size="sm" className="mb-8 gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Button>
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4" />
              <span>{project.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Render custom component if available, otherwise use markdown */}
          {project.component ? (
            <div className="mt-8">
              <project.component />
            </div>
          ) : (
            <div className="prose-custom">
              <MarkdownRenderer content={project.content || ''} />
            </div>
          )}
        </article>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>&#169; 2025 Rudra Prasad Sahu. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
