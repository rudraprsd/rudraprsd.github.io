import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Play, RotateCcw } from 'lucide-react';

interface InteractiveDemoProps {
  title?: string;
  description?: string;
}

export default function InteractiveDemo({ 
  title = "Interactive Demo",
  description = "Try it yourself! Adjust the parameters and see real-time results."
}: InteractiveDemoProps) {
  const [imageSize, setImageSize] = useState([256]);
  const [modelType, setModelType] = useState('resnet50');
  const [batchSize, setBatchSize] = useState('32');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleRun = () => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setResult(`Processed with ${modelType} at ${imageSize[0]}x${imageSize[0]}px, batch size: ${batchSize}`);
      setIsProcessing(false);
    }, 2000);
  };

  const handleReset = () => {
    setImageSize([256]);
    setModelType('resnet50');
    setBatchSize('32');
    setResult(null);
  };

  return (
    <Card className="my-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Play className="w-5 h-5" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Model Selection */}
        <div className="space-y-2">
          <Label htmlFor="model">Model Architecture</Label>
          <Select value={modelType} onValueChange={setModelType}>
            <SelectTrigger id="model">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="resnet50">ResNet-50</SelectItem>
              <SelectItem value="vgg19">VGG-19</SelectItem>
              <SelectItem value="efficientnet">EfficientNet</SelectItem>
              <SelectItem value="mobilenet">MobileNet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Image Size Slider */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>Image Size</Label>
            <span className="text-sm text-muted-foreground">
              {imageSize[0]} x {imageSize[0]} px
            </span>
          </div>
          <Slider
            value={imageSize}
            onValueChange={setImageSize}
            min={128}
            max={512}
            step={64}
            className="w-full"
          />
        </div>

        {/* Batch Size Input */}
        <div className="space-y-2">
          <Label htmlFor="batch">Batch Size</Label>
          <Input
            id="batch"
            type="number"
            value={batchSize}
            onChange={(e) => setBatchSize(e.target.value)}
            min="1"
            max="128"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button 
            onClick={handleRun} 
            disabled={isProcessing}
            className="flex-1"
          >
            {isProcessing ? 'Processing...' : 'Run Model'}
          </Button>
          <Button 
            onClick={handleReset} 
            variant="outline"
            size="icon"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>

        {/* Results */}
        {result && (
          <div className="mt-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-border">
            <p className="text-sm font-medium mb-2">Result:</p>
            <p className="text-sm text-muted-foreground">{result}</p>
            <div className="mt-3 grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded">
                <p className="text-xs text-muted-foreground">Accuracy</p>
                <p className="text-lg font-bold text-green-700 dark:text-green-400">94.2%</p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded">
                <p className="text-xs text-muted-foreground">Latency</p>
                <p className="text-lg font-bold text-blue-700 dark:text-blue-400">23ms</p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded">
                <p className="text-xs text-muted-foreground">FPS</p>
                <p className="text-lg font-bold text-purple-700 dark:text-purple-400">43</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
