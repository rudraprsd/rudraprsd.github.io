import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogs } from "@/data/blogs";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { useMemo, useState } from "react";
import { parseDateDMY } from "@/lib/utils";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const Blog = () => {
  const [sortOption, setSortOption] = useState<'newest' | 'oldest' | 'az' | 'za'>('newest');

  const sortedBlogs = useMemo(() => {
    const copy = [...blogs];

    if (sortOption === 'newest' || sortOption === 'oldest') {
      copy.sort((a, b) => {
        const ta = parseDateDMY(a.date)?.getTime() ?? 0;
        const tb = parseDateDMY(b.date)?.getTime() ?? 0;
        return sortOption === 'newest' ? tb - ta : ta - tb;
      });
    } else {
      copy.sort((a, b) => {
        const cmp = a.title.localeCompare(b.title);
        return sortOption === 'az' ? cmp : -cmp;
      });
    }

    return copy;
  }, [sortOption, blogs]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Technical articles and insights about machine learning and AI.
          </p>
        </div>

        <div className="mb-6 flex items-center justify-end gap-3">
          <label className="text-sm text-muted-foreground">Sort:</label>
          <div className="w-44">
            <Select value={sortOption} onValueChange={(v) => setSortOption(v as any)}>
              <SelectTrigger>
                <SelectValue placeholder={sortOption === 'newest' ? 'Newest first' : undefined} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="az">A-Z</SelectItem>
                <SelectItem value="za">Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedBlogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.id}`}>
              <Card className="h-full hover:border-accent transition-all hover:shadow-lg cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {blog.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>&#169; 2025 Rudra Prasad Sahu. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
