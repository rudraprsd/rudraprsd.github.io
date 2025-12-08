import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, BookOpen, Brain, Database, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function BookmarkClassifier() {
  return (
    <div className="space-y-8">
      {/* Hero Section with Links */}
      <div className="flex flex-wrap gap-3">
        <Button asChild variant="default" className="gap-2">
          <a href="https://github.com/rudraprsd/bookmark-classifier" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </Button>
      </div>

      <div className="space-y-6 text-muted-foreground">
        <p className="text-lg leading-relaxed text-foreground">
          Classify your bookmarks into different categories automatically using machine learning.
          This project takes a browser bookmarks HTML file, parses it, and categorizes links using
          NLP techniques and classification models.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Database className="w-5 h-5 text-primary" />
                Data & Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Input: Browser bookmarks HTML file</li>
                <li>Dataset: ~400 personal bookmarks in 20 categories</li>
                <li>Features: Title + Clean URL (no protocol/www)</li>
                <li>Additional: Domain name One-Hot Encoding</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Brain className="w-5 h-5 text-primary" />
                Models & Techniques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>TF-IDF Vectorization</li>
                <li>Sentence Transformers (all-MiniLM-L6-v2)</li>
                <li>Logistic Regression (Best Performer)</li>
                <li>Linear SVC & Random Forest</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-foreground">Evolution of the Solution</h3>
          
          <div className="space-y-6">
            <div className="border-l-2 border-muted pl-4 space-y-2">
              <h4 className="font-medium text-foreground">Phase 1: TF-IDF Baseline</h4>
              <p>
                Initially used TF-IDF for vectorization. The high dimensionality and sparsity (99.61%) 
                of the matrix led to poor performance across all models.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm mt-2">
                <div className="bg-muted p-2 rounded">Multinomial NB: 20.0%</div>
                <div className="bg-muted p-2 rounded">Logistic Reg: 37.5%</div>
                <div className="bg-muted p-2 rounded">Linear SVC: 45.0%</div>
                <div className="bg-muted p-2 rounded">Random Forest: 40.0%</div>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-4 space-y-2">
              <h4 className="font-medium text-foreground">Phase 2: Sentence Transformers</h4>
              <p>
                Switched to <code>all-MiniLM-L6-v2</code> to generate dense embeddings for the combined 
                text feature. This significantly improved semantic understanding.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm mt-2">
                <div className="bg-muted p-2 rounded">Logistic Reg: 52.5%</div>
                <div className="bg-muted p-2 rounded">Linear SVC: 57.5%</div>
                <div className="bg-muted p-2 rounded">Random Forest: 47.5%</div>
              </div>
            </div>

            <div className="border-l-2 border-green-500 pl-4 space-y-2">
              <h4 className="font-medium text-foreground">Phase 3: Feature Engineering</h4>
              <p>
                Added domain names as One-Hot Encoded vectors to the embeddings. This hybrid approach 
                yielded the best results for Logistic Regression.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm mt-2">
                <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded font-medium">Logistic Reg: 62.5%</div>
                <div className="bg-muted p-2 rounded">Linear SVC: 55.0%</div>
                <div className="bg-muted p-2 rounded">Random Forest: 37.5%</div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        <div className="grid md:grid-cols-2 gap-8">
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Lessons Learned
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Start with simple models to establish a baseline.</li>
              <li>Focus on feature representation over model complexity (Bias-Variance Tradeoff).</li>
              <li>Data quantity is critical; ~400 samples is insufficient for 20-class classification.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <LineChart className="w-5 h-5" />
              Future Improvements
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Collect more data (aiming for 2000-5000 samples).</li>
              <li>Refactor code from notebooks to production-ready Python modules.</li>
              <li>Explore hierarchical classification for nested folders.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
