import { Project } from './types';

export const objectDetectionYolo: Project = {
  id: "object-detection-yolo",
  title: "Real-time Object Detection with YOLOv8",
  description: "Custom YOLOv8 model trained for industrial defect detection",
  date: "2023-09",
  tags: ["Computer Vision", "Object Detection", "YOLOv8"],
  draft: true,
  content: `# Real-time Object Detection with YOLOv8

## Introduction
Custom-trained YOLOv8 model for detecting manufacturing defects in real-time production lines.

## Problem Statement
Identify and classify 5 types of surface defects:
- Scratches
- Dents
- Discoloration
- Cracks
- Foreign particles

## Dataset
- **Total images**: 10,000
- **Annotations**: 45,000 bounding boxes
- **Train/Val/Test split**: 70/20/10

## Implementation

### Model Training
\`\`\`python
from ultralytics import YOLO

# Load pretrained model
model = YOLO('yolov8n.pt')

# Train on custom dataset
results = model.train(
    data='defects.yaml',
    epochs=100,
    imgsz=640,
    batch=16,
    device=0,
    patience=20,
    save=True,
    pretrained=True
)
\`\`\`

### Dataset Configuration (defects.yaml)
\`\`\`yaml
train: ./data/train/images
val: ./data/val/images
test: ./data/test/images

nc: 5
names: ['scratch', 'dent', 'discoloration', 'crack', 'particle']
\`\`\`

### Inference Pipeline
\`\`\`python
import cv2

def detect_defects(image_path):
    # Load model
    model = YOLO('best.pt')
    
    # Run inference
    results = model(image_path, conf=0.5)
    
    # Process results
    for result in results:
        boxes = result.boxes
        for box in boxes:
            x1, y1, x2, y2 = box.xyxy[0]
            confidence = box.conf[0]
            class_id = box.cls[0]
            
            print(f"Detected: {model.names[int(class_id)]}")
            print(f"Confidence: {confidence:.2f}")
    
    return results
\`\`\`

## Performance Metrics
- **mAP@0.5**: 92.3%
- **mAP@0.5:0.95**: 78.6%
- **Inference time**: 12ms (GPU)
- **FPS**: 83 frames/second

## Deployment
Deployed on edge devices using TensorRT optimization:
\`\`\`bash
yolo export model=best.pt format=engine device=0
\`\`\`

## Impact
- Reduced manual inspection time by 85%
- Increased defect detection rate from 78% to 92%
- Processing 1,000+ items per hour
`
};
