# Custom Project Pages Guide

## 🎉 You Can Now Fully Customize Each Project & Blog!

Yes! Each project/blog is now a TypeScript file that can include **custom React components** with any layout you want.

## 📦 What's Included

This example project demonstrates ALL interactive features:

### ✨ Features Showcase

1. **📊 Interactive Charts/Graphs** - Performance metrics with animated progress bars
2. **🎨 Custom Animations** - Smooth transitions and hover effects
3. **🖼️ Image Galleries** - Gallery and grid views with lightbox effect
4. **🎮 Live Demos** - Interactive parameter controls with real-time results
5. **📹 Video Embeds** - Video player sections (add your videos to `/public/videos/`)
6. **💻 Syntax-highlighted Code** - Code blocks with copy buttons and line highlighting
7. **🔄 Before/After Sliders** - Draggable image comparison sliders
8. **📈 Performance Metrics** - Visual performance indicators with colors

## 🚀 How to Create a Custom Project

### Option 1: Use Custom Components (Full Control)

1. **Create your custom component** in `src/components/projects/`:

```tsx
// src/components/projects/MyAwesomeProjectContent.tsx
export default function MyAwesomeProjectContent() {
  return (
    <div className="space-y-12">
      <h2>My Custom Layout</h2>
      {/* Add ANY components you want! */}
    </div>
  );
}
```

2. **Create your project file** in `src/data/projects/`:

```typescript
// src/data/projects/my-awesome-project.ts
import { Project } from './types';
import MyAwesomeProjectContent from '@/components/projects/MyAwesomeProjectContent';

export const myAwesomeProject: Project = {
  id: "my-awesome-project",
  title: "My Awesome Project",
  description: "A short description",
  date: "2024-03",
  tags: ["AI", "PyTorch"],
  component: MyAwesomeProjectContent,  // 👈 Your custom component!
  githubUrl: "https://github.com/...",
  liveUrl: "https://demo...."
};
```

3. **That's it!** The project will automatically appear in your projects list.

### Option 2: Use Markdown (Simple)

```typescript
export const simpleProject: Project = {
  id: "simple-project",
  title: "Simple Project",
  description: "Description",
  date: "2024-03",
  tags: ["Tag1", "Tag2"],
  content: `# My Project

  Your markdown content here...
  `
};
```

## 🧩 Available Components

You can use any of these pre-built components:

### CodeBlockWithCopy
```tsx
import CodeBlockWithCopy from '@/components/projects/CodeBlockWithCopy';

<CodeBlockWithCopy
  code={yourCodeString}
  language="python"
  filename="train.py"
  showLineNumbers={true}
  highlightLines={[5, 10, 15]}
/>
```

### BeforeAfterSlider
```tsx
import BeforeAfterSlider from '@/components/projects/BeforeAfterSlider';

<BeforeAfterSlider
  beforeImage="/images/before.jpg"
  afterImage="/images/after.jpg"
  beforeLabel="Original"
  afterLabel="Enhanced"
/>
```

### ImageGallery
```tsx
import ImageGallery from '@/components/projects/ImageGallery';

<ImageGallery
  images={[
    { url: "/img1.jpg", title: "First", description: "..." },
    { url: "/img2.jpg", title: "Second", description: "..." }
  ]}
/>
```

### InteractiveDemo
```tsx
import InteractiveDemo from '@/components/projects/InteractiveDemo';

<InteractiveDemo
  title="Try It Yourself"
  description="Adjust parameters and see results"
/>
```

### PerformanceMetrics
```tsx
import PerformanceMetrics from '@/components/projects/PerformanceMetrics';

<PerformanceMetrics
  metrics={[
    { name: 'Speed', value: 95, unit: '%', color: 'green' },
    { name: 'Accuracy', value: 87, unit: '%', color: 'blue' }
  ]}
/>
```

## 🎨 Customization Tips

1. **Mix and Match**: Combine multiple components in any order
2. **Use Shadcn Components**: All UI components from `@/components/ui/` are available
3. **Add Your Own**: Create new components in `src/components/projects/`
4. **Styling**: Use Tailwind CSS classes for styling
5. **Images**: Store images in `/public/` folder and reference them as `/images/file.jpg`

## 📝 Automatic File Detection

Both blogs and projects use **automatic file detection**:

- Just create a new `.ts` file in `src/data/projects/` or `src/data/blogs/`
- Export your project/blog object
- It will **automatically** appear on your website!
- **No manual imports needed** 🎉

## 🌟 Example Project

Check out the example: `real-time-object-detection.ts`

This showcases ALL features:
- Interactive demos
- Code blocks with copy buttons
- Before/after sliders
- Image galleries
- Performance metrics
- Video sections
- Custom animations

## 💡 Pro Tips

1. **Reusable Components**: Create reusable components for common patterns
2. **Type Safety**: Use TypeScript for better development experience
3. **Performance**: Images are loaded lazily for better performance
4. **Responsive**: All components are mobile-friendly
5. **Dark Mode**: Components support dark mode automatically

## 🐛 Troubleshooting

- **Component not showing?** Make sure you exported the project object
- **Images not loading?** Check the path (should be `/images/...` for public folder)
- **Type errors?** Make sure your component returns `ReactNode`

---

Happy coding! 🚀 Create amazing project showcases!
