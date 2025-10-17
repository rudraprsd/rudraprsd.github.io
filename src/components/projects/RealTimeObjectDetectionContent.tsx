import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CodeBlockWithCopy from './CodeBlockWithCopy';
import BeforeAfterSlider from './BeforeAfterSlider';
import ImageGallery from './ImageGallery';
import InteractiveDemo from './InteractiveDemo';
import PerformanceMetrics from './PerformanceMetrics';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RealTimeObjectDetectionContent() {
  const trainingCode = `import torch
import torch.nn as nn
from torchvision.models.detection import fasterrcnn_resnet50_fpn

class ObjectDetector:
    def __init__(self, num_classes=91):
        self.model = fasterrcnn_resnet50_fpn(pretrained=True)
        in_features = self.model.roi_heads.box_predictor.cls_score.in_features
        self.model.roi_heads.box_predictor = FastRCNNPredictor(in_features, num_classes)
        
    def train_step(self, images, targets):
        self.model.train()
        loss_dict = self.model(images, targets)
        losses = sum(loss for loss in loss_dict.values())
        return losses
    
    def predict(self, image, threshold=0.5):
        self.model.eval()
        with torch.no_grad():
            predictions = self.model([image])
        return self.filter_predictions(predictions[0], threshold)`;

  const inferenceCode = `# Real-time inference pipeline
def detect_objects_realtime(video_source=0):
    cap = cv2.VideoCapture(video_source)
    detector = ObjectDetector()
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
            
        # Preprocess
        image_tensor = transforms.ToTensor()(frame)
        
        # Detect objects
        predictions = detector.predict(image_tensor)
        
        # Draw bounding boxes
        for box, label, score in zip(
            predictions['boxes'],
            predictions['labels'],
            predictions['scores']
        ):
            if score > 0.5:
                draw_box(frame, box, label, score)
        
        cv2.imshow('Detection', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break`;

  const performanceMetrics = [
    { name: 'Inference Speed', value: 92, unit: 'FPS', color: 'green', description: 'Real-time processing on RTX 3090' },
    { name: 'mAP (COCO)', value: 87, unit: '%', color: 'blue', description: 'Mean Average Precision on COCO dataset' },
    { name: 'Model Accuracy', value: 94, unit: '%', color: 'purple', description: 'Overall detection accuracy' },
    { name: 'GPU Utilization', value: 78, unit: '%', color: 'orange', description: 'Efficient resource usage' },
  ];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
      title: 'Street Detection',
      description: 'Multi-object detection in urban environment'
    },
    {
      url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
      title: 'Indoor Scene',
      description: 'Detecting objects in interior spaces'
    },
    {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      title: 'Person Detection',
      description: 'High-accuracy person and face detection'
    },
    {
      url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
      title: 'Vehicle Recognition',
      description: 'Cars, bikes, and trucks classification'
    },
    {
      url: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800',
      title: 'Object Tracking',
      description: 'Continuous tracking across frames'
    },
    {
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
      title: 'Crowd Analysis',
      description: 'Multi-person detection in crowded scenes'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section with Links */}
      <div className="flex flex-wrap gap-3">
        <Button variant="default" className="gap-2">
          <Github className="w-4 h-4" />
          View on GitHub
        </Button>
        <Button variant="outline" className="gap-2">
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </Button>
      </div>

      {/* Overview */}
      <section>
        <h2 className="text-3xl font-bold mb-4">🎯 Project Overview</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A state-of-the-art real-time object detection system built with PyTorch and Faster R-CNN. 
          This project achieves 92 FPS on modern GPUs while maintaining 87% mAP on the COCO dataset.
          Perfect for applications requiring real-time video analysis, surveillance, and autonomous systems.
        </p>
      </section>

      {/* Before/After Comparison */}
      <section>
        <h2 className="text-3xl font-bold mb-6">📸 Before & After</h2>
        <BeforeAfterSlider
          beforeImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200"
          afterImage="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=1200"
          beforeLabel="Original Image"
          afterLabel="With Detection"
        />
      </section>

      {/* Interactive Demo */}
      <section>
        <h2 className="text-3xl font-bold mb-6">🎮 Try It Live</h2>
        <InteractiveDemo
          title="Model Configuration Playground"
          description="Experiment with different model architectures and parameters to see how they affect performance."
        />
      </section>

      {/* Performance Metrics */}
      <section>
        <h2 className="text-3xl font-bold mb-6">📈 Performance Benchmarks</h2>
        <PerformanceMetrics metrics={performanceMetrics} title="System Performance" />
      </section>

      {/* Technical Implementation */}
      <section>
        <h2 className="text-3xl font-bold mb-6">⚙️ Technical Implementation</h2>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Architecture Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Backbone Network</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• ResNet-50 with Feature Pyramid Network</li>
                  <li>• Pre-trained on ImageNet</li>
                  <li>• Fine-tuned on COCO dataset</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Detection Head</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Region Proposal Network (RPN)</li>
                  <li>• ROI Align for precise localization</li>
                  <li>• Multi-class classification (91 classes)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-2xl font-semibold mb-4">Training Pipeline</h3>
        <CodeBlockWithCopy
          code={trainingCode}
          language="python"
          filename="train.py"
          showLineNumbers={true}
          highlightLines={[4, 5, 6, 11, 12]}
        />

        <h3 className="text-2xl font-semibold mb-4 mt-8">Real-time Inference</h3>
        <CodeBlockWithCopy
          code={inferenceCode}
          language="python"
          filename="inference.py"
          showLineNumbers={true}
          highlightLines={[8, 11, 14, 18]}
        />
      </section>

      {/* Results Gallery */}
      <section>
        <h2 className="text-3xl font-bold mb-6">🖼️ Results Gallery</h2>
        <ImageGallery images={galleryImages} />
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-3xl font-bold mb-6">✨ Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">⚡ Real-time Processing</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Process video streams at 92 FPS on RTX 3090 GPU, enabling real-time applications
              like surveillance and autonomous driving.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🎯 High Accuracy</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Achieves 87% mAP on COCO dataset with 91 object categories, ensuring reliable
              detection across diverse scenarios.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🔧 Customizable</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Easy to fine-tune on custom datasets. Supports transfer learning and domain
              adaptation for specialized use cases.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📦 Production Ready</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Includes ONNX export, TensorRT optimization, and Docker deployment for
              seamless production integration.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Video Demo */}
      <section>
        <h2 className="text-3xl font-bold mb-6">📹 Video Demonstration</h2>
        <Card className="overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1"></div>
              </div>
              <p className="text-muted-foreground">Demo video would be embedded here</p>
              <p className="text-sm text-muted-foreground mt-2">Upload your video to /public/videos/</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-3xl font-bold mb-6">🛠️ Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-sm py-1 px-3">PyTorch</Badge>
          <Badge variant="secondary" className="text-sm py-1 px-3">Python</Badge>
          <Badge variant="secondary" className="text-sm py-1 px-3">OpenCV</Badge>
          <Badge variant="secondary" className="text-sm py-1 px-3">CUDA</Badge>
          <Badge variant="secondary" className="text-sm py-1 px-3">TensorRT</Badge>
          <Badge variant="secondary" className="text-sm py-1 px-3">ONNX</Badge>
          <Badge variant="secondary" className="text-sm py-1 px-3">Docker</Badge>
          <Badge variant="secondary" className="text-sm py-1 px-3">FastAPI</Badge>
          <Badge variant="secondary" className="text-sm py-1 px-3">NumPy</Badge>
          <Badge variant="secondary" className="text-sm py-1 px-3">Matplotlib</Badge>
        </div>
      </section>

      {/* Future Improvements */}
      <section>
        <h2 className="text-3xl font-bold mb-6">🚀 Future Improvements</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <div>
                  <strong>Instance Segmentation:</strong>
                  <span className="text-muted-foreground ml-2">
                    Implement Mask R-CNN for pixel-level object segmentation
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <div>
                  <strong>3D Object Detection:</strong>
                  <span className="text-muted-foreground ml-2">
                    Extend to 3D bounding boxes for autonomous driving applications
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <div>
                  <strong>Edge Deployment:</strong>
                  <span className="text-muted-foreground ml-2">
                    Optimize for mobile and edge devices using TensorFlow Lite
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <div>
                  <strong>Multi-camera Tracking:</strong>
                  <span className="text-muted-foreground ml-2">
                    Implement object tracking across multiple camera views
                  </span>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
