import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ImageGalleryProps {
  images: {
    url: string;
    title: string;
    description?: string;
  }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="my-8">
      <Tabs defaultValue="gallery" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="gallery">Gallery View</TabsTrigger>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
        </TabsList>

        <TabsContent value="gallery" className="space-y-4">
          {/* Main Image */}
          <Card className="overflow-hidden">
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              className="w-full aspect-video object-cover"
            />
          </Card>

          {/* Image Info */}
          <div className="px-2">
            <h3 className="font-semibold text-lg">{images[selectedImage].title}</h3>
            {images[selectedImage].description && (
              <p className="text-sm text-muted-foreground mt-1">
                {images[selectedImage].description}
              </p>
            )}
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all hover:scale-105 ${
                  selectedImage === index
                    ? 'border-primary shadow-lg'
                    : 'border-transparent'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <div className="relative">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <div className="text-white text-center">
                    <h3 className="font-semibold mb-1">{image.title}</h3>
                    {image.description && (
                      <p className="text-xs">{image.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
