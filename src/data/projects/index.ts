export type { Project } from './types';
import type { Project } from './types';

// Automatically import all project files (except types.ts and index.ts)
const projectModules = import.meta.glob<{ [key: string]: Project }>('./*.ts', {
  eager: true,
});

// Extract all project objects from the imported modules
export const projects: Project[] = Object.entries(projectModules)
  .filter(([path]) => !path.includes('types.ts') && !path.includes('index.ts'))
  .flatMap(([, module]) => {
    // Get all exported values from the module
    return Object.values(module).filter(
      (value): value is Project => 
        typeof value === 'object' && 
        value !== null && 
        'id' in value && 
        'title' in value
    );
  });
