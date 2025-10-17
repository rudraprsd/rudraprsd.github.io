export type { Blog } from './types';
import type { Blog } from './types';

// Automatically import and re-export all blogs
const blogModules = import.meta.glob<{ [key: string]: any }>('./*.ts', { eager: true });

const blogExports: Record<string, any> = {};
const blogsList: Blog[] = [];

Object.entries(blogModules).forEach(([path, module]) => {
  if (path.includes('types.ts') || path.includes('index.ts')) return;
  
  Object.entries(module).forEach(([exportName, exportValue]: [string, any]) => {
    if (exportValue?.id && exportValue?.title) {
      blogExports[exportName] = exportValue;
      blogsList.push(exportValue as Blog);
    }
  });
});

// Export the blogs array
export const blogs = blogsList;

// Re-export named exports for backward compatibility
export const { understandingTransformers, productionMlSystems, llmFineTuningGuide } = blogExports;
