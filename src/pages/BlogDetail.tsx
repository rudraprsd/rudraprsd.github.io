import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogs } from "@/data/blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <Link to="/blog">
              <Button variant="outline">Back to Blog</Button>
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
          <Link to="/blog">
            <Button variant="ghost" size="sm" className="mb-8 gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Button>
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4" />
              <span>{blog.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {blog.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {blog.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="prose-custom">
            <MarkdownRenderer content={blog.content} />
          </div>
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

export default BlogDetail;
