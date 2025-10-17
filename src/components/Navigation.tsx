import { Link, useLocation } from "react-router-dom";
import { Code2 } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-lg hover:text-accent transition-colors">
            {/* <Code2 className="w-5 h-5 text-accent" /> */}
            <span>Rudra Prasad</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive("/") ? "text-accent" : "text-foreground/80"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive("/projects") ? "text-accent" : "text-foreground/80"
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive("/blog") ? "text-accent" : "text-foreground/80"
              }`}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
