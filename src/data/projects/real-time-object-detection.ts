import { Project } from './types';
import RealTimeObjectDetectionContent from '@/components/projects/RealTimeObjectDetectionContent';

export const realTimeObjectDetection: Project = {
  id: "real-time-object-detection",
  title: "Real-Time Object Detection System",
  description: "High-performance object detection achieving 92 FPS with 87% mAP on COCO dataset using PyTorch and Faster R-CNN",
  date: "2024-03",
  tags: ["Computer Vision", "PyTorch", "Deep Learning", "Real-Time", "CUDA"],
  githubUrl: "https://github.com/yourusername/object-detection",
  liveUrl: "https://demo.yourproject.com",
  images: [
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800"
  ],
  
  // Custom component with all interactive features!
  component: RealTimeObjectDetectionContent,
  
  // Fallback markdown content (optional)
  content: `# Real-Time Object Detection System

A production-ready object detection system with real-time performance.

## Features
- 92 FPS inference speed
- 87% mAP on COCO dataset
- Multi-class detection (91 categories)
- GPU-optimized pipeline
`
};
