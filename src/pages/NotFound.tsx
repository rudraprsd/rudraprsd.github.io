import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <p className="text-xl text-muted-foreground">Page not found</p>
        <Link to="/">
          <Button className="gap-2">
            <Home className="w-4 h-4" />
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
