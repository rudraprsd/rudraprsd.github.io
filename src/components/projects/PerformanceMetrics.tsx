import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  color?: string;
  description?: string;
}

interface PerformanceMetricsProps {
  metrics: PerformanceMetric[];
  title?: string;
}

export default function PerformanceMetrics({ 
  metrics, 
  title = "Performance Metrics" 
}: PerformanceMetricsProps) {
  const getColorClass = (color?: string) => {
    switch (color) {
      case 'green': return 'bg-green-500';
      case 'blue': return 'bg-blue-500';
      case 'purple': return 'bg-purple-500';
      case 'orange': return 'bg-orange-500';
      case 'red': return 'bg-red-500';
      default: return 'bg-primary';
    }
  };

  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Key performance indicators and benchmarks</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-sm font-medium">{metric.name}</p>
                {metric.description && (
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                )}
              </div>
              <span className="text-2xl font-bold">
                {metric.value}{metric.unit}
              </span>
            </div>
            <div className="relative">
              <Progress 
                value={metric.value} 
                className="h-2"
              />
              <div 
                className={`absolute top-0 left-0 h-2 rounded-full transition-all ${getColorClass(metric.color)}`}
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
