# 🎨 Visual Component Examples

This file shows you exactly how each component looks and behaves.

## 📊 Component Showcase

### 1. CodeBlockWithCopy
**What it does:** Displays code with syntax highlighting, line numbers, and a copy button.

```typescript
<CodeBlockWithCopy
  code={`
def train_model(data):
    model = NeuralNetwork()
    for epoch in range(100):
        loss = model.train_step(data)
    return model
  `}
  language="python"
  filename="train.py"
  showLineNumbers={true}
  highlightLines={[3, 4]}  // Highlights lines 3 and 4
/>
```

**Features:**
- ✅ Copy button (appears on hover)
- ✅ Line numbers (optional)
- ✅ Highlight specific lines
- ✅ Language indicator
- ✅ Filename header
- ✅ Dark theme optimized

---

### 2. BeforeAfterSlider
**What it does:** Interactive image comparison slider.

```typescript
<BeforeAfterSlider
  beforeImage="https://your-image-url.com/before.jpg"
  afterImage="https://your-image-url.com/after.jpg"
  beforeLabel="Original"
  afterLabel="Enhanced"
/>
```

**Features:**
- ✅ Drag to compare images
- ✅ Touch support for mobile
- ✅ Smooth animations
- ✅ Custom labels
- ✅ Responsive design

**Pro Tip:** Use local images from `/public/images/` folder:
```typescript
beforeImage="/images/my-before.jpg"
afterImage="/images/my-after.jpg"
```

---

### 3. ImageGallery
**What it does:** Professional image gallery with multiple view modes.

```typescript
<ImageGallery
  images={[
    {
      url: "/images/result1.jpg",
      title: "First Result",
      description: "Achieved 95% accuracy"
    },
    {
      url: "/images/result2.jpg",
      title: "Second Result",
      description: "Processing speed: 100ms"
    },
    // Add more images...
  ]}
/>
```

**Features:**
- ✅ Gallery view with thumbnails
- ✅ Grid view option
- ✅ Click to select image
- ✅ Image titles and descriptions
- ✅ Hover effects
- ✅ Responsive grid

---

### 4. InteractiveDemo
**What it does:** Interactive parameter controls with live results.

```typescript
<InteractiveDemo
  title="Model Configuration"
  description="Try different parameters and see the results"
/>
```

**Features:**
- ✅ Model selection dropdown
- ✅ Image size slider
- ✅ Batch size input
- ✅ Run simulation button
- ✅ Real-time results display
- ✅ Reset button
- ✅ Performance metrics

**Customization:** You can modify this component to:
- Add more parameters
- Change model options
- Customize the results display
- Add actual API calls to your model

---

### 5. PerformanceMetrics
**What it does:** Visual performance indicators with progress bars.

```typescript
<PerformanceMetrics
  metrics={[
    {
      name: 'Inference Speed',
      value: 92,        // Percentage (0-100)
      unit: 'FPS',
      color: 'green',   // green, blue, purple, orange, red
      description: 'Frames processed per second on RTX 3090'
    },
    {
      name: 'Model Accuracy',
      value: 87,
      unit: '%',
      color: 'blue',
      description: 'Mean Average Precision on test set'
    },
    // Add more metrics...
  ]}
  title="Performance Benchmarks"
/>
```

**Features:**
- ✅ Animated progress bars
- ✅ Color-coded indicators
- ✅ Metric descriptions
- ✅ Professional card layout
- ✅ Dark mode support

**Available colors:**
- `green` - For speed/success metrics
- `blue` - For accuracy/quality metrics
- `purple` - For efficiency metrics
- `orange` - For warning/moderate metrics
- `red` - For critical metrics

---

## 🎯 Real Example Structure

Here's how to structure a complete custom project:

```typescript
// src/components/projects/MyProjectContent.tsx
import CodeBlockWithCopy from './CodeBlockWithCopy';
import BeforeAfterSlider from './BeforeAfterSlider';
import ImageGallery from './ImageGallery';
import InteractiveDemo from './InteractiveDemo';
import PerformanceMetrics from './PerformanceMetrics';

export default function MyProjectContent() {
  return (
    <div className="space-y-12">
      {/* 1. Introduction */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Overview</h2>
        <p>Your project description...</p>
      </section>

      {/* 2. Before/After Demo */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Results</h2>
        <BeforeAfterSlider
          beforeImage="/images/before.jpg"
          afterImage="/images/after.jpg"
        />
      </section>

      {/* 3. Interactive Demo */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Try It</h2>
        <InteractiveDemo />
      </section>

      {/* 4. Performance */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Performance</h2>
        <PerformanceMetrics metrics={[...]} />
      </section>

      {/* 5. Code */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Implementation</h2>
        <CodeBlockWithCopy
          code="your code here"
          language="python"
        />
      </section>

      {/* 6. Gallery */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Gallery</h2>
        <ImageGallery images={[...]} />
      </section>
    </div>
  );
}
```

---

## 🎨 Styling Tips

### Using Tailwind Classes
All components support standard Tailwind styling:

```typescript
<div className="space-y-12">        {/* Vertical spacing */}
<div className="grid md:grid-cols-2 gap-4">  {/* Responsive grid */}
<h2 className="text-3xl font-bold mb-6">     {/* Headers */}
<p className="text-muted-foreground">        {/* Subtle text */}
```

### Adding Custom Sections

```typescript
{/* Feature Cards */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card>
    <CardHeader>
      <CardTitle>Feature 1</CardTitle>
    </CardHeader>
    <CardContent>
      Description...
    </CardContent>
  </Card>
</div>

{/* Callout Box */}
<div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
  <h3 className="font-bold mb-2">💡 Pro Tip</h3>
  <p>Your helpful tip here...</p>
</div>

{/* Video Placeholder */}
<div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
  <video src="/videos/demo.mp4" controls className="w-full h-full" />
</div>
```

---

## 🚀 Quick Start Checklist

1. ✅ Create component file in `src/components/projects/`
2. ✅ Import the pre-built components you need
3. ✅ Arrange them in your layout
4. ✅ Create project data file in `src/data/projects/`
5. ✅ Link to your component
6. ✅ Add images to `/public/images/`
7. ✅ Test locally
8. ✅ Deploy! 🎉

---

## 📱 Mobile Responsiveness

All components are mobile-friendly by default:
- Image galleries stack on mobile
- Sliders work with touch
- Code blocks scroll horizontally
- Metrics stack vertically
- Interactive demos resize

Test by resizing your browser or using mobile dev tools!

---

## 🎬 Animation Examples

Add smooth animations:

```typescript
<div className="transition-all hover:scale-105">
  {/* Scales on hover */}
</div>

<div className="animate-fade-in">
  {/* Fades in on load */}
</div>

<div className="group">
  <img className="group-hover:scale-110 transition-transform" />
  {/* Image zooms when parent is hovered */}
</div>
```

---

Happy building! 🎨✨
