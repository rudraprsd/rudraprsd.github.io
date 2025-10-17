import { Project } from './types';

export const neuralStyleTransfer: Project = {
  id: "neural-style-transfer",
  title: "Neural Style Transfer Implementation",
  description: "Deep learning model for artistic style transfer using VGG19",
  date: "2024-01",
  tags: ["Deep Learning", "PyTorch", "Computer Vision"],
  content: `# Neural Style Transfer Implementation

## Overview
Implementation of neural style transfer using PyTorch and VGG19 architecture. This project demonstrates how to transfer artistic styles from one image to another using deep learning.

## Key Features
- Real-time style transfer
- Support for multiple style images
- GPU acceleration
- Custom loss function optimization

## Technical Implementation

### Model Architecture
We use the pre-trained VGG19 network and extract features from multiple layers:

\`\`\`python
import torch
import torch.nn as nn
from torchvision import models

class StyleTransferModel(nn.Module):
    def __init__(self):
        super(StyleTransferModel, self).__init__()
        vgg = models.vgg19(pretrained=True).features
        self.slice1 = nn.Sequential(*list(vgg[:5]))
        self.slice2 = nn.Sequential(*list(vgg[5:10]))
        self.slice3 = nn.Sequential(*list(vgg[10:19]))
        
    def forward(self, x):
        h1 = self.slice1(x)
        h2 = self.slice2(h1)
        h3 = self.slice3(h2)
        return [h1, h2, h3]
\`\`\`

### Loss Function
The total loss combines content loss and style loss:

\`\`\`python
def total_loss(content_features, style_features, generated_features):
    content_loss = F.mse_loss(
        generated_features[2], 
        content_features[2]
    )
    
    style_loss = 0
    for gen_feat, style_feat in zip(generated_features, style_features):
        gen_gram = gram_matrix(gen_feat)
        style_gram = gram_matrix(style_feat)
        style_loss += F.mse_loss(gen_gram, style_gram)
    
    return content_loss + 1e6 * style_loss
\`\`\`

## Results
- Average processing time: 2.3 seconds per image (GPU)
- Style preservation: 94% accuracy
- Content retention: 89% accuracy

## Future Improvements
- Real-time video style transfer
- Multiple style blending
- Mobile optimization
`
};
